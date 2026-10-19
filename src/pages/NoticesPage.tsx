import OceanCanvas from '../components/OceanCanvas';
import Noticeboard from '../components/Noticeboard';
import { Link } from '../router/Router';

export default function NoticesPage() {
  return (
    <div className="w-full bg-[#F6FAFD] text-[#0A1931]">
      {/* ──────────────────────────────────────────────────────────────────
          PAGE HERO: OFFICIAL NOTICEBOARD & GAZETTE REGISTRY
         ────────────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-[#F6FAFD] border-b border-[#D2E3F0] overflow-hidden">
        <OceanCanvas variant="quiet" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3D63]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1A3D63] font-mono">
                Institutional Archives · Gazette Volume XXIV
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#0A1931] font-bold tracking-tight uppercase leading-[1.05]">
              Official Gazette & <br />
              <span className="font-serif italic font-normal text-[#335372] lowercase text-2xl sm:text-4xl lg:text-5xl tracking-normal">Circular Register</span>
            </h1>

            <p className="text-base sm:text-lg text-[#335372] font-sans leading-relaxed pt-1">
              The central public repository for official administrative dispatches, secondary examination orders, state board matriculation circulars, and institutional announcements for Manjurmati High School and Bal Vidyavasham.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[#1A3D63]">
              <span className="px-3 py-1 bg-[#EBF3F9] border border-[#B3CFE5] rounded-2xs font-bold">
                SENHA BLOCK GAZETTE
              </span>
              <span className="px-3 py-1 bg-[#EBF3F9] border border-[#B3CFE5] rounded-2xs font-bold">
                JAC STATE BOARD DIRECTIVES
              </span>
              <span className="px-3 py-1 bg-white border border-[#D2E3F0] rounded-2xs text-[#62839F] font-semibold">
                PERMANENT ARCHIVAL LEDGER
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          NOTICEBOARD CORE ENGINE
         ────────────────────────────────────────────────────────────────── */}
      <div className="py-8 sm:py-12">
        <Noticeboard />
      </div>

      {/* ──────────────────────────────────────────────────────────────────
          GAZETTE DISPATCH PROTOCOLS & ARCHIVAL POLICY
         ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 bg-white border-t border-[#D2E3F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="border border-[#D2E3F0] bg-[#F6FAFD] rounded-xs p-6 sm:p-8 space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-[#0A1931] font-normal">
              Noticeboard Dispatch Protocols & Gazette Archiving
            </h2>
            <div className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed space-y-3">
              <p>
                <strong>Verification Policy:</strong> Circulars displayed on this portal represent authentic administrative dispatches released under the seal of the respective school offices in Mahadetoli, Senha Block.
              </p>
              <p>
                <strong>Archival Preservation:</strong> In accordance with institutional transparency standards, concluded circulars (such as the Annual Science Exhibition of 25 July 2025) are preserved in the historical register for reference and are clearly marked as <em>Archived Record · Concluded Event</em> to prevent confusion with active academic cycles.
              </p>
              <p>
                <strong>Physical Noticeboard Verification:</strong> Physical copies of all official circulars, signed order sheets, and examination seat matrices are displayed at the main administrative entrance noticeboards at both campuses.
              </p>
            </div>
            <div className="pt-3 border-t border-[#D2E3F0] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#62839F]">
              <span>Administrative Office Helpline: +91 8340469822</span>
              <Link to="/contact" className="text-[#1A3D63] hover:underline font-semibold">
                Contact Administrative Dispatch Desk →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
