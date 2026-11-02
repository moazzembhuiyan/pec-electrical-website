import { fetchBlogDetails } from '@/Hooks/UsegetBlogdetails';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { generateCanonical } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { urlHandler } = await params;

  try {
    const blog = await fetchBlogDetails(urlHandler);

    return {
      title: `${blog?.data?.metaTitle || blog?.data?.title || 'Blog Details'} - PEC Electrical`,
      description: blog?.data?.metaDescription || blog?.data?.title,
      alternates: {
        canonical: generateCanonical(`/blogs/${urlHandler}`),
      },
    };
  } catch (error) {
    return {
      title: 'Blog Details - PEC Electrical',
      description: 'Read our latest construction and electrical insights.',
      alternates: {
        canonical: generateCanonical(`/blogs/${urlHandler}`),
      },
    };
  }
}

export default async function BlogDetailsPage({ params }) {
  const { urlHandler } = await params;
  let blog = null;
  let error = null;

  try {
    const res = await fetchBlogDetails(urlHandler);
    blog = res?.data;
  } catch (err) {
    error = err.message;
  }

  if (error || !blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center !px-4">
        <h2 className="text-2xl font-semibold !mb-2">Blog Not Found</h2>
        <p className="text-gray-500 !mb-6">{error || 'Something went wrong'}</p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 !px-5 !py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          <ArrowLeft size={18} />
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white  max-w-6xl !mx-auto !mt-10 md:!mt-40">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src={blog?.featuredImage?.[0] || '/placeholder.svg'}
          alt={blog?.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 !px-4 !py-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 !p-6 md:!p-12">
          <div className="max-w-4xl mx-auto">
            {blog.focusKeyword && (
              <div className="flex items-center gap-2 text-orange-400 text-sm !mb-3">
                <Tag size={16} />
                <span className="uppercase tracking-wider">{blog?.focusKeyword}</span>
              </div>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {blog?.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto !px-4 md:!px-6 !py-12 md:!py-16">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 !mb-10 !pb-6 border-b">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>
              {new Date(blog?.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          {blog?.focusKeyword && (
            <div className="flex items-center gap-2">
              <Tag size={16} />
              <span>{blog?.focusKeyword}</span>
            </div>
          )}
        </div>

        {/* Blog Content (HTML) */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-500 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        />
      </div>
    </article>
  );
}
