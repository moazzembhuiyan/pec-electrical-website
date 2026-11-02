'use client';

import Image from 'next/image';

export default function Loader({ fullScreen = true }) {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            {/* Rotating ring */}
            <div className="absolute inset-0 animate-spin">
              <div className="h-32 w-32 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500"></div>
            </div>

            {/* Pulsing logo */}
            <div className="relative flex h-32 w-32 items-center justify-center animate-pulse">
              <Image
                src="/logo.png"
                alt="PFC Electrical"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Loading text */}
          <div className="flex items-center gap-1">
            <span className="text-lg font-semibold text-gray-700">Loading</span>
            <span className="flex gap-1">
              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>
                .
              </span>
              <span className="animate-bounce" style={{ animationDelay: '150ms' }}>
                .
              </span>
              <span className="animate-bounce" style={{ animationDelay: '300ms' }}>
                .
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Inline loader variant
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="absolute inset-0 animate-spin">
          <div className="h-16 w-16 rounded-full border-4 border-transparent border-t-orange-500 border-r-orange-500"></div>
        </div>
        <div className="relative flex h-16 w-16 items-center justify-center animate-pulse">
          <Image
            src="/public/logo.png"
            alt="PFC Electrical"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
