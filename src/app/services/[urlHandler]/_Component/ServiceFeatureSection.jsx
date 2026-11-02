import { Zap, Settings } from 'lucide-react';
import Image from 'next/image';

export default function FeatureSection({ service }) {
  const infoOne = service?.info?.[0];
  const infoTwo = service?.info?.[1];

  const imageBox =
    '!group !relative !h-[300px] !overflow-hidden !rounded-3xl !border-4 !border-white !shadow-xl !shadow-[#4169E1]/15 md:!h-[420px] lg:!row-span-2';

  return (
    <section className="!w-full !px-4 !py-8 md:!py-12">
      <div className="!mx-auto">
        <div className="!grid !grid-cols-1 !gap-5 md:!grid-cols-2 lg:!grid-cols-3">
          {/* Left image */}
          <div className={imageBox}>
            <Image
              src={service?.images?.[0] || '/images/service/service1.png'}
              alt={service?.type || 'Electrical service'}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="!object-cover !transition-transform !duration-700 group-hover:!scale-105"
              priority
            />
            <div className="!absolute !inset-0 !bg-gradient-to-t !from-[#4169E1]/30 !to-transparent" />
          </div>

          {/* Middle: two info cards */}
          <div className="!flex !flex-col !gap-5 lg:!row-span-2">
            {/* Card 1 - royal blue */}
            <div className="!flex !flex-1 !flex-col !gap-4 !rounded-3xl !bg-[#4169E1] !p-7 !text-white !shadow-xl !shadow-[#4169E1]/25 !transition-all !duration-300 hover:!-translate-y-1">
              <span className="!flex !h-12 !w-12 !items-center !justify-center !rounded-2xl !bg-white !text-[#4169E1]">
                <Zap className="!h-6 !w-6" fill="currentColor" />
              </span>
              <h3 className="!text-xl !font-bold">{infoOne?.title}</h3>
              <p className="!text-sm !leading-relaxed !text-white/80">{infoOne?.subTitle}</p>
            </div>

            {/* Card 2 - white */}
            <div className="!flex !flex-1 !flex-col !gap-4 !rounded-3xl !border !border-[#4169E1]/20 !bg-white !p-7 !shadow-xl !shadow-[#4169E1]/10 !transition-all !duration-300 hover:!-translate-y-1 hover:!border-[#4169E1]/50">
              <span className="!flex !h-12 !w-12 !items-center !justify-center !rounded-2xl !bg-[#4169E1] !text-white">
                <Settings className="!h-6 !w-6" />
              </span>
              <h3 className="!text-xl !font-bold !text-slate-900">{infoTwo?.title}</h3>
              <p className="!text-sm !leading-relaxed !text-slate-600">{infoTwo?.subTitle}</p>
            </div>
          </div>

          {/* Right image */}
          <div className={imageBox}>
            <Image
              src={service?.images?.[1] || '/images/service/service1.png'}
              alt={service?.type || 'Electrical service'}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="!object-cover !transition-transform !duration-700 group-hover:!scale-105"
              priority
            />
            <div className="!absolute !inset-0 !bg-gradient-to-t !from-[#4169E1]/30 !to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
