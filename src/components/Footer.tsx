import { Link } from '../router/Router';
import { INSTITUTIONAL_CONTACT_DATA } from '../data/contact';

export default function Footer() {
  const manjurContact = INSTITUTIONAL_CONTACT_DATA.manjurmati;

  return (
    <footer className="bg-[#0A1931] text-[#F6FAFD] border-t-2 border-[#1A3D63] relative overflow-hidden">
      {/* Hairline decorative header accent */}
      <div className="h-1 bg-gradient-to-r from-[#1A3D63] via-[#4A7FA7] to-[#1A3D63]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#1A3D63]">

          {/* Col 1: Institutional Monograph Lockup (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white monument-kerning">
                  Manjurmati
                </span>
                <span className="font-serif italic text-sm text-[#B3CFE5]">with</span>
                <span className="font-serif text-lg sm:text-xl text-[#B3CFE5]">
                  Bal Vidyavasham
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#B3CFE5] font-mono">
                Senha Block · Lohardaga District, Jharkhand
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#D2E3F0] font-sans leading-relaxed max-w-md">
              Two independent academic environments facing each other across the shared road in Mahadetoli. Synchronizing foundational childhood care (Nursery–Class V) with secondary state board rigor (Classes VI–X, JAC).
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-[10px] font-mono text-[#B3CFE5]">
              <span className="px-2 py-0.5 bg-[#1A3D63] border border-[#4A7FA7]/40 rounded-2xs">
                JAC AFFILIATED (VI–X)
              </span>
              <span className="px-2 py-0.5 bg-[#1A3D63] border border-[#4A7FA7]/40 rounded-2xs">
                ENGLISH MEDIUM (N–V)
              </span>
              <span className="px-2 py-0.5 bg-[#1A3D63] border border-[#4A7FA7]/40 rounded-2xs">
                INDEPENDENT ADMISSIONS
              </span>
            </div>
          </div>

          {/* Col 2: Institutional Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B3CFE5] font-semibold">
              Website Directory
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#D2E3F0]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Overview Portal (Home)
                </Link>
              </li>
              <li>
                <Link to="/junior-school" className="hover:text-white transition-colors">
                  Bal Vidyavasham (Junior School, N–V)
                </Link>
              </li>
              <li>
                <Link to="/senior-school" className="hover:text-white transition-colors">
                  Manjurmati High School (Senior, VI–X)
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-white transition-colors">
                  Facilities & Learning Spaces
                </Link>
              </li>
              <li>
                <Link to="/faculty-leadership" className="hover:text-white transition-colors">
                  Faculty & Academic Stewardship
                </Link>
              </li>
              <li>
                <Link to="/notices" className="hover:text-white transition-colors">
                  Noticeboard & Gazette Register
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-white transition-colors">
                  Academics & Board Examinations
                </Link>
              </li>
              <li>
                <Link to="/school-life" className="hover:text-white transition-colors">
                  School Life & Student Activities
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-white transition-colors">
                  Admissions & Enquiries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Campus Desks
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contact & Desk Coordinates (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B3CFE5] font-semibold">
              Official Administration Desks
            </h4>
            <div className="space-y-2 text-xs font-sans text-[#D2E3F0]">
              <p>
                <strong className="text-white block font-medium">Campus Address:</strong>
                {manjurContact.postalAddress.line1}, {manjurContact.postalAddress.postOffice}, {manjurContact.postalAddress.block}, PS {manjurContact.postalAddress.policeStation}, District {manjurContact.postalAddress.district}, Jharkhand – {manjurContact.postalAddress.pinCode}
              </p>
              <div className="pt-1 space-y-1 font-mono text-[11px]">
                <p>
                  <span className="text-[#B3CFE5]">Helpline:</span>{' '}
                  <a href="tel:+918340469822" className="hover:text-white transition-colors">+91 8340469822</a>,{' '}
                  <a href="tel:+919304544100" className="hover:text-white transition-colors">+91 9304544100</a>
                </p>
                <p>
                  <span className="text-[#B3CFE5]">Email:</span>{' '}
                  <a href="mailto:mmhs66535@gmail.com" className="hover:text-white transition-colors">mmhs66535@gmail.com</a>
                </p>
                <p>
                  <span className="text-[#B3CFE5]">Office Hours:</span> Mon–Sat, 08:30 AM – 02:00 PM
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A1931] bg-[#B3CFE5] hover:bg-white rounded-2xs transition-colors shadow-2xs"
              >
                <span>Admission Enquiries</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Base Colophon & Administrative Governance Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-[#B3CFE5]">
          <p className="leading-relaxed text-center md:text-left">
            <strong>Institutional Governance Note:</strong> Manjurmati High School and Bal Vidyavasham are autonomous educational institutions operating on opposite sides of the shared roadway in Mahadetoli, Senha Block. Both institutions maintain distinct administrative offices, independent faculties, and separate admissions protocols.
          </p>
          <div className="shrink-0 text-center md:text-right font-mono text-[11px] space-y-0.5">
            <p>© {new Date().getFullYear()} Manjurmati High School & Bal Vidyavasham</p>
            <p className="text-[10px] text-[#B3CFE5]/80">Documented from official records (manjurmatihighschool.com)</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
