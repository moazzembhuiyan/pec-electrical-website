'use client';

import useGetAllBlog from '@/Hooks/usegetAllBlog';
import Loader from '@/app/loading';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { ChevronDown, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function BlogCard({ blog }) {
  const [open, setOpen] = useState(false);

  if (!blog) return null;
  const router = useRouter();

  const image =
    Array.isArray(blog.featuredImage) && blog.featuredImage[0] ? blog.featuredImage[0] : null;

  return (
    <article className="!m-0 flex !h-full flex-col overflow-hidden !rounded-2xl !border !border-gray-100 !bg-white !shadow-sm transition hover:!shadow-md">
      {/* Image */}
      <div className="relative !h-48 !w-full !bg-gray-100 sm:!h-56">
        {image ? (
          <Image
            src={image}
            alt={blog.title || 'Blog'}
            fill
            className="!object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />
        ) : (
          <div className="flex !h-full !items-center !justify-center !text-sm !text-gray-400">
            No image
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex !flex-1 flex-col !p-5 sm:!p-6">
        <div className="!mb-3 flex !flex-wrap !items-center !gap-2 !text-xs !text-gray-500">
          <span className="inline-flex !items-center !gap-1">
            <Calendar size={14} />
            {formatDate(blog.createdAt)}
          </span>
          {blog.focusKeyword && (
            <span className="inline-flex !items-center !gap-1 !rounded-full !bg-orange-50 !px-2.5 !py-1 !text-orange-700">
              <Tag size={12} />
              {blog.focusKeyword}
            </span>
          )}
        </div>

        <h3 className="!m-0 !text-lg !font-semibold !leading-snug !text-gray-900 line-clamp-2 sm:!text-xl">
          {blog.title}
        </h3>

        {blog.metaDescription && (
          <p className="!mt-3 !mb-0 !text-sm !leading-relaxed !text-gray-600 line-clamp-2">
            {blog.metaDescription}
          </p>
        )}

        <button
          type="button"
          // onClick={() => setOpen((v) => !v)}
          onClick={() => router.push(`/blogs/${blog?.urlHandler}`)}
          className="!mt-5 inline-flex cursor-pointer !items-center !gap-1.5 !self-start !rounded-full !border !border-primary/20 !bg-primary/5 !px-4 !py-2 !text-sm !font-medium !text-primary transition hover:!bg-primary/10"
        >
          {open ? 'Show less' : 'Read more'}
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            open ? '!mt-5 grid-rows-[1fr] opacity-100' : '!mt-0 grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="!overflow-hidden">
            <div
              className="blog-content !border-t !border-gray-100 !pt-5 !text-sm !leading-relaxed !text-gray-700"
              dangerouslySetInnerHTML={{ __html: blog.content || '' }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogContainer() {
  const [page, setPage] = useState(1);
  const limit = 9;

  const { blogs, totalPages, loading, error } = useGetAllBlog({
    limit,
    page,
  });

  const list = Array.isArray(blogs) ? blogs : (blogs?.data ?? []);

  if (loading) {
    return (
      <section className="!py-12 md:!py-16 lg:!py-20 flex !items-center !justify-center !w-full !mt-[50vh]">
        <Loader />
      </section>
    );
  }

  if (error) {
    return (
      <section className="!py-16 !text-center !text-red-600">
        Failed to load blogs. Please try again.
      </section>
    );
  }

  return (
    <section className="!py-12 md:!py-16 lg:!py-20">
      <ResponsiveContainer className="!p-5 sm:!p-6 flex-col !items-center !justify-center !mt-10">
        {/* Header */}
        <div className="!mb-10 !text-center md:!mb-14">
          <p className="!m-0 !text-sm !font-semibold !uppercase !tracking-wide !text-primary">
            Blog
          </p>
          <h2 className="!mt-3 !mb-0 !text-3xl !font-semibold md:!text-4xl lg:!text-5xl">
            Latest Articles
          </h2>
          <p className="!mx-auto !mt-4 !mb-0 !max-w-lg !text-sm !text-gray-500 md:!text-base">
            Tips, guides, and updates from PEC Electrical
          </p>
        </div>

        {/* Grid */}
        {list.length === 0 ? (
          <p className="!py-16 !text-center !text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid !grid-cols-1 !gap-6 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-8">
            {list.map((blog) => (
              <BlogCard key={blog._id || blog.slug} blog={blog} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="!mt-12 flex !items-center !justify-center !gap-3 md:!mt-16">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="!rounded-full !border !border-gray-200 !px-5 !py-2.5 !text-sm disabled:!opacity-40"
            >
              Previous
            </button>
            <span className="!px-4 !text-sm !text-gray-600">
              {page} / {totalPages}
            </span>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="!rounded-full !border !border-gray-200 !px-5 !py-2.5 !text-sm disabled:!opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </ResponsiveContainer>
    </section>
  );
}
