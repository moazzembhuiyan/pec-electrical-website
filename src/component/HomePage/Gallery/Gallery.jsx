'use client';
import Loader from '@/app/loading';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { EmptyOutline } from '@/component/shared/Emty/Emty';
import { SkeletonCarCard } from '@/component/shared/SkeletonCard/SkeletonCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import UsegetAllGallery from '@/Hooks/UsegetAllGallery';
import Image from 'next/image';
import React from 'react';

export default function Gallery({ data }) {
  const { gallery, loading, error } = UsegetAllGallery({
    limit: 10,
    page: 1,
  });

  if (loading) {
    return (
      <ResponsiveContainer>
        <Loader />
      </ResponsiveContainer>
    );
  }

  if (error) {
    return (
      <div className="!text-center !border !my-20 !border-red-500 !h-20 !items-center !flex !justify-center">
        Error: {error}
      </div>
    );
  }

  const items = gallery?.data || [];

  return (
    <div className="!min-h-[750px] !bg-cover !bg-center !bg-no-repeat !bg-[url('/images/sectionBg.png')] !mt-[1350px] md:!mt-0 !pt-10 !pb-16">
      <ResponsiveContainer>
        <div className="!w-full">
          {/* Header: centered, no animation */}
          <div className="!flex !flex-col !items-center !text-center !w-full !mb-10 md:!mb-14">
            <h2 className="!text-primary !uppercase !font-semibold !tracking-widest !text-sm">
              Gallery
            </h2>
            <h1 className="md:!text-5xl !text-3xl !mt-4 !font-semibold">
              {data?.recentWorkTitle || 'Recent Work'}
            </h1>
            <p className="!mt-3 !max-w-2xl !text-gray-600 md:!text-lg">
              {data?.recentWorkSubTitle ||
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
            </p>
          </div>

          {/* Carousel */}
          {items.length > 0 ? (
            <Carousel
              opts={{ align: 'start', loop: items.length > 2, duration: 30 }}
              className="!w-full !p-10"
            >
              <CarouselContent className="!-ml-4 md:!-ml-6 p-10">
                {items.map((item) => (
                  <CarouselItem
                    key={item._id}
                    className="!basis-full md:!basis-1/2 lg:!basis-1/3 !pl-4 md:!pl-6 !p-10"
                  >
                    <article className="group !h-full !overflow-hidden !rounded-2xl !bg-white !border !border-gray-100 !shadow-md hover:!shadow-xl !transition-shadow !duration-500 !ease-out">
                      {/* Image */}
                      <div className="!relative !h-[280px] !w-full !overflow-hidden">
                        <Image
                          src={item.image || '/images/gallery1.jpg'}
                          alt={item.title || 'Gallery'}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="!object-cover !transition-transform !duration-700 !ease-out group-hover:!scale-105"
                        />
                        <div className="!absolute !inset-0 !bg-gradient-to-t !from-black/40 !via-transparent !to-transparent !opacity-80" />
                      </div>

                      {/* Title + description */}
                      <div className="!p-5 md:!p-6">
                        <h3 className="!text-lg md:!text-xl !font-semibold !text-gray-900 !line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="!mt-2 !text-sm md:!text-[15px] !leading-relaxed !text-gray-600 !line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Controls, centered below */}
              <div className="!flex !items-center !justify-center !gap-4 !mt-8">
                <CarouselPrevious className="!static !translate-y-0 !h-12 !w-12 !border-none !bg-primary !text-white hover:!bg-primary/90 hover:!text-white !transition-colors !duration-300" />
                <CarouselNext className="!static !translate-y-0 !h-12 !w-12 !border-none !bg-primary !text-white hover:!bg-primary/90 hover:!text-white !transition-colors !duration-300" />
              </div>
            </Carousel>
          ) : (
            <div className="!flex !items-center !justify-center !h-[250px] !w-full">
              <EmptyOutline title={'Gallery'} />
            </div>
          )}
        </div>
      </ResponsiveContainer>
    </div>
  );
}
