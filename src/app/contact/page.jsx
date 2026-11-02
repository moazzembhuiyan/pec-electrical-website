import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';
import ContactContainer from './_Component/ContactContainer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { getPageSEO } from '@/Hooks/UsegetPageSEO';

export async function generateMetadata() {
  const seo = await getPageSEO();

  const metadata = seo?.data?.value;

  return {
    title: metadata?.contactMetaTitle,
    description: metadata?.contactMetaDescription,

    alternates: {
      canonical: 'https://pecelectricalct.com/contact',
    },
  };
}
export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Address',
      value: 'address-nevado.pec@gmail.com',
      href: 'mailto:address-nevado.pec@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone Number',
      value: '#860-990-4239',
      href: 'tel:8609904239',
    },
    {
      icon: MapPin,
      label: 'Our Location',
      value: '-20 Elmer Street, East Hartford, CT 06108',
      href: 'https://maps.google.com/?q=-20+Elmer+Street,+East+Hartford,+CT+06108',
    },
  ];
  return (
    <ResponsiveContainer className={' md:!mt-[115px]'}>
      <main className="flex !w-full flex-col justify-between min-h-[80vh] items-center md:!p-6 md:!mt-10 ">
        <ContactContainer />

        <div className="w-full md:max-w-5xl !mt-10 md:!mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 !gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.icon === MapPin ? '_blank' : undefined}
                  rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="group bg-white rounded-2xl !p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 !mb-1">{item.label}</p>
                    <p className="text-gray-900 font-medium break-words">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </ResponsiveContainer>
  );
}
