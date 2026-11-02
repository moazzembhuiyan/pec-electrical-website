import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { BadgeCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const highlights = [
  'Honest workmanship you can trust',
  'Clear, friendly communication',
  'Residential & commercial projects',
];

// Same file/export name so AboutusContainer imports keep working.
// Content is now "About PEC Electrical".
const Ourmission = ({ data }) => {
  return (
    <section className="!relative !overflow-hidden !bg-white !pt-10 md:!pt-28 !pb-16 md:!pb-24 !p-10 pt-0 md:!pt-[215px]">
      {/* soft royal-blue background shapes */}
      <div
        aria-hidden
        className="!pointer-events-none !absolute !-top-24 !-right-24 !h-[380px] !w-[380px] !rounded-full !bg-[#4169E1]/10 !blur-3xl"
      />
      <div
        aria-hidden
        className="!pointer-events-none !absolute !bottom-0 !-left-24 !h-[300px] !w-[300px] !rounded-full !bg-[#4169E1]/5 !blur-3xl"
      />

      <ResponsiveContainer>
        <div className="!relative !grid !w-full !grid-cols-1 !items-center !gap-14 lg:!grid-cols-2 lg:!gap-20">
          {/* Image side */}
          <div className="!relative !order-2 lg:!order-1 !pb-8">
            {/* offset blue frame */}
            <div className="!absolute !inset-0 !translate-x-4 !translate-y-4 !rounded-3xl !bg-[#4169E1]" />
            <div className="!relative !h-[380px] md:!h-[520px] !overflow-hidden !rounded-3xl !border-4 !border-white !shadow-2xl !shadow-[#4169E1]/20">
              <Image
                src="/images/ceo/nevado.png"
                alt="About PEC Electrical"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="!object-cover !transition-transform !duration-700 hover:!scale-105"
              />
              <div className="!absolute !inset-0 !bg-gradient-to-t !from-[#4169E1]/30 !to-transparent" />
            </div>

            {/* floating badges */}
            <div className="!absolute !-bottom-0 !left-4 md:!-left-6 !flex !items-center !gap-3 !rounded-2xl !bg-white !px-5 !py-4 !shadow-xl !shadow-[#4169E1]/20">
              <span className="!text-4xl !font-bold !text-[#4169E1]">10+</span>
              <span className="!text-sm !font-medium !leading-tight !text-slate-600">
                Years of
                <br />
                Experience
              </span>
            </div>
            <div className="!absolute !top-4 !right-4 md:!-right-4 !flex !items-center !gap-2 !rounded-full !bg-white !px-4 !py-2 !shadow-lg !shadow-[#4169E1]/20">
              <BadgeCheck className="!h-5 !w-5 !text-[#4169E1]" />
              <span className="!text-sm !font-semibold !text-slate-800">Licensed Electrician</span>
            </div>
          </div>

          {/* Text side */}
          <div className="!order-1 lg:!order-2 !text-center lg:!text-left">
            <span className="!inline-flex !items-center !gap-2 !rounded-full !border !border-[#4169E1]/20 !bg-[#4169E1]/5 !px-4 !py-1.5 !text-xs !font-semibold !uppercase !tracking-[0.2em] !text-[#4169E1]">
              <span className="!h-1.5 !w-1.5 !rounded-full !bg-[#4169E1]" />
              Who We Are
            </span>

            <h1 className="!mt-5 !text-3xl md:!text-5xl !font-bold !leading-tight !tracking-tight !text-slate-900">
              About <span className="!text-[#4169E1]">PEC Electrical</span>
            </h1>

            {data?.ourMissionTitle && (
              <h2 className="!mt-6 !text-xl md:!text-2xl !font-semibold !leading-snug !text-slate-800 lg:!border-l-4 lg:!border-[#4169E1] lg:!pl-4">
                {data.ourMissionTitle}
              </h2>
            )}

            {data?.ourMissionSubTitle && (
              <p className="!mt-4 !whitespace-pre-line !text-base md:!text-lg !leading-relaxed !text-slate-600 !text-left">
                {data.ourMissionSubTitle}
              </p>
            )}

            <ul className="!mt-8 !space-y-3 !text-left">
              {highlights.map((h) => (
                <li key={h} className="!flex !items-center !gap-3 !text-slate-700">
                  <CheckCircle2 className="!h-5 !w-5 !shrink-0 !text-[#4169E1]" />
                  <span className="!font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default Ourmission;
