import Animatetext from '@/component/AnimatedText/AnimatedText';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import React from 'react';
import AllServices from './_Component/AllServices';
import { getPageSEO } from '@/Hooks/UsegetPageSEO';

export async function generateMetadata() {
  const seo = await getPageSEO();

  const metadata = seo?.data?.value;

  return {
    title: metadata?.serviceMetaTitle,
    description: metadata?.serviceMetaDescription,

    alternates: {
      canonical: 'https://pecelectricalct.com/services',
    },
  };
}
function page() {
  return (
    <div className="">
      <ResponsiveContainer className={' md:!mt-[115px] !mt-20'}>
        <div className="flex-center min-h-[60vh] !w-full md:!p-10">
          {/* all services */}
          <AllServices />
        </div>
      </ResponsiveContainer>
    </div>
  );
}

export default page;
