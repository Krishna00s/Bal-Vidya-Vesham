import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapContext(
  animationCreator: (ctx: gsap.Context) => void,
  scopeRef?: React.RefObject<HTMLElement | null>,
  deps: React.DependencyList = []
) {
  const isCreatedRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const scope = scopeRef ? scopeRef.current : undefined;
    const ctx = gsap.context((self) => {
      animationCreator(self);
    }, scope ?? undefined);

    isCreatedRef.current = true;

    return () => {
      ctx.revert();
      isCreatedRef.current = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export { gsap, ScrollTrigger };
