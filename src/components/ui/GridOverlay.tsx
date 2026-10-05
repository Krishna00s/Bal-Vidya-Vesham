interface GridOverlayProps {
  className?: string
  showColumns?: boolean
  showCrosshairs?: boolean
}

/**
 * GridOverlay provides the authentic Swiss architectural grid layer.
 * Rendered behind section content (z-0, pointer-events-none).
 * Aligns strictly to the 1440px 12-column master grid.
 */
export function GridOverlay({
  className = '',
  showColumns = true,
  showCrosshairs = true,
}: GridOverlayProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Outer horizontal bounds */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[rgba(20,32,31,0.10)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[rgba(20,32,31,0.12)]" />

      {/* Grid container strictly matching Container.tsx padding & max-width */}
      <div className="mx-auto w-full max-w-[1440px] h-full px-5 sm:px-8 md:px-12 lg:px-16 relative">
        {/* Outer margin vertical bounding lines */}
        <div className="absolute left-5 sm:left-8 md:left-12 lg:left-16 top-0 bottom-0 w-[1px] bg-[rgba(20,32,31,0.08)]" />
        <div className="absolute right-5 sm:right-8 md:right-12 lg:right-16 top-0 bottom-0 w-[1px] bg-[rgba(20,32,31,0.08)]" />

        {/* 12-Column structural grid (4 columns on mobile, 12 on desktop) */}
        {showColumns && (
          <div className="grid grid-cols-4 lg:grid-cols-12 h-full w-full">
            {/* First 4 columns (Mobile + Desktop) */}
            <div className="h-full border-r border-[rgba(20,32,31,0.04)]" />
            <div className="h-full border-r border-[rgba(20,32,31,0.04)]" />
            <div className="h-full border-r border-[rgba(20,32,31,0.04)]" />
            <div className="h-full border-r border-[rgba(20,32,31,0.04)] lg:border-[rgba(20,32,31,0.04)]" />

            {/* Desktop columns 5 to 12 */}
            <div className="hidden lg:block h-full border-r border-[rgba(20,32,31,0.14)]" /> {/* Col 5 border (structural text boundary) */}
            <div className="hidden lg:block h-full border-r border-[rgba(20,32,31,0.04)]" />
            <div className="hidden lg:block h-full border-r border-[rgba(20,32,31,0.04)]" />
            <div className="hidden lg:block h-full border-r border-[rgba(20,32,31,0.04)]" />
            <div className="hidden lg:block h-full border-r border-[rgba(20,32,31,0.04)]" />
            <div className="hidden lg:block h-full border-r border-[rgba(20,32,31,0.04)]" />
            <div className="hidden lg:block h-full border-r border-[rgba(20,32,31,0.14)]" /> {/* Col 11 border (structural sidebar boundary) */}
            <div className="hidden lg:block h-full border-r border-transparent" />
          </div>
        )}

        {/* Horizontal registration line across the hero */}
        <div className="absolute top-[68px] sm:top-[84px] lg:top-[92px] left-5 sm:left-8 md:left-12 lg:left-16 right-5 sm:right-8 md:right-12 lg:right-16 h-[1px] bg-[rgba(20,32,31,0.06)]" />

        {/* Swiss crosshair registration marks at key column intersections */}
        {showCrosshairs && (
          <>
            {/* Column 6 intersection crosshair (41.6667% = 5/12) */}
            <div className="hidden lg:block absolute left-[calc(20px+((100%-40px)*5/12))] sm:left-[calc(32px+((100%-64px)*5/12))] md:left-[calc(48px+((100%-96px)*5/12))] lg:left-[calc(64px+((100%-128px)*5/12))] top-[92px] -translate-x-1/2 -translate-y-1/2 w-[11px] h-[11px]">
              <svg viewBox="0 0 11 11" className="w-full h-full text-[rgba(20,32,31,0.38)]" stroke="currentColor" strokeWidth="1">
                <line x1="5.5" y1="0" x2="5.5" y2="11" />
                <line x1="0" y1="5.5" x2="11" y2="5.5" />
              </svg>
            </div>

            {/* Column 12 intersection crosshair (91.6667% = 11/12) */}
            <div className="hidden lg:block absolute left-[calc(20px+((100%-40px)*11/12))] sm:left-[calc(32px+((100%-64px)*11/12))] md:left-[calc(48px+((100%-96px)*11/12))] lg:left-[calc(64px+((100%-128px)*11/12))] top-[92px] -translate-x-1/2 -translate-y-1/2 w-[11px] h-[11px]">
              <svg viewBox="0 0 11 11" className="w-full h-full text-[rgba(20,32,31,0.38)]" stroke="currentColor" strokeWidth="1">
                <line x1="5.5" y1="0" x2="5.5" y2="11" />
                <line x1="0" y1="5.5" x2="11" y2="5.5" />
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
