import OceanCanvas from '../components/OceanCanvas';
import { Link } from '../router/Router';

export default function AcademicsPage() {
  return (
    <div className="w-full bg-[#F6FAFD] text-[#0A1931]">
      {/* ──────────────────────────────────────────────────────────────────
          PAGE HERO: ACADEMICS & BOARD EVALUATION
         ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-[#F6FAFD] border-b border-[#D2E3F0] overflow-hidden">
        <OceanCanvas variant="quiet" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A3D63]">
                Academic Architecture & Examination Standards
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-normal tracking-tight leading-[1.08]">
              Academics & <br />
              <span className="italic font-light text-[#335372]">Board Examination Standards</span>
            </h1>

            <p className="text-base sm:text-lg text-[#335372] font-sans leading-relaxed pt-1">
              From early language acquisition and inquiry at Bal Vidyavasham to the rigorous secondary matriculation curriculum of the Jharkhand Academic Council (JAC) at Manjurmati High School.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#1A3D63]">
              <span className="px-2.5 py-1 bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs font-semibold">
                JAC AFFILIATED · CLASSES VI–X
              </span>
              <span className="px-2.5 py-1 bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs font-semibold">
                ENGLISH MEDIUM · NURSERY–V
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#D2E3F0] rounded-2xs text-[#62839F]">
                STATE BOARD MATRICULATION TRACK
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          DUAL ACADEMIC STAGES
         ────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="border-b border-[#D2E3F0] pb-6 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#62839F]">
            Section 01 · Pedagogical Spectrum
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0A1931] font-normal pt-1">
            Two Distinct Curricular Environments
          </h2>
          <p className="text-sm text-[#335372] font-sans max-w-2xl pt-2">
            Bal Vidyavasham and Manjurmati operate under separate academic structures and faculties, offering age-tailored instruction while maintaining institutional harmony across Mahadetoli.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Stage 1: Bal Vidyavasham Junior Wing */}
          <div className="border border-[#D2E3F0] bg-white rounded-xs p-6 sm:p-8 space-y-6 shadow-2xs">
            <div className="flex items-center justify-between border-b border-[#EBF3F9] pb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 bg-[#EBF3F9] text-[#1A3D63] rounded-2xs font-semibold">
                Foundational Stage · Nursery – Class V
              </span>
              <span className="text-xs font-mono text-[#62839F]">
                Bal Vidyavasham
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#0A1931] font-normal">
                English Medium Foundational Instruction
              </h3>
              <p className="text-sm text-[#335372] font-sans pt-2 leading-relaxed">
                Focused on structured language immersion, phonetics, foundational numeracy, environmental exploration, and creative expression within a sheltered botanical courtyard setting.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                Core Subject Disciplines
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-[#335372]">
                <li className="flex items-start gap-2 bg-[#F6FAFD] p-2.5 rounded-2xs border border-[#EBF3F9]">
                  <span className="font-mono text-[#1A3D63] font-bold">01.</span>
                  <div>
                    <span className="font-semibold text-[#0A1931] block">English Phonics & Literacy</span>
                    <span className="text-[11px] text-[#62839F]">Reading fluency, vocabulary building, penmanship</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-[#F6FAFD] p-2.5 rounded-2xs border border-[#EBF3F9]">
                  <span className="font-mono text-[#1A3D63] font-bold">02.</span>
                  <div>
                    <span className="font-semibold text-[#0A1931] block">Foundational Mathematics</span>
                    <span className="text-[11px] text-[#62839F]">Arithmetic sense, spatial concepts, mental math</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-[#F6FAFD] p-2.5 rounded-2xs border border-[#EBF3F9]">
                  <span className="font-mono text-[#1A3D63] font-bold">03.</span>
                  <div>
                    <span className="font-semibold text-[#0A1931] block">Environmental Studies (EVS)</span>
                    <span className="text-[11px] text-[#62839F]">Nature observation, community awareness, hygiene</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-[#F6FAFD] p-2.5 rounded-2xs border border-[#EBF3F9]">
                  <span className="font-mono text-[#1A3D63] font-bold">04.</span>
                  <div>
                    <span className="font-semibold text-[#0A1931] block">Hindi Language & Sahitya</span>
                    <span className="text-[11px] text-[#62839F]">Vernacular fluency, storytelling, devanagari script</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-[#F6FAFD] p-2.5 rounded-2xs border border-[#EBF3F9] sm:col-span-2">
                  <span className="font-mono text-[#1A3D63] font-bold">05.</span>
                  <div>
                    <span className="font-semibold text-[#0A1931] block">Arts, Crafts & Physical Play</span>
                    <span className="text-[11px] text-[#62839F]">Clay modeling, paper craft, outdoor games, morning assembly recitation</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-4 rounded-2xs space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-bold block">
                Assessment Methodology
              </span>
              <p className="text-xs text-[#335372] leading-relaxed">
                Continuous & Comprehensive Evaluation (CCE) assessing oral communication, written understanding, and social cooperation. Progress cards provide constructive qualitative feedback without punitive ranking.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/junior-school"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold"
              >
                Explore Junior School Monograph
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Stage 2: Manjurmati Senior Wing */}
          <div className="border border-[#D2E3F0] bg-white rounded-xs p-6 sm:p-8 space-y-6 shadow-2xs">
            <div className="flex items-center justify-between border-b border-[#EBF3F9] pb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 bg-[#0A1931] text-white rounded-2xs font-semibold">
                Secondary Stage · Classes VI – X
              </span>
              <span className="text-xs font-mono text-[#62839F]">
                Manjurmati High School
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#0A1931] font-normal">
                Jharkhand Academic Council (JAC) Curriculum
              </h3>
              <p className="text-sm text-[#335372] font-sans pt-2 leading-relaxed">
                State board aligned secondary education preparing students for the Class X Secondary Matriculation Examination, combining academic theory with laboratory experimentation and Atal Tinkering Lab hands-on STEM skills.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-semibold">
                Secondary Subject Groups (JAC Syllabus)
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-[#335372]">
                <li className="flex items-start gap-2 bg-[#F6FAFD] p-2.5 rounded-2xs border border-[#EBF3F9]">
                  <span className="font-mono text-[#1A3D63] font-bold">01.</span>
                  <div>
                    <span className="font-semibold text-[#0A1931] block">Science (Vigyan)</span>
                    <span className="text-[11px] text-[#62839F]">Physics, Chemistry, Biology + practical lab sessions</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-[#F6FAFD] p-2.5 rounded-2xs border border-[#EBF3F9]">
                  <span className="font-mono text-[#1A3D63] font-bold">02.</span>
                  <div>
                    <span className="font-semibold text-[#0A1931] block">Mathematics (Ganit)</span>
                    <span className="text-[11px] text-[#62839F]">Algebra, Euclidean geometry, trigonometry, statistics</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-[#F6FAFD] p-2.5 rounded-2xs border border-[#EBF3F9]">
                  <span className="font-mono text-[#1A3D63] font-bold">03.</span>
                  <div>
                    <span className="font-semibold text-[#0A1931] block">Social Science (Samajik Vigyan)</span>
                    <span className="text-[11px] text-[#62839F]">History, Civics, Geography, Economics</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-[#F6FAFD] p-2.5 rounded-2xs border border-[#EBF3F9]">
                  <span className="font-mono text-[#1A3D63] font-bold">04.</span>
                  <div>
                    <span className="font-semibold text-[#0A1931] block">Languages</span>
                    <span className="text-[11px] text-[#62839F]">Hindi, English Language & Literature, Sanskrit</span>
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-[#F6FAFD] p-2.5 rounded-2xs border border-[#EBF3F9] sm:col-span-2">
                  <span className="font-mono text-[#1A3D63] font-bold">05.</span>
                  <div>
                    <span className="font-semibold text-[#0A1931] block">Atal Tinkering Lab (ATL Innovation)</span>
                    <span className="text-[11px] text-[#62839F]">Microcontrollers, sensor circuits, robotics, electronics prototyping</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-4 rounded-2xs space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A3D63] font-bold block">
                Evaluation & Board Sent-Up
              </span>
              <p className="text-xs text-[#335372] leading-relaxed">
                Bi-monthly unit assessments, Half-Yearly examinations, and the mandatory Sent-Up / Pre-Board examination prior to registration for the Class X JAC Board Examination.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/senior-school"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold"
              >
                Explore Senior School Monograph
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          BOARD EXAMINATION & RESULT TRANSPARENCY SECTION
         ────────────────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-[#D2E3F0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-semibold">
              Section 02 · State Board Verification
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1931] font-normal">
              Jharkhand Academic Council (JAC) Board Results & Verification Policy
            </h2>
            <p className="text-sm sm:text-base text-[#335372] leading-relaxed">
              In strict accordance with ethical institutional standards, Manjurmati High School does not publish unverified student scores, promotional marketing claims, or fabricated merit rank tables on public web portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Protocol 01 */}
            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-6 rounded-xs space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#1A3D63] text-white flex items-center justify-center font-mono text-xs font-bold">
                01
              </div>
              <h3 className="font-serif text-lg text-[#0A1931] font-semibold">
                Official State Portals
              </h3>
              <p className="text-xs text-[#335372] leading-relaxed">
                All official Class X Secondary Examination results are tabulated and hosted directly on the Jharkhand Academic Council's authorized portals upon official gazette release.
              </p>
              <div className="pt-2 border-t border-[#D2E3F0] space-y-1">
                <span className="text-[10px] font-mono text-[#62839F] block">Official State Servers:</span>
                <a
                  href="https://jacresults.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#1A3D63] hover:underline block font-semibold"
                >
                  jacresults.com ↗
                </a>
                <a
                  href="https://jac.jharkhand.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#1A3D63] hover:underline block font-semibold"
                >
                  jac.jharkhand.gov.in ↗
                </a>
              </div>
            </div>

            {/* Protocol 02 */}
            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-6 rounded-xs space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#1A3D63] text-white flex items-center justify-center font-mono text-xs font-bold">
                02
              </div>
              <h3 className="font-serif text-lg text-[#0A1931] font-semibold">
                Required Verification Data
              </h3>
              <p className="text-xs text-[#335372] leading-relaxed">
                To retrieve authentic individual marks sheets from the state portal, students require their official examination credentials printed on their JAC Admit Card:
              </p>
              <ul className="text-xs font-mono space-y-1.5 text-[#1A3D63] bg-white p-3 rounded-2xs border border-[#EBF3F9]">
                <li>• 5-Digit School Roll Code</li>
                <li>• Candidate Roll Number</li>
                <li>• Official Date of Birth</li>
              </ul>
            </div>

            {/* Protocol 03 */}
            <div className="bg-[#F6FAFD] border border-[#D2E3F0] p-6 rounded-xs space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#1A3D63] text-white flex items-center justify-center font-mono text-xs font-bold">
                03
              </div>
              <h3 className="font-serif text-lg text-[#0A1931] font-semibold">
                Physical Credentials Issuance
              </h3>
              <p className="text-xs text-[#335372] leading-relaxed">
                Official hard-copy Mark Sheets, Migration Certificates, and Passing Certificates issued by JAC, Ranchi are physically distributed to students through the school administrative desk in Senha upon notification.
              </p>
              <div className="pt-2 border-t border-[#D2E3F0]">
                <span className="text-[11px] font-mono text-[#62839F]">
                  Desk Hours: 08:30 AM – 02:00 PM (Mon–Sat)
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#EBF3F9] border-l-4 border-[#1A3D63] p-5 rounded-r-xs">
            <div className="flex items-start gap-3">
              <div className="text-[#1A3D63] shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] font-bold">
                  Institutional Transparency Note
                </h4>
                <p className="text-xs text-[#335372] mt-1 leading-relaxed">
                  Notice of result gazette publication, date-sheet schedules, and board form submission dates are published on the official school Noticeboard. For inquiries regarding previous academic verification records, contact the administration office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          ACADEMIC CALENDAR & EXAMINATION TIMELINE
         ────────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="border-b border-[#D2E3F0] pb-6 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#62839F]">
            Section 03 · Institutional Rhythm
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0A1931] font-normal pt-1">
            Annual Academic Calendar & Progression
          </h2>
          <p className="text-sm text-[#335372] font-sans max-w-2xl pt-2">
            The school year follows the state educational calendar with continuous periodic checks culminating in terminal evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border border-[#D2E3F0] bg-white p-5 rounded-xs space-y-3">
            <span className="font-mono text-[11px] text-[#1A3D63] font-bold uppercase tracking-wider block">
              Term 01 · April – July
            </span>
            <h4 className="font-serif text-lg text-[#0A1931] font-normal">
              Foundations & Diagnostic
            </h4>
            <p className="text-xs text-[#335372] leading-relaxed">
              Commencement of new academic session, bridge courses, foundational diagnostic assessments, and initial periodic unit tests across all grades.
            </p>
          </div>

          <div className="border border-[#D2E3F0] bg-white p-5 rounded-xs space-y-3">
            <span className="font-mono text-[11px] text-[#1A3D63] font-bold uppercase tracking-wider block">
              Term 02 · August – October
            </span>
            <h4 className="font-serif text-lg text-[#0A1931] font-normal">
              Terminal Half-Yearly
            </h4>
            <p className="text-xs text-[#335372] leading-relaxed">
              Comprehensive mid-term evaluations, practical demonstrations in Science and Computer labs, science exhibition participation, and parent conferences.
            </p>
          </div>

          <div className="border border-[#D2E3F0] bg-white p-5 rounded-xs space-y-3">
            <span className="font-mono text-[11px] text-[#1A3D63] font-bold uppercase tracking-wider block">
              Term 03 · November – January
            </span>
            <h4 className="font-serif text-lg text-[#0A1931] font-normal">
              Pre-Board & Revision
            </h4>
            <p className="text-xs text-[#335372] leading-relaxed">
              Curriculum completion, intensive revision clinics, Class X Sent-Up (Pre-Board) examinations, and admit card verification with the council.
            </p>
          </div>

          <div className="border border-[#D2E3F0] bg-white p-5 rounded-xs space-y-3">
            <span className="font-mono text-[11px] text-[#1A3D63] font-bold uppercase tracking-wider block">
              Term 04 · February – March
            </span>
            <h4 className="font-serif text-lg text-[#0A1931] font-normal">
              JAC Board & Finals
            </h4>
            <p className="text-xs text-[#335372] leading-relaxed">
              JAC Class X Secondary Matriculation Examinations at state-allotted centers; Annual promotions for Classes Nursery to IX.
            </p>
          </div>
        </div>

        {/* Directory links */}
        <div className="pt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#D2E3F0] mt-16">
          <Link
            to="/faculty-leadership"
            className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold flex items-center gap-2"
          >
            ← View Academic Faculty Directory
          </Link>
          <Link
            to="/notices"
            className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold flex items-center gap-2"
          >
            Check Examination Notices on Noticeboard →
          </Link>
        </div>
      </section>
    </div>
  );
}
