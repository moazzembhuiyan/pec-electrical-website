import Image from 'next/image';

export function ResidentialElectricalWork() {
  const services = [
    'Panel, feeder and service-equipment work',
    'Electrical wiring for remodeling and restoration',
    'AC, boiler, thermostat and zone wiring',
    'Backup generator electrical connections and transfer equipment',
    'Troubleshooting for breaker, power and equipment issues',
  ];

  return (
    <section className="!py-16 md:!py-24 !bg-white">
      <div className="!container !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-10 lg:!gap-16 !items-center">
          {/* Left Side - Content */}
          <div className="!flex !flex-col">
            <p className="!text-sm md:!text-base !font-semibold !tracking-widest !text-primary !uppercase !mb-3">
              Residential Electrical Work
            </p>

            <h2 className="!text-3xl md:!text-4xl lg:!text-5xl !font-bold !text-gray-900 !leading-tight !mb-6">
              Electrical Improvements for Homes Across Hartford and surrounding areas
            </h2>

            <p className="!text-gray-600 !text-base md:!text-lg !leading-relaxed !mb-8">
              Homeowners and landlords can request electrical work from East Hartford through the
              wider Hartford and nearby Connecticut and surrounding areas.
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

          {/* Right Side - Image */}
          <div className="!w-full !h-[350px] md:!h-[450px] lg:!h-[520px] !rounded-2xl !overflow-hidden !shadow-xl !ring-1 !ring-gray-100">
            <Image
              width={800}
              height={600}
              src="/images/residential-electrical-work.png" // ← change this path to your actual image
              alt="Residential Electrical Work - PEC Electrical"
              className="!w-full !h-full !object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
