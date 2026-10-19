import OceanCanvas from './OceanCanvas';
import { FACILITIES_DATA } from '../data/facilities';
import { ImageAperture } from '../motion/ImageAperture';
import { ScrollReveal } from '../motion/ScrollReveal';
import { Link } from '../router/Router';

export default function Facilities() {
  const featureFacility = FACILITIES_DATA.find((f) => f.id === 'secondary-classrooms') || FACILITIES_DATA[0];
  const scienceFacility = FACILITIES_DATA.find((f) => f.id === 'science-laboratories');
  const atlFacility = FACILITIES_DATA.find((f) => f.id === 'atl-tinkering-lab');
  const courtyardFacility = FACILITIES_DATA.find((f) => f.id === 'botanical-courtyard');
  const libraryFacility = FACILITIES_DATA.find((f) => f.id === 'curricular-library');

  return (
    <section
      id="facilities"
      aria-labelledby="facilities-heading"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-[#F6FAFD] border-b border-[#D2E3F0] overflow-hidden"
    >
      <OceanCanvas variant="quiet" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal variant="clip-up" className="max-w-3xl mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A3D63]">
              Spaces for Investigation & Discovery
            </span>
          </div>

          <h2
            id="facilities-heading"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-normal tracking-tight leading-[1.08]"
          >
            Purpose-built spaces for <br className="hidden sm:inline" />
            <span className="italic font-light text-[#335372]">inquiry and study</span>.
          </h2>

          <p className="text-base sm:text-lg text-[#335372] leading-relaxed font-sans font-normal max-w-2xl">
            From secondary matriculation classrooms and practical science apparatus at Manjurmati to shaded botanical courtyards at Bal Vidyavasham, physical environments are tuned to students’ developmental stages.
          </p>
        </ScrollReveal>

        <div className="space-y-10 sm:space-y-14">

          {/* 1. Feature Facility: Classrooms (7/5 split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="border border-[#D2E3F0] bg-[#FFFFFF]/90 backdrop-blur-xs rounded-xs p-3 sm:p-4 shadow-sm">
                <div className="flex items-center justify-between pb-2 border-b border-[#D2E3F0] text-xs font-mono tracking-wider text-[#62839F]">
                  <span className="font-serif italic text-sm text-[#0A1931]">
                    {featureFacility.campusLabel}
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#1A3D63] font-medium font-mono">
                    Secondary Study Space
                  </span>
                </div>

                <div className="my-2.5">
                  <ImageAperture
                    jpgSrc={featureFacility.imageSrc}
                    webpSrc={featureFacility.imageSrc.replace(/\.jpg$/, '.webp')}
                    alt={featureFacility.imageAlt}
                    aspectClass="aspect-[16/10]"
                    objectPosition="object-[50%_35%]"
                    enableParallax={true}
                    captionOverlay={
                      <div className="bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/30 to-transparent p-3 sm:p-4 text-white">
                        <p className="text-xs font-medium text-white/95">
                          {featureFacility.name}
                        </p>
                        <p className="text-[10px] text-[#B3CFE5] font-mono uppercase tracking-wider">
                          {featureFacility.stageRole}
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-[#62839F] font-sans">
                  <span>Natural Daylight & Wooden Study Benches</span>
                  <span className="font-mono text-[10px] text-[#1A3D63]">VERIFIED FACILITY</span>
                </div>
              </div>
            </div>

            <ScrollReveal variant="fade-left" className="lg:col-span-5 space-y-4">
              <div className="space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] font-medium text-[#1A3D63] block">
                  {featureFacility.campusLabel}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-medium leading-snug">
                  {featureFacility.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#335372] font-sans leading-relaxed">
                {featureFacility.shortDescription} {featureFacility.curriculumContext}
              </p>
            </ScrollReveal>
          </div>

          {/* 2. Science Laboratories */}
          {scienceFacility && (
            <div className="border border-[#D2E3F0] bg-white rounded-xs p-5 sm:p-7 shadow-2xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-[#0A1931] text-white rounded-2xs">
                      {scienceFacility.stageRole}
                    </span>
                    <span className="text-xs font-mono text-[#62839F]">
                      {scienceFacility.campusLabel}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0A1931] font-medium">
                    {scienceFacility.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#335372] font-sans leading-relaxed">
                    {scienceFacility.shortDescription} {scienceFacility.curriculumContext}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="border border-[#D2E3F0] bg-[#FFFFFF] rounded-xs p-3 shadow-sm">
                    <ImageAperture
                      jpgSrc={scienceFacility.imageSrc}
                      webpSrc={scienceFacility.imageSrc.replace(/\.jpg$/, '.webp')}
                      alt={scienceFacility.imageAlt}
                      aspectClass="aspect-[4/3]"
                      objectPosition="object-[50%_40%]"
                      enableParallax={true}
                      captionOverlay={
                        <div className="bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/30 to-transparent p-3 text-white">
                          <p className="text-xs font-medium text-white/95">
                            Practical Science Lab
                          </p>
                          <p className="text-[10px] text-[#B3CFE5] font-mono">
                            Observation Benches & Specimen Stations
                          </p>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Paired ATL Tinkering Lab & Botanical Courtyard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {atlFacility && (
              <ScrollReveal variant="fade-up" delay={0.1} className="border border-[#D2E3F0] bg-[#FFFFFF] rounded-xs p-5 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#D2E3F0]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-semibold">
                    STEM Innovation Space
                  </span>
                  <span className="text-xs font-mono text-[#62839F]">
                    {atlFacility.campusLabel}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#0A1931] font-medium">
                  {atlFacility.name}
                </h3>

                <ImageAperture
                  jpgSrc={atlFacility.imageSrc}
                  webpSrc={atlFacility.imageSrc.replace(/\.jpg$/, '.webp')}
                  alt={atlFacility.imageAlt}
                  aspectClass="aspect-[16/10]"
                  objectPosition="object-[50%_45%]"
                  enableParallax={true}
                  captionOverlay={
                    <div className="bg-gradient-to-t from-[#0A1931]/80 to-transparent p-2.5 text-white">
                      <p className="text-[11px] font-medium">
                        Atal Tinkering Lab · Workbenches & Electronic Kits
                      </p>
                    </div>
                  }
                />

                <p className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed">
                  {atlFacility.shortDescription}
                </p>
              </ScrollReveal>
            )}

            {courtyardFacility && (
              <ScrollReveal variant="fade-up" delay={0.2} className="border border-[#D2E3F0] bg-[#FFFFFF] rounded-xs p-5 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#D2E3F0]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-semibold">
                    Primary Grounds
                  </span>
                  <span className="text-xs font-mono text-[#62839F]">
                    {courtyardFacility.campusLabel}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#0A1931] font-medium">
                  {courtyardFacility.name}
                </h3>

                <ImageAperture
                  jpgSrc={courtyardFacility.imageSrc}
                  webpSrc={courtyardFacility.imageSrc.replace(/\.jpg$/, '.webp')}
                  alt={courtyardFacility.imageAlt}
                  aspectClass="aspect-[16/10]"
                  objectPosition="object-[30%_50%]"
                  enableParallax={true}
                  captionOverlay={
                    <div className="bg-gradient-to-t from-[#0A1931]/80 to-transparent p-2.5 text-white">
                      <p className="text-[11px] font-medium">
                        Botanical Courtyard Walkway · Bal Vidyavasham
                      </p>
                    </div>
                  }
                />

                <p className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed">
                  {courtyardFacility.shortDescription}
                </p>
              </ScrollReveal>
            )}
          </div>

          {/* 4. Curricular Library Strip */}
          {libraryFacility && (
            <div className="bg-[#FFFFFF] border border-[#D2E3F0] rounded-xs p-4 sm:p-6 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 shrink-0">
                <ImageAperture
                  jpgSrc={libraryFacility.imageSrc}
                  webpSrc={libraryFacility.imageSrc.replace(/\.jpg$/, '.webp')}
                  alt={libraryFacility.imageAlt}
                  aspectClass="aspect-[16/11]"
                  objectPosition="object-[50%_35%]"
                  enableParallax={true}
                  captionOverlay={
                    <div className="bg-gradient-to-t from-[#0A1931]/80 to-transparent p-2 text-white">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-[#B3CFE5]">
                        Curricular Library & Reading Room
                      </p>
                    </div>
                  }
                />
              </div>

              <div className="md:col-span-8 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#62839F]">
                    Campus Reading Center
                  </span>
                  <span className="text-[10px] font-mono text-[#1A3D63] bg-[#EBF3F9] px-2 py-0.5 rounded-2xs border border-[#D2E3F0]">
                    Shared Resource
                  </span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-[#0A1931] font-medium">
                  {libraryFacility.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed">
                  {libraryFacility.shortDescription} {libraryFacility.curriculumContext}
                </p>
              </div>
            </div>
          )}

          {/* Integrated Next-Action Trigger */}
          <div className="pt-2 text-center">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63]"
            >
              <span>Explore All Campus Facilities & Lab Specifications</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
