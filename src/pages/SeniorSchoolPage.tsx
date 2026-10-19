import OceanCanvas from '../components/OceanCanvas';
import { Link } from '../router/Router';
import { PRINCIPALS_DATA } from '../data/principals';
import { INSTITUTIONAL_CONTACT_DATA } from '../data/contact';
import { ImageAperture } from '../motion/ImageAperture';
import { ScrollReveal } from '../motion/ScrollReveal';

export default function SeniorSchoolPage() {
  const principalData = PRINCIPALS_DATA.manjurmati;
  const contactData = INSTITUTIONAL_CONTACT_DATA.manjurmati;

  const academicFeatures = [
    {
      title: 'Jharkhand Academic Council (JAC) Affiliation',
      subtitle: 'Recognized State Board Curriculum',
      description: 'Structured state-board academic program rigorously preparing students for secondary matriculation examinations across mandatory disciplines.'
    },
    {
      title: 'Dual-Medium Instruction Streams',
      subtitle: 'Hindi & English Class Options',
      description: 'Parallel instruction streams honoring regional Hindi fluency while cultivating English medium academic vocabulary and written examination skills.'
    },
    {
      title: 'Practical Laboratory Instruction',
      subtitle: 'Demonstrative Science Equipment',
      description: 'Hands-on practical physics apparatus, chemistry reagent workbenches, and biological specimen observation aligned with JAC practical requirements.'
    },
    {
      title: 'Atal Tinkering Lab (NITI Aayog)',
      subtitle: 'Hands-on STEM Prototyping',
      description: 'An official innovation space equipped with electronic prototyping kits, soldering stations, mechanical tools, and project-based STEM workstations.'
    },
    {
      title: 'Disciplined Academic Environment',
      subtitle: 'Values & Personal Responsibility',
      description: 'Emphasizing character building, punctuality, morning assemblies, and cooperative community service rooted in the values of Mahadev Ashram.'
    },
    {
      title: 'Dedicated Secondary Teaching Faculty',
      subtitle: 'Subject Specialist Instructors',
      description: 'Qualified Trained Graduate Teachers (TGT) and subject instructors covering Mathematics, Physical Sciences, Languages, and Social Studies.'
    }
  ];

  return (
    <div className="w-full bg-[#F6FAFD] text-[#0A1931]">
      {/* ──────────────────────────────────────────────────────────────────
          PAGE HERO: MANJURMATI SENIOR SCHOOL MONOGRAPH
         ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-[#EBF3F9]/60 border-b border-[#D2E3F0] overflow-hidden">
        <OceanCanvas variant="chapter-manjur" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="clip-up" className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A1931]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#0A1931]">
                Secondary Senior Campus · Classes VI through X (JAC)
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#0A1931] font-bold uppercase tracking-[0.03em] leading-[0.98] monument-kerning">
              Manjurmati <br />
              <span className="font-serif italic font-normal text-3xl sm:text-5xl lg:text-6xl text-[#335372]">
                High School
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#335372] font-sans leading-relaxed pt-1">
              Affiliated with the Jharkhand Academic Council (JAC), Manjurmati High School provides rigorous secondary education, state-board matriculation preparation, dual-medium academic instruction, and hands-on technological exploration in Mahadev Ashram, Senha.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#0A1931]">
              <span className="px-2.5 py-1 bg-[#0A1931] text-white rounded-2xs font-semibold">
                CLASSES VI–X · STATE BOARD
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#D2E3F0] rounded-2xs font-semibold text-[#1A3D63]">
                JAC AFFILIATED
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#D2E3F0] rounded-2xs text-[#62839F]">
                ATAL TINKERING LAB (ATL)
              </span>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs transition-colors shadow-sm"
              >
                <span>Secondary Admissions Guide</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="tel:+919155184206"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] text-xs font-mono text-[#0A1931] hover:text-[#1A3D63] bg-white border border-[#D2E3F0] rounded-2xs transition-colors font-semibold"
              >
                <span>Call Senior Desk: +91 9155184206</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          EDITORIAL SPREAD: CAMPUS ARCH & ACADEMIC FRAMEWORK
         ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[#D2E3F0] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Left Content: Academic Framework */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#0A1931] font-semibold block">
                  Secondary Scholarship & Discipline
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-[#0A1931] font-normal leading-snug">
                  Preparing young minds for academic rigor and lifelong leadership.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#335372] font-sans leading-relaxed">
                Manjurmati High School fosters intellectual discipline, ethical responsibility, and experimental inquiry. Students in Classes VI through X advance through a structured secondary curriculum certified by the Jharkhand Academic Council, complemented by practical laboratory coursework and innovation challenges in the Atal Tinkering Lab.
              </p>

              {/* Leadership Address Block */}
              <div className="p-4 sm:p-5 bg-[#F6FAFD] border-l-2 border-[#0A1931] rounded-r-xs space-y-2">
                <p className="font-serif italic text-sm sm:text-base text-[#0A1931] leading-relaxed">
                  “{principalData.officialMessage}”
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#62839F] pt-1 border-t border-[#D2E3F0]">
                  <span>OFFICIAL ADDRESS · OFFICE OF THE PRINCIPAL (HEAD OF INSTITUTION)</span>
                  <Link to="/faculty-leadership" className="text-[#1A3D63] hover:underline">
                    View Leadership Details →
                  </Link>
                </div>
              </div>

              {/* Verified Curricular Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {principalData.curriculumPillars.map((pillar, idx) => (
                  <div key={idx} className="p-3 bg-[#F6FAFD] border border-[#D2E3F0] rounded-xs space-y-1">
                    <p className="font-serif text-sm font-medium text-[#0A1931]">
                      {pillar.title}
                    </p>
                    <p className="text-xs text-[#62839F] font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Photographic Plate: Senior Entrance Arch */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="border border-[#D2E3F0] bg-[#FFFFFF] rounded-xs p-3.5 sm:p-5 shadow-sm">
                <div className="flex items-center justify-between pb-2 border-b border-[#D2E3F0] text-xs font-mono text-[#62839F]">
                  <span className="font-display uppercase tracking-wider font-semibold text-sm text-[#0A1931]">
                    Manjurmati
                  </span>
                  <span className="text-[10px] uppercase font-mono text-[#0A1931] font-semibold">
                    Campus Gate Arch
                  </span>
                </div>

                <div className="my-3">
                  <ImageAperture
                    jpgSrc="/images/manjurmati-campus-entrance-gate.jpg"
                    webpSrc="/images/manjurmati-campus-entrance-gate.webp"
                    alt="Entrance gate arch of Manjurmati High School with institutional signboard and Atal Tinkering Lab plaque"
                    aspectClass="aspect-[4/3] sm:aspect-[16/11]"
                    objectPosition="object-[50%_40%]"
                    enableParallax={true}
                    captionOverlay={
                      <div className="bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/30 to-transparent p-3.5 text-white">
                        <p className="text-xs font-medium font-serif">
                          Campus Entrance Arch & Signboard
                        </p>
                        <p className="text-[10px] text-[#B3CFE5] font-mono">
                          Institutional gateway & ATL plaque · Mahadev Ashram, Senha
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-[#62839F] font-sans">
                  <span>Authentic Documentary Photograph</span>
                  <span className="font-mono text-[10px] text-[#0A1931]">JAC ACCREDITED</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          ACADEMIC STRUCTURE & VERIFIED SECONDARY FEATURES
         ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F6FAFD] border-b border-[#D2E3F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0A1931] font-semibold block">
              Curricular Framework
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#0A1931] font-normal">
              Secondary Academic Features & State Board Syllabus
            </h2>
            <p className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed">
              Serving Classes VI through X, Manjurmati High School equips students with academic competency, laboratory experimentation skills, and moral discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D2E3F0] rounded-xs p-5 shadow-2xs space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#62839F] block">
                    {feat.subtitle}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-[#0A1931]">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed pt-1">
                    {feat.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#D2E3F0] flex items-center justify-between text-[10px] font-mono text-[#62839F]">
                  <span>CLASSES VI–X</span>
                  <span>JAC AFFILIATED</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 p-4 bg-white border border-[#D2E3F0] rounded-xs">
            <div className="text-xs text-[#335372]">
              Explore practical laboratory rooms, the ATL workshop, and classroom facilities.
            </div>
            <Link
              to="/facilities"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs transition-colors"
            >
              <span>View School Facilities</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          INDEPENDENT GOVERNANCE & ENROLLMENT PATHWAY
         ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border border-[#D2E3F0] bg-[#F6FAFD] rounded-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A1931]" aria-hidden="true" />
              <h3 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#0A1931]">
                Institutional Governance & Admissions Integrity
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed">
              Manjurmati High School operates as an <strong>autonomous secondary institution under Jharkhand Academic Council affiliation</strong>. Admission to Classes VI through X is administered separately by the Manjurmati administrative office. Completion of junior schooling at neighboring Bal Vidyavasham does not grant automatic matriculation; all candidates are registered according to state council norms.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#62839F] border-t border-[#D2E3F0]">
              <span>Senior Office Helpline: {contactData.phoneNumbers[0]}</span>
              <Link to="/admissions" className="text-[#1A3D63] hover:underline font-semibold">
                View Secondary Admission Requirements →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
