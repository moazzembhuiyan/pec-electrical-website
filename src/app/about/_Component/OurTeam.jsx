import * as React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';

// When you have the approved photos, set `image` to the file path,
// e.g. image: '/images/teams/nevado.png'. While it is null a placeholder is shown.
const team = [
  {
    id: 1,
    name: 'Nevado Wellington',
    position: 'Licensed Electrician',
    image: '/images/ceo/nevado.png',
    description:
      "Hi, I'm Nevado Wellington, the owner and operator of PEC Electrical. With more than 10 years of experience as a licensed electrician, I've built my business on honest workmanship and clear communication. We serve residential and commercial customers throughout Connecticut and partner with trusted local professionals on new and existing projects to ensure quality results and customer satisfaction.",
  },
  {
    id: 2,
    name: 'Rajai Dean',
    position: 'Field Technician',
    image: '/team/rajai.png',
    description:
      "Hi, I'm Rajai, a Field Technician at PEC Electrical. I work alongside our team on residential and commercial electrical projects, assisting with installations, wiring, upgrades and troubleshooting. I take pride in working carefully and efficiently, continuing to strengthen my electrical skills and helping provide every customer with great service and a positive experience. See you on the next job!",
  },
  {
    id: 3,
    name: 'Hylton Davis',
    position: 'Business Administrator',
    image: '/team/hylton.png',
    description:
      "Hi, I'm Hylton, the Business Administrator at PEC Electrical. I help keep the business organized and running smoothly behind the scenes by managing records, financials and other important business requirements. My aim is to keep the company organized and in compliance.",
  },
];

const Placeholder = ({ name }) => (
  <div className="!absolute !inset-0 !flex !flex-col !items-center !justify-center !bg-gradient-to-br !from-[#4169E1]/15 !via-[#4169E1]/10 !to-white">
    <div className="!flex !h-28 !w-28 !items-center !justify-center !rounded-full !bg-white !shadow-lg !shadow-[#4169E1]/20">
      <User className="!h-14 !w-14 !text-[#4169E1]/60" strokeWidth={1.5} />
    </div>
    <span className="!sr-only">{name} photo placeholder</span>
  </div>
);

export function OurTeam() {
  return (
    <section className="!bg-[#F5F8FF] !py-16 md:!py-24">
      <ResponsiveContainer>
        <div className="!w-full">
          {/* Header */}
          <div className="!mx-auto !mb-12 md:!mb-16 !max-w-2xl !text-center">
            <span className="!inline-flex !items-center !gap-2 !rounded-full !border !border-[#4169E1]/20 !bg-white !px-4 !py-1.5 !text-xs !font-semibold !uppercase !tracking-[0.2em] !text-[#4169E1]">
              <span className="!h-1.5 !w-1.5 !rounded-full !bg-[#4169E1]" />
              Our Team
            </span>
            <h2 className="!mt-5 !text-3xl md:!text-5xl !font-bold !tracking-tight !text-slate-900">
              Meet <span className="!text-[#4169E1]">Our Team</span>
            </h2>
            <p className="!mt-4 !text-slate-600 md:!text-lg">
              The skilled professionals behind our success
            </p>
          </div>

          {/* Cards */}
          <div className="!grid !grid-cols-1 !gap-8 md:!grid-cols-2 lg:!grid-cols-3">
            {team.map((item) => (
              <article
                key={item.id}
                className="!group !flex !flex-col !overflow-hidden !rounded-3xl !border !border-[#4169E1]/10 !bg-white !shadow-lg !shadow-[#4169E1]/5 !transition-all !duration-500 hover:!-translate-y-2 hover:!shadow-2xl hover:!shadow-[#4169E1]/20"
              >
                {/* Image + name/position */}
                <div className="!relative !aspect-[4/5] !w-full !overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="!object-cover !transition-transform !duration-700 !ease-out group-hover:!scale-105"
                    />
                  ) : (
                    <Placeholder name={item.name} />
                  )}

                  <div className="!absolute !inset-x-0 !bottom-0 !bg-gradient-to-t !from-[#1B3290] !via-[#4169E1]/80 !to-transparent !px-6 !pb-5 !pt-20 !text-white">
                    <h3 className="!text-xl md:!text-2xl !font-semibold">{item.name}</h3>
                    <span className="!mt-2 !inline-block !rounded-full !bg-white !px-3 !py-1 !text-xs !font-semibold !text-[#4169E1]">
                      {item.position}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="!flex-1 !p-6">
                  <div className="!mb-4 !h-1 !w-12 !rounded-full !bg-[#4169E1] !transition-all !duration-500 group-hover:!w-24" />
                  <p className="!text-sm md:!text-[15px] !leading-relaxed !text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
