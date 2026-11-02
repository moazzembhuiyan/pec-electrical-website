import React from 'react';
import AboutusContainer from './_Component/AboutusContainer';
import { getPageSEO } from '@/Hooks/UsegetPageSEO';

export async function generateMetadata() {
  const seo = await getPageSEO();
  const metadata = seo?.data?.value;

  return {
    title: metadata?.aboutUsMetaTitle,
    description: metadata?.aboutUsMetaDescription,

    alternates: {
      canonical: 'https://pecelectricalct.com/about',
    },
  };
}

function Page() {
  return (
    <div>
      <div className="flex-center !w-full">
        <AboutusContainer />
      </div>
    </div>
  );
}

export default Page;
