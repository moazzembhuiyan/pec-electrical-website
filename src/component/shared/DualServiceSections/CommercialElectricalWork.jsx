import Image from 'next/image';

export function CommercialElectricalWork() {
  const services = [
    'Electrical distribution and dedicated circuits',
    'Lighting, receptacles and device layouts',
    'Tenant improvements and buildout wiring',
    'HVAC and equipment electrical connections',
    'Backup-power electrical integration',
  ];

  return (
    <section className="!py-16 md:!py-24 !bg-white">
      <div className="!container !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-10 lg:!gap-16 !items-center">
          {/* Left Side - Image */}
          <div className="!w-full !h-[350px] md:!h-[450px] lg:!h-[520px] !rounded-2xl !overflow-hidden !shadow-xl !ring-1 !ring-gray-100">
            <Image
              width={800}
              height={600}
              src="/images/Commercial.png"
              alt="Commercial Electrical Work - PEC Electrical"
              className="!w-full !h-full !object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="!flex !flex-col">
            <p className="!text-sm md:!text-base !font-semibold !tracking-widest !text-primary !uppercase !mb-3">
              Commercial Electrical Work
            </p>

            <h2 className="!text-3xl md:!text-4xl lg:!text-5xl !font-bold !text-gray-900 !leading-tight !mb-6">
              Electrical Support for Offices, Stores & Commercial Spaces
            </h2>

            <p className="!text-gray-600 !text-base md:!text-lg !leading-relaxed !mb-8">
              Commercial projects require coordinated electrical planning around the property,
              equipment, construction schedule and local requirements.
            </p>

            <ul className="!space-y-4">
              {services.map((item) => (
                <li
                  key={item}
                  className="!flex !items-start !gap-3 !text-gray-700 !text-base md:!text-lg !leading-relaxed"
                >
                  <span className="!mt-1.5 !flex-shrink-0 !w-5 !h-5 !rounded-full !bg-primary/10 !flex !items-center !justify-center">
                    <svg
                      className="!w-3 !h-3 !text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
