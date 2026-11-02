import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Animatetext from '@/component/AnimatedText/AnimatedText';
import Image from 'next/image';
import { fetchServiceImages } from '@/Hooks/UsegetSingleServiceImage';

export async function OurRecentWorkCarousel({ id }) {
  let images = null;
  let error = null;
  try {
    images = await fetchServiceImages(id);
  } catch (err) {
    error = error.message;
  }

  if (error) {
    return <div className="text-red-500">Error loading images: {error}</div>;
  }

  if (!images || images.data?.length === 0) {
    return <div></div>;
  }
  return (
    <div className=" !w-full md:!my-20 ">
      <div className="!my-10">
        <Animatetext x={-20} duration={1}>
          <h1 className="md:text-5xl text-3xl text-center !mt-5 font-semibold">Our Recent Work</h1>
        </Animatetext>
        <Animatetext x={20} duration={1}>
          <h1 className=" text-center !mt-5 ">
            Lorem ipsum dolor sit amet consectetur. Pellentesque pharetra malesuada magna vitae
            dignissim vitae nisl scelerisque consectetur.
          </h1>
        </Animatetext>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {images?.data?.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="!p-4">
                <Card className="overflow-hidden rounded-2xl shadow-lg">
                  <CardContent className="relative !p-0">
                    {/* project Image */}
                    <Image
                      src={item?.image}
                      width={6000}
                      height={6000}
                      className="w-full h-[500px] !object-cover hover:scale-105 transform ease-linear duration-300"
                      alt={item.name}
                    />

                    {/* Overlay text section */}
                    <div className="absolute !bottom-0 !left-0 w-full bg-gradient-to-t from-black/100 via-black/100 to-transparent text-white !p-5 z-10">
                      <Animatetext x={-20} duration={1}>
                        {' '}
                        <h2 className="text-xl font-semibold">{item.title}</h2>{' '}
                      </Animatetext>
                      <Animatetext x={20} duration={1}>
                        {' '}
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </Animatetext>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
