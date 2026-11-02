import React from 'react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import { Footer } from '@/component/shared/Footer/Footer';

const ContactContainer = () => {
  return (
    <section
      className="!relative !overflow-hidden !bg-black !text-white !pt-[115px] !pb-20 md:!pb-28"
      id="contact"
    >
      {/* soft background glows */}
      <div
        aria-hidden
        className="!pointer-events-none !absolute !-top-32 !-left-32 !h-[420px] !w-[420px] !rounded-full !bg-[#4169E1]/20 !blur-[120px]"
      />
      <div
        aria-hidden
        className="!pointer-events-none !absolute !-bottom-40 !-right-32 !h-[420px] !w-[420px] !rounded-full !bg-[#4169E1]/10 !blur-[120px]"
      />

      <ResponsiveContainer>
        <div className="!relative !w-full">
          <div className="!grid !grid-cols-1 !gap-12 lg:!grid-cols-2 lg:!gap-16 !items-start">
            {/* Left side - Contact Information */}
            <ContactInfo />
            {/* Right side - Contact Form */}
            <ContactForm />
          </div>
          <Footer />
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default ContactContainer;
