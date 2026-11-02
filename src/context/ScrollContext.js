'use client';

import Lenis from 'lenis';
import { createContext, useContext, useEffect, useState } from 'react';

const SmoothScrollContext = createContext();

export const useSmoothScroller = () => useContext(SmoothScrollContext);

export default function ScrollContext({ children }) {
  const [lenisRef, setLenisRef] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // optional for smoothing strength
    });

    // Create an animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf); // start the loop
    setLenisRef(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
