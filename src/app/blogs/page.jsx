import React from 'react';
import BlogContainer from './_Component/BlogContainer';
import { getPageSEO } from '@/Hooks/UsegetPageSEO';

export async function generateMetadata() {
  const seo = await getPageSEO();
  const metadata = seo?.data?.value;

  return {
    title: metadata?.blogsMetaTitle,
    description: metadata?.blogsMetaDescription,

    alternates: {
      canonical: 'https://pecelectricalct.com/blogs',
    },
  };
}

export default function page() {
  return (
    <div>
      <BlogContainer />
    </div>
  );
}
