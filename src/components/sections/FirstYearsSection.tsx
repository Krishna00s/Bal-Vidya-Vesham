import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { FIRST_YEARS_CONTENT } from '@/content/school.data.ts'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion.ts'
import { Container } from '@/components/ui/Container.tsx'
import { GridOverlay } from '@/components/ui/GridOverlay.tsx'
import { scrollToTarget } from '@/motion/lenis.ts'

gsap.registerPlugin(ScrollTrigger)

export function FirstYearsSection() {
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

      tl.from('.first-years-header', {
        opacity: 0,
        y: 16,
        duration: 0.6,
      })
        .from(
          '.first-years-rule',
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.75,
            ease: 'expo.out',
          },
          '-=0.35',
        )
        .from(
          '.first-years-pillar',
          {
            opacity: 0,
            y: 28,
            duration: 0.8,
            stagger: 0.15,
          },
          '-=0.4',
        )
        .from(
          '.first-years-photo-frame',
          {
            opacity: 0,
            scale: 0.97,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.12,
          },
          '-=0.6',
        )
        .from(
          '.first-years-script',
          {
            opacity: 0,
            y: 12,
            duration: 0.8,
          },
          '-=0.4',
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  const handlePillarClick = (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    if (!href) return
    e.preventDefault()
    scrollToTarget(href, -70)
  }

  return (
    <section
      ref={sectionRef}
      id="approach"
      aria-label="The First Years Matter"
      className="relative w-full overflow-hidden bg-[#063B31] text-[#F5F1E8] border-b border-[rgba(245,241,232,0.14)] py-14 sm:py-18 lg:py-20 2xl:py-24"
    >
      {/* Background Architectural Grid Layer for Dark Canvas */}
      <GridOverlay theme="dark" />

      <Container className="relative z-10">
        {/* Section Header Anchor */}
        <div className="first-years-header flex items-baseline gap-3.5 mb-6 sm:mb-8">
          <span className="font-mono text-3xl sm:text-4xl 2xl:text-5xl font-bold tracking-tight text-[#F5F1E8] leading-none select-none">
            {FIRST_YEARS_CONTENT.chapterIndex}
          </span>
          <div className="flex items-center gap-2.5">
            <span className="w-4 sm:w-6 h-[1px] bg-[rgba(245,241,232,0.25)]" aria-hidden="true" />
            <span className="font-mono text-[9px] sm:text-[10px] 2xl:text-[10.5px] uppercase tracking-[0.16em] text-[#D6DDD8] font-semibold">
              {FIRST_YEARS_CONTENT.microLabel}
            </span>
          </div>
        </div>

        {/* Hairline structural rule */}
        <div className="first-years-rule w-full h-[1px] bg-[rgba(245,241,232,0.12)] mb-10 sm:mb-12 lg:mb-14" aria-hidden="true" />

        {/* Editorial Pillars + Handwritten Accent Row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_1.18fr_0.88fr_auto] gap-y-12 lg:gap-y-0 lg:gap-x-5 xl:gap-x-7 2xl:gap-x-9 items-start relative">
          {FIRST_YEARS_CONTENT.pillars.map((pillar, idx) => {
            const isPortrait = idx === 2

            return (
              <div
                key={pillar.index}
                className="first-years-pillar flex flex-col justify-between self-stretch"
              >
                {/* Pillar Top Header & Content Group */}
                <div className="flex items-start gap-3.5 sm:gap-4 lg:gap-3 xl:gap-4 2xl:gap-5">
                  {/* Left sub-column: Number + Serif Headline + Action Arrow */}
                  <div className="flex flex-col justify-between shrink-0 min-w-[78px] sm:min-w-[95px] lg:min-w-[76px] xl:min-w-[88px] 2xl:min-w-[102px] self-stretch">
                    <div>
                      {/* Pillar Index */}
                      <span className="font-mono text-xl sm:text-2xl 2xl:text-[26px] font-bold text-[#F5F1E8] leading-none block mb-2 sm:mb-3">
                        {pillar.index}
                      </span>

                      {/* Editorial Serif Pillar Title */}
                      <h3 className="font-serif text-[clamp(1.25rem,1.75vw,1.85rem)] font-medium leading-[1.08] text-[#F5F1E8] tracking-tight">
                        <span className="block">{pillar.titleLine1}</span>
                        <span className="block">{pillar.titleLine2}</span>
                      </h3>
                    </div>

                    {/* Circular Action Arrow Button */}
                    <div className="pt-4 sm:pt-6">
                      <a
                        href={pillar.actionHref || '#'}
                        onClick={(e) => handlePillarClick(e, pillar.actionHref)}
                        aria-label={`Explore ${pillar.titleLine1} ${pillar.titleLine2}`}
                        className="group inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#CDA66B]/60 text-[#CDA66B] hover:border-[#CDA66B] hover:bg-[#CDA66B] hover:text-[#063B31] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#CDA66B]"
                      >
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right sub-column: Documentary Photograph + Narrative Description */}
                  <div className="flex-1 flex flex-col min-w-0">
                    <div
                      className={`first-years-photo-frame relative border border-[rgba(245,241,232,0.16)] bg-[#04261F] overflow-hidden rounded-[2px] shadow-[0_6px_20px_rgba(0,0,0,0.3)] ${
                        isPortrait
                          ? 'aspect-[3.5/4.5] max-w-[160px] sm:max-w-[185px] lg:max-w-[155px] xl:max-w-[185px] 2xl:max-w-[215px]'
                          : 'aspect-[4/3] max-w-[230px] sm:max-w-[260px] lg:max-w-[215px] xl:max-w-[255px] 2xl:max-w-[290px] w-full'
                      }`}
                    >
                      <img
                        src={pillar.image.src}
                        alt={pillar.image.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
                      />
                    </div>

                    {/* Description Text */}
                    <p className="font-sans text-[12px] sm:text-[13px] 2xl:text-[14px] text-[#CAD3CE] leading-[1.6] mt-3 sm:mt-4 max-w-[250px]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Right Column: Authentic Handwritten Script Note (Selectable font-script typography, shifted right) */}
          <div className="first-years-script hidden lg:flex flex-col justify-center items-start self-center pl-2 xl:pl-4 2xl:pl-6 pr-0 lg:translate-x-1 xl:translate-x-2">
            <p className="font-script text-[1.18rem] xl:text-[1.28rem] 2xl:text-[1.42rem] text-[#F5E2BE] font-semibold leading-[1.22] -rotate-2 select-text tracking-wide transition-colors duration-200 hover:text-[#FFFFFF]">
              {FIRST_YEARS_CONTENT.scriptNote.lines.map((line, lIdx) => (
                <span key={lIdx} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Mobile / Tablet Script Note Presentation (Selectable font-script typography) */}
        <div className="first-years-script lg:hidden flex justify-end mt-10 sm:mt-12 pr-4 sm:pr-8">
          <p className="font-script text-[1.35rem] sm:text-[1.55rem] text-[#F5E2BE] font-semibold leading-[1.25] text-right -rotate-2 select-text max-w-[280px]">
            {FIRST_YEARS_CONTENT.scriptNote.lines.map((line, lIdx) => (
              <span key={lIdx} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </section>
  )
}
