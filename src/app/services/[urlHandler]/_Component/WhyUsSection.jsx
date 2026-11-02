import { Zap, Clock, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Experts',
    description:
      'All our electricians are licensed, certified, and fully insured professionals with years of experience.',
  },
  {
    icon: Clock,
    title: 'Timely Completion',
    description:
      'We respect your time and always complete projects on schedule without compromising quality.',
  },
  {
    icon: Zap,
    title: 'Quality Materials',
    description: 'We use only the highest quality materials and equipment for lasting results.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and emergency services when you need them most.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="!px-4 !py-16 md:!py-24">
      <div className="!mx-auto !grid !items-center !gap-12 lg:!grid-cols-2 lg:!gap-16">
        {/* Left - heading */}
        <div className="!text-center lg:!text-left">
          <span className="!inline-flex !items-center !gap-2 !rounded-full !border !border-[#4169E1]/20 !bg-white !px-4 !py-1.5 !text-xs !font-semibold !uppercase !tracking-[0.2em] !text-[#4169E1]">
            <span className="!h-1.5 !w-1.5 !rounded-full !bg-[#4169E1]" />
            Services
          </span>
          <h2 className="!mt-5 !text-3xl md:!text-5xl !font-bold !leading-tight !tracking-tight !text-slate-900">
            Why Choose <span className="!text-[#4169E1]">Our Service</span>
          </h2>
          <p className="!mt-5 !text-base md:!text-lg !leading-relaxed !text-slate-600">
            Our residential electrical wiring service provides comprehensive electrical solutions
            for your home.
          </p>
        </div>

        {/* Right - features grid */}
        <div className="!grid !gap-5 sm:!grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="!group !cursor-default !rounded-3xl !border !border-[#4169E1]/10 !bg-white !p-6 !shadow-md !shadow-[#4169E1]/5 !transition-all !duration-300 hover:!-translate-y-1 hover:!border-[#4169E1] hover:!bg-[#4169E1] hover:!shadow-xl hover:!shadow-[#4169E1]/25"
            >
              <span className="!mb-4 !flex !h-12 !w-12 !items-center !justify-center !rounded-2xl !bg-[#4169E1] !text-white !transition-colors !duration-300 group-hover:!bg-white group-hover:!text-[#4169E1]">
                <Icon className="!h-6 !w-6" />
              </span>
              <h3 className="!mb-2 !text-lg !font-bold !text-slate-900 !transition-colors !duration-300 group-hover:!text-white">
                {title}
              </h3>
              <p className="!text-sm !leading-relaxed !text-slate-600 !transition-colors !duration-300 group-hover:!text-white/85">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
