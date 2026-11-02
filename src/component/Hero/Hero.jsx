'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Hero({ data }) {
  const router = useRouter();

  return (
    <div className="!relative !min-h-[100vh] !w-full !bg-cover !bg-center !bg-no-repeat bg-[url('/banner.png')]">
      {/* Left side black gradient for better text visibility */}
      <div className="!absolute !inset-0 !bg-gradient-to-r !from-black/80 !via-black/50 !to-transparent !z-10"></div>

      {/* Content - Left Aligned */}
      <div className="!absolute !left-6 md:!left-16 lg:!left-24 !top-1/2 !mt-12 !-translate-y-1/2 !z-20    ">
        {/* Titles */}
        {/* Titles */}
        <h1 className="!font-bold md:!text-6xl !text-5xl !text-white !uppercase !leading-tight">
          {data?.data?.value?.heroTitle?.split(' ').slice(0, 2).join(' ') || 'Welcome'}
        </h1>

        <h1 className="!font-bold md:!text-6xl !text-3xl !text-white !uppercase !mt-1 !leading-tight">
          {data?.data?.value?.heroTitle?.split(' ').slice(2).join(' ') || ''}
        </h1>

        {/* Subtitle */}
        <p className="md:!text-lg !text-base !text-white/90 !mt-5 !max-w-md !leading-relaxed">
          {data?.data?.value?.heroSubTitle || ''}
        </p>

        {/* Buttons */}
        <div className="!flex !flex-col sm:!flex-row !items-start !gap-4 !mt-8">
          <button
            type="button"
            onClick={() => router.push('#book-service')}
            className="!flex !items-center !justify-between !text-white !bg-[#4169E1] hover:!bg-[#2E4B9B] !transition-all !duration-300 !w-[260px] !rounded-full !text-lg !whitespace-nowrap !px-6 !py-3 !group !shadow-lg"
          >
            Request Service
            <div className="!rounded-full !border !bg-white !p-[6px] group-hover:!rotate-45 !transform !ease-linear !duration-300">
              <ArrowRight size={20} className="!-rotate-45" color="#4169E1" />
            </div>
          </button>

          <button
            type="button"
            onClick={() => router.push('/services')}
            className="!flex !items-center !justify-between !text-white !border !border-white/70 !bg-transparent hover:!bg-white/10 !transition-all !duration-300 !w-[220px] !rounded-full !text-lg !whitespace-nowrap !px-6 !py-3 !group"
          >
            Learn more
            <div className="!rounded-full !border !bg-white !p-[6px] group-hover:!rotate-45 !transform !ease-linear !duration-300">
              <ArrowRight size={20} className="!-rotate-45" color="#000" />
            </div>
          </button>
        </div>

        {/* Founder & Location Section */}
        <div className="!mt-12 !pt-6 !border-t !border-white/20">
          <div className="!flex !items-center !gap-4">
            {/* Founder Avatar Placeholder */}
            {/* <div className="!w-14 !h-14 !rounded-full !bg-[#4169E1] !flex !items-center !justify-center !text-white !font-bold !text-xl !shadow-md">
              <Image
                src="/images/ceo/nevado.png"
                alt="Founder"
                width={800}
                height={800}
                className="!rounded-full w-[56px] h-[56px] object-cover aspect-square border-2 !border-white/70 shadow-md"
              />
            </div> */}

            {/* <div>
              <p className="!text-white !font-semibold !text-lg">Nevado Wellington</p>
              <div className="!mt-4 !flex !items-center !gap-2 !text-white/80 !text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="!w-4 !h-4 !text-[#4169E1]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>East Hartford, CT.</span>
              </div>
            </div> */}
          </div>

          {/* <div className="!mt-4 !flex !items-center !gap-2 !text-white/80 !text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="!w-4 !h-4 !text-[#4169E1]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>East Hartford, CT.</span>
          </div> */}
        </div>
      </div>

      {/* Optional Watermark */}
      <Image
        src="/images/heroWaterMark.png"
        alt="Logo"
        className="!absolute !left-0 !top-20 !opacity-20 !z-10"
        width={1000}
        height={1000}
      />
    </div>
  );
}

export default Hero;
