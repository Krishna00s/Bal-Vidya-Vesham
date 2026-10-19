import React, { useEffect, useRef } from 'react';
import { useRouter } from '../router/Router';
import { useLenis } from './lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const RouteTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentPath } = useRouter();
  const { lenis } = useLenis();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset scroll position on route change
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      ScrollTrigger.refresh();
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    // Smooth page entry animation
    gsap.fromTo(
      el,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power2.out',
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      }
    );
  }, [currentPath, lenis]);

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  );
};
