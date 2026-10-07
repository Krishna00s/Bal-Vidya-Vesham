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
  const titleRef = useRef<HTMLDivElement>(null)
  const mainFrameRef = useRef<HTMLDivElement>(null)
  const mainImageRef = useRef<HTMLImageElement>(null)
  const envFrameRef = useRef<HTMLDivElement>(null)
  const envImageRef = useRef<HTMLImageElement>(null)
  const assemblyFrameRef = useRef<HTMLDivElement>(null)
  const assemblyImageRef = useRef<HTMLImageElement>(null)
  const classroomFrameRef = useRef<HTMLDivElement>(null)
  const classroomImageRef = useRef<HTMLImageElement>(null)

  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // 1. Initial editorial entrance sequence
      if (!prefersReducedMotion) {
        const tl = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },
        })

        // Independent typography eyebrow entrance
        tl.from('.hero-eyebrow', {
          opacity: 0,
          y: 12,
          duration: 0.55,
        })
          // Monumental title restrained vertical reveal
          .from(
            '.hero-heading-line',
            {
              opacity: 0,
              y: 42,
              stagger: 0.12,
              duration: 0.85,
            },
            '-=0.3',
          )

        // Dominant primary hero photograph clip-path reveal
        if (mainFrameRef.current) {
          tl.fromTo(
            mainFrameRef.current,
            {
              clipPath: 'inset(0% 0% 100% 0%)',
            },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.15,
              ease: 'power3.inOut',
            },
            '-=0.65',
          )
        }

        // Supporting photographs enter with subtle opposing translations (never faded)
        if (envFrameRef.current) {
          tl.from(
            envFrameRef.current,
            {
              x: -22,
              y: 20,
              opacity: 0,
              duration: 0.85,
              ease: 'power2.out',
            },
            '-=0.75',
          )
        }

        if (assemblyFrameRef.current) {
          tl.from(
            assemblyFrameRef.current,
            {
              x: 22,
              y: 20,
              opacity: 0,
              duration: 0.85,
              ease: 'power2.out',
            },
            '-=0.7',
          )
        }

        if (classroomFrameRef.current) {
          tl.from(
            classroomFrameRef.current,
            {
              y: 24,
              opacity: 0,
              duration: 0.8,
              ease: 'power2.out',
            },
            '-=0.6',
          )
        }

        // Narrative voice & actions
        tl.from(
          '.hero-statement',
          {
            opacity: 0,
            y: 16,
            duration: 0.65,
          },
          '-=0.6',
        )
          .from(
            '.hero-copy',
            {
              opacity: 0,
              y: 14,
              duration: 0.6,
            },
            '-=0.55',
          )
          .from(
            '.hero-cta',
            {
              opacity: 0,
              y: 12,
              duration: 0.55,
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

        // 2. Multi-rate scroll parallax & spatial settling
        // Main photograph subtle internal parallax
        if (mainImageRef.current && sectionRef.current) {
          gsap.to(mainImageRef.current, {
            yPercent: -6,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          })
        }

        // Environmental courtyard drift (Rate A)
        if (envFrameRef.current && sectionRef.current) {
          gsap.to(envFrameRef.current, {
            yPercent: -12,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          })
        }

        // Emotional assembly portrait drift (Rate B)
        if (assemblyFrameRef.current && sectionRef.current) {
          gsap.to(assemblyFrameRef.current, {
            yPercent: -18,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          })
        }

        // Classroom study subtle drift participating in transition toward next section
        // Note: OPACITY REMAINS 1 AT ALL TIMES (NO FADING)
        if (classroomFrameRef.current && sectionRef.current) {
          gsap.to(classroomFrameRef.current, {
            yPercent: -22,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.75,
              invalidateOnRefresh: true,
            },
          })
        }

        // Monumental title subtle shift
        if (titleRef.current && sectionRef.current) {
          gsap.to(titleRef.current, {
            yPercent: -4,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          })
        }
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
      className="relative w-full overflow-hidden bg-transparent border-b border-[rgba(20,32,31,0.14)] min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)] lg:h-[calc(100svh-4rem)] lg:min-h-[720px] lg:max-h-[1080px] flex flex-col justify-between"
    >
      {/* Background Architectural Grid Overlay */}
      <GridOverlay />

      <Container className="relative z-10 h-full flex flex-col justify-between py-5 sm:py-6 lg:py-6 xl:py-7 2xl:py-8">
        {/* Single Unified Responsive Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 sm:gap-y-8 lg:gap-y-0 h-full items-stretch relative">
          
          {/* Eyebrow Annotation (Col 1 to 5 on Desktop, Top on Mobile) */}
          <div className="order-1 lg:col-start-1 lg:col-end-6 lg:row-start-1 self-start pb-1 sm:pb-2 relative z-20">
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

          {/* Monumental Editorial Display Headline BAL VIDYAVASHAM */}
          {/* Sits on Left and naturally extends horizontally across boundary toward/over photography */}
          <div
            ref={titleRef}
            className="order-2 lg:col-start-1 lg:col-end-7 lg:row-start-2 z-20 self-center py-1 sm:py-2 select-none pointer-events-none"
          >
            <h1 className="hero-title-mobile lg:hero-title-desktop font-sans font-black uppercase text-[#14201F]">
              <span className="hero-heading-line block">
                {HERO_CONTENT.schoolNamePrimary}
              </span>
              <span className="hero-heading-line block whitespace-nowrap -mt-1 sm:-mt-2 lg:-mt-3 2xl:-mt-4">
                {HERO_CONTENT.schoolNameSecondary}
              </span>
            </h1>
          </div>

          {/* Right Photographic Composition (~60-70% visual prominence on Desktop) */}
          <div className="order-3 lg:col-start-6 lg:col-end-12 lg:row-start-1 lg:row-end-4 relative z-10 w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] xl:min-h-[600px] flex flex-col justify-center">
            
            {/* 1. Dominant Primary Hero Photograph: Campus Exterior & Signage (slider1.jpg) */}
            {/* Target 50-56vw width, 62-68vh height on desktop, visually occupying majority of right half */}
            <div
              ref={mainFrameRef}
              className="hero-main-frame relative z-10 w-full lg:w-[50vw] xl:w-[53vw] 2xl:w-[55vw] lg:h-[62vh] xl:h-[66vh] 2xl:h-[68vh] min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] border border-[rgba(20,32,31,0.2)] bg-[#EEE9DD] overflow-hidden"
            >
              <img
                ref={mainImageRef}
                src={HERO_CONTENT.photography.primary.src}
                alt={HERO_CONTENT.photography.primary.alt}
                className="absolute -top-[5%] left-0 w-full h-[115%] object-cover object-[center_46%] will-change-transform pointer-events-none select-none"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Supporting Images: Courtyard & Assembly */}
            <div className="flex flex-row items-stretch gap-2.5 sm:gap-3.5 mt-3 sm:mt-4 w-full lg:contents">
              
              {/* 2. Secondary Environmental Photograph: Botanical Grounds (slider2.jpg) */}
              {/* Partially overlapping lower-left region of slider1 */}
              <div
                ref={envFrameRef}
                className="hero-env-frame relative lg:absolute lg:bottom-6 lg:-left-12 xl:lg:-left-16 2xl:lg:-left-20 z-25 w-[56%] lg:w-[19vw] xl:w-[20vw] lg:min-w-[210px] lg:max-w-[320px] aspect-[4/3] sm:aspect-[16/11] border border-[rgba(20,32,31,0.22)] bg-[#EEE9DD] overflow-hidden"
              >
                <img
                  ref={envImageRef}
                  src={HERO_CONTENT.photography.environmental.src}
                  alt={HERO_CONTENT.photography.environmental.alt}
                  className="absolute -top-[5%] left-0 w-full h-[115%] object-cover object-[24%_45%] will-change-transform pointer-events-none select-none"
                  loading="eager"
                />
              </div>

              {/* 3. Emotional Portrait Photograph: Morning Assembly (slider3.jpg) */}
              {/* Strongest secondary image in portrait crop, overlapping lower-right of slider1 */}
              <div
                ref={assemblyFrameRef}
                className="hero-assembly-frame relative lg:absolute lg:-bottom-6 lg:-right-4 xl:lg:-right-6 2xl:lg:-right-8 z-30 w-[44%] lg:w-[16vw] xl:w-[17vw] lg:min-w-[180px] lg:max-w-[270px] aspect-[3/4] border border-[rgba(20,32,31,0.22)] bg-[#EEE9DD] overflow-hidden"
              >
                <img
                  ref={assemblyImageRef}
                  src={HERO_CONTENT.photography.emotional.src}
                  alt={HERO_CONTENT.photography.emotional.alt}
                  className="absolute -top-[5%] left-0 w-full h-[115%] object-cover object-[28%_42%] will-change-transform pointer-events-none select-none"
                  loading="eager"
                />
              </div>

            </div>

          </div>

          {/* Narrative Statement, Copy & Primary Action (Col 1 to 5 on Desktop) */}
          <div className="order-4 lg:col-start-1 lg:col-end-6 lg:row-start-3 z-20 self-end pt-2 sm:pt-3 lg:pt-4 flex flex-col gap-3.5 sm:gap-4 2xl:gap-5">
            {/* Secondary Editorial Voice: Serif Statement */}
            <p className="hero-statement font-serif italic text-[clamp(1.35rem,2.2vw,2.25rem)] font-medium text-[#14201F] leading-[1.14] tracking-tight max-w-[380px] 2xl:max-w-[440px]">
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

          {/* 4. Learning Photograph: Active Classroom (slider4.jpg) */}
          {/* Positioned at bottom threshold to visually transition into Section 02 */}
          {/* Note: Opacity is strictly 1 (never faded) */}
          <div
            ref={classroomFrameRef}
            className="hero-classroom-frame order-5 lg:order-none lg:absolute lg:-bottom-8 lg:left-[22vw] xl:lg:left-[24vw] 2xl:lg:left-[26vw] z-20 w-full lg:w-[20vw] xl:w-[21vw] lg:min-w-[220px] lg:max-w-[320px] aspect-[16/8] sm:aspect-[16/7.5] border border-[rgba(20,32,31,0.22)] bg-[#EEE9DD] overflow-hidden mt-4 lg:mt-0"
          >
            <img
              ref={classroomImageRef}
              src={HERO_CONTENT.photography.learning.src}
              alt={HERO_CONTENT.photography.learning.alt}
              className="absolute -top-[5%] left-0 w-full h-[120%] object-cover object-[32%_58%] will-change-transform pointer-events-none select-none"
              loading="lazy"
            />
          </div>

          {/* Right Sidebar Metadata (Col 12 on Desktop) */}
          <div className="order-6 hidden lg:flex lg:col-start-12 lg:col-end-13 lg:row-start-1 lg:row-end-4 relative z-20 flex flex-col justify-between items-center py-4 pl-3 pr-1 text-center hero-sidebar">
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
