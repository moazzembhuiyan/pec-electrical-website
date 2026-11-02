'use client';
import Animatetext from '@/component/AnimatedText/AnimatedText';
import AnimateTextOnHover from '@/component/AnimateTextOnHover/AnimateTextOnHover';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { EmptyOutline } from '@/component/shared/Emty/Emty';
import { SkeletonCarCard } from '@/component/shared/SkeletonCard/SkeletonCard';
import useGetAllService from '@/Hooks/UsegetAllService';
import { ArrowRight, Grid3x3 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Services({ data }) {
  const router = useRouter();
  const {
    services: allServices,
    loading,
    error,
  } = useGetAllService({
    limit: 4,
    page: 1,
  });

  if (loading) {
    return (
      <ResponsiveContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-10 !my-10 w-full">
          <SkeletonCarCard />
          <SkeletonCarCard />
          <SkeletonCarCard />
        </div>
      </ResponsiveContainer>
    );
  }
  if (error) {
    return (
      <div className="text-center border !my-20 border-red-500 h-20 items-center flex justify-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-[700px] !py-20 !w-full">
      <ResponsiveContainer>
        <div className=" h-[70vh] !space-y-5 !w-full">
          <div className="flex justify-between  !w-full ">
            <div className=" text-center md:text-left">
              <h1 className="text-primary uppercase font-semibold">Services</h1>
              <Animatetext y={-20} duration={1}>
                <h1 className="md:text-5xl text-3xl !mt-5 font-semibold">
                  {data?.serviceTitle || ''}
                </h1>
              </Animatetext>
              <Animatetext y={20} duration={1}>
                <h1 className=" !mt-2 ">{data?.serviceSubTitle || ''}</h1>
              </Animatetext>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  router.push('/service');
                }}
                className="md:flex hidden text-white !mt-10 !bg-black justify-between items-center gap-5 lg:hover-bubble  w-full rounded-full text-lg text-primary-black whitespace-nowrap !px-6 !py-1 border  "
                id="request-quote-btn"
              >
                View All
                <div className="rounded-full border bg-white !p-[6px]">
                  <ArrowRight size={20} className="-rotate-45" color="#000" />
                </div>
              </button>
            </div>
          </div>
          {allServices?.length === 0 ? (
            <div className="flex-center !w-full justify-center items-center !h-[300px]">
              <h1 className="">
                <EmptyOutline title={'Service'} />
              </h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 !mt-20 w-full">
              {allServices?.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-black h-[400px] cursor-pointer !w-full"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.images?.[0] || '/placeholder.svg'}
                      alt={service.title}
                      width={500}
                      height={500}
                      className=" object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className=" relative  h-full flex flex-col justify-between p-8">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full  flex items-center justify-center"></div>
                    {/* Text Content */}

                    <div className="!p-5 !space-y-3">
                      <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                        <Grid3x3 className="w-6 h-6 text-white" />
                      </div>
                      <Animatetext x={-20} duration={1}>
                        <h3 className="text-white text-2xl font-bold mb-3">{service?.type}</h3>
                      </Animatetext>
                      <Animatetext x={20} duration={1}>
                        <p className="text-gray-300 text-sm mb-6">{service?.description}</p>
                      </Animatetext>

                      <hr />
                      {/* Read More Link */}
                      <p className="inline-flex items-center gap-2 !text-orange-500 font-medium hover:gap-3 transition-all">
                        <AnimateTextOnHover link={`/service/${service?.urlHandler}`}>
                          Reade More
                        </AnimateTextOnHover>
                        <ArrowRight size={18} />
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </ResponsiveContainer>
    </div>
  );
}
