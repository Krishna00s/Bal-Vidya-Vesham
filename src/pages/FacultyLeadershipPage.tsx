import OceanCanvas from '../components/OceanCanvas';
import { PRINCIPALS_DATA } from '../data/principals';
import { VERIFIED_FACULTY } from '../data/faculty';
import { Link } from '../router/Router';

export default function FacultyLeadershipPage() {
  const manjurPrincipal = PRINCIPALS_DATA.manjurmati;
  const balPrincipal = PRINCIPALS_DATA['bal-vidyavasham'];

  return (
    <div className="w-full bg-[#F6FAFD] text-[#0A1931]">
      {/* ──────────────────────────────────────────────────────────────────
          PAGE HERO: LEADERSHIP & FACULTY STEWARDSHIP
         ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-[#F6FAFD] border-b border-[#D2E3F0] overflow-hidden">
        <OceanCanvas variant="quiet" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A3D63]">
                Academic Leadership & Faculty Directory
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-normal tracking-tight leading-[1.08]">
              Faculty & <br />
              <span className="italic font-light text-[#335372]">Institutional Stewardship</span>
            </h1>

            <p className="text-base sm:text-lg text-[#335372] font-sans leading-relaxed pt-1">
              Guiding foundational literacy and secondary state-board scholarship across Mahadetoli, Senha. Sourced directly from official school administration and certified institutional records.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#1A3D63]">
              <span className="px-2.5 py-1 bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs font-semibold">
                HEADS OF INSTITUTION
              </span>
              <span className="px-2.5 py-1 bg-[#EBF3F9] border border-[#D2E3F0] rounded-2xs font-semibold">
                TRAINED GRADUATE TEACHERS (TGT)
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#D2E3F0] rounded-2xs text-[#62839F]">
                DOCUMENTED FROM OFFICIAL RECORDS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          PART 1: INSTITUTIONAL EXECUTIVE LEADERSHIP SPREAD
         ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#D2E3F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-semibold block">
              Institutional Governance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1931] font-normal">
              Heads of Both Schools
            </h2>
            <p className="text-sm text-[#335372] font-sans leading-relaxed">
              Official executive portraits and signed institutional addresses published on the school domain (manjurmatihighschool.com). In accordance with strict documentary integrity, personal names are omitted in fidelity to the official source publication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

            {/* Panel 1: Manjurmati High School Head */}
            <div className="border border-[#D2E3F0] bg-[#F6FAFD] rounded-xs p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xs">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#D2E3F0]">
                  <span className="font-display uppercase tracking-wider font-bold text-lg text-[#0A1931]">
                    {manjurPrincipal.institutionTitle}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#0A1931] text-white rounded-2xs">
                    Classes VI–X · JAC
                  </span>
                </div>

                <div className="passe-partout-outer rounded-xs p-4">
                  <div className="passe-partout-inner rounded-xs p-4 bg-white border border-[#D2E3F0] grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-5">
                      <div className="aspect-[4/5] rounded-2xs overflow-hidden border border-[#D2E3F0] bg-[#EBF3F9]">
                        <picture>
                          <source type="image/webp" srcSet={manjurPrincipal.portraitSrc.replace(/\.jpg$/, '.webp')} />
                          <img
                            src={manjurPrincipal.portraitSrc}
                            alt={manjurPrincipal.portraitAlt}
                            className="w-full h-full object-cover object-[50%_25%]"
                            loading="lazy"
                            decoding="async"
                            width={1024}
                            height={576}
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="sm:col-span-7 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#0A1931] font-semibold block">
                        Head of Institution
                      </span>
                      <h3 className="font-serif italic text-lg sm:text-xl text-[#0A1931] font-medium leading-snug">
                        {manjurPrincipal.designation}
                      </h3>
                      <p className="font-mono text-[11px] text-[#62839F]">
                        Manjurmati High School
                      </p>
                      <div className="pt-2 border-t border-[#D2E3F0] text-[9.5px] font-mono text-[#62839F] leading-tight">
                        Provenance: {manjurPrincipal.statusNote}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative pl-4 border-l-2 border-[#0A1931] py-1 bg-white rounded-r-xs p-3">
                  <p className="font-serif italic text-xs sm:text-sm text-[#0A1931] leading-relaxed">
                    “{manjurPrincipal.officialMessage}”
                  </p>
                </div>

                <div className="space-y-1 text-xs text-[#335372]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A3D63] block font-medium">
                    Institutional Governance Scope
                  </span>
                  <p className="leading-relaxed">
                    {manjurPrincipal.institutionalScope}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#D2E3F0] flex items-center justify-between text-[11px] font-mono text-[#62839F]">
                <span>MAHADETOLI · SENHA BLOCK</span>
                <span className="text-[#0A1931] font-semibold">SECONDARY CAMPUS</span>
              </div>
            </div>

            {/* Panel 2: Bal Vidyavasham Junior Head */}
            <div className="border border-[#D2E3F0] bg-[#F6FAFD] rounded-xs p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xs">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#D2E3F0]">
                  <span className="font-serif text-lg font-medium text-[#0A1931]">
                    {balPrincipal.institutionTitle}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#EBF3F9] text-[#1A3D63] rounded-2xs border border-[#D2E3F0]">
                    Nursery–Class V · English Medium
                  </span>
                </div>

                <div className="passe-partout-outer rounded-xs p-4">
                  <div className="passe-partout-inner rounded-xs p-4 bg-white border border-[#D2E3F0] grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-5">
                      <div className="aspect-[4/5] rounded-2xs overflow-hidden border border-[#D2E3F0] bg-[#EBF3F9]">
                        <picture>
                          <source type="image/webp" srcSet={balPrincipal.portraitSrc.replace(/\.jpg$/, '.webp')} />
                          <img
                            src={balPrincipal.portraitSrc}
                            alt={balPrincipal.portraitAlt}
                            className="w-full h-full object-cover object-[50%_18%]"
                            loading="lazy"
                            decoding="async"
                            width={607}
                            height={449}
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="sm:col-span-7 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#1A3D63] font-semibold block">
                        Head of Junior School
                      </span>
                      <h3 className="font-serif italic text-lg sm:text-xl text-[#0A1931] font-medium leading-snug">
                        {balPrincipal.designation}
                      </h3>
                      <p className="font-mono text-[11px] text-[#62839F]">
                        Junior Section · Bal Vidyavesham
                      </p>
                      <div className="pt-2 border-t border-[#D2E3F0] text-[9.5px] font-mono text-[#62839F] leading-tight">
                        Provenance: {balPrincipal.statusNote}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative pl-4 border-l-2 border-[#1A3D63] py-1 bg-white rounded-r-xs p-3">
                  <p className="font-serif italic text-xs sm:text-sm text-[#0A1931] leading-relaxed">
                    “{balPrincipal.officialMessage}”
                  </p>
                </div>

                <div className="space-y-1 text-xs text-[#335372]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#1A3D63] block font-medium">
                    Foundational Governance Scope
                  </span>
                  <p className="leading-relaxed">
                    {balPrincipal.institutionalScope}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#D2E3F0] flex items-center justify-between text-[11px] font-mono text-[#62839F]">
                <span>MAHADETOLI · SENHA BLOCK</span>
                <span className="text-[#1A3D63] font-semibold">JUNIOR CAMPUS</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          PART 2: VERIFIED TEACHING FACULTY DIRECTORY
         ────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F6FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-semibold block">
              Teaching Faculty Directory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A1931] font-normal">
              Verified Academic Instructors
            </h2>
            <p className="text-sm text-[#335372] font-sans leading-relaxed">
              Teaching staff confirmed directly from the official school directory (manjurmatihighschool.com/faculty.php). Each instructor leads curricular subject instruction across secondary and foundational streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VERIFIED_FACULTY.map((faculty) => (
              <div
                key={faculty.id}
                className="bg-white border border-[#D2E3F0] rounded-xs p-5 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#EBF3F9] text-[#1A3D63] rounded-2xs font-semibold">
                      {faculty.designation}
                    </span>
                    <span className="font-mono text-[10px] text-[#62839F]">
                      {faculty.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#0A1931] pt-1">
                    {faculty.name}
                  </h3>

                  <p className="text-xs font-medium text-[#1A3D63] font-mono">
                    Subject: {faculty.subject}
                  </p>

                  <p className="text-xs text-[#62839F] font-sans">
                    {faculty.department}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#D2E3F0] flex items-center justify-between text-[10px] font-mono text-[#62839F]">
                  <span>VERIFIED FACULTY</span>
                  <span>JAC CURRICULUM</span>
                </div>
              </div>
            ))}
          </div>

          {/* Factual Integrity Note */}
          <div className="p-5 bg-white border border-[#D2E3F0] rounded-xs text-xs font-sans text-[#335372] space-y-1.5">
            <p>
              <strong>Factual Disclosure:</strong> The list above reflects the official faculty publication on manjurmatihighschool.com/faculty.php. In accordance with documentary standards, no unverified photographs, personal home contact numbers, or speculative academic degrees have been added.
            </p>
            <p className="font-mono text-[11px] text-[#62839F]">
              For official administrative matters or parent-teacher appointments, please contact the administrative office at Mahadev Ashram, Senha (+91 8340469822).
            </p>
          </div>

          {/* Directory Links */}
          <div className="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#D2E3F0]">
            <Link
              to="/academics"
              className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold flex items-center gap-2"
            >
              ← Inspect Academics & Examination Standards
            </Link>
            <Link
              to="/contact"
              className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] font-semibold flex items-center gap-2"
            >
              Reach Administrative Helplines →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
