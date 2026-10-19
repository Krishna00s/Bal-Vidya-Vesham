import OceanCanvas from './OceanCanvas';
import { ImageAperture } from '../motion/ImageAperture';
import { ScrollReveal } from '../motion/ScrollReveal';
import { Link } from '../router/Router';

export default function SchoolChapters() {
  return (
    <div id="schools" className="relative">

      {/* ──────────────────────────────────────────────────────────────────
          CHAPTER I: BAL VIDYAVASHAM (Junior School · Nursery to Class V)
         ────────────────────────────────────────────────────────────────── */}
      <section
        id="bal-vidyavasham"
        aria-labelledby="bal-vidyavasham-heading"
        className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-[#F6FAFD] border-t border-[#D2E3F0] overflow-hidden"
      >
        <OceanCanvas variant="chapter-bal" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Visual Plate: Bal Vidyavasham (5 Columns on Desktop) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="border border-[#D2E3F0] bg-[#FFFFFF]/90 backdrop-blur-xs rounded-xs p-3 sm:p-4 shadow-sm transition-all duration-300 hover:shadow-md">

                <div className="flex items-center justify-between pb-2 border-b border-[#D2E3F0] text-xs font-mono tracking-wider text-[#62839F]">
                  <span className="font-serif italic text-sm text-[#0A1931]">
                    Bal Vidyavasham
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#1A3D63] font-medium font-mono">
                    Junior Campus · Nursery–V
                  </span>
                </div>

                <div className="my-3">
                  <ImageAperture
                    webpSrc="/images/campus-courtyard-walkway.webp"
                    jpgSrc="/images/campus-courtyard-walkway.jpg"
                    alt="Campus courtyard walkway with lush botanical gardens and classroom entrance at Bal Vidyavasham"
                    aspectClass="aspect-[4/5]"
                    objectPosition="object-[35%_50%]"
                    loading="lazy"
                    enableParallax={true}
                    revealDirection="up"
                    captionOverlay={
                      <div className="bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/30 to-transparent p-3 sm:p-4 text-white">
                        <p className="text-xs font-medium text-white/95">
                          Campus Courtyard & Garden Walkway
                        </p>
                        <p className="text-[10px] text-[#B3CFE5] font-mono uppercase tracking-wider">
                          Shaded Learning Grounds · Nursery–V
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-[#62839F] font-sans">
                  <span>English Medium Foundational Instruction</span>
                  <span className="font-mono text-[10px] text-[#1A3D63]">VERIFIED CAMPUS</span>
                </div>

              </div>
            </div>

            {/* Editorial Content: Bal Vidyavasham (7 Columns on Desktop) */}
            <ScrollReveal
              variant="fade-up"
              className="lg:col-span-7 order-1 lg:order-2 space-y-5 lg:pl-4"
            >
              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A3D63] block">
                  Chapter I · Junior School
                </span>
                <h2
                  id="bal-vidyavasham-heading"
                  className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-normal tracking-tight leading-[1.08]"
                >
                  Where wonder becomes <br className="hidden sm:inline" />
                  <span className="italic font-light text-[#1A3D63]">understanding</span>.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#335372] leading-relaxed font-sans max-w-2xl font-normal">
                Bal Vidyavasham provides foundational schooling from Nursery through Class V in an English-medium setting. Tactile, active early learning builds literacy, arithmetic, and confidence in a safe, child-centered environment.
              </p>

              {/* Subordinate Verified Characteristics */}
              <div className="pt-3 border-t border-[#D2E3F0] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#335372]">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#62839F] font-medium block">
                    Curricular Medium
                  </span>
                  <p className="font-serif text-base text-[#0A1931] font-medium">
                    English Medium
                  </p>
                  <p className="text-xs text-[#335372] leading-normal">
                    Early language immersion and foundational arithmetic.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#62839F] font-medium block">
                    Class Cohorts
                  </span>
                  <p className="font-serif text-base text-[#0A1931] font-medium">
                    Nursery through Class V
                  </p>
                  <p className="text-xs text-[#335372] leading-normal">
                    Child-friendly classrooms with shaded courtyard access.
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-2">
                <Link
                  to="/junior-school"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] bg-[#EBF3F9] hover:bg-[#D2E3F0] border border-[#D2E3F0] rounded-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63]"
                >
                  <span>Explore Bal Vidyavasham (N–V)</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          CHAPTER II: MANJURMATI (Senior School · Classes VI to X · JAC)
         ────────────────────────────────────────────────────────────────── */}
      <section
        id="manjurmati"
        aria-labelledby="manjurmati-heading"
        className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-[#EBF3F9]/60 border-t border-b border-[#D2E3F0] overflow-hidden"
      >
        <OceanCanvas variant="chapter-manjur" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Editorial Content: Manjurmati (7 Columns on Desktop) */}
            <ScrollReveal
              variant="fade-up"
              className="lg:col-span-7 space-y-5 lg:pr-4"
            >
              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-medium text-[#0A1931] block">
                  Chapter II · Senior School · JAC Affiliated
                </span>
                <h2
                  id="manjurmati-heading"
                  className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#0A1931] font-bold uppercase tracking-[0.03em] leading-[0.98] monument-kerning"
                >
                  Academic discipline, <br className="hidden sm:inline" />
                  <span className="font-serif normal-case italic font-light text-2xl sm:text-4xl lg:text-5xl text-[#335372]">structured pathways</span>.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#335372] leading-relaxed font-sans max-w-2xl font-normal">
                Directly across the road, Manjurmati guides senior students through Classes VI to X. Affiliated with the Jharkhand Academic Council, the school offers English and Hindi streams, practical science laboratories, and hands-on ATL tinkering.
              </p>

              {/* Subordinate Verified Characteristics */}
              <div className="pt-3 border-t border-[#D2E3F0] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#335372]">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#62839F] font-medium block">
                    Board Accreditation
                  </span>
                  <p className="font-serif text-base text-[#0A1931] font-medium">
                    Jharkhand Academic Council
                  </p>
                  <p className="text-xs text-[#335372] leading-normal">
                    Recognized state curriculum for secondary matriculation.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#62839F] font-medium block">
                    Instruction Streams
                  </span>
                  <p className="font-serif text-base text-[#0A1931] font-medium">
                    English & Hindi Streams
                  </p>
                  <p className="text-xs text-[#335372] leading-normal">
                    Classes VI through X secondary study options.
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-2">
                <Link
                  to="/senior-school"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63]"
                >
                  <span>Explore Manjurmati High School (VI–X)</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Visual Plate: Manjurmati (5 Columns on Desktop) */}
            <div className="lg:col-span-5">
              <div className="border border-[#D2E3F0] bg-[#FFFFFF]/90 backdrop-blur-xs rounded-xs p-3 sm:p-4 shadow-sm transition-all duration-300 hover:shadow-md">

                <div className="flex items-center justify-between pb-2 border-b border-[#D2E3F0] text-xs font-mono tracking-wider text-[#62839F]">
                  <span className="font-display uppercase tracking-wider font-semibold text-sm text-[#0A1931]">
                    Manjurmati
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#0A1931] font-medium font-mono">
                    Senior Campus · Classes VI–X
                  </span>
                </div>

                <div className="my-3">
                  <ImageAperture
                    webpSrc="/images/manjurmati-campus-entrance-gate.webp"
                    jpgSrc="/images/manjurmati-campus-entrance-gate.jpg"
                    alt="Entrance gate arch of Manjurmati High School with institutional signboard and Atal Tinkering Lab plaque"
                    aspectClass="aspect-[4/3] sm:aspect-[16/11]"
                    objectPosition="object-[50%_40%]"
                    loading="lazy"
                    enableParallax={true}
                    revealDirection="up"
                    captionOverlay={
                      <div className="bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/30 to-transparent p-3 sm:p-4 text-white">
                        <p className="text-xs font-medium text-white/95">
                          Manjurmati High School Campus Entrance
                        </p>
                        <p className="text-[10px] text-[#B3CFE5] font-mono uppercase tracking-wider">
                          Main Campus Arch & ATL Plaque · Classes VI–X
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-[#62839F] font-sans">
                  <span>Authentic Documentary Photograph</span>
                  <span className="font-mono text-[10px] text-[#1A3D63]">CLASSES VI–X · JAC</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
