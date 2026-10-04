import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'
import { HERO_CONTENT } from '@/content/school.data.ts'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.ts'
import { Container } from '@/components/ui/Container.tsx'
import { MicroLabel } from '@/components/ui/MicroLabel.tsx'
import { SectionNumber } from '@/components/ui/SectionNumber.tsx'
import { AspectMedia } from '@/components/ui/AspectMedia.tsx'
import { scrollToTarget } from '@/motion/lenis.ts'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      tl.from('.hero-eyebrow', {
        opacity: 0,
        y: 16,
        duration: 0.6,
      })
        .from(
          '.hero-heading-line',
          {
            opacity: 0,
            y: 35,
            stagger: 0.12,
            duration: 0.85,
          },
          '-=0.35',
        )
        .from(
          '.hero-statement',
          {
            opacity: 0,
            y: 20,
            duration: 0.75,
          },
          '-=0.55',
        )
        .from(
          '.hero-copy',
          {
            opacity: 0,
            y: 18,
            duration: 0.7,
          },
          '-=0.55',
        )
        .from(
          '.hero-cta',
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          '-=0.5',
        )
        .from(
          '.hero-image-container',
          {
            opacity: 0,
            scale: 0.98,
            duration: 1.1,
            ease: 'expo.out',
          },
          '-=0.75',
        )
        .from(
          '.hero-sidebar',
          {
            opacity: 0,
            duration: 0.7,
          },
          '-=0.6',
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToTarget(HERO_CONTENT.primaryAction.href, -70)
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Bal Vidyavasham School Introduction"
      className="relative w-full pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-14 lg:pb-32 overflow-hidden bg-[#F5F1E8]"
    >
      <Container>
        {/* Main Responsive Swiss Grid: 1 column stack on mobile, 12 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-8 items-start w-full">
          
          {/* LEFT COLUMN: Editorial Narrative (Full width on mobile, 7 columns on desktop) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col z-10 lg:pr-4 min-w-0 w-full">
            
            {/* Eyebrow Label with Hairline Rule */}
            <div className="hero-eyebrow flex items-center gap-2.5 sm:gap-4 mb-4 sm:mb-6 min-w-0">
              <span className="w-5 sm:w-12 h-[1px] bg-[rgba(20,32,31,0.2)] shrink-0" aria-hidden="true" />
              <MicroLabel>
                {HERO_CONTENT.microLabel}
              </MicroLabel>
            </div>

            {/* Monumental Hero Headline */}
            <h1 className="font-sans font-bold uppercase tracking-[-0.03em] sm:tracking-[-0.04em] text-[#14201F] leading-[0.88] select-none text-[clamp(2.1rem,7.2vw,7.8rem)] break-words">
              <span className="hero-heading-line block">
                {HERO_CONTENT.schoolNamePrimary}
              </span>
              <span className="hero-heading-line block -mt-1 sm:-mt-2 lg:-mt-3">
                {HERO_CONTENT.schoolNameSecondary}
              </span>
            </h1>

            {/* Editorial Statement */}
            <p className="hero-statement font-serif italic text-[clamp(1.5rem,3.2vw,2.75rem)] font-medium text-[#14201F] leading-[1.12] tracking-tight mt-6 sm:mt-8 max-w-[560px]">
              {HERO_CONTENT.statement}
            </p>

            {/* Supporting Copy */}
            <p className="hero-copy font-sans text-[15px] sm:text-[16px] lg:text-[17px] text-[#4B5552] leading-[1.6] mt-4 sm:mt-5 max-w-[460px]">
              {HERO_CONTENT.supportingCopy}
            </p>

            {/* Primary Action Button */}
            <div className="hero-cta mt-8 sm:mt-10 flex items-center gap-6">
              <a
                href={HERO_CONTENT.primaryAction.href}
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-3.5 focus-visible:outline-2 focus-visible:outline-[#063B31]"
              >
                {/* Circular Dark Icon Trigger */}
                <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#063B31] text-[#F5F1E8] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#022B24] shrink-0">
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
                <span className="font-sans text-[14px] sm:text-[15px] font-semibold text-[#14201F] tracking-[0.01em] group-hover:text-[#063B31] transition-colors">
                  {HERO_CONTENT.primaryAction.label}
                </span>
              </a>
            </div>

            {/* Location Tag */}
            <div className="hero-meta mt-12 sm:mt-16 pt-6 border-t border-[rgba(20,32,31,0.12)] max-w-[260px]">
              <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-[#8E9592] leading-relaxed">
                {HERO_CONTENT.locationBadge.line1}
              </span>
              <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-[#8E9592] leading-relaxed">
                {HERO_CONTENT.locationBadge.line2}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Child Photograph (Full width on mobile, 4 columns on desktop) */}
          <div className="col-span-1 lg:col-span-4 hero-image-container relative min-w-0">
            <div className="relative w-full border border-[rgba(20,32,31,0.12)] shadow-sm bg-[#EEE9DD]">
              <AspectMedia
                src="/images/hero-student.jpg"
                alt="Joyful young student smiling in school uniform at Bal Vidyavasham campus courtyard"
                aspectRatio="3/4"
                priority={true}
                imageClassName="hover:scale-[1.015]"
              />
            </div>
          </div>

          {/* RIGHTMOST MARGIN: Chapter Navigation & Scroll Indicator (Column 12 on desktop) */}
          <div className="hidden lg:flex lg:col-span-1 hero-sidebar flex-col justify-between items-end self-stretch pl-2 text-right">
            {/* Chapter 01 Indicator */}
            <div className="flex flex-col items-end">
              <SectionNumber number={HERO_CONTENT.chapterIndex} className="text-4xl 2xl:text-5xl" />
              <div className="mt-4 flex flex-col items-end font-mono text-[8.5px] uppercase tracking-[0.15em] text-[#8E9592] leading-tight max-w-[90px]">
                <span>SMALL</span>
                <span>BEGINNINGS</span>
                <span>ENDLESS</span>
                <span>POSSIBILITIES</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#14201F] mt-5 mr-1" aria-hidden="true" />
            </div>

            {/* Scroll To Explore Indicator with Vertical Rule */}
            <div className="flex flex-col items-center gap-4 mt-auto">
              <span
                className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8E9592] [writing-mode:vertical-rl] rotate-180 select-none"
                aria-hidden="true"
              >
                {HERO_CONTENT.scrollIndicator}
              </span>
              <span className="w-[1px] h-12 bg-[rgba(20,32,31,0.2)] block" aria-hidden="true" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
