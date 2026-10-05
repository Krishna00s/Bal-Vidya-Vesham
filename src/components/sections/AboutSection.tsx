import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { ABOUT_CONTENT } from '@/content/school.data.ts'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.ts'
import { Container } from '@/components/ui/Container.tsx'
import { GridOverlay } from '@/components/ui/GridOverlay.tsx'
import { scrollToTarget } from '@/motion/lenis.ts'

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        defaults: {
          ease: 'power3.out',
        },
      })

      tl.from('.about-eyebrow', {
        opacity: 0,
        y: 16,
        duration: 0.6,
      })
        .from(
          '.about-heading',
          {
            opacity: 0,
            y: 28,
            duration: 0.8,
          },
          '-=0.35',
        )
        .from(
          '.about-body',
          {
            opacity: 0,
            y: 18,
            duration: 0.7,
          },
          '-=0.5',
        )
        .from(
          '.about-cta',
          {
            opacity: 0,
            y: 14,
            duration: 0.6,
          },
          '-=0.45',
        )
        .from(
          '.about-primary-photo',
          {
            opacity: 0,
            scale: 0.98,
            duration: 0.9,
            ease: 'expo.out',
          },
          '-=0.6',
        )
        .from(
          '.about-secondary-photo',
          {
            opacity: 0,
            scale: 0.97,
            duration: 0.85,
            ease: 'expo.out',
          },
          '-=0.55',
        )
        .from(
          '.about-values-list',
          {
            opacity: 0,
            x: 12,
            duration: 0.7,
          },
          '-=0.5',
        )
        .from(
          '.about-script-note',
          {
            opacity: 0,
            y: 10,
            duration: 0.8,
          },
          '-=0.4',
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  const handleApproachClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToTarget(ABOUT_CONTENT.action.href, -70)
  }

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About Our School"
      className="relative w-full overflow-hidden bg-transparent border-b border-[rgba(20,32,31,0.14)]"
    >
      {/* Background Architectural Grid Overlay */}
      <GridOverlay />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24 2xl:py-28">
        {/* Single Responsive 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-8 items-start relative">
          
          {/* Left Column (Cols 1 to 5): Section Anchor + Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between self-stretch pr-0 lg:pr-4 2xl:pr-6">
            <div>
              {/* Section Anchor: 02 Numeral + Micro Label */}
              <div className="about-eyebrow flex items-baseline gap-3.5 mb-6 sm:mb-8">
                <span className="font-mono text-3xl sm:text-4xl 2xl:text-5xl font-bold tracking-tight text-[#14201F] leading-none select-none">
                  {ABOUT_CONTENT.chapterIndex}
                </span>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 sm:w-6 h-[1px] bg-[rgba(20,32,31,0.25)]" aria-hidden="true" />
                  <span className="font-mono text-[9px] sm:text-[10px] 2xl:text-[10.5px] uppercase tracking-[0.16em] text-[#14201F] font-semibold">
                    {ABOUT_CONTENT.microLabel}
                  </span>
                </div>
              </div>

              {/* Editorial Large Headline (Cormorant Garamond) */}
              <h2 className="about-heading font-serif text-[clamp(2.35rem,4.2vw,3.75rem)] font-medium leading-[1.04] text-[#14201F] tracking-tight mb-6 sm:mb-8">
                Every child<br />
                has a <span className="italic font-normal text-[#8E6930]">story</span><br />
                waiting to<br />
                unfold.
              </h2>
            </div>

            {/* Narrative Body Copy & Action */}
            <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-col gap-6">
              <p className="about-body font-sans text-[14px] sm:text-[15px] 2xl:text-[15.5px] text-[#4B5552] leading-[1.65] max-w-[400px]">
                {ABOUT_CONTENT.bodyText}
              </p>

              {/* Action Link: Our Approach → */}
              <div className="about-cta pt-1">
                <a
                  href={ABOUT_CONTENT.action.href}
                  onClick={handleApproachClick}
                  className="group inline-flex items-center gap-2 text-[13.5px] sm:text-[14px] 2xl:text-[14.5px] font-semibold text-[#14201F] tracking-[0.01em] hover:text-[#063B31] transition-colors focus-visible:outline-2 focus-visible:outline-[#063B31]"
                >
                  <span className="border-b border-[#14201F]/40 group-hover:border-[#063B31] pb-0.5 transition-colors">
                    {ABOUT_CONTENT.action.label}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#063B31]" />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column (Cols 6 to 9): Primary Environmental Photograph */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="about-primary-photo relative border border-[rgba(20,32,31,0.12)] bg-[#EEE9DD] overflow-hidden aspect-[4/3] sm:aspect-[16/14] lg:aspect-[4/3.8] 2xl:aspect-[4/3.7] shadow-[0_1px_3px_rgba(20,32,31,0.04)]">
              <img
                src={ABOUT_CONTENT.primaryImage.src}
                alt={ABOUT_CONTENT.primaryImage.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column (Cols 10 to 12): Secondary Study Photo + Values + Handwritten Accent */}
          <div className="lg:col-span-3 flex flex-col justify-between self-stretch gap-8 lg:gap-0 pl-0 lg:pl-2 2xl:pl-4">
            {/* Top Sub-Row: Secondary Photo paired with Values Stack */}
            <div className="flex items-start gap-4 sm:gap-6 lg:gap-4 2xl:gap-5">
              {/* Secondary Study Photograph */}
              <div className="about-secondary-photo relative shrink-0 w-[140px] sm:w-[170px] lg:w-[130px] 2xl:w-[155px] border border-[rgba(20,32,31,0.12)] bg-[#EEE9DD] overflow-hidden aspect-[4/4.3] shadow-[0_1px_3px_rgba(20,32,31,0.04)]">
                <img
                  src={ABOUT_CONTENT.secondaryImage.src}
                  alt={ABOUT_CONTENT.secondaryImage.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              {/* Stacked Values Micro-List */}
              <div className="about-values-list flex flex-col justify-between py-1">
                <div className="flex flex-col gap-1.5 font-mono text-[9px] sm:text-[9.5px] 2xl:text-[10px] uppercase tracking-[0.18em] text-[#14201F] font-semibold leading-tight select-none">
                  {ABOUT_CONTENT.valuesList.map((val) => (
                    <span key={val} className="hover:text-[#063B31] transition-colors">
                      {val}
                    </span>
                  ))}
                </div>
                {/* Horizontal architectural hairline rule */}
                <div className="w-7 h-[1.5px] bg-[#14201F] mt-3" aria-hidden="true" />
              </div>
            </div>

            {/* Bottom: Human Handwritten Script Accent */}
            <div className="about-script-note self-end lg:self-end mt-4 sm:mt-6 lg:mt-auto pt-6 text-right">
              <img
                src="/images/about-note-script.png"
                alt={ABOUT_CONTENT.handwrittenNote}
                loading="lazy"
                decoding="async"
                className="w-[135px] sm:w-[155px] 2xl:w-[170px] inline-block opacity-80 select-none pointer-events-none transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
