'use client';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

export default function ScrollTop() {
  return (
    <div>
      <ScrollToTop
        smooth
        showUnder={100}
        position={100}
        style={{
          color: '#ffffff',
        }}
        className=" scroll-top-btn flex justify-center  shadow-[0_0_25px_8px_rgba(255,140,0,0.5)] animate-pulse items-center w-12 h-12 bg-[#ff3700] !rounded-full text-white hover:bg-[#ff3700] transition duration-300 ease-in-out hover:scale-110 !p-2 hover:!text-white"
      />
    </div>
  );
}
