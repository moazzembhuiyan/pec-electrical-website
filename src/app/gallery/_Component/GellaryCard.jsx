import Image from 'next/image';

export default function GellaryCard({ service }) {
  return (
    <article className="!group !flex !h-full !flex-col !overflow-hidden !rounded-3xl !border !border-[#4169E1]/10 !bg-white !shadow-lg !shadow-[#4169E1]/5 !transition-all !duration-500 hover:!-translate-y-2 hover:!border-[#4169E1]/40 hover:!shadow-2xl hover:!shadow-[#4169E1]/20">
      {/* Image with title on top */}
      <div className="!relative !h-[300px] !w-full !overflow-hidden">
        <Image
          src={service?.image || '/placeholder.svg'}
          alt={service?.title || 'Gallery'}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="!object-cover !transition-transform !duration-700 !ease-out group-hover:!scale-105"
        />
        <div className="!absolute !inset-x-0 !bottom-0 !bg-gradient-to-t !from-[#1B3290]/95 !via-[#4169E1]/50 !to-transparent !px-6 !pb-5 !pt-20">
          <h3 className="!text-xl !font-bold !leading-snug !text-white !line-clamp-2">
            {service?.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <div className="!flex-1 !p-6">
        <div className="!mb-3 !h-1 !w-10 !rounded-full !bg-[#4169E1] !transition-all !duration-500 group-hover:!w-20" />
        <p className="!text-sm !leading-relaxed !text-slate-600 !line-clamp-3">
          {service?.description}
        </p>
      </div>
    </article>
  );
}
