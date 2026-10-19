import OceanCanvas from './OceanCanvas';
import { PRINCIPALS_DATA } from '../data/principals';
import { ImageAperture } from '../motion/ImageAperture';
import { ScrollReveal } from '../motion/ScrollReveal';
import { Link } from '../router/Router';

export default function PrincipalsMessage() {
  const manjurmatiData = PRINCIPALS_DATA.manjurmati;
  const balVidyavashamData = PRINCIPALS_DATA['bal-vidyavasham'];

  return (
    <section
      id="principals"
      aria-labelledby="principals-heading"
      className="relative scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-[#F6FAFD] border-b border-[#D2E3F0] overflow-hidden"
    >
      {/* Living Ocean Canvas: Serene Whispering Currents */}
      <OceanCanvas variant="quiet" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER: LEADERSHIP & STEWARDSHIP */}
        <ScrollReveal variant="clip-up" className="max-w-3xl mb-12 sm:mb-16 space-y-3.5 sm:space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A3D63]">
              Leadership & Academic Stewardship
            </span>
          </div>

          <h2
            id="principals-heading"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-normal tracking-tight leading-[1.08]"
          >
            Messages from <br className="hidden sm:inline" />
            <span className="italic font-light text-[#335372]">both school heads</span>.
          </h2>

          <p className="text-base sm:text-lg text-[#335372] leading-relaxed font-sans font-normal pt-1 max-w-2xl">
            Two distinct institutional leaderships facing each other across the shared road in Mahadetoli, Senha—synchronizing foundational childhood care with secondary state-board rigor.
          </p>
        </ScrollReveal>

        {/* PAIRED EDITORIAL SPREAD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* SPREAD PANEL 1: MANJURMATI HIGH SCHOOL */}
          <ScrollReveal variant="fade-up" delay={0.1} className="border border-[#D2E3F0] bg-[#FFFFFF]/95 backdrop-blur-xs rounded-xs p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-5">

              {/* Header Lockup */}
              <div className="pb-4 border-b border-[#D2E3F0] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0A1931] font-semibold block">
                    Secondary Wing · Classes VI–X
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#0A1931] monument-kerning">
                    {manjurmatiData.institutionTitle}
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#0A1931] text-white rounded-2xs">
                  JAC Affiliated
                </span>
              </div>

              {/* Portrait & Designation Mount */}
              <div className="p-3 sm:p-4 bg-[#F8FAFC] border border-[#D2E3F0] rounded-xs">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-5">
                    <ImageAperture
                      jpgSrc={manjurmatiData.portraitSrc}
                      webpSrc={manjurmatiData.portraitSrc.replace(/\.jpg$/, '.webp')}
                      alt={manjurmatiData.portraitAlt}
                      aspectClass="aspect-[4/5]"
                      objectPosition="object-[50%_25%]"
                      width={1024}
                      height={576}
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-semibold block">
                      Head of Institution
                    </span>
                    <h4 className="font-serif italic text-lg text-[#0A1931] font-medium leading-snug">
                      {manjurmatiData.designation}
                    </h4>
                    <p className="text-xs text-[#62839F] font-sans">
                      Secondary Campus · Mahadetoli, Senha
                    </p>
                    <div className="pt-2 text-[10px] font-mono text-[#335372]">
                      Dual-Medium (Hindi & English)
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Leadership Message */}
              <div className="relative pl-4 border-l-2 border-[#1A3D63] py-1 bg-[#F6FAFD]/70 rounded-r-xs p-3">
                <p className="font-serif italic text-sm sm:text-base text-[#0A1931] leading-relaxed">
                  “{manjurmatiData.officialMessage}”
                </p>
              </div>

              {/* Curricular Focus */}
              <div className="space-y-2 pt-2 border-t border-[#D2E3F0]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#62839F] block">
                  Secondary Academic Pillars
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {manjurmatiData.curriculumPillars.map((pillar, idx) => (
                    <div key={idx} className="p-2.5 bg-[#F6FAFD] border border-[#D2E3F0] rounded-2xs">
                      <p className="font-serif text-xs font-semibold text-[#0A1931]">
                        {pillar.title}
                      </p>
                      <p className="text-[11px] text-[#62839F] pt-0.5 line-clamp-2">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Panel Base Note */}
            <div className="pt-3 border-t border-[#D2E3F0] flex items-center justify-between text-xs text-[#62839F]">
              <span>JAC Board Matriculation Preparation</span>
              <span className="font-mono text-[10px] text-[#0A1931] font-medium">SECONDARY CAMPUS</span>
            </div>
          </ScrollReveal>

          {/* SPREAD PANEL 2: BAL VIDYAVASHAM */}
          <ScrollReveal variant="fade-up" delay={0.2} className="border border-[#D2E3F0] bg-[#FFFFFF]/95 backdrop-blur-xs rounded-xs p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-5">

              {/* Header Lockup */}
              <div className="pb-4 border-b border-[#D2E3F0] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-semibold block">
                    Junior Wing · Nursery–Class V
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0A1931]">
                    {balVidyavashamData.institutionTitle}
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#EBF3F9] text-[#1A3D63] border border-[#D2E3F0] rounded-2xs">
                  English Medium
                </span>
              </div>

              {/* Portrait & Designation Mount */}
              <div className="p-3 sm:p-4 bg-[#F8FAFC] border border-[#D2E3F0] rounded-xs">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-5">
                    <ImageAperture
                      jpgSrc={balVidyavashamData.portraitSrc}
                      webpSrc={balVidyavashamData.portraitSrc.replace(/\.jpg$/, '.webp')}
                      alt={balVidyavashamData.portraitAlt}
                      aspectClass="aspect-[4/5]"
                      objectPosition="object-[50%_18%]"
                      width={607}
                      height={449}
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-semibold block">
                      Head of Junior School
                    </span>
                    <h4 className="font-serif italic text-lg text-[#0A1931] font-medium leading-snug">
                      {balVidyavashamData.designation}
                    </h4>
                    <p className="text-xs text-[#62839F] font-sans">
                      Junior Section · Bal Vidyavesham
                    </p>
                    <div className="pt-2 text-[10px] font-mono text-[#335372]">
                      Early Childhood & Primary Foundation
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Leadership Message */}
              <div className="relative pl-4 border-l-2 border-[#1A3D63] py-1 bg-[#F6FAFD]/70 rounded-r-xs p-3">
                <p className="font-serif italic text-sm sm:text-base text-[#0A1931] leading-relaxed">
                  “{balVidyavashamData.officialMessage}”
                </p>
              </div>

              {/* Curricular Focus */}
              <div className="space-y-2 pt-2 border-t border-[#D2E3F0]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#62839F] block">
                  Foundational Junior Pillars
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {balVidyavashamData.curriculumPillars.map((pillar, idx) => (
                    <div key={idx} className="p-2.5 bg-[#F6FAFD] border border-[#D2E3F0] rounded-2xs">
                      <p className="font-serif text-xs font-semibold text-[#0A1931]">
                        {pillar.title}
                      </p>
                      <p className="text-[11px] text-[#62839F] pt-0.5 line-clamp-2">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Panel Base Note */}
            <div className="pt-3 border-t border-[#D2E3F0] flex items-center justify-between text-xs text-[#62839F]">
              <span>English-Medium Foundational Instruction</span>
              <span className="font-mono text-[10px] text-[#1A3D63] font-medium">JUNIOR CAMPUS</span>
            </div>
          </ScrollReveal>

        </div>

        {/* INTEGRATED DIRECT CALL TO ACTION */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            to="/faculty-leadership"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0A1931] bg-[#FFFFFF] hover:bg-[#EBF3F9] border border-[#1A3D63] rounded-2xs transition-colors shadow-xs"
          >
            <span>Meet All Faculty Members & Academic Leadership</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
