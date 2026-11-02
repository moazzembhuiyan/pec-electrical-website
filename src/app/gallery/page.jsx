import React from 'react';
import GalleryContainer from './_Component/GalleryContainer';
import { getPageSEO } from '@/Hooks/UsegetPageSEO';
export async function generateMetadata() {
  const seo = await getPageSEO();

  const metadata = seo?.data?.value;

  return {
    title: metadata?.galleryMetaTitle,
    description: metadata?.galleryMetaDescription,
    alternates: {
      canonical: 'https://pecelectricalct.com/gallery',
    },
  };
}
export default function page() {
  return (
    <div>
      <GalleryContainer />
    </div>
  );
}
