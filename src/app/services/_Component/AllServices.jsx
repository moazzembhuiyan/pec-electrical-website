'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import useGetAllService from '@/Hooks/UsegetAllService';
import { SkeletonCarCard } from '@/component/shared/SkeletonCard/SkeletonCard';
import { useState } from 'react';
import { EmptyOutline } from '@/component/shared/Emty/Emty';
import UseGetServicePageMeta from '@/Hooks/UseGetServicePageMeta';
import Faq from '@/component/shared/Faq/Faq';
import { CommercialElectricalWork } from '@/component/shared/DualServiceSections/CommercialElectricalWork';
import { ResidentialElectricalWork } from '@/component/shared/DualServiceSections/ResidentialElectricalWork';

const pageBtn =
  '!flex !h-10 !w-10 !cursor-pointer !items-center !justify-center !rounded-full !border !border-[#4169E1]/30 !bg-white !text-[#4169E1] !transition-all !duration-300 hover:!bg-[#4169E1] hover:!text-white disabled:!cursor-not-allowed disabled:!opacity-40 disabled:hover:!bg-white disabled:hover:!text-[#4169E1]';

export default function AllServices() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const { services, totalPages, loading, error } = useGetAllService({
    limit,
    page: currentPage,
  });
  const { data } = UseGetServicePageMeta();
  const featuredService = services?.[0];
  const value = data?.data?.value;

  if (loading) {
    return (
      <div>
        <SkeletonCarCard />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-10 !mt-10">
          <SkeletonCarCard />
          <SkeletonCarCard />
          <SkeletonCarCard />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center border !my-20 border-red-500 h-20 items-center flex justify-center">
        Error: {error}
      </div>
    );
  }

  if (!services?.length) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-300px)]">
        <EmptyOutline title={'Service'} />
      </div>
    );
  }

  return (
    <div className="!mx-auto !w-full !space-y-12 md:!space-y-20 !bg-white">
      {/* Header */}
      <div className="!mx-auto !max-w-3xl !text-center">
        <span className="!inline-flex !items-center !gap-2 !rounded-full !border !border-[#4169E1]/20 !bg-[#4169E1]/5 !px-4 !py-1.5 !text-xs !font-semibold !uppercase !tracking-[0.2em] !text-[#4169E1]">
          <span className="!h-1.5 !w-1.5 !rounded-full !bg-[#4169E1]" />
          Services
        </span>
        <h1 className="!mt-5 !text-3xl md:!text-5xl !font-bold !leading-tight !tracking-tight !text-slate-900">
          {value?.title}
        </h1>
        <p className="!mt-4 !text-sm md:!text-lg !leading-relaxed !text-slate-600">
          {value?.subTitle}
        </p>
      </div>

      {/* Featured Service Card */}
      {featuredService && <ServiceCard service={featuredService} featured />}

      {/* Regular Services Grid */}
      <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-8 md:!gap-10">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      {/* Pagination */}
      <div className="!flex !items-center !justify-center !gap-4">
        <button
          className={pageBtn}
          aria-label="Previous page"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="!h-5 !w-5" />
        </button>

        <span className="!rounded-full !bg-[#4169E1]/5 !px-5 !py-2 !text-sm !text-slate-600">
          Page <span className="!font-semibold !text-[#4169E1]">{currentPage}</span> of {totalPages}
        </span>

        <button
          className={pageBtn}
          aria-label="Next page"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="!h-5 !w-5" />
        </button>
      </div>

      <CommercialElectricalWork />
      <ResidentialElectricalWork />
      <Faq category="service" />
    </div>
  );
}
