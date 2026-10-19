import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import OceanCanvas from './OceanCanvas';
import { useLenis } from '../motion/lenis';
import { Link } from '../router/Router';
import {
  SchoolNotice,
  NoticeCategory,
  NoticeCampus,
  VERIFIED_NOTICES,
  DEV_TEST_NOTICES,
  CATEGORY_LABELS,
  CAMPUS_LABELS
} from '../data/notices';

export default function Noticeboard() {
  const { lenis } = useLenis();
  // Determine if reviewer/developer workflow is authorized (in dev mode, or via ?fixtures=true / ?review=true query param)
  const isReviewerAuthorized = useMemo(() => {
    if (typeof window !== 'undefined') {
      const search = window.location.search;
      return import.meta.env.DEV || search.includes('fixtures=true') || search.includes('review=true');
    }
    return import.meta.env.DEV;
  }, []);

  // Test fixture toggle: Defaults to false for public production readiness (strictly verified dispatches)
  const [useDevFixtures, setUseDevFixtures] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.location.search.includes('fixtures=true');
    }
    return false;
  });

  // Interactive filters
  const [selectedCampus, setSelectedCampus] = useState<NoticeCampus>('all');
  const [selectedCategory, setSelectedCategory] = useState<NoticeCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Accessible modal state
  const [activeNotice, setActiveNotice] = useState<SchoolNotice | null>(null);
  const modalCloseButtonRef = useRef<HTMLButtonElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const previousFocusedElement = useRef<HTMLElement | null>(null);

  // Available data source based on toggle (VERIFIED_NOTICES in production mode)
  const rawNotices = useDevFixtures ? DEV_TEST_NOTICES : VERIFIED_NOTICES;

  // Dynamic campus and category counts derived strictly from rawNotices
  const campusCounts = useMemo(() => {
    return {
      all: rawNotices.length,
      manjurmati: rawNotices.filter((n) => n.campus === 'manjurmati' || n.campus === 'all').length,
      'bal-vidyavasham': rawNotices.filter((n) => n.campus === 'bal-vidyavasham' || n.campus === 'all').length,
    };
  }, [rawNotices]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: rawNotices.length };
    const categories: NoticeCategory[] = ['circular', 'examination', 'holiday', 'event', 'announcement'];
    categories.forEach((cat) => {
      counts[cat] = rawNotices.filter((n) => n.category === cat).length;
    });
    return counts;
  }, [rawNotices]);

  // Filtered and sorted notices
  const filteredNotices = useMemo(() => {
    return rawNotices.filter((notice) => {
      // Campus filter
      if (selectedCampus !== 'all' && notice.campus !== 'all' && notice.campus !== selectedCampus) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && notice.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = notice.title.toLowerCase().includes(query);
        const matchesSummary = notice.summary.toLowerCase().includes(query);
        const matchesRef = notice.referenceNumber.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSummary && !matchesRef) {
          return false;
        }
      }
      return true;
    });
  }, [rawNotices, selectedCampus, selectedCategory, searchQuery]);

  // One clearly distinguished featured notice:
  // Only rendered when priority and active status are justified by verified data.
  // In production mode (where the verified notice is an archived historical record),
  // featuredNotice evaluates to null, avoiding false prominence.
  const featuredNotice = useMemo(() => {
    const pinned = filteredNotices.find((n) => n.priority === 'pinned' && !n.isArchived);
    if (pinned) return pinned;
    if (useDevFixtures) {
      return filteredNotices.find((n) => !n.isArchived) || null;
    }
    return null;
  }, [filteredNotices, useDevFixtures]);

  // Remaining notices in the scannable register
  const regularNotices = useMemo(() => {
    return filteredNotices.filter((n) => n.id !== featuredNotice?.id);
  }, [filteredNotices, featuredNotice]);

  // Open modal with focus preservation
  const handleOpenNotice = useCallback((notice: SchoolNotice) => {
    previousFocusedElement.current = document.activeElement as HTMLElement;
    setActiveNotice(notice);
  }, []);

  // Close modal and restore focus
  const handleCloseModal = useCallback(() => {
    setActiveNotice(null);
    if (previousFocusedElement.current) {
      previousFocusedElement.current.focus();
    }
  }, []);

  // Keyboard accessibility, body scroll lock, and focus trapping for modal dialog
  useEffect(() => {
    if (!activeNotice) return;

    // Lock body scroll and pause Lenis smooth scrolling
    lenis?.stop();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleCloseModal();
        return;
      }

      if (e.key === 'Tab' && modalContainerRef.current) {
        const focusableElements = modalContainerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    setTimeout(() => {
      modalCloseButtonRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      lenis?.start();
    };
  }, [activeNotice, handleCloseModal, lenis]);

  const resetFilters = () => {
    setSelectedCampus('all');
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <section
      id="noticeboard"
      aria-labelledby="noticeboard-heading"
      className="relative scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-[#F0F5FA]/50 border-b border-[#D2E3F0] overflow-hidden"
    >
      {/*
        Ocean artwork softly recedes into the background around the noticeboard frame,
        preserving absolute readability and focus inside the bulletin register.
      */}
      <OceanCanvas variant="quiet" className="opacity-25" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ──────────────────────────────────────────────────────────────────
            THE INSTITUTIONAL REGISTER OUTER FRAME
            Continuous architectural enclosure with deep-marine double rules,
            porcelain document paper surfaces, and gazette masthead band.
           ────────────────────────────────────────────────────────────────── */}
        <div className="bg-[#FFFFFF] border-2 border-[#1A3D63] shadow-md rounded-xs relative overflow-hidden">

          {/* Subtle inner hairline framing an authentic broadsheet monograph */}
          <div className="border border-[#D2E3F0] m-1 sm:m-1.5 p-3.5 sm:p-6 lg:p-7 bg-[#FFFFFF]">

            {/* ══════════════════════════════════════════════════════════════
                1. TOP OFFICIAL GAZETTE MASTHEAD
                Authoritative institutional display with registration numbering
                and volumetric publishing authority
               ══════════════════════════════════════════════════════════════ */}
            <header className="-mt-3.5 -mx-3.5 sm:-mt-6 sm:-mx-6 lg:-mt-7 lg:-mx-7 bg-[#0A1931] text-[#F6FAFD] border-b-2 border-[#1A3D63]">

              {/* Registration & Date Bar */}
              <div className="px-4 sm:px-6 py-2 bg-[#061021] border-b border-[#1A3D63] flex flex-wrap items-center justify-between gap-2.5 text-[11px] font-mono tracking-wider">
                <div className="flex items-center gap-2 text-[#B3CFE5]">
                  <span className="w-2 h-2 rounded-full bg-[#4A7FA7] inline-block" aria-hidden="true" />
                  <span className="font-semibold text-white tracking-[0.16em] uppercase">
                    REG. NO. JAC/LOH/SENHA/04
                  </span>
                  <span className="text-[#62839F] hidden sm:inline">·</span>
                  <span className="text-[#B3CFE5] uppercase tracking-widest hidden sm:inline">
                    GAZETTE VOL. XXIV · ANNO 2026
                  </span>
                </div>

                {/* Reviewer / Developer Mode Control Indicator */}
                {isReviewerAuthorized && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setUseDevFixtures(!useDevFixtures)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono rounded-2xs border border-[#4A7FA7]/60 bg-[#1A3D63] hover:bg-[#0A1931] text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3CFE5]"
                      title="Toggle between verified production state and testing fixtures"
                      aria-pressed={useDevFixtures}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          useDevFixtures ? 'bg-[#B3CFE5]' : 'bg-[#4A7FA7]'
                        }`}
                        aria-hidden="true"
                      />
                      <span>
                        {useDevFixtures ? 'Fixtures Active' : 'Production Mode'}
                      </span>
                    </button>
                  </div>
                )}
              </div>

              {/* Broad Institutional Titleplate */}
              <div className="px-4 sm:px-8 py-5 sm:py-6 text-center space-y-1.5 relative">
                <div className="flex items-center justify-center gap-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#B3CFE5]">
                  <span aria-hidden="true">❖</span>
                  <span>Institutional Bulletin & Circular Registry</span>
                  <span aria-hidden="true">❖</span>
                </div>

                <h2
                  id="noticeboard-heading"
                  className="font-display text-2xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[0.05em] uppercase text-[#F6FAFD] leading-tight py-1"
                >
                  Manjurmati × Bal Vidyavasham Gazette
                </h2>

                <p className="text-xs sm:text-sm font-serif italic text-[#B3CFE5] max-w-2xl mx-auto leading-relaxed">
                  The verified record of administrative dispatches, secondary examination orders, and foundational campus circulars.
                </p>
              </div>

              {/* Jurisdictional Tri-Fold Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#1A3D63] text-center text-[11px] font-mono text-[#B3CFE5] divide-y md:divide-y-0 md:divide-x divide-[#1A3D63] bg-[#0c1f3d]">
                <div className="py-2 px-3">
                  <span className="text-white font-semibold">SENIOR SECONDARY</span> · Classes VI–X (JAC)
                </div>
                <div className="py-2 px-3">
                  <span className="text-white font-semibold">FOUNDATIONAL JUNIOR</span> · Nursery–Class V
                </div>
                <div className="py-2 px-3">
                  <span className="text-white font-semibold">SEAT OF DISPATCH</span> · Mahadetoli, Senha
                </div>
              </div>

            </header>

            {/* ══════════════════════════════════════════════════════════════
                2. EDITORIAL ABSTRACT & CONTEXT BAR
               ══════════════════════════════════════════════════════════════ */}
            <div className="pt-5 sm:pt-6 pb-4 border-b border-[#D2E3F0] flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1 max-w-3xl">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1A3D63] block">
                  Official Administrative Dispatch Desk
                </span>
                <p className="text-xs sm:text-sm text-[#335372] font-sans leading-relaxed">
                  Published under the administrative seal of both facing campuses. Concluded institutional events and historical notices are preserved in the permanent public register.
                </p>
              </div>

              <div className="shrink-0 text-left md:text-right font-mono text-xs text-[#62839F] space-y-0.5 border-l md:border-l-0 md:border-r border-[#D2E3F0] pl-3 md:pl-0 md:pr-3">
                <p className="font-semibold text-[#0A1931]">JHARKHAND ACADEMIC COUNCIL</p>
                <p className="text-[11px]">Mahadetoli Roadside Administration</p>
              </div>
            </div>

            {/* Dev Fixture Warning Banner (When active) */}
            {useDevFixtures && (
              <div className="my-3.5 p-3 bg-[#EBF3F9] border border-[#B3CFE5] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#1A3D63] font-sans">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#1A3D63] text-white rounded-2xs">
                    Sample Test Fixtures Active
                  </span>
                  <span>
                    Displaying sample fixtures for filter, search, and modal verification. Unofficial notices are marked with [Sample Dev Fixture].
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setUseDevFixtures(false)}
                  className="underline text-xs hover:text-[#0A1931] shrink-0 font-semibold"
                >
                  Switch to Production Mode
                </button>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════════
                3. INTEGRATED CONTROL TOOLBAR
               ══════════════════════════════════════════════════════════════ */}
            <div className="pt-4 space-y-3">

              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">

                {/* Campus Segmented Ledger Tabs */}
                <div
                  role="group"
                  aria-label="Filter notices by campus"
                  className="inline-flex rounded-xs border border-[#D2E3F0] bg-[#F6FAFD] p-1 shadow-2xs overflow-x-auto"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedCampus('all')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-2xs transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63] ${
                      selectedCampus === 'all'
                        ? 'bg-[#0A1931] text-white shadow-2xs'
                        : 'text-[#335372] hover:text-[#0A1931] hover:bg-[#EBF3F9]'
                    }`}
                  >
                    All Records ({campusCounts.all})
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCampus('manjurmati')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-2xs transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63] ${
                      selectedCampus === 'manjurmati'
                        ? 'bg-[#0A1931] text-white shadow-2xs'
                        : 'text-[#335372] hover:text-[#0A1931] hover:bg-[#EBF3F9]'
                    }`}
                  >
                    Manjurmati Senior <span className="text-[11px] opacity-85 font-mono">(VI–X) ({campusCounts.manjurmati})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCampus('bal-vidyavasham')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-2xs transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63] ${
                      selectedCampus === 'bal-vidyavasham'
                        ? 'bg-[#0A1931] text-white shadow-2xs'
                        : 'text-[#335372] hover:text-[#0A1931] hover:bg-[#EBF3F9]'
                    }`}
                  >
                    Bal Vidyavasham Junior <span className="text-[11px] opacity-85 font-mono">(N–V) ({campusCounts['bal-vidyavasham']})</span>
                  </button>
                </div>

                {/* Live Keyword Search Input */}
                <div className="relative min-w-[260px] sm:w-72">
                  <label htmlFor="notice-search" className="sr-only">
                    Search circulars, exams, or reference numbers
                  </label>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#62839F]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    id="notice-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search titles, dates, ref codes..."
                    className="w-full pl-9 pr-8 py-2 text-xs font-sans bg-[#F6FAFD] border border-[#D2E3F0] rounded-xs text-[#0A1931] placeholder-[#62839F] focus:outline-none focus:ring-2 focus:ring-[#1A3D63] focus:border-transparent transition-colors shadow-2xs"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search query"
                      className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#62839F] hover:text-[#0A1931]"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

              </div>

              {/* Category Filter Pills with Item Counts */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#62839F] pr-1 shrink-0 font-semibold">
                  Category:
                </span>
                {(['all', 'circular', 'examination', 'holiday', 'event', 'announcement'] as const).map((cat) => {
                  const label = cat === 'all' ? 'All Records' : CATEGORY_LABELS[cat];
                  const count = categoryCounts[cat] ?? 0;
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 rounded-2xs font-sans text-xs transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-1.5 focus-visible:ring-[#1A3D63] ${
                        isSelected
                          ? 'bg-[#1A3D63] text-white font-semibold shadow-2xs'
                          : 'bg-[#F6FAFD] text-[#335372] border border-[#D2E3F0] hover:bg-[#EBF3F9]'
                      }`}
                    >
                      {label} <span className="text-[11px] opacity-80 font-mono">({count})</span>
                    </button>
                  );
                })}
                {(selectedCampus !== 'all' || selectedCategory !== 'all' || searchQuery.trim() !== '') && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-xs font-mono underline text-[#1A3D63] hover:text-[#0A1931] shrink-0 ml-2 font-semibold"
                  >
                    Reset filters
                  </button>
                )}
              </div>

            </div>

            {/* ══════════════════════════════════════════════════════════════
                4. REGISTER LEDGER & FEATURED NOTICE PRESENTATION
               ══════════════════════════════════════════════════════════════ */}
            <div className="mt-5 space-y-4">

              {/* ──────────────────────────────────────────────────────────
                  FEATURED NOTICE CARD: Prominent Broadsheet Lead Story
                  (Strictly displayed when priority & active status are verified)
                 ────────────────────────────────────────────────────────── */}
              {featuredNotice && (
                <div className="border-2 border-[#1A3D63] border-l-6 bg-[#F3F8FC] rounded-xs p-5 sm:p-6 shadow-sm relative overflow-hidden transition-all">
                  {/* Top Metadata Bar */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-[#0A1931] text-[#B3CFE5] border border-[#1A3D63] rounded-2xs inline-flex items-center gap-1.5">
                      <span className="text-[#B3CFE5]">★</span> FEATURED NOTICE
                    </span>

                    {featuredNotice.isDevFixture && (
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#F0F5FA] text-[#335372] border border-[#D2E3F0] rounded-2xs font-semibold">
                        SAMPLE DEV FIXTURE
                      </span>
                    )}

                    {featuredNotice.isArchived && (
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#EBF3F9] text-[#1A3D63] border border-[#B3CFE5] rounded-2xs font-semibold">
                        HISTORICAL RECORD · CONCLUDED
                      </span>
                    )}

                    <span className="font-mono text-[11px] uppercase font-semibold tracking-wider px-2.5 py-0.5 bg-white text-[#1A3D63] border border-[#D2E3F0] rounded-2xs">
                      {CATEGORY_LABELS[featuredNotice.category]}
                    </span>

                    <span className="text-xs font-mono text-[#335372] font-semibold">
                      {CAMPUS_LABELS[featuredNotice.campus]}
                    </span>

                    <span className="text-xs font-mono text-[#62839F] hidden sm:inline">
                      · Ref: {featuredNotice.referenceNumber}
                    </span>

                    <span className="text-xs font-mono text-[#62839F]">
                      · Date: {featuredNotice.publishedDate}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.75rem] text-[#0A1931] font-medium leading-snug">
                    {featuredNotice.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-[#335372] font-sans leading-relaxed mt-2.5 max-w-4xl">
                    {featuredNotice.summary}
                  </p>

                  {/* Real Downloadable Document Badge (if present) */}
                  {featuredNotice.attachments && featuredNotice.attachments.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-[#D2E3F0]/80 flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#62839F] font-semibold">
                        Official Annexure:
                      </span>
                      {featuredNotice.attachments.map((att, idx) => (
                        <div key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#B3CFE5] rounded-2xs text-xs font-sans text-[#1A3D63]">
                          <svg className="w-3.5 h-3.5 text-[#1A3D63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <span className="font-semibold">{att.title}</span>
                          {att.fileSize && <span className="font-mono text-[10px] text-[#62839F]">({att.fileSize})</span>}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 pt-3.5 border-t border-[#D2E3F0] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-[#62839F] font-sans">
                      Issuing Authority: <strong className="text-[#0A1931]">{featuredNotice.department}</strong>
                    </span>
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      onClick={() => handleOpenNotice(featuredNotice)}
                      className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F6FAFD] bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63]"
                    >
                      <span>Read Full Dispatch</span>
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* ──────────────────────────────────────────────────────────
                  PRODUCTION MODE ADMINISTRATIVE DISPATCH BANNER
                  (When fixtures are disabled and no active unexpired notice exists)
                 ────────────────────────────────────────────────────────── */}
              {!useDevFixtures && !featuredNotice && (
                <div className="border border-[#1A3D63]/40 bg-[#F6FAFD] rounded-xs p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs shadow-2xs">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1A3D63]" aria-hidden="true" />
                      <span className="font-mono text-[11px] uppercase font-bold text-[#1A3D63] tracking-wider">
                        Official Bulletin Status: Concluded Gazette Archives
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#335372] leading-relaxed max-w-2xl font-sans">
                      There are currently no active public circulars or upcoming examination schedules pending from the Mahadetoli, Senha administration. All verified historical gazette records remain accessible in the register below.
                    </p>
                  </div>
                  {isReviewerAuthorized && (
                    <button
                      type="button"
                      onClick={() => setUseDevFixtures(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1A3D63] bg-[#EBF3F9] hover:bg-[#D2E3F0] border border-[#B3CFE5] rounded-2xs transition-colors shrink-0"
                    >
                      <span>Preview Testing Fixtures</span>
                    </button>
                  )}
                </div>
              )}

              {/* ──────────────────────────────────────────────────────────
                  COMPACT SCANNABLE BULLETIN REGISTER (Remaining Notices)
                  Desktop: 4-Column Aligned Archival Ledger
                  Mobile: Elegant Stacked Gazette Cards
                 ────────────────────────────────────────────────────────── */}
              {regularNotices.length > 0 && (
                <div className="border border-[#1A3D63]/30 bg-[#FFFFFF] rounded-xs shadow-sm overflow-hidden">
                  {/* Table Header Bar */}
                  <div className="px-4 py-2.5 bg-[#F0F5FA] border-b-2 border-[#1A3D63] text-[11px] font-mono uppercase tracking-wider text-[#1A3D63] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">
                        Institutional Register Ledger
                      </span>
                      <span>·</span>
                      <span className="text-[#335372]">
                        {useDevFixtures
                          ? `Sample Records & Archived Circulars (${regularNotices.length})`
                          : `Archived Official Gazette (${regularNotices.length})`}
                      </span>
                    </div>
                    <span className="hidden sm:inline font-semibold">Synchronized Institutional Record</span>
                  </div>

                  {/* Table Rows / Mobile Gazette Cards */}
                  <div className="divide-y divide-[#D2E3F0]">
                    {regularNotices.map((notice) => (
                      <article
                        key={notice.id}
                        className="p-4 sm:px-5 sm:py-3.5 hover:bg-[#F3F8FC] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3 group"
                      >
                        {/* Column 1: Date & Reference */}
                        <div className="shrink-0 md:w-36 space-y-0.5">
                          <div className="flex items-center justify-between md:block">
                            <span className="font-mono text-xs font-bold text-[#0A1931] block">
                              {notice.publishedDate}
                            </span>
                            <span className="font-mono text-[11px] text-[#62839F] block truncate">
                              {notice.referenceNumber}
                            </span>
                          </div>
                        </div>

                        {/* Column 2: Category & Status Badges */}
                        <div className="shrink-0 md:w-52 flex flex-wrap items-center gap-1.5">
                          <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#EBF3F9] text-[#1A3D63] font-semibold border border-[#D2E3F0] rounded-2xs">
                            {CATEGORY_LABELS[notice.category]}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#335372] font-medium">
                            {CAMPUS_LABELS[notice.campus]}
                          </span>
                          {notice.isArchived ? (
                            <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#EBF3F9] text-[#1A3D63] border border-[#B3CFE5] rounded-2xs font-semibold">
                              Archived Record · Concluded
                            </span>
                          ) : notice.isDevFixture ? (
                            <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 bg-[#F0F5FA] text-[#62839F] border border-[#D2E3F0] rounded-2xs">
                              Sample Fixture
                            </span>
                          ) : null}
                        </div>

                        {/* Column 3: Notice Title & Summary */}
                        <div className="flex-1 min-w-0 md:pr-4 space-y-1">
                          <h4 className="font-serif text-base sm:text-lg text-[#0A1931] font-medium group-hover:text-[#1A3D63] transition-colors leading-snug">
                            {notice.title}
                          </h4>
                          <p className="text-xs sm:text-[13px] text-[#335372] font-sans leading-relaxed line-clamp-2">
                            {notice.summary}
                          </p>
                          {notice.attachments && notice.attachments.length > 0 && (
                            <div className="pt-0.5 flex items-center gap-1 text-[11px] font-mono text-[#1A3D63]">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                              </svg>
                              <span>Official Document Attached ({notice.attachments[0].fileType.toUpperCase()})</span>
                            </div>
                          )}
                        </div>

                        {/* Column 4: Action Trigger */}
                        <div className="shrink-0 flex items-center pt-1 md:pt-0">
                          <button
                            type="button"
                            aria-haspopup="dialog"
                            onClick={() => handleOpenNotice(notice)}
                            className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1A3D63] hover:text-[#0A1931] bg-[#EBF3F9] hover:bg-[#D2E3F0] border border-[#D2E3F0] rounded-2xs transition-colors min-h-[38px] md:min-h-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63]"
                          >
                            <span>View Circular</span>
                            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* EMPTY STATE */}
              {filteredNotices.length === 0 && (
                <div className="border border-[#D2E3F0] bg-[#F6FAFD] rounded-xs p-8 sm:p-12 text-center space-y-4 shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-[#EBF3F9] text-[#1A3D63] mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>

                  {searchQuery || selectedCampus !== 'all' || selectedCategory !== 'all' ? (
                    <div className="space-y-2 max-w-md mx-auto">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#62839F] block font-semibold">
                        Search & Filter Notice Registry
                      </span>
                      <h3 className="font-serif text-lg text-[#0A1931] font-medium">
                        No Gazette Records Match Current Selection
                      </h3>
                      <p className="text-xs text-[#335372] font-sans leading-relaxed">
                        No circulars or archived records match {searchQuery ? `"${searchQuery}"` : 'the active filters'} under {selectedCampus === 'all' ? 'All Campuses' : CAMPUS_LABELS[selectedCampus]} · {selectedCategory === 'all' ? 'All Categories' : CATEGORY_LABELS[selectedCategory]}.
                      </p>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={resetFilters}
                          className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F6FAFD] bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63]"
                        >
                          Reset Filter Criteria
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 max-w-md mx-auto">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#62839F] block font-semibold">
                        Official Administrative Bulletin Status
                      </span>
                      <h3 className="font-serif text-lg text-[#0A1931] font-medium">
                        No Active Dispatches Pending
                      </h3>
                      <p className="text-xs text-[#335372] font-sans leading-relaxed">
                        There are currently no active public notices or upcoming examination schedules pending from the Mahadetoli, Senha administration. All verified historical gazette records remain accessible in the register below.
                      </p>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* ══════════════════════════════════════════════════════════════
                5. REGISTER COLOPHON FOOTER
               ══════════════════════════════════════════════════════════════ */}
            <div className="mt-6 pt-3.5 border-t-2 border-[#1A3D63] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs font-mono text-[#62839F]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1A3D63]" aria-hidden="true" />
                <span className="font-medium text-[#335372]">Synchronized Institutional Record · Senha Block, Lohardaga (JAC)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#0A1931]">Records active: {filteredNotices.length}</span>
                <span className="text-[#D2E3F0]">·</span>
                <Link
                  to="/notices"
                  className="font-semibold text-[#1A3D63] hover:text-[#0A1931] underline decoration-[#1A3D63]/40 hover:decoration-[#0A1931]"
                >
                  Dedicated Gazette View →
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ──────────────────────────────────────────────────────────────────
          ACCESSIBLE NOTICE DETAIL MODAL DIALOG
         ────────────────────────────────────────────────────────────────── */}
      {activeNotice && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-notice-title"
          aria-describedby="modal-notice-summary"
          className="fixed inset-0 z-50 overflow-y-auto bg-[#0A1931]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={handleCloseModal}
        >
          <div
            ref={modalContainerRef}
            className="bg-[#FFFFFF] border-2 border-[#1A3D63] rounded-xs max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto overflow-x-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Gazette Masthead Banner */}
            <div className="bg-[#0A1931] text-[#F6FAFD] px-5 sm:px-7 py-3 border-b-2 border-[#1A3D63] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#B3CFE5]" aria-hidden="true" />
                <span className="font-semibold text-white uppercase tracking-[0.16em]">
                  Official Gazette Dispatch
                </span>
                <span className="text-[#62839F] hidden sm:inline">·</span>
                <span className="text-[#B3CFE5] text-[11px] font-mono hidden sm:inline">
                  Ref: {activeNotice.referenceNumber}
                </span>
              </div>

              {/* Accessible Close Button */}
              <button
                ref={modalCloseButtonRef}
                type="button"
                onClick={handleCloseModal}
                className="p-1 text-[#B3CFE5] hover:text-white hover:bg-[#1A3D63] rounded-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3CFE5]"
                aria-label="Close notice modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-5 sm:p-7 space-y-4">
              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-2 border-b border-[#D2E3F0] pb-3">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#1A3D63] text-white rounded-2xs">
                  {CATEGORY_LABELS[activeNotice.category]}
                </span>
                <span className="font-mono text-xs text-[#1A3D63] bg-[#EBF3F9] px-2 py-0.5 rounded-2xs border border-[#D2E3F0] font-semibold">
                  {CAMPUS_LABELS[activeNotice.campus]}
                </span>
                {activeNotice.isArchived && (
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#EBF3F9] text-[#1A3D63] border border-[#B3CFE5] rounded-2xs font-semibold">
                    Historical Record · Concluded Event
                  </span>
                )}
                {activeNotice.isVerified && (
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#E8F1F8] text-[#1A3D63] border border-[#B3CFE5] rounded-2xs font-semibold">
                    Verified Official
                  </span>
                )}
                {activeNotice.isDevFixture && (
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#F0F5FA] text-[#335372] border border-[#D2E3F0] rounded-2xs font-semibold">
                    Sample Dev Fixture
                  </span>
                )}
                <span className="text-xs font-mono text-[#62839F] ml-auto">
                  Date: {activeNotice.publishedDate}
                </span>
              </div>

              {/* Notice Title */}
              <h3
                id="modal-notice-title"
                className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#0A1931] font-medium leading-snug"
              >
                {activeNotice.title}
              </h3>

              {/* Hidden summary for screen reader description */}
              <p id="modal-notice-summary" className="sr-only">
                {activeNotice.summary}
              </p>

              {/* Issuing Authority Box */}
              <div className="text-xs font-sans text-[#335372] p-3 bg-[#F0F5FA] border-l-4 border-[#1A3D63] rounded-2xs space-y-0.5">
                <span className="text-[#62839F] font-mono text-[10px] uppercase tracking-wider block font-semibold">
                  Issuing Department & Campus Authority
                </span>
                <strong className="text-[#0A1931] text-xs sm:text-sm">{activeNotice.department}</strong>
              </div>

              {/* Notice Body Paragraphs */}
              <div className="text-xs sm:text-[13.5px] text-[#335372] font-sans leading-relaxed space-y-3 pt-1">
                {activeNotice.fullContent && activeNotice.fullContent.length > 0 ? (
                  activeNotice.fullContent.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{activeNotice.summary}</p>
                )}
              </div>

              {/* Official Attachments */}
              {activeNotice.attachments && activeNotice.attachments.length > 0 && (
                <div className="pt-3.5 border-t border-[#D2E3F0] space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#1A3D63] block font-bold">
                    Official Attachment Documents & Orders
                  </span>
                  <div className="space-y-2">
                    {activeNotice.attachments.map((att, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#F6FAFD] border border-[#B3CFE5] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-2xs bg-[#EBF3F9] text-[#1A3D63] flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <span className="text-[#0A1931] font-semibold block">{att.title}</span>
                            {att.fileSize && (
                              <span className="text-[#62839F] font-mono text-[11px] block">
                                Document Format: {att.fileType.toUpperCase()} ({att.fileSize})
                              </span>
                            )}
                          </div>
                        </div>

                        <a
                          href={att.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1A3D63] bg-[#EBF3F9] hover:bg-[#D2E3F0] border border-[#B3CFE5] rounded-2xs transition-colors shrink-0"
                        >
                          <span>Open Document</span>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-4 border-t border-[#D2E3F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs text-[#62839F] font-mono">
                  Official Administrative Record · Sealed Dispatch
                </span>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F6FAFD] bg-[#0A1931] hover:bg-[#1A3D63] rounded-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3D63]"
                >
                  Close Gazette Dispatch
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
