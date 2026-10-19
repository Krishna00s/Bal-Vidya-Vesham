import OceanCanvas from '../components/OceanCanvas';
import { Link } from '../router/Router';

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-[70vh] bg-[#F6FAFD] text-[#0A1931] flex flex-col justify-center items-center relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <OceanCanvas variant="quiet" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6 bg-white border border-[#D2E3F0] p-8 sm:p-12 rounded-xs shadow-xs">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1A3D63]" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#1A3D63] font-semibold">
            Institutional Archive Reference
          </span>
        </div>

        <div className="space-y-2">
          <span className="font-mono text-4xl sm:text-6xl font-bold text-[#1A3D63]/30 tracking-tight block">
            404
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl text-[#0A1931] font-normal leading-tight">
            Folio Not Located in Campus Gazette
          </h1>
        </div>

        <p className="text-sm text-[#335372] font-sans leading-relaxed max-w-lg mx-auto">
          The requested URL path could not be located in the current gazette register of Bal Vidyavasham × Manjurmati High School. The page may have been moved, updated, or re-cataloged under a different section.
        </p>

        <div className="pt-4 border-t border-[#D2E3F0] space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#62839F] block">
            Available Institutional Portals
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <Link
              to="/"
              className="px-4 py-2 bg-[#0A1931] text-white text-xs font-mono uppercase tracking-wider rounded-2xs hover:bg-[#1A3D63] transition-colors"
            >
              Overview Portal (Home)
            </Link>
            <Link
              to="/junior-school"
              className="px-4 py-2 bg-[#EBF3F9] text-[#1A3D63] border border-[#D2E3F0] text-xs font-mono uppercase tracking-wider rounded-2xs hover:bg-white transition-colors"
            >
              Bal Vidyavasham (N–V)
            </Link>
            <Link
              to="/senior-school"
              className="px-4 py-2 bg-[#EBF3F9] text-[#1A3D63] border border-[#D2E3F0] text-xs font-mono uppercase tracking-wider rounded-2xs hover:bg-white transition-colors"
            >
              Manjurmati High (VI–X)
            </Link>
            <Link
              to="/notices"
              className="px-4 py-2 bg-[#EBF3F9] text-[#1A3D63] border border-[#D2E3F0] text-xs font-mono uppercase tracking-wider rounded-2xs hover:bg-white transition-colors"
            >
              Noticeboard
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-[#EBF3F9] text-[#1A3D63] border border-[#D2E3F0] text-xs font-mono uppercase tracking-wider rounded-2xs hover:bg-white transition-colors"
            >
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
