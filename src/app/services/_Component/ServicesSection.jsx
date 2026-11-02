'use client';
import React from 'react';
import { Plug, Lightbulb, Home, Fan, Zap, Wrench, CircleDot, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ResponsiveContainer from '@/component/ResponsiveContainer/ResponsiveContainer';

const services = [
  {
    icon: <Plug size={32} className="!text-[#4169E1]" />,
    title: 'Panel Upgrades',
    urlHandler: 'panel-upgrades',
    description: 'Improve safety and keep up with today’s power needs.',
  },
  {
    icon: <Lightbulb size={32} className="!text-[#4169E1]" />,
    title: 'Lighting Installation',
    urlHandler: 'lighting-installation',
    description: 'Indoor and outdoor lighting for greater comfort, safety and efficiency.',
  },
  {
    icon: <Home size={32} className="!text-[#4169E1]" />,
    title: 'Renovation Wiring',
    urlHandler: 'renovation-wiring',
    description: 'Electrical systems for kitchens, bathrooms, additions and more.',
  },
  {
    icon: <Fan size={32} className="!text-[#4169E1]" />,
    title: 'Other Wiring',
    urlHandler: 'other-wiring',
    description: 'Dedicated circuits and wiring for HVAC systems.',
  },
  {
    icon: <Zap size={32} className="!text-[#4169E1]" />,
    title: 'Generator Connections',
    urlHandler: 'generator-connections',
    description: 'Keep your home or business powered when it matters most.',
  },
  {
    icon: <Wrench size={32} className="!text-[#4169E1]" />,
    title: 'Troubleshooting',
    urlHandler: 'troubleshooting',
    description: 'Find and fix electrical issues quickly and safely.',
  },
  {
    icon: <CircleDot size={32} className="!text-[#4169E1]" />,
    title: 'Meter Socket Installation',
    urlHandler: 'meter-socket-installation',
    description: 'Professional meter socket installation and upgrades.',
  },
];

export default function ServicesSection() {
  return (
    <section className="!py-28 !bg-white" id="featured-services">
      <ResponsiveContainer>
        <div>
          {/* Header */}
          <div className="!text-center !mb-12">
            <p className="!text-[#4169E1] !font-semibold !tracking-wider !uppercase !text-sm !mb-3">
              Our Services
            </p>
            <h2 className="!text-3xl md:!text-4xl !font-bold !text-gray-900 !mb-4">
              Reliable Electrical Services for Homes and Businesses
            </h2>
            <p className="!text-gray-600 !max-w-2xl !mx-auto !text-base md:!text-lg">
              From everyday electrical work to complex projects, PEC delivers quality workmanship
              you can count on.
            </p>
          </div>

          {/* Services Grid */}
          <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 !gap-6">
            {services.map((service) => (
              <Link
                href={`/services/featured/${service.urlHandler}`}
                key={service.urlHandler}
                aria-label={`View ${service.title} details`}
                className="!bg-white !border !border-gray-100 !rounded-xl !p-6 !text-center !shadow-sm hover:!shadow-lg hover:!scale-105 !transition-all !duration-300 !ease-in-out !cursor-pointer focus-visible:!outline-none focus-visible:!ring-2 focus-visible:!ring-[#4169E1]"
              >
                <div className="!flex !justify-center !mb-4">{service.icon}</div>
                <h3 className="!text-lg !font-semibold !text-gray-900 !mb-2">{service.title}</h3>
                <p className="!text-sm !text-gray-600 !leading-relaxed">{service.description}</p>
              </Link>
            ))}

            {/* View All Services Button Card */}
            <Link
              href="/services"
              className="!bg-[#4169E1] !rounded-xl !p-6 !flex !flex-col !items-center !justify-center !text-center !shadow-sm hover:!bg-[#2E4B9B] !transition-all !duration-300 !group"
            >
              <div className="!w-12 !h-12 !rounded-full !bg-white/20 !flex !items-center !justify-center !mb-4 group-hover:!scale-110 !transition-transform">
                <ArrowRight size={24} className="!text-white" />
              </div>
              <h3 className="!text-lg !font-semibold !text-white !mb-1">View All Services</h3>
              <p className="!text-sm !text-white/80">
                Explore our complete range of electrical solutions
              </p>
            </Link>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
