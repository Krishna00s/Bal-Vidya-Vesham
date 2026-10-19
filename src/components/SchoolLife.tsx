import OceanCanvas from './OceanCanvas';
import { ImageAperture } from '../motion/ImageAperture';
import { ScrollReveal } from '../motion/ScrollReveal';
import { Link } from '../router/Router';

export default function SchoolLife() {
  return (
    <section
      id="school-life"
      aria-labelledby="school-life-heading"
      className="relative scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-[#F6FAFD] border-b border-[#D2E3F0] overflow-hidden"
    >
      {/* Living Ocean Canvas: Communal wave currents for School Life */}
      <OceanCanvas variant="school-life" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header: Composed Editorial Entry */}
        <ScrollReveal
          variant="fade-up"
          className="max-w-3xl mb-12 sm:mb-16 space-y-3.5 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A3D63]">
              Life Across Both Schools
            </span>
          </div>

          <h2
            id="school-life-heading"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-normal tracking-tight leading-[1.08]"
          >
            The rhythm of <br className="hidden sm:inline" />
            <span className="italic font-light text-[#335372]">everyday school life</span>.
          </h2>

          <p className="text-base sm:text-lg text-[#335372] leading-relaxed font-sans font-normal pt-1 max-w-2xl">
            Beyond the syllabus, the schools’ calendar unfolds through morning assemblies, outdoor activity, annual celebrations, and hands-on student projects across junior and senior cohorts.
          </p>
        </ScrollReveal>

        {/* Visual Sequence: Photography First */}
        <div className="space-y-6 lg:space-y-8">

          {/* Row 1: The Panoramic Gathering + Square Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* Frame A: Expansive Communal Horizon (8 Columns) */}
            <div className="lg:col-span-8">
              <div className="border border-[#D2E3F0] bg-[#FFFFFF]/90 backdrop-blur-xs rounded-xs p-3 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-md">

                {/* Plate Header */}
                <div className="flex items-center justify-between pb-2 border-b border-[#D2E3F0] text-xs font-mono tracking-wider text-[#62839F]">
                  <span className="font-serif italic text-sm text-[#0A1931]">
                    Morning Assembly & Daily Pledge
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#1A3D63] font-medium font-mono">
                    All Cohorts Gathering
                  </span>
                </div>

                {/* Animated Photographic Aperture: Morning Assembly with Restrained Parallax */}
                <div className="my-3">
                  <ImageAperture
                    webpSrc="/images/communal-morning-assembly.webp"
                    jpgSrc="/images/communal-morning-assembly.jpg"
                    alt="Students assembled in neat columns wearing white uniforms with maroon ties taking the morning assembly pledge on campus grounds"
                    aspectClass="aspect-[16/10] sm:aspect-[16/9]"
                    objectPosition="object-[50%_35%]"
                    loading="lazy"
                    enableParallax={true}
                    revealDirection="up"
                    captionOverlay={
                      <div className="bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/30 to-transparent p-3.5 sm:p-5 text-white">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <div>
                            <p className="text-sm font-medium text-white/95 font-serif">
                              Morning Assembly & Daily Pledge
                            </p>
                            <p className="text-[11px] text-[#B3CFE5] font-sans">
                              Students assembled in uniform across cohorts on the earthen campus grounds.
                            </p>
                          </div>
                          <span className="text-[10px] text-[#B3CFE5] font-mono uppercase tracking-wider shrink-0">
                            Campus Grounds
                          </span>
                        </div>
                      </div>
                    }
                  />
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-[#62839F] font-sans">
                  <span>Uniform assembly on campus ground</span>
                  <span className="font-mono text-[10px] text-[#1A3D63]">SHARED CAMPUS</span>
                </div>

              </div>
            </div>

            {/* Frame B: Intimate Artifact / Student Project (4 Columns) */}
            <div className="lg:col-span-4">
              <div className="border border-[#D2E3F0] bg-[#FFFFFF]/90 backdrop-blur-xs rounded-xs p-3 sm:p-4 shadow-sm transition-all duration-300 hover:shadow-md">

                {/* Plate Header */}
                <div className="flex items-center justify-between pb-2 border-b border-[#D2E3F0] text-xs font-mono tracking-wider text-[#62839F]">
                  <span className="font-serif italic text-sm text-[#0A1931]">
                    ATL Hands-On Electronics
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#0A1931] font-medium font-mono">
                    Practical Kits
                  </span>
                </div>

                {/* Animated Photographic Aperture: Student Craft & Electronics Innovation */}
                <div className="my-3">
                  <ImageAperture
                    webpSrc="/images/manjurmati-atl-soldering-station.webp"
                    jpgSrc="/images/manjurmati-atl-soldering-station.jpg"
                    alt="Student electronics soldering and prototyping station with tools, meter, and circuit components in Atal Tinkering Lab"
                    aspectClass="aspect-square"
                    objectPosition="object-[50%_50%]"
                    loading="lazy"
                    enableParallax={false}
                    revealDirection="down"
                    captionOverlay={
                      <div className="bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/30 to-transparent p-3 sm:p-3.5 text-white">
                        <p className="text-xs font-medium text-white/95 font-serif">
                          Hands-on Prototyping & Craft
                        </p>
                        <p className="text-[10px] text-[#B3CFE5] font-mono uppercase tracking-wider">
                          ATL Electronics Station
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-[#62839F] font-sans">
                  <span>Student engineering & craft</span>
                  <span className="font-mono text-[10px] text-[#1A3D63]">ATL LAB</span>
                </div>

              </div>
            </div>

          </div>

          {/* Row 2: Candid Movement + Editorial Category Ledger */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* Frame C: Candid Movement / Active Campus (5 Columns) */}
            <div className="lg:col-span-5">
              <div className="border border-[#D2E3F0] bg-[#FFFFFF]/90 backdrop-blur-xs rounded-xs p-3 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-md">

                {/* Plate Header */}
                <div className="flex items-center justify-between pb-2 border-b border-[#D2E3F0] text-xs font-mono tracking-wider text-[#62839F]">
                  <span className="font-serif italic text-sm text-[#0A1931]">
                    Athletic Honors & Team Sports
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#1A3D63] font-medium font-mono">
                    Celebration
                  </span>
                </div>

                {/* Animated Photographic Aperture: Sports Championship & Team Celebration */}
                <div className="my-3">
                  <ImageAperture
                    webpSrc="/images/sports-championship-trophy-celebration.webp"
                    jpgSrc="/images/sports-championship-trophy-celebration.jpg"
                    alt="Students and teachers celebrating sports championship victory holding trophy and banner on campus"
                    aspectClass="aspect-[4/5]"
                    objectPosition="object-[50%_35%]"
                    loading="lazy"
                    enableParallax={true}
                    revealDirection="up"
                    captionOverlay={
                      <div className="bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/30 to-transparent p-3.5 sm:p-4 text-white">
                        <p className="text-xs sm:text-sm font-medium text-white/95 font-serif">
                          Championship Victory & Team Sports
                        </p>
                        <p className="text-[10px] text-[#B3CFE5] font-mono uppercase tracking-wider">
                          Athletics Tournaments & Campus Celebration
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-[#62839F] font-sans">
                  <span>Athletic meet & championship awards</span>
                  <span className="font-mono text-[10px] text-[#1A3D63]">COMMUNITY</span>
                </div>

              </div>
            </div>

            {/* Editorial Category Ledger (7 Columns) with Staggered Rows */}
            <ScrollReveal
              variant="fade-up"
              className="lg:col-span-7 space-y-6 lg:pl-4 self-center"
            >
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#62839F] font-medium block">
                  Calendar Highlights
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-normal">
                  How life unfolds across the academic year.
                </h3>
              </div>

              {/* Four Ledger Rows with Staggered Reveal */}
              <ScrollReveal
                variant="fade-up"
                stagger={0.1}
                selector=".ledger-row"
                className="divide-y divide-[#D2E3F0] border-t border-b border-[#D2E3F0] text-sm"
              >
                <div className="ledger-row py-3.5 flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-[#1A3D63] font-medium shrink-0">01</span>
                  <div className="space-y-0.5">
                    <p className="font-serif text-base text-[#0A1931] font-medium">
                      Assemblies & Celebrations
                    </p>
                    <p className="text-xs sm:text-sm text-[#335372]">
                      Morning assembly, Independence Day, Republic Day, and annual prize distribution.
                    </p>
                  </div>
                </div>

                <div className="ledger-row py-3.5 flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-[#1A3D63] font-medium shrink-0">02</span>
                  <div className="space-y-0.5">
                    <p className="font-serif text-base text-[#0A1931] font-medium">
                      Science & Creative Work
                    </p>
                    <p className="text-xs sm:text-sm text-[#335372]">
                      Annual science exhibition, ATL tinkering projects, model building, and student craft displays.
                    </p>
                  </div>
                </div>

                <div className="ledger-row py-3.5 flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-[#1A3D63] font-medium shrink-0">03</span>
                  <div className="space-y-0.5">
                    <p className="font-serif text-base text-[#0A1931] font-medium">
                      Physical Culture & Games
                    </p>
                    <p className="text-xs sm:text-sm text-[#335372]">
                      Outdoor team sports, annual athletics meet, and informal playground activity.
                    </p>
                  </div>
                </div>

                <div className="ledger-row py-3.5 flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-[#1A3D63] font-medium shrink-0">04</span>
                  <div className="space-y-0.5">
                    <p className="font-serif text-base text-[#0A1931] font-medium">
                      Community & Environment
                    </p>
                    <p className="text-xs sm:text-sm text-[#335372]">
                      Campus cleanliness drives, tree planting, and local community outreach.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Link
                  to="/school-life"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0A1931] bg-[#FFFFFF] hover:bg-[#EBF3F9] border border-[#1A3D63] rounded-2xs transition-colors shadow-xs"
                >
                  <span>Explore Student Life & Campus Chronicles</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <span className="font-mono text-[10px] text-[#62839F] uppercase tracking-wider">
                  2025–2026 Academic Year
                </span>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
