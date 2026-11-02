'use client';
import { ArrowRight, HandPlatter, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ServiceCard({ service, featured = false }) {
  const router = useRouter();
  const go = () => router.push(`/services/${service?.urlHandler}`);

  const image = service?.images?.[0] || '/placeholder.svg';

  // ---------- Featured (big horizontal card, royal blue) ----------
  if (featured) {
    return (
      <article
        onClick={go}
        className="!group !grid !cursor-pointer !grid-cols-1 !overflow-hidden !rounded-3xl !bg-[#4169E1] !shadow-2xl !shadow-[#4169E1]/25 md:!grid-cols-2"
      >
        <div className="!relative !h-[280px] md:!h-auto md:!min-h-[420px] !overflow-hidden">
          <Image
            src={image}
            alt={service?.type || 'Service'}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="!object-cover !transition-transform !duration-700 !ease-out group-hover:!scale-105"
          />
          <span className="!absolute !left-5 !top-5 !inline-flex !items-center !gap-1.5 !rounded-full !bg-white !px-3.5 !py-1.5 !text-xs !font-semibold !text-[#4169E1] !shadow-md">
            <Sparkles className="!h-3.5 !w-3.5" /> Featured Service
          </span>
        </div>

        <div className="!flex !flex-col !justify-center !gap-5 !p-8 md:!p-12 !text-white">
          <span className="!flex !h-14 !w-14 !items-center !justify-center !rounded-2xl !bg-white !text-[#4169E1]">
            <HandPlatter className="!h-7 !w-7" />
          </span>
          <h3 className="!text-2xl md:!text-4xl !font-bold !leading-tight">{service?.type}</h3>
          <p className="!leading-relaxed !text-white/80 !line-clamp-5">{service?.description}</p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go();
            }}
            className="!mt-2 !inline-flex !w-fit !cursor-pointer !items-center !gap-2 !rounded-full !bg-white !px-6 !py-3 !text-sm !font-semibold !text-[#4169E1] !transition-all !duration-300 hover:!gap-3 hover:!shadow-lg"
          >
            Read More <ArrowRight className="!h-4 !w-4" />
          </button>
        </div>
      </article>
    );
  }

  // ---------- Regular card (white) ----------
  return (
    <article
      onClick={go}
      className="!group !flex !h-full !cursor-pointer !flex-col !overflow-hidden !rounded-3xl !border !border-[#4169E1]/10 !bg-white !shadow-lg !shadow-[#4169E1]/5 !transition-all !duration-500 hover:!-translate-y-2 hover:!border-[#4169E1]/40 hover:!shadow-2xl hover:!shadow-[#4169E1]/20"
    >
      <div className="!relative !h-56 !w-full !overflow-hidden">
        <Image
          src={image}
          alt={service?.type || 'Service'}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="!object-cover !transition-transform !duration-700 !ease-out group-hover:!scale-105"
        />
        <div className="!absolute !inset-0 !bg-gradient-to-t !from-[#4169E1]/30 !to-transparent" />
      </div>

      <div className="!relative !flex !flex-1 !flex-col !px-6 !pb-6 !pt-9">
        {/* icon badge overlapping the image */}
        <span className="!absolute !-top-7 !left-6 !flex !h-14 !w-14 !items-center !justify-center !rounded-2xl !bg-[#4169E1] !text-white !shadow-lg !shadow-[#4169E1]/40 !transition-transform !duration-500 group-hover:!rotate-12">
          <HandPlatter className="!h-6 !w-6" />
        </span>

        <h3 className="!text-xl !font-bold !text-slate-900 !line-clamp-2">{service?.type}</h3>
        <p className="!mt-2 !flex-1 !text-sm !leading-relaxed !text-slate-600 !line-clamp-3">
          {service?.description}
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go();
          }}
          className="!mt-5 !inline-flex !w-fit !cursor-pointer !items-center !gap-2 !text-sm !font-semibold !text-[#4169E1] !transition-all !duration-300 group-hover:!gap-3"
        >
          Read More <ArrowRight className="!h-4 !w-4" />
        </button>
      </div>
    </article>
  );
}
