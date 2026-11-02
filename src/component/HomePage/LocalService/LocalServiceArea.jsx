import React from 'react';

export default function LocalServiceArea() {
  return (
    <div>
      {/* Local Service Area Section */}
      <section className="!py-16 md:!py-24 !bg-white">
        <div className="!container !mx-auto !px-4 sm:!px-6 lg:!px-8">
          <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-10 lg:!gap-16 !items-center">
            {/* Google Map */}
            <div className="!w-full !h-[350px] md:!h-[450px] lg:!h-[500px] !rounded-2xl !overflow-hidden !shadow-xl !ring-1 !ring-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905003.9486651506!2d-72.75115298751327!3d41.671846817917015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc37ea4827388579%3A0xfc6a99eb16a90b8c!2sPec%20electrical!5e1!3m2!1sen!2sbd!4v1788273671929!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="PEC Electrical Service Area"
                className="!w-full !h-full"
              />
            </div>

            {/* Service Area Content */}
            <div className="!flex !flex-col">
              <p className="!text-sm md:!text-base !font-semibold !tracking-widest !text-primary !uppercase !mb-3">
                Local Service Area
              </p>

              <h2 className="!text-3xl md:!text-4xl lg:!text-5xl !font-bold !text-gray-900 !leading-tight !mb-5">
                Serving Hartford & Communities Across Connecticut
              </h2>

              <p className="!text-gray-600 !text-base md:!text-lg !leading-relaxed !mb-5">
                PEC Electrical proudly serves residential and commercial customers throughout
                Hartford County and communities across Connecticut. No matter the size or scope of
                your project, we’re here to meet your electrical needs.
              </p>

              {/* <p className="!text-gray-600 !text-base md:!text-lg !leading-relaxed !mb-8">
                PEC Electrical keeps one consistent business base in East Hartford while serving
                customers across the Hartford area. This gives customers a clear local identity
                without suggesting separate offices in every community.
              </p> */}

              {/* Service Areas */}
              {/* <div className="!flex !flex-wrap !gap-2.5 !mb-8">
                {[
                  'Hartford',
                  'East Hartford',
                  'West Hartford',
                  'Wethersfield',
                  'Newington',
                  'Glastonbury',
                  'Manchester',
                  'Windsor',
                  'South Windsor',
                  'Bloomfield',
                  'Rocky Hill',
                  'New Britain',
                  'Farmington',
                ].map((area) => (
                  <span
                    key={area}
                    className="!px-4 !py-2 !bg-gray-100 !text-gray-700 !rounded-full !text-sm !font-medium !transition-colors !duration-200 hover:!bg-primary/10 hover:!text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div> */}

              {/* CTA (uncomment when ready) */}
              {/* <a
                href="/contact"
                className="!inline-flex !items-center !justify-center !px-7 !py-3.5 !rounded-lg !bg-primary !text-white !font-semibold hover:!opacity-90 !transition-all !duration-300 !shadow-md hover:!shadow-lg"
              >
                Check Service Availability
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
