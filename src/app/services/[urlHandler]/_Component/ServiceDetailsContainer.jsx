import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import FeatureSection from './ServiceFeatureSection';
import WhyChooseSection from './WhyUsSection';
import BookService from '@/app/book-service/Component/BookService';
import Link from 'next/link';

const ServiceDetailsContainer = ({ initialService, id, error }) => {
  const service = initialService?.data;
  const bookingServiceId = id || service?.type || '';
  const bookingHref = `/book-service?service=${encodeURIComponent(bookingServiceId)}&serviceName=${encodeURIComponent(service?.type || '')}`;

  return (
    <div className="!bg-white">
      {/* Hero */}
      <div className="!relative !overflow-hidden">
        <div
          aria-hidden
          className="!pointer-events-none !absolute !-top-24 !left-1/2 !h-[360px] !w-[600px] !-translate-x-1/2 !rounded-full !bg-[#4169E1]/10 !blur-3xl"
        />
        <ResponsiveContainer className={' md:!mt-[115px] !mt-20'}>
          <div className="!relative !w-full md:!p-10">
            <div className="!mx-auto !max-w-3xl !text-center">
              <span className="!inline-flex !items-center !gap-2 !rounded-full !border !border-[#4169E1]/20 !bg-white !px-4 !py-1.5 !text-xs !font-semibold !uppercase !tracking-[0.2em] !text-[#4169E1]">
                <span className="!h-1.5 !w-1.5 !rounded-full !bg-[#4169E1]" />
                Service
              </span>
              <h1 className="!mt-5 !text-3xl md:!text-5xl !font-bold !leading-tight !tracking-tight !text-slate-900">
                {service?.type}
              </h1>
              <p className="!mt-5 !text-base md:!text-lg !leading-relaxed !text-slate-600">
                {service?.description}
              </p>

              <Link
                href={bookingHref}
                className="group !mt-8 !inline-flex !items-center !gap-3 !rounded-full !bg-[#4169E1] !py-2 !pl-6 !pr-2 !text-base !font-semibold !text-white !shadow-lg !shadow-[#4169E1]/30 !transition-all !duration-300 hover:!-translate-y-0.5 hover:!bg-[#0F172A] hover:!shadow-xl"
                id="request-quote-btn"
              >
                Book Now
                <span className="!flex !h-9 !w-9 !items-center !justify-center !rounded-full !bg-white !text-[#4169E1] !transition-transform !duration-300 group-hover:!rotate-45">
                  <ArrowRight size={18} className="!-rotate-45" />
                </span>
              </Link>
            </div>

            {/* featured services */}
            <div className="!mt-10 md:!mt-14">
              <FeatureSection service={service} />
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      {/* Why choose us */}
      <div className="!bg-[#F5F8FF]">
        <ResponsiveContainer>
          <WhyChooseSection />
        </ResponsiveContainer>
      </div>

      <BookService />
    </div>
  );
};

export default ServiceDetailsContainer;
