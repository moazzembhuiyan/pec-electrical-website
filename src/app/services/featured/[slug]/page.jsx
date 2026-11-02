import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowDown, ArrowRight, Check, ChevronLeft, Zap } from 'lucide-react';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { featuredServices } from '@/app/services/_data/featuredServices';

function getFeaturedService(slug) {
  return Object.hasOwn(featuredServices, slug) ? featuredServices[slug] : null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getFeaturedService(slug);

  if (!service) {
    return { title: 'Service Not Found | PEC Electrical' };
  }

  return {
    title: `${service.title} | PEC Electrical`,
    description: service.description,
  };
}

export default async function FeaturedServicePage({ params }) {
  const { slug } = await params;
  const service = getFeaturedService(slug);

  if (!service) {
    notFound();
  }

  const bookingHref = `/book-service?service=${encodeURIComponent(slug)}&serviceName=${encodeURIComponent(service.title)}`;

  return (
    <main className="!overflow-hidden !bg-white">
      <section className="!relative !bg-[#07152E] !text-white">
        <div
          aria-hidden="true"
          className="!pointer-events-none !absolute !-right-40 !-top-48 !h-[600px] !w-[600px] !rounded-full !bg-[#4169E1]/30 !blur-3xl"
        />
        <ResponsiveContainer className="!relative !pb-16 !pt-28 md:!pb-24 md:!pt-40">
          <div className="!w-full">
            <Link
              href="/#featured-services"
              className="!mb-10 !inline-flex !items-center !gap-2 !text-sm !font-medium !text-blue-200 !transition-colors hover:!text-white"
            >
              <ChevronLeft className="!size-4" />
              All services
            </Link>

            <div className="!grid !items-center !gap-12 lg:!grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="!inline-flex !items-center !gap-2 !rounded-full !border !border-white/15 !bg-white/5 !px-4 !py-2 !text-xs !font-semibold !uppercase !tracking-[0.18em] !text-blue-200">
                  <Zap className="!size-4" />
                  PEC Electrical Services
                </span>
                <h1 className="!mt-6 !max-w-3xl !text-4xl !font-bold !leading-tight md:!text-6xl">
                  {service.title}
                </h1>
                <p className="!mt-6 !max-w-2xl !text-base !leading-8 !text-slate-300 md:!text-lg">
                  {service.description}
                </p>
                <div className="!mt-9 !flex !flex-wrap !items-center !gap-5">
                  <Link
                    href={bookingHref}
                    className="!group !inline-flex !items-center !gap-3 !rounded-full !bg-[#4169E1] !px-6 !py-3.5 !font-semibold !text-white !shadow-lg !shadow-blue-950/30 !transition-all hover:!-translate-y-0.5 hover:!bg-blue-500"
                  >
                    Book Now
                    <ArrowRight className="!size-4 !transition-transform group-hover:!translate-x-1" />
                  </Link>
                  <a
                    href="#service-details"
                    className="!inline-flex !items-center !gap-2 !text-sm !font-medium !text-slate-300 hover:!text-white"
                  >
                    Explore the service
                    <ArrowDown className="!size-4" />
                  </a>
                </div>
              </div>

              <div className="!relative !mx-auto !w-full !max-w-lg">
                <div className="!absolute !inset-5 !rounded-[2rem] !bg-[#4169E1]/25 !blur-2xl" />
                <div className="!relative !overflow-hidden !rounded-[2rem] !border !border-white/10 !bg-gradient-to-br !from-[#18376D] !via-[#10264B] !to-[#0B1A34] !p-7 !shadow-2xl md:!p-10">
                  <div className="!flex !items-center !justify-between !border-b !border-white/10 !pb-6">
                    <div>
                      <p className="!text-xs !font-semibold !uppercase !tracking-[0.18em] !text-blue-200">
                        Built around you
                      </p>
                      <p className="!mt-2 !text-xl !font-semibold">Electrical work, made clear.</p>
                    </div>
                    <span className="!flex !size-14 !items-center !justify-center !rounded-2xl !bg-white/10 !text-blue-200">
                      <Zap className="!size-7" />
                    </span>
                  </div>
                  <ul className="!mt-6 !space-y-5">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="!flex !items-start !gap-3 !text-sm !leading-6 !text-slate-200"
                      >
                        <span className="!mt-0.5 !flex !size-5 !shrink-0 !items-center !justify-center !rounded-full !bg-blue-400/15 !text-blue-200">
                          <Check className="!size-3.5" />
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="!mt-8 !rounded-2xl !bg-white/5 !p-5">
                    <p className="!text-sm !leading-6 !text-slate-300">
                      Every property is different. We will talk through your needs and help you plan
                      the right next step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      <section id="service-details" className="!py-16 md:!py-24">
        <ResponsiveContainer>
          <div className="!grid !gap-12 md:!grid-cols-[0.8fr_1.2fr] md:!gap-20">
            <div>
              <p className="!text-sm !font-semibold !uppercase !tracking-[0.18em] !text-[#4169E1]">
                The service
              </p>
              <h2 className="!mt-4 !text-3xl !font-bold !leading-tight !text-slate-900 md:!text-4xl">
                A thoughtful approach to your electrical project.
              </h2>
            </div>
            <div>
              <p className="!text-lg !leading-8 !text-slate-600">{service.overview}</p>
              <div className="!mt-9 !grid !gap-4 sm:!grid-cols-3">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="!rounded-2xl !border !border-slate-200 !bg-slate-50 !p-5"
                  >
                    <span className="!text-sm !font-bold !text-[#4169E1]">0{index + 1}</span>
                    <p className="!mt-3 !text-sm !font-medium !leading-6 !text-slate-800">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      <section className="!bg-[#F3F6FC] !py-14 md:!py-20">
        <ResponsiveContainer>
          <div className="!flex !flex-col !items-start !justify-between !gap-6 !rounded-3xl !bg-white !p-7 !shadow-sm md:!flex-row md:!items-center md:!p-10">
            <div>
              <p className="!text-sm !font-semibold !uppercase !tracking-[0.16em] !text-[#4169E1]">
                Ready to get started?
              </p>
              <h2 className="!mt-2 !text-2xl !font-bold !text-slate-900 md:!text-3xl">
                Let’s talk about your {service.title.toLowerCase()} project.
              </h2>
            </div>
            <Link
              href={bookingHref}
              className="!inline-flex !shrink-0 !items-center !gap-3 !rounded-full !bg-[#4169E1] !px-6 !py-3.5 !font-semibold !text-white !transition-colors hover:!bg-[#2E4B9B]"
            >
              Book This Service
              <ArrowRight className="!size-4" />
            </Link>
          </div>
        </ResponsiveContainer>
      </section>
    </main>
  );
}
