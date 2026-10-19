import { useRef } from 'react';
import OceanCanvas from './OceanCanvas';
import { useGsapContext, gsap } from '../motion/useGsapContext';
import { ImageAperture } from '../motion/ImageAperture';
import { Link } from '../router/Router';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const orientationBoxRef = useRef<HTMLDivElement>(null);
  const locationBarRef = useRef<HTMLDivElement>(null);
  const ledgerRef = useRef<HTMLDivElement>(null);

  useGsapContext(
    () => {
      // Orchestrated Hero Entrance Sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Location & Affiliation Bar Entrance
      if (locationBarRef.current) {
        tl.fromTo(
          locationBarRef.current,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.8 }
        );
      }

      // 2. Monumental Headline Clip-Up Reveal
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { clipPath: 'inset(100% 0% -20% 0%)', y: 32, opacity: 0.2 },
          {
            clipPath: 'inset(0% 0% -20% 0%)',
            y: 0,
            opacity: 1,
            duration: 1.15,
            ease: 'power3.inOut',
            onComplete: () => {
              if (headlineRef.current) {
                gsap.set(headlineRef.current, { clearProps: 'clipPath,willChange' });
              }
            },
          },
          '-=0.5'
        );
      }

      // 3. Supporting Subtitle and Narrative Sequence
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current.children,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 },
          '-=0.7'
        );
      }

      // 4. Subordinate Curricular Orientation Card
      if (orientationBoxRef.current) {
        tl.fromTo(
          orientationBoxRef.current,
          { opacity: 0, x: 25 },
          { opacity: 1, x: 0, duration: 0.9 },
          '-=0.8'
        );
      }

      // 5. Archival Institutional Ledger (Scroll-Triggered Stagger)
      if (ledgerRef.current) {
        gsap.fromTo(
          ledgerRef.current.children,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ledgerRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }
    },
    heroRef,
    []
  );

  return (
    <section
      ref={heroRef}
      aria-label="Institutional Overview"
      className="relative pt-6 sm:pt-10 lg:pt-14 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-[#F6FAFD]"
    >
      {/* ──────────────────────────────────────────────────────────────────
          LIVING OCEAN CANVAS: Sculptural marine & midnight wave artwork
          Operates independently via GPU-accelerated CSS/SVG keyframes.
         ────────────────────────────────────────────────────────────────── */}
      <OceanCanvas variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ──────────────────────────────────────────────────────────────────
            LOCATION & BOARD AFFILIATION BAR
           ────────────────────────────────────────────────────────────────── */}
        <div
          ref={locationBarRef}
          className="flex flex-wrap items-center justify-between gap-y-2 text-xs font-sans text-[#335372] border-b border-[#D2E3F0] pb-3 mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A3D63]">
              Senha Block, Lohardaga · Jharkhand
            </span>
          </div>
          <div className="text-xs text-[#335372]">
            Affiliated with the <strong className="text-[#0A1931] font-semibold">Jharkhand Academic Council (JAC)</strong>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────────
            MONUMENTAL INSTITUTIONAL MASTHEAD
           ────────────────────────────────────────────────────────────────── */}
        <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-14">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">

            {/* Monumental Display Headline */}
            <div className="lg:col-span-8 space-y-2 sm:space-y-3">
              <h1
                ref={headlineRef}
                className="font-display text-[2.5rem] min-[390px]:text-[2.85rem] sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] 2xl:text-8xl font-bold tracking-[0.02em] sm:tracking-[0.03em] text-[#0A1931] uppercase leading-[0.98] sm:leading-[0.95] pb-2 monument-kerning"
              >
                Manjurmati
              </h1>

              <div ref={subtextRef} className="space-y-3 sm:space-y-4">
                <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#335372] font-normal leading-snug pt-1">
                  Secondary scholarship & state board pathways — alongside Bal Vidyavasham foundational junior campus.
                </p>

                <p className="text-sm sm:text-base text-[#335372] max-w-2xl leading-relaxed font-sans">
                  From early childhood exploration (Nursery–Class V) to state-board matriculation under the Jharkhand Academic Council (Classes VI–X), both schools share a facing rural campus in Mahadetoli, Senha.
                </p>

                {/* Level 1 Primary Action Triggers */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/admissions"
                    className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63]"
                  >
                    <span>Admissions Guide</span>
                    <span className="ml-1.5" aria-hidden="true">→</span>
                  </Link>

                  <Link
                    to="/junior-school"
                    className="inline-flex items-center justify-center px-3.5 py-2.5 min-h-[44px] text-xs font-semibold text-[#1A3D63] hover:text-[#0A1931] bg-[#EBF3F9] hover:bg-[#D2E3F0] border border-[#D2E3F0] rounded-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63]"
                  >
                    <span>Junior (N–V)</span>
                  </Link>

                  <Link
                    to="/senior-school"
                    className="inline-flex items-center justify-center px-3.5 py-2.5 min-h-[44px] text-xs font-semibold text-[#1A3D63] hover:text-[#0A1931] bg-[#EBF3F9] hover:bg-[#D2E3F0] border border-[#D2E3F0] rounded-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63]"
                  >
                    <span>Senior (VI–X)</span>
                  </Link>

                  <a
                    href="tel:+918340469822"
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 min-h-[44px] text-xs font-mono text-[#335372] hover:text-[#0A1931] transition-colors"
                    title="Call Administrative Office"
                  >
                    <svg className="w-3.5 h-3.5 text-[#1A3D63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+91 8340469822</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Subordinate Curricular Orientation Columns */}
            <div
              ref={orientationBoxRef}
              className="lg:col-span-4 bg-[#FFFFFF]/90 backdrop-blur-xs p-4 sm:p-5 rounded-xs border border-[#D2E3F0] shadow-2xs space-y-4 text-xs sm:text-sm text-[#335372] self-end"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#62839F] font-mono block">
                  01 / Principal Senior School
                </span>
                <p className="font-display text-lg text-[#0A1931] font-bold uppercase tracking-wider">
                  Manjurmati High School
                </p>
                <p className="text-xs text-[#335372] leading-normal font-sans">
                  Classes VI through X · English & Hindi medium streams · Affiliated with Jharkhand Academic Council (JAC).
                </p>
              </div>

              <div className="pt-3 border-t border-[#D2E3F0] space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#1A3D63] font-mono block">
                  02 / Complementary Junior School
                </span>
                <p className="font-serif text-base text-[#0A1931] font-medium">
                  Bal Vidyavasham
                </p>
                <p className="text-xs text-[#335372] leading-normal font-sans">
                  Nursery through Class V · English medium instruction · Foundational literacy and tactile discovery.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ──────────────────────────────────────────────────────────────────
            AUTHENTIC PHOTOGRAPHIC COMPOSITION (Masked Reveals & Subtle Parallax)
           ────────────────────────────────────────────────────────────────── */}
        <div className="relative">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* ── PLATE I: MANJURMATI (Principal Anchor · 8 Columns) ── */}
            <div className="lg:col-span-8">
              <div className="border border-[#D2E3F0] bg-[#FFFFFF]/90 backdrop-blur-xs rounded-xs p-3 sm:p-5 lg:p-6 shadow-sm transition-all duration-300 hover:shadow-md">

                {/* Plate Monograph Header */}
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#D2E3F0] text-xs font-mono text-[#62839F] tracking-wider">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0A1931]" aria-hidden="true" />
                    <span className="font-display font-semibold uppercase tracking-wider text-[#0A1931] text-xs sm:text-sm">
                      Manjurmati High School
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-[#62839F] font-sans">
                    Principal Senior Campus · Classes VI–X
                  </span>
                </div>

                {/* Animated Photographic Aperture: Senior Classroom Study */}
                <div className="my-3 sm:my-4">
                  <ImageAperture
                    webpSrc="/images/manjurmati-senior-classroom.webp"
                    jpgSrc="/images/manjurmati-senior-classroom.jpg"
                    alt="Senior students of Manjurmati High School engaged in focused secondary classroom study and notebook writing"
                    aspectClass="aspect-[16/10]"
                    objectPosition="object-[25%_45%]"
                    loading="eager"
                    fetchPriority="high"
                    enableParallax={true}
                    revealDirection="up"
                    captionOverlay={
                      <div className="bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/35 to-transparent p-3.5 sm:p-4.5 text-white">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-[11px] font-sans">
                          <span className="font-medium text-white/95">
                            Secondary Academic Study & Scholarship · Classes VI–X
                          </span>
                          <span className="text-[#B3CFE5] text-[10px] font-mono uppercase tracking-wider">
                            English & Hindi Streams · JAC Board
                          </span>
                        </div>
                      </div>
                    }
                  />
                </div>

                {/* Passe-Partout Base Annotation */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-[#62839F] font-sans">
                  <span>Authentic Documentary Photograph · Classroom Session</span>
                  <span className="font-mono text-[10px] text-[#1A3D63]">AFFILIATED: JHARKHAND ACADEMIC COUNCIL</span>
                </div>

              </div>
            </div>

            {/* ── PLATE II: BAL VIDYAVASHAM (Complementary Junior Anchor · 4 Columns, Stepped Offset) ── */}
            <div className="lg:col-span-4 lg:pt-8 xl:pt-12">
              <div className="border border-[#D2E3F0] bg-[#FFFFFF]/90 backdrop-blur-xs rounded-xs p-3 sm:p-4 lg:p-5 shadow-sm transition-all duration-300 hover:shadow-md">

                {/* Plate Monograph Header */}
                <div className="flex items-center justify-between pb-2 sm:pb-2.5 border-b border-[#D2E3F0] text-xs font-mono text-[#62839F] tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#1A3D63]" aria-hidden="true" />
                    <span className="font-serif italic text-[#0A1931] text-xs sm:text-sm">
                      Bal Vidyavasham
                    </span>
                  </div>
                  <span className="text-[10px] text-[#1A3D63] uppercase font-semibold">
                    Junior School · Nursery–V
                  </span>
                </div>

                {/* Animated Photographic Aperture: Campus Entrance & Signage */}
                <div className="my-2.5 sm:my-3.5">
                  <ImageAperture
                    webpSrc="/images/bal-vidyavasham-campus-entrance.webp"
                    jpgSrc="/images/bal-vidyavasham-campus-entrance.jpg"
                    alt="Entrance facade of Bal Vidyavasham with hand-painted signage reading Junior Section M.M. High School Balvidyavesham"
                    aspectClass="aspect-[4/5]"
                    objectPosition="object-[50%_35%]"
                    loading="eager"
                    fetchPriority="auto"
                    enableParallax={true}
                    revealDirection="down"
                    captionOverlay={
                      <div className="bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/35 to-transparent p-3 sm:p-3.5 text-white">
                        <div className="text-[11px] font-sans">
                          <p className="font-medium text-white/95">
                            Bal Vidyavasham Campus Entrance
                          </p>
                          <p className="text-[#B3CFE5] text-[10px] font-mono uppercase tracking-wider">
                            Verified Signage · Junior Section
                          </p>
                        </div>
                      </div>
                    }
                  />
                </div>

                {/* Passe-Partout Base Annotation */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-[#62839F] font-sans">
                  <span>Authentic Documentary Photograph</span>
                  <span className="font-mono text-[10px] text-[#1A3D63]">NURSERY – CLASS V</span>
                </div>

              </div>
            </div>

          </div>

          {/* ──────────────────────────────────────────────────────────────────
              CAMPUS LEDGER: KEY ORIENTATION FACTS
             ────────────────────────────────────────────────────────────────── */}
          <div
            ref={ledgerRef}
            className="mt-8 sm:mt-12 lg:mt-14 bg-[#FFFFFF]/90 backdrop-blur-xs p-5 sm:p-6 rounded-xs border border-[#D2E3F0] shadow-2xs grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-[#335372] font-sans"
          >
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A3D63] font-semibold block">
                01 / Facing Campuses
              </span>
              <p className="text-[#0A1931] font-medium font-serif text-sm">
                Mahadetoli, Senha Block
              </p>
              <p className="text-xs text-[#335372] leading-normal">
                Facing each other across a shared rural roadway in Lohardaga District, Jharkhand.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A3D63] font-semibold block">
                02 / Independent Admissions
              </span>
              <p className="text-[#0A1931] font-medium font-serif text-sm">
                Separate Administration
              </p>
              <p className="text-xs text-[#335372] leading-normal">
                Each school manages its own enrollment register. Admission to one does not guarantee admission to the other.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A3D63] font-semibold block">
                03 / Academic Continuum
              </span>
              <p className="text-[#0A1931] font-medium font-serif text-sm">
                Nursery through Class X
              </p>
              <p className="text-xs text-[#335372] leading-normal">
                Foundational childhood learning at Bal Vidyavasham and state-board matriculation (JAC) at Manjurmati.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
