import React, { useRef } from 'react';
import { useGsapContext, gsap } from './useGsapContext';

interface ImageApertureProps {
  webpSrc: string;
  jpgSrc: string;
  alt: string;
  aspectClass?: string; // e.g. "aspect-[16/10]" or "aspect-[4/5]"
  objectPosition?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  captionOverlay?: React.ReactNode;
  enableParallax?: boolean;
  className?: string;
  revealDirection?: 'up' | 'down' | 'left' | 'right';
}

export const ImageAperture: React.FC<ImageApertureProps> = ({
  webpSrc,
  jpgSrc,
  alt,
  aspectClass = 'aspect-[16/10]',
  objectPosition = 'center',
  width = 1920,
  height = 820,
  loading = 'lazy',
  fetchPriority = 'auto',
  captionOverlay,
  enableParallax = false,
  className = '',
  revealDirection = 'up',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useGsapContext(
    () => {
      const container = containerRef.current;
      const img = imageRef.current;
      const caption = captionRef.current;
      if (!container || !img) return;

      // Determine initial clip path based on reveal direction
      let initialClip = 'inset(100% 0% 0% 0% round 2px)';
      if (revealDirection === 'down') initialClip = 'inset(0% 0% 100% 0% round 2px)';
      if (revealDirection === 'left') initialClip = 'inset(0% 100% 0% 0% round 2px)';
      if (revealDirection === 'right') initialClip = 'inset(0% 0% 0% 100% round 2px)';

      const finalClip = 'inset(0% 0% 0% 0% round 2px)';

      // Timeline for image mask unveil + scale settling
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          once: true,
        },
        onComplete: () => {
          if (container) {
            gsap.set(container, { clearProps: 'clipPath,willChange' });
          }
          if (img && !enableParallax) {
            gsap.set(img, { clearProps: 'transform,willChange' });
          } else if (img) {
            gsap.set(img, { clearProps: 'willChange' });
          }
        },
      });

      tl.fromTo(
        container,
        { clipPath: initialClip },
        {
          clipPath: finalClip,
          duration: 1.25,
          ease: 'power3.inOut',
        }
      );

      tl.fromTo(
        img,
        { scale: 1.08 },
        {
          scale: 1.0,
          duration: 1.4,
          ease: 'power2.out',
        },
        '<'
      );

      if (caption) {
        tl.fromTo(
          caption,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        );
      }

      // Restrained Parallax for larger viewports if enabled
      if (enableParallax && window.innerWidth >= 768) {
        gsap.fromTo(
          img,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    },
    containerRef,
    [enableParallax, revealDirection]
  );

  return (
    <div
      ref={containerRef}
      className={`rounded-xs ${aspectClass} overflow-hidden relative border border-[#D2E3F0] bg-[#EBF3F9] ${className}`}
    >
      <picture>
        <source type="image/webp" srcSet={webpSrc} />
        <img
          ref={imageRef}
          src={jpgSrc}
          alt={alt}
          className={`w-full h-full object-cover ${objectPosition}`}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={loading === 'eager' ? 'sync' : 'async'}
          width={width}
          height={height}
        />
      </picture>

      {captionOverlay && (
        <div ref={captionRef} className="absolute inset-x-0 bottom-0 pointer-events-none">
          {captionOverlay}
        </div>
      )}
    </div>
  );
};
