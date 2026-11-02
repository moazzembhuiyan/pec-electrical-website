'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center !px-4 !py-16 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="max-w-2xl w-full text-center !space-y-8">
        {/* Animated 404 Number */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-[20rem] font-bold text-foreground leading-none select-none">
              404
            </span>
          </div>
          <div className="relative z-10 !pt-32 !pb-16">
            <DotLottieReact
              src="https://lottie.host/87e3fc49-a94b-4ff8-ad46-39b1c831e6e5/3MwY7SL5WI.lottie"
              loop
              autoplay
            />

            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="!space-y-4">
          <p className="text-lg text-muted-foreground !max-w-md !mx-auto text-pretty leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
            you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center !pt-4">
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="/" className="gap-2 !text-white">
              <Home className="h-4 w-4 !text-white" />
              <h1 className="text-white"> Go Home</h1>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[160px] bg-transparent">
            <p onClick={() => router.back()} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </p>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="!pt-8 border-t border-border/50 !mt-12">
          <p className="text-sm text-muted-foreground !mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="text-sm text-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Home
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/about"
              className="text-sm text-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/contact"
              className="text-sm text-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
