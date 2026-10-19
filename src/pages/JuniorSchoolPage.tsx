import OceanCanvas from '../components/OceanCanvas';
import { Link } from '../router/Router';
import { PRINCIPALS_DATA } from '../data/principals';
import { INSTITUTIONAL_CONTACT_DATA } from '../data/contact';
import { ImageAperture } from '../motion/ImageAperture';
import { ScrollReveal } from '../motion/ScrollReveal';

export default function JuniorSchoolPage() {
  const principalData = PRINCIPALS_DATA['bal-vidyavasham'];
  const contactData = INSTITUTIONAL_CONTACT_DATA['bal-vidyavasham'];

  const gradeCohorts = [
    { grade: 'Nursery', ageRange: '3 – 4 Years', focus: 'Sensory discovery, verbal play, social acclimatization and secure routines.' },
    { grade: 'Lower KG (LKG)', ageRange: '4 – 5 Years', focus: 'Early phonics, number songs, fine motor tactile exercises, and nature observation.' },
    { grade: 'Upper KG (UKG)', ageRange: '5 – 6 Years', focus: 'Structured English alphabet literacy, early arithmetic, pencil grip, and creative expression.' },
    { grade: 'Class I & II', ageRange: '6 – 8 Years', focus: 'Foundational reading fluency, bilingual conversation, addition/subtraction, and guided curiosity.' },
    { grade: 'Class III to V', ageRange: '8 – 11 Years', focus: 'Primary subject comprehension (English, Hindi, Mathematics, EVS), creative arts, and physical education.' }
  ];

  return (
    <div className="w-full bg-[#F6FAFD] text-[#0A1931]">
      {/* ──────────────────────────────────────────────────────────────────
          PAGE HERO: BAL VIDYAVASHAM JUNIOR MONOGRAPH
         ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-[#F6FAFD] border-b border-[#D2E3F0] overflow-hidden">
        <OceanCanvas variant="chapter-bal" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="clip-up" className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A3D63]">
                Foundational Junior Campus · Nursery to Class V
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-normal tracking-tight leading-[1.08]">
              Bal Vidyavasham <br />
              <span className="italic font-light text-[#335372]">Foundational Learning Grounds</span>
            </h1>

            <p className="text-base sm:text-lg text-[#335372] font-sans leading-relaxed pt-1">
              An English-medium foundational school in Mahadetoli, Senha Block, dedicated to cultivating childhood curiosity, early literacy, and natural outdoor observation in a secure, human-scaled environment.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#1A3D63]">
              <span className="px-2.5 py-1 bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs font-semibold">
                ENGLISH MEDIUM INSTRUCTION
              </span>
              <span className="px-2.5 py-1 bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs font-semibold">
                NURSERY THROUGH CLASS V
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#D2E3F0] rounded-2xs text-[#62839F]">
                MAHADETOLI · SENHA BLOCK
              </span>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs transition-colors shadow-sm"
              >
                <span>Junior Admissions Guide</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="tel:+918340469822"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] text-xs font-mono text-[#1A3D63] hover:text-[#0A1931] bg-white border border-[#D2E3F0] rounded-2xs transition-colors font-semibold"
              >
                <span>Call Junior Desk: +91 8340469822</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          EDITORIAL SPREAD: BOTANICAL COURTYARD & EDUCATIONAL PHILOSOPHY
         ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-[#D2E3F0] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* Left Photographic Plate: Botanical Courtyard */}
            <div className="lg:col-span-5">
              <div className="border border-[#D2E3F0] bg-[#FFFFFF] rounded-xs p-3.5 sm:p-5 shadow-sm">
                <div className="flex items-center justify-between pb-2 border-b border-[#D2E3F0] text-xs font-mono text-[#62839F]">
                  <span className="font-serif italic text-sm text-[#0A1931]">
                    Bal Vidyavasham
                  </span>
                  <span className="text-[10px] uppercase font-mono text-[#1A3D63] font-medium">
                    Courtyard Walkway
                  </span>
                </div>

                <div className="my-3">
                  <ImageAperture
                    jpgSrc="/images/campus-courtyard-walkway.jpg"
                    webpSrc="/images/campus-courtyard-walkway.webp"
                    alt="Campus courtyard walkway with lush botanical gardens and classroom entrance at Bal Vidyavasham"
                    aspectClass="aspect-[4/5]"
                    objectPosition="object-[35%_50%]"
                    enableParallax={true}
                    captionOverlay={
                      <div className="bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/30 to-transparent p-3.5 text-white">
                        <p className="text-xs font-medium font-serif">
                          Botanical Garden Walkway
                        </p>
                        <p className="text-[10px] text-[#B3CFE5] font-mono">
                          Natural flora & shaded verandas connecting junior classrooms
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-[#62839F] font-sans">
                  <span>Authentic Documentary Photograph</span>
                  <span className="font-mono text-[10px] text-[#1A3D63]">VERIFIED CAMPUS</span>
                </div>
              </div>
            </div>

            {/* Right Content: Educational Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-medium block">
                  Foundational Pedagogy
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-[#0A1931] font-normal leading-snug">
                  Nurturing innate childhood curiosity through warmth and structure.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#335372] font-sans leading-relaxed">
                At Bal Vidyavasham, early learning is anchored in the belief that young children learn best when they feel safe, respected, and encouraged to ask questions. Our campus provides a gentle transition from home to school, weaving foundational English literacy and arithmetic with tactile play, stories, and open-air movement.
              </p>

              {/* Leadership Quote Block */}
              <div className="p-4 sm:p-5 bg-[#F6FAFD] border-l-2 border-[#1A3D63] rounded-r-xs space-y-2">
                <p className="font-serif italic text-sm sm:text-base text-[#0A1931] leading-relaxed">
                  “{principalData.officialMessage}”
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#62839F] pt-1 border-t border-[#D2E3F0]">
                  <span>OFFICIAL ADDRESS · OFFICE OF THE PRINCIPAL (JUNIOR SECTION)</span>
                  <Link to="/faculty-leadership" className="text-[#1A3D63] hover:underline">
                    View Leadership Details →
                  </Link>
                </div>
              </div>

              {/* Three Foundational Pillars */}
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

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          GRADE STRUCTURE & COHORTS
         ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F6FAFD] border-b border-[#D2E3F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-medium block">
              Curricular Progression
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#0A1931] font-normal">
              Class Cohorts & Age-Appropriate Learning
            </h2>
            <p className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed">
              Every class at Bal Vidyavasham is structured to match children’s developmental readiness, supporting conversational English, number readiness, and social cooperation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {gradeCohorts.map((cohort, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D2E3F0] rounded-xs p-5 shadow-2xs space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-medium text-[#0A1931]">
                      {cohort.grade}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#EBF3F9] text-[#1A3D63] rounded-2xs border border-[#D2E3F0]">
                      {cohort.ageRange}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed pt-1">
                    {cohort.focus}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#D2E3F0] flex items-center justify-between text-[10px] font-mono text-[#62839F]">
                  <span>ENGLISH MEDIUM</span>
                  <span>BAL VIDYAVASHAM</span>
                </div>
              </div>
            ))}

            {/* Inquiries Tile */}
            <div className="bg-[#1A3D63] text-white border border-[#1A3D63] rounded-xs p-5 shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B3CFE5] block">
                  Enrollment Enquiries
                </span>
                <h3 className="font-serif text-lg font-medium text-white">
                  Join the Junior School
                </h3>
                <p className="text-xs text-[#D2E3F0] font-sans leading-relaxed">
                  Admissions for Nursery through Class V are conducted directly through the Bal Vidyavasham administrative office in Mahadetoli.
                </p>
              </div>
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0A1931] bg-[#B3CFE5] hover:bg-white rounded-2xs transition-colors"
              >
                Admission Guidance →
              </Link>
            </div>
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
              <span className="w-2 h-2 rounded-full bg-[#1A3D63]" aria-hidden="true" />
              <h3 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#1A3D63]">
                Important Institutional Notice on Admissions & Governance
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed">
              Bal Vidyavasham maintains an <strong>independent administration, dedicated primary teaching faculty, and separate admissions protocol</strong> from Manjurmati High School. Completion of Class V at Bal Vidyavasham does not represent automatic enrollment into Manjurmati High School; admission to secondary grades (Class VI) is governed by separate registration under state council norms.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#62839F] border-t border-[#D2E3F0]">
              <span>Junior Office Helpline: {contactData.phoneNumbers[0]}</span>
              <Link to="/contact" className="text-[#1A3D63] hover:underline font-semibold">
                View Junior Campus Office Hours & Directions →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
