import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navber from '@/component/shared/Navber/Navber';
import { Toaster } from 'sonner';
import NextTopLoader from 'nextjs-toploader';
import ScrollContext from '@/context/ScrollContext';
import ScrollTop from '@/component/shared/ScrollTop/ScrollTop';
import { ScrollProgressBar } from '@/component/shared/ScrollProgress/scroll-progress';
import { GoogleTagManager } from '@next/third-parties/google';
import ContactContainer from './contact/_Component/ContactContainer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'Pec Electrical',
    template: '%s | Pec Electrical',
  },
  description: 'Book reliable electrical services with Pec Electrical through our online platform.',
  verification: {
    google: 'YlL58tyg5fGStIm3pn1J1sx4Abb6J3GwGDy5bPWCCxs',
  },
  metadataBase: new URL('https://pecelectricalct.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-P4VVLSHS" />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextTopLoader color="#4169E1" height={3} showSpinner={false} easing="ease" speed={200} />
        <Toaster richColors center />
        <ScrollContext>
          <div className="absolute z-[9999] !w-full">
            <Navber />
          </div>
          <main className="relative top-0 min-h-[100vh] !z-0 w-full">{children}</main>
          <ContactContainer />
          <ScrollTop />
        </ScrollContext>
        <ScrollProgressBar />
      </body>
    </html>
  );
}
