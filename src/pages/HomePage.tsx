import Hero from '../components/Hero';
import Noticeboard from '../components/Noticeboard';
import SchoolChapters from '../components/SchoolChapters';
import Facilities from '../components/Facilities';
import PrincipalsMessage from '../components/PrincipalsMessage';
import SchoolLife from '../components/SchoolLife';
import { Link } from '../router/Router';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Landing Hero: Living Ocean Canvas & Dual Photographic Plates */}
      <Hero />

      {/* 2. Official Bulletin & Circular Register */}
      <Noticeboard />

      {/* 3. The Two School Chapters: Bal Vidyavasham & Manjurmati */}
      <SchoolChapters />

      {/* 4. Facilities & Learning Spaces */}
      <Facilities />

      {/* 5. Messages from Both School Heads */}
      <PrincipalsMessage />

      {/* 6. School Life & Communal Rhythms */}
      <SchoolLife />

      {/* 7. Homepage Admissions Callout Block */}
      <section className="py-16 sm:py-20 bg-[#0A1931] text-[#F6FAFD] relative overflow-hidden border-b border-[#1A3D63]">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B3CFE5]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B3CFE5]">
              Admissions & Academic Enquiries
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight leading-tight max-w-3xl mx-auto">
            Beginning your child’s journey in <br className="hidden sm:inline" />
            <span className="italic font-light text-[#B3CFE5]">foundational or secondary scholarship</span>.
          </h2>

          <p className="text-sm sm:text-base text-[#D2E3F0] font-sans max-w-2xl mx-auto leading-relaxed">
            Both institutions maintain separate admissions procedures and independent administrative desks in Mahadetoli, Senha. Discover enrollment requirements, age criteria, and visiting hours.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/admissions"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0A1931] bg-[#B3CFE5] hover:bg-white rounded-2xs transition-colors shadow-sm"
            >
              Admissions Roadmap & Guidance →
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-[#4A7FA7] hover:bg-[#1A3D63] rounded-2xs transition-colors"
            >
              Contact Administrative Desks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
