'use client';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import React from 'react';

export default function AboutSection({ data }) {
  const title = data?.aboutUsTitle || '';
  const titleWords = title.trim().split(/\s+/).filter(Boolean);
  const titleFirst = titleWords.slice(0, 2).join(' ');
  const titleRest = titleWords.slice(2).join(' ');

  return (
    <div className="!min-h-[200px] !bg-cover !bg-center !bg-no-repeat !bg-[url('/images/sectionBg.png')] !py-16">
      <ResponsiveContainer>
        <div className="!flex !flex-col md:!flex-row !justify-between !items-center !gap-10 !w-full">
          {/* Left - Text Content */}
          <div className="!flex-1 !text-center md:!text-left">
            <h1 className="!text-3xl md:!text-4xl  !font-semibold !leading-tight">
              {/* {titleFirst} <span className="!text-gray-600">{titleRest}</span> */}
              Why Choose PEC Electrical ?
            </h1>

            <p className="!mt-5 !text-base md:!text-lg !text-gray-700 !max-w-xl !mx-auto md:!mx-0">
              {data?.aboutUsSubTitle}
            </p>
          </div>

          {/* Right - Stats in compact row */}
          <div className="!flex !gap-8 md:!gap-12 !items-center !justify-center">
            <div className="!text-center">
              <div className="!text-4xl md:!text-5xl !font-bold !text-primary">500+</div>
              <p className="!mt-2 !text-sm md:!text-base !text-gray-600 !font-medium">
                Completed Projects
              </p>
            </div>

            <div className="!w-px !h-16 !bg-gray-300"></div>

            <div className="!text-center">
              <div className="!text-4xl md:!text-5xl !font-bold !text-primary">10+</div>
              <p className="!mt-2 !text-sm md:!text-base !text-gray-600 !font-medium">
                Years of Experience
              </p>
            </div>
            <div className="!text-center">
              <div className="!text-4xl md:!text-5xl !font-bold !text-primary">10+</div>
              <p className="!mt-2 !text-sm md:!text-base !text-gray-600 !font-medium">
                Client Reviews
              </p>
            </div>
            <div className="!text-center">
              <div className="!text-4xl md:!text-5xl !font-bold !text-primary">5+</div>
              <p className="!mt-2 !text-sm md:!text-base !text-gray-600 !font-medium">On Angi</p>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
