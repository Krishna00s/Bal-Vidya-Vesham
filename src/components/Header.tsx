import { useState, useEffect } from 'react';
import { Link, useRouter } from '../router/Router';
import { useLenis } from '../motion/lenis';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath } = useRouter();
  const { lenis } = useLenis();

  useEffect(() => {
    if (mobileMenuOpen) {
      lenis?.stop();
      const orig = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = orig;
        lenis?.start();
      };
    } else {
      lenis?.start();
    }
  }, [mobileMenuOpen, lenis]);

  const navItems = [
    { label: 'Junior School', to: '/junior-school', sub: 'Nursery–V' },
    { label: 'Senior School', to: '/senior-school', sub: 'Classes VI–X · JAC' },
    { label: 'Facilities', to: '/facilities' },
    { label: 'Faculty & Leadership', to: '/faculty-leadership' },
    { label: 'Academics', to: '/academics' },
    { label: 'School Life', to: '/school-life' },
    { label: 'Admissions', to: '/admissions' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#F6FAFD]/95 backdrop-blur-md border-b border-[#D2E3F0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">

          {/* Institutional Masthead / Title Lockup */}
          <Link
            to="/"
            className="group flex flex-col justify-center min-w-0 flex-1 overflow-hidden pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63] rounded-xs"
          >
            <div className="flex items-baseline gap-1.5 sm:gap-2.5 truncate">
              <span className="font-display text-base sm:text-xl lg:text-2xl font-bold tracking-[0.08em] uppercase text-[#0A1931] group-hover:text-[#1A3D63] transition-colors shrink-0 monument-kerning">
                Manjurmati
              </span>
              <span className="text-[#62839F] font-serif text-xs sm:text-sm italic shrink-0">with</span>
              <span className="font-serif text-xs sm:text-base text-[#335372] group-hover:text-[#0A1931] transition-colors truncate">
                Bal Vidyavasham
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#62839F] font-medium truncate mt-0.5">
              <span className="hidden sm:inline">Secondary Senior School (VI–X · JAC) · </span>Foundational Junior (Nursery–V)
            </span>
          </Link>

          {/* Desktop Editorial Navigation */}
          <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-3.5 2xl:gap-5 shrink-0">
            {navItems.map((item) => {
              const isActive = currentPath === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-xs font-medium transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#0A1931] font-semibold'
                      : 'text-[#335372] hover:text-[#0A1931]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#1A3D63] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Prominent Bulletin / Noticeboard Button */}
            <Link
              to="/notices"
              className={`inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-2xs transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63] ${
                currentPath === '/notices'
                  ? 'bg-[#1A3D63] text-white border border-[#1A3D63]'
                  : 'text-[#F6FAFD] bg-[#0A1931] hover:bg-[#1A3D63] border border-[#0A1931]'
              }`}
            >
              <span>Noticeboard</span>
            </Link>
          </nav>

          {/* Compact Tablet Navigation (visible between lg and xl) */}
          <nav aria-label="Tablet Navigation" className="hidden lg:flex xl:hidden items-center gap-3 shrink-0">
            <Link
              to="/junior-school"
              className={`text-xs font-medium ${currentPath === '/junior-school' ? 'text-[#0A1931] font-semibold' : 'text-[#335372] hover:text-[#0A1931]'}`}
            >
              Junior
            </Link>
            <Link
              to="/senior-school"
              className={`text-xs font-medium ${currentPath === '/senior-school' ? 'text-[#0A1931] font-semibold' : 'text-[#335372] hover:text-[#0A1931]'}`}
            >
              Senior
            </Link>
            <Link
              to="/facilities"
              className={`text-xs font-medium ${currentPath === '/facilities' ? 'text-[#0A1931] font-semibold' : 'text-[#335372] hover:text-[#0A1931]'}`}
            >
              Facilities
            </Link>
            <Link
              to="/academics"
              className={`text-xs font-medium ${currentPath === '/academics' ? 'text-[#0A1931] font-semibold' : 'text-[#335372] hover:text-[#0A1931]'}`}
            >
              Academics
            </Link>
            <Link
              to="/admissions"
              className={`text-xs font-medium ${currentPath === '/admissions' ? 'text-[#0A1931] font-semibold' : 'text-[#335372] hover:text-[#0A1931]'}`}
            >
              Admissions
            </Link>
            <Link
              to="/notices"
              className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs"
            >
              Noticeboard
            </Link>
          </nav>

          {/* Mobile & Tablet Drawer Trigger */}
          <div className="flex items-center xl:hidden shrink-0 ml-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xs text-[#0A1931] hover:bg-[#EBF3F9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#D2E3F0] bg-[#F6FAFD] px-4 pt-3 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1 text-sm">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-2xs font-medium transition-colors ${
                currentPath === '/' ? 'bg-[#EBF3F9] text-[#0A1931] font-semibold' : 'text-[#335372] hover:bg-[#EBF3F9]'
              }`}
            >
              Home (Overview Portal)
            </Link>

            {navItems.map((item) => {
              const isActive = currentPath === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-2xs font-medium transition-colors flex items-center justify-between ${
                    isActive ? 'bg-[#EBF3F9] text-[#0A1931] font-semibold' : 'text-[#335372] hover:bg-[#EBF3F9]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.sub && (
                    <span className="text-[10px] font-mono text-[#62839F]">{item.sub}</span>
                  )}
                </Link>
              );
            })}

            <div className="pt-2">
              <Link
                to="/notices"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs transition-colors"
              >
                Official Noticeboard & Gazette
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
