import React, { useRef } from 'react';
import { useGsapContext, gsap } from './useGsapContext';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'clip-up' | 'scale-up';
  delay?: number;
  duration?: number;
  stagger?: number;
  selector?: string; // target specific children
  threshold?: string; // e.g. "top 85%"
  as?: keyof React.JSX.IntrinsicElements;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  duration = 0.9,
  stagger = 0,
  selector,
  threshold = 'top 85%',
  as: Component = 'div',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useGsapContext(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const targets = selector ? el.querySelectorAll(selector) : el;
      if (!targets || (targets instanceof NodeList && targets.length === 0)) return;

      let fromVars: gsap.TweenVars = { opacity: 0 };
      const toVars: gsap.TweenVars = {
        opacity: 1,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: threshold,
          once: true,
        },
      };

      if (stagger > 0) {
        toVars.stagger = stagger;
      }

      switch (variant) {
        case 'fade-up':
          fromVars = { ...fromVars, y: 32 };
          toVars.y = 0;
          break;
        case 'fade-down':
          fromVars = { ...fromVars, y: -24 };
          toVars.y = 0;
          break;
        case 'fade-left':
          fromVars = { ...fromVars, x: -28 };
          toVars.x = 0;
          break;
        case 'fade-right':
          fromVars = { ...fromVars, x: 28 };
          toVars.x = 0;
          break;
        case 'clip-up':
          fromVars = { ...fromVars, clipPath: 'inset(100% 0% 0% 0%)', y: 16 };
          toVars.clipPath = 'inset(0% 0% 0% 0%)';
          toVars.y = 0;
          toVars.ease = 'power3.out';
          toVars.duration = duration * 1.15;
          break;
        case 'scale-up':
          fromVars = { ...fromVars, scale: 0.95, y: 16 };
          toVars.scale = 1;
          toVars.y = 0;
          break;
      }

      gsap.fromTo(targets, fromVars, toVars);
    },
    containerRef,
    [variant, delay, duration, stagger, selector, threshold]
  );

  return (
    // @ts-expect-error dynamic component type
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
};
