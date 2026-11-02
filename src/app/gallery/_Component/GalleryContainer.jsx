import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import React from 'react';
import GalleryList from './GalleryList';

const GalleryContainer = () => {
  return (
    <div className="!relative !overflow-hidden !bg-white">
      <div
        aria-hidden
        className="!pointer-events-none !absolute !-top-24 !left-1/2 !h-[360px] !w-[600px] !-translate-x-1/2 !rounded-full !bg-[#4169E1]/10 !blur-3xl"
      />
      <ResponsiveContainer className={' md:!mt-[115px] !mt-20'}>
        <div className="!relative !min-h-[60vh] !w-full md:!p-10">
          {/* Header */}
          <div className="!mx-auto !max-w-3xl !text-center">
            <span className="!inline-flex !items-center !gap-2 !rounded-full !border !border-[#4169E1]/20 !bg-white !px-4 !py-1.5 !text-xs !font-semibold !uppercase !tracking-[0.2em] !text-[#4169E1]">
              <span className="!h-1.5 !w-1.5 !rounded-full !bg-[#4169E1]" />
              Gallery
            </span>
            <h1 className="!mt-5 !text-3xl md:!text-5xl !font-bold !leading-tight !tracking-tight !text-slate-900">
              Our Recent <span className="!text-[#4169E1]">Projects</span>
            </h1>
            <p className="!mt-4 !text-sm md:!text-lg !leading-relaxed !text-slate-600">
              Browse through our completed projects to see the quality of our work and the
              excellence we bring to every electrical service.
            </p>
          </div>

          {/* all photos */}
          <GalleryList />
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default GalleryContainer;
