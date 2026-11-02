'use client';

import { useEffect, useState } from 'react';
import { CircularProgressBar } from './circuler-progress';

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-10 left-6 z-50">
      <CircularProgressBar
        progress={scrollProgress}
        size={40}
        strokeWidth={6}
        color="#4169E1"
        backgroundColor="hsl(var(--muted))"
        label={`${Math.round(scrollProgress)}%`}
        showLabel={false}
      />
    </div>
  );
}
