'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white !mt-10">
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8">
        {/* Bottom Bar */}
        <div className="!mt-12 border-t border-gray-800 !pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p>Copyright © 2026 PEC ELECTRICAL</p>
            <div className="flex gap-6">
              <Link href="/terms" className="transition-colors hover:text-white">
                Term of use
              </Link>
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/blogs" className="transition-colors hover:text-white">
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
