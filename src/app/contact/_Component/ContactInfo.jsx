import Animatetext from '@/component/AnimatedText/AnimatedText';
import {
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Siren,
  ArrowUpRight,
} from 'lucide-react';

// Update the address here (add city/state for more accurate map results)
const ADDRESS = 'East Hartford';
const PHONE_DISPLAY = '(860) 990-4239';
const PHONE_LINK = 'tel:+18609904239';
const EMAIL = 'nevado.pec@gmail.com';
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const card =
  '!group !flex !items-start !gap-4 !rounded-2xl !border !border-white/10 !bg-white/[0.03] !p-5 !transition-all !duration-300 hover:!border-[#4169E1]/60 hover:!bg-white/[0.06]';
const iconBox =
  '!flex !h-12 !w-12 !shrink-0 !items-center !justify-center !rounded-xl !bg-[#4169E1]/15 !text-[#6C8CFF] !transition-colors !duration-300 group-hover:!bg-[#4169E1] group-hover:!text-white';

export function ContactInfo() {
  return (
    <div className="!space-y-8">
      {/* Heading */}
      <div>
        <span className="!inline-block !text-xs !font-semibold !uppercase !tracking-[0.25em] !text-[#6C8CFF]">
          Contact Us
        </span>
        <Animatetext x={-20} duration={1}>
          <h1 className="!mt-3 !mb-3 !text-4xl md:!text-5xl !font-bold !tracking-tight !text-white">
            Get In Touch
          </h1>
        </Animatetext>
        <Animatetext x={20} duration={1}>
          <p className="!max-w-lg !text-white/60 !leading-relaxed">
            Have questions or need a quote? Get in touch with us today and we’ll be happy to help.
            We look forward to working with you.
          </p>
        </Animatetext>
      </div>

      {/* Urgent call */}
      <a
        href={PHONE_LINK}
        className="!group !flex !items-center !gap-4 !rounded-2xl !border !border-amber-400/30 !bg-gradient-to-r !from-amber-400/15 !to-amber-400/5 !p-5 !transition-all !duration-300 hover:!border-amber-400/60"
      >
        <span className="!flex !h-12 !w-12 !shrink-0 !items-center !justify-center !rounded-xl !bg-amber-400 !text-black">
          <Siren className="!h-6 !w-6" />
        </span>
        <p className="!text-sm md:!text-[15px] !leading-relaxed !text-white/80">
          <span className="!font-semibold !text-white">Need urgent electrical help?</span> Call{' '}
          <span className="!font-semibold !text-amber-300 group-hover:!underline">
            {PHONE_DISPLAY}
          </span>{' '}
          to check our earliest availability.
        </p>
      </a>

      {/* Info cards */}
      <div className="!space-y-4">
        <a href={`mailto:${EMAIL}`} className={card}>
          <span className={iconBox}>
            <Mail className="!h-5 !w-5" />
          </span>
          <div className="!min-w-0">
            <h3 className="!text-sm !font-medium !text-white/50">Email</h3>
            <p className="!mt-0.5 !break-all !font-semibold !text-white">{EMAIL}</p>
            <p className="!mt-1 !text-sm !text-white/40">We'll respond within 24 hours</p>
          </div>
        </a>

        <a href={PHONE_LINK} className={card}>
          <span className={iconBox}>
            <Phone className="!h-5 !w-5" />
          </span>
          <div>
            <h3 className="!text-sm !font-medium !text-white/50">Phone</h3>
            <p className="!mt-0.5 !font-semibold !text-white">{PHONE_DISPLAY}</p>
            <p className="!mt-1 !text-sm !text-white/40">24/7 Emergency Line</p>
          </div>
        </a>

        {/* Location with pin */}
        <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className={card}>
          <span className="!relative !flex !h-12 !w-12 !shrink-0 !items-center !justify-center">
            <span className="!absolute !inset-0 !animate-ping !rounded-xl !bg-[#4169E1]/30" />
            <span className="!relative !flex !h-12 !w-12 !items-center !justify-center !rounded-xl !bg-[#4169E1] !text-white">
              <MapPin className="!h-5 !w-5" />
            </span>
          </span>
          <div className="!flex-1">
            <h3 className="!text-sm !font-medium !text-white/50">Location</h3>
            <p className="!mt-0.5 !font-semibold !text-white">{ADDRESS}</p>
            <p className="!mt-1 !inline-flex !items-center !gap-1 !text-sm !text-[#6C8CFF]">
              Get directions <ArrowUpRight className="!h-4 !w-4" />
            </p>
          </div>
        </a>
      </div>

      {/* Socials */}
      <div className="!flex !items-center !gap-3">
        <span className="!text-sm !text-white/40 !mr-1">Follow us</span>
        {[
          {
            Icon: Facebook,
            label: 'Facebook',
            link: 'https://www.facebook.com/share/1N1oG8NXZk/?mibextid=wwXIfr',
          },
          {
            Icon: Instagram,
            label: 'Instagram',
            link: 'https://instagram.com/pec.electrical?srtk=MXB4YXhvemZzajVybA%3D%3D',
          },
        ].map(({ Icon, label, link }) => (
          <a
            key={label}
            href={link}
            aria-label={label}
            className="!flex !h-10 !w-10 !items-center !justify-center !rounded-full !border !border-white/15 !text-white/70 !transition-all !duration-300 hover:!border-[#4169E1] hover:!bg-[#4169E1] hover:!text-white hover:!-translate-y-0.5"
          >
            <Icon className="!h-5 !w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
