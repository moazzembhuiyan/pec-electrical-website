'use client';
import AnimateTextOnHover from '@/component/AnimateTextOnHover/AnimateTextOnHover';
import Link from 'next/link';
import logo from '@/assets/Logo/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Links
const LINKS = [
  {
    key: 'home',
    label: 'Home',
    route: '/',
  },
  {
    key: 'Aboutus',
    label: 'About Us',
    route: '/about',
  },
  {
    key: 'service',
    label: 'Services',
    route: '/#featured-services',
    activePaths: ['/services'],
  },
  {
    key: 'Gellary',
    label: 'Gallery',
    route: '/gallery',
  },
  {
    key: 'contact',
    label: 'Contact',
    route: '#contact',
  },
];

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="!mb-10 !mt-8 !lg:mb-20 flex items-center justify-center fixed !w-full top-0 z-50">
      {/* Desktop Version */}
      <div className="mx-auto hidden items-center !justify-between gap-x-10 !rounded-[40px] bg-white shadow-md !px-4 !py-3 lg:flex lg:w-[75%] !2xl:w-3/4">
        {/* Left ----- Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="mx-auto" width={100} height={1000} />
        </Link>

        {/* Center ------ Links */}
        <div className="flex flex-grow items-center justify-center gap-x-10">
          {LINKS.map((link) => (
            <Link key={link.key} href={link.route} className="font-medium !text-[#00000]">
              <AnimateTextOnHover activePaths={link.activePaths} path={link.route}>
                {link.label}
              </AnimateTextOnHover>
            </Link>
          ))}
        </div>

        {/* Right ----- Buttons */}
        <button
          onClick={() => router.push('/book-service')}
          type="button"
          className="w-fit flex hover:cursor-pointer justify-center gap-5 items-center mx-auto shadow-xl bg-[#4169E1] !backdrop-blur-md lg:font-semibold !isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#2E4B9B] hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:!hover:duration-700 relative z-10 !px-4 !py-2 overflow-hidden text-white rounded-full group"
        >
          <>Book Now</>
          <svg
            className="w-8 h-8 !p-1 bg-white justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-[#4169E1] group-hover:fill-[#2E4B9B]"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden w-full fixed top-0 left-0 bg-white shadow-md !z-50">
        <div className="flex items-center justify-between !p-4 bg-white">
          <Link href="/">
            <Image src={logo} alt="Logo" className="mx-auto" width={60} height={60} />
          </Link>
          <motion.div
            className="text-[#4169E1]"
            initial={{ rotate: 0 }}
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.8 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'bounce', stiffness: 300 }}
            className="bg-white text-[#4169E1] w-full absolute top-16 left-0 flex flex-col items-center !py-4 shadow-lg"
          >
            {LINKS.map((link) => (
              <Link
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                key={link.key}
                href={link.route}
                className="font-medium text-lg !py-2 text-[#4169E1]"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => router.push('/book-service')}
              type="button"
              className="w-full !py-2 !mt-5 bg-[#4169E1] hover:bg-[#2E4B9B] text-white rounded-full transition-colors"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
