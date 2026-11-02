'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import GellaryCard from './GellaryCard';
import UsegetAllGallery from '@/Hooks/UsegetAllGallery';
import { SkeletonCarCard } from '@/component/shared/SkeletonCard/SkeletonCard';
import { EmptyOutline } from '@/component/shared/Emty/Emty';

// Lightbox Package
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

const pageBtn =
  '!flex !h-10 !w-10 !cursor-pointer !items-center !justify-center !rounded-full !border !border-[#4169E1]/30 !bg-white !text-[#4169E1] !transition-all !duration-300 hover:!bg-[#4169E1] hover:!text-white disabled:!cursor-not-allowed disabled:!opacity-40 disabled:hover:!bg-white disabled:hover:!text-[#4169E1]';

const GalleryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const { gallery, loading, error, totalPages } = UsegetAllGallery({
    limit,
    page: currentPage,
  });

  // Lightbox state
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-10 !mt-10">
        <SkeletonCarCard />
        <SkeletonCarCard />
        <SkeletonCarCard />
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

  if (!gallery?.data?.length) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-300px)]">
        <EmptyOutline title={'Gallery'} />
      </div>
    );
  }

  // Lightbox slides
  const slides = gallery.data.map((item) => ({
    src: item.image || '/images/gallery1.jpg',
    title: item.title || '',
    description: item.description || '',
  }));

  const handleOpen = (clickedIndex) => {
    setIndex(clickedIndex);
    setOpen(true);
  };

  return (
    <div className="!mx-auto !mt-14 md:!mt-20 !space-y-14">
      {/* Photo grid */}
      <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-8 md:!gap-10">
        {gallery.data.map((item, idx) => (
          <div key={item._id} onClick={() => handleOpen(idx)} className="cursor-pointer">
            <GellaryCard service={item} />
          </div>
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

      {/* ========== Yet Another React Lightbox ========== */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Zoom, Captions]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'center',
        }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.92)' },
        }}
        animation={{ fade: 300 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
};

export default GalleryList;
