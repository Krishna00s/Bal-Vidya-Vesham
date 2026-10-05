import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { HERO_CONTENT } from '@/content/school.data.ts'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.ts'
import { Container } from '@/components/ui/Container.tsx'
import { GridOverlay } from '@/components/ui/GridOverlay.tsx'
import { scrollToTarget } from '@/motion/lenis.ts'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // 1. Staggered entrance animation
      if (!prefersReducedMotion) {
        const tl = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },
        })

        tl.from('.hero-eyebrow', {
          opacity: 0,
          y: 14,
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
            '.hero-image-frame',
            {
              opacity: 0,
              scale: 0.985,
              duration: 1.0,
              ease: 'expo.out',
            },
            '-=0.7',
          )
          .from(
            '.hero-statement',
            {
              opacity: 0,
              y: 18,
              duration: 0.75,
            },
            '-=0.6',
          )
          .from(
            '.hero-copy',
            {
              opacity: 0,
              y: 16,
              duration: 0.7,
            },
            '-=0.55',
          )
          .from(
            '.hero-cta',
            {
              opacity: 0,
              y: 14,
              duration: 0.6,
            },
            '-=0.5',
          )
          .from(
            '.hero-sidebar',
            {
              opacity: 0,
              duration: 0.7,
            },
            '-=0.6',
          )
      }

      // 2. Scroll-linked internal photographic reveal (GSAP ScrollTrigger scrub)
      // Overscanned image source translates upwards inside structurally fixed frame,
      // revealing lower region as user scrolls down and reversing naturally on scroll up.
      if (!prefersReducedMotion && imageRef.current && sectionRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: 0 },
          {
            yPercent: -14,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          },
        )
      }
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
      className="relative w-full overflow-hidden bg-[#F5F1E8] border-b border-[rgba(20,32,31,0.14)] min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)] lg:h-[calc(100svh-4rem)] lg:min-h-[580px] flex flex-col justify-between"
    >
      {/* Background Architectural Grid Overlay */}
      <GridOverlay />

      <Container className="relative z-10 h-full flex flex-col justify-center py-4 sm:py-6 lg:py-6 2xl:py-8">
        {/* Single Unified Responsive Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 sm:gap-y-8 lg:gap-y-0 h-full items-stretch relative">
          
          {/* Eyebrow Annotation (Col 1 to 5 on Desktop, Top on Mobile) */}
          <div className="order-1 lg:col-start-1 lg:col-end-6 lg:row-start-1 self-start pb-1 sm:pb-2">
            <div className="hero-eyebrow flex items-center justify-between sm:justify-start gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-5 sm:w-8 h-[1px] bg-[rgba(20,32,31,0.25)] shrink-0" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] sm:text-[10px] 2xl:text-[10.5px] uppercase tracking-[0.15em] text-[#14201F] font-semibold leading-tight">
                    A NURTURING BEGINNING
                  </span>
                  <span className="hidden sm:block font-mono text-[9px] sm:text-[10px] 2xl:text-[10.5px] uppercase tracking-[0.15em] text-[#8E9592] leading-tight">
                    FOR YOUNG MINDS
                  </span>
                </div>
              </div>

              {/* Mobile Chapter Tag */}
              <div className="flex items-baseline gap-1 font-mono text-[#14201F] lg:hidden shrink-0">
                <span className="text-[10px] text-[#8E9592]">SEC</span>
                <span className="text-sm font-bold">{HERO_CONTENT.chapterIndex}</span>
              </div>
            </div>
            <div className="mt-2 w-12 sm:w-16 h-[1px] bg-[rgba(20,32,31,0.2)]" aria-hidden="true" />
          </div>

          {/* Architectural Headline BAL VIDYAVASHAM (Spans Col 1 to 10 on Desktop across photo) */}
          <div className="order-2 lg:col-start-1 lg:col-end-10 lg:row-start-2 z-20 self-center py-1 sm:py-2">
            <h1 className="hero-title-mobile lg:hero-title-desktop font-sans font-bold uppercase tracking-[-0.038em] lg:tracking-[-0.045em] text-[#14201F] select-none">
              <span className="hero-heading-line block">
                {HERO_CONTENT.schoolNamePrimary}
              </span>
              <span className="hero-heading-line block whitespace-nowrap -mt-1 sm:-mt-2 lg:-mt-3 2xl:-mt-4">
                {HERO_CONTENT.schoolNameSecondary}
              </span>
            </h1>
          </div>

          {/* Hero Photograph (Col 6 to 11 on Desktop; placed naturally in mobile reading flow) */}
          <div className="order-3 lg:col-start-6 lg:col-end-12 lg:row-start-1 lg:row-end-4 relative z-10 border border-[rgba(20,32,31,0.12)] lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r bg-[#EEE9DD] overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto h-auto lg:h-full min-h-[260px] sm:min-h-[320px] lg:min-h-0 hero-image-frame">
            <img
              ref={imageRef}
              src="/images/hero-student.jpg"
              alt="Joyful young student smiling in school uniform at Bal Vidyavasham campus courtyard"
              className="hero-image-source absolute top-0 left-0 w-full h-[120%] object-cover object-[center_12%] lg:object-[center_18%] will-change-transform pointer-events-none select-none"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Narrative Statement, Copy & Primary Action (Col 1 to 5 on Desktop) */}
          <div className="order-4 lg:col-start-1 lg:col-end-6 lg:row-start-3 z-20 self-end pt-2 sm:pt-3 lg:pt-4 flex flex-col gap-3.5 sm:gap-4 2xl:gap-5">
            {/* Secondary Editorial Voice: Serif Statement */}
            <p className="hero-statement font-serif italic text-[clamp(1.35rem,2.4vw,2.3rem)] font-medium text-[#14201F] leading-[1.12] tracking-tight max-w-[360px] 2xl:max-w-[420px]">
              {HERO_CONTENT.statement}
            </p>

            {/* Informational UI Body Copy */}
            <p className="hero-copy font-sans text-[13.5px] sm:text-[14px] 2xl:text-[15px] text-[#4B5552] leading-[1.55] max-w-[410px]">
              {HERO_CONTENT.supportingCopy}
            </p>

            {/* Action Button & Location Coordinate */}
            <div className="hero-cta flex flex-wrap items-center justify-between sm:justify-start gap-4 sm:gap-6 pt-2 border-t sm:border-t-0 border-[rgba(20,32,31,0.12)]">
              <a
                href={HERO_CONTENT.primaryAction.href}
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-3.5 focus-visible:outline-2 focus-visible:outline-[#063B31]"
              >
                <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 2xl:w-12 2xl:h-12 rounded-full bg-[#14201F] text-[#F5F1E8] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#063B31] shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
                <span className="font-sans text-[13.5px] sm:text-[14px] 2xl:text-[15px] font-semibold text-[#14201F] tracking-[0.01em] group-hover:text-[#063B31] transition-colors">
                  {HERO_CONTENT.primaryAction.label}
                </span>
              </a>

              {/* Subtle vertical rule divider */}
              <div className="hidden sm:block w-[1px] h-8 bg-[rgba(20,32,31,0.14)]" aria-hidden="true" />

              {/* Precise geographic coordinates */}
              <div className="flex flex-col font-mono text-[9px] sm:text-[9.5px] uppercase tracking-[0.16em] text-[#8E9592] leading-tight">
                <span className="font-semibold text-[#14201F]/80">{HERO_CONTENT.locationBadge.line1}</span>
                <span>{HERO_CONTENT.locationBadge.line2}</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar Metadata (Col 12 on Desktop) */}
          <div className="order-5 hidden lg:flex lg:col-start-12 lg:col-end-13 lg:row-start-1 lg:row-end-4 relative z-20 flex flex-col justify-between items-center py-4 pl-3 pr-1 text-center hero-sidebar">
            {/* Section 01 Numeral and stacked micro metadata */}
            <div className="flex flex-col items-center">
              <span className="font-mono text-3xl 2xl:text-4xl font-bold tracking-tight text-[#14201F]">
                {HERO_CONTENT.chapterIndex}
              </span>
              <div className="mt-2.5 flex flex-col items-center font-mono text-[8.5px] 2xl:text-[9px] uppercase tracking-[0.16em] text-[#8E9592] leading-tight">
                <span>SMALL</span>
                <span>BEGINNINGS</span>
                <span>ENDLESS</span>
                <span>POSSIBILITIES</span>
              </div>
            </div>

            {/* Swiss circular dot marker */}
            <span className="w-2 h-2 rounded-full bg-[#14201F] my-auto" aria-hidden="true" />

            {/* Scroll indicator with fine vertical line */}
            <div className="flex flex-col items-center gap-2.5">
              <span
                className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-[#8E9592] [writing-mode:vertical-rl] rotate-180 select-none"
                aria-hidden="true"
              >
                {HERO_CONTENT.scrollIndicator}
              </span>
              <span className="w-[1px] h-10 bg-[rgba(20,32,31,0.22)] block" aria-hidden="true" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
