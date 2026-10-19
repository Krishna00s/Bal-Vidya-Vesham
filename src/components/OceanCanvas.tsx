import React from 'react';

export type OceanVariant =
  | 'hero'
  | 'transition'
  | 'chapter-bal'
  | 'chapter-manjur'
  | 'school-life'
  | 'quiet';

interface OceanCanvasProps {
  variant?: OceanVariant;
  className?: string;
  intensity?: 'subtle' | 'standard' | 'deep';
  animated?: boolean;
}

export const OceanCanvas: React.FC<OceanCanvasProps> = ({
  variant = 'hero',
  className = '',
  intensity = 'standard',
  animated = true,
}) => {
  const animClass1 = animated ? 'animate-ocean-drift-1' : '';
  const animClass2 = animated ? 'animate-ocean-drift-2' : '';
  const animRibbon = animated ? 'animate-ocean-ribbon' : '';
  const animPulse = animated ? 'animate-ocean-pulse' : '';
  const animShimmer = animated ? 'animate-ocean-shimmer' : '';
  const animCurrent = animated ? 'animate-ocean-current' : '';

  // ─────────────────────────────────────────────────────────────────────────────
  // HERO VARIANT: Immersive Living Ocean Painting (Phase D.1 Enhanced)
  // Bespoke multi-layered composition uniting typography and photography:
  // - Atmospheric watercolor glazes with enriched ocean-blue & powder-blue presence
  // - Deep midnight navy (#0A1931) & marine blue (#1A3D63) sculptural tidal surges
  //   sweeping from the right and wrapping under the photographic plates
  // - Intermediate translucent ocean-blue (#4A7FA7) wave shelf creating watercolor glaze depth
  // - Luminous wave-crest highlight glaze with shifting surface reflection
  // - Multi-tier suminagashi marbling filaments in powder blue (#B3CFE5) & porcelain white
  // - Interlocking ocean swell visually bridging Plate I and Plate II
  // - Uninterrupted porcelain white negative space for MANJURMATI headline
  // ─────────────────────────────────────────────────────────────────────────────
  if (variant === 'hero') {
    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 980"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full object-cover"
        >
          <defs>
            {/* 1. Deep Midnight to Marine Tidal Gradient with Enhanced Ocean Blue */}
            <linearGradient id="hero-deep-surge" x1="1440" y1="320" x2="760" y2="940" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0A1931" stopOpacity="0.98" />
              <stop offset="25%" stopColor="#1A3D63" stopOpacity="0.92" />
              <stop offset="55%" stopColor="#4A7FA7" stopOpacity="0.78" />
              <stop offset="82%" stopColor="#B3CFE5" stopOpacity="0.45" />
              <stop offset="95%" stopColor="#B3CFE5" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </linearGradient>

            {/* 2. Secondary Marine to Vibrant Ocean Swell */}
            <linearGradient id="hero-mid-swell" x1="1440" y1="450" x2="620" y2="980" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1A3D63" stopOpacity="0.90" />
              <stop offset="35%" stopColor="#4A7FA7" stopOpacity="0.82" />
              <stop offset="70%" stopColor="#B3CFE5" stopOpacity="0.48" />
              <stop offset="92%" stopColor="#B3CFE5" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </linearGradient>

            {/* 3. Translucent Intermediate Wave Shelf (Watercolor Glaze Depth) */}
            <linearGradient id="hero-wave-shelf" x1="1440" y1="400" x2="820" y2="780" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A7FA7" stopOpacity={intensity === 'deep' ? '0.75' : '0.62'} />
              <stop offset="45%" stopColor="#4A7FA7" stopOpacity="0.48" />
              <stop offset="75%" stopColor="#B3CFE5" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </linearGradient>

            {/* 4. Connecting Undertow: Weaving between and under Plate I & Plate II */}
            <linearGradient id="hero-bridge-undertow" x1="1180" y1="580" x2="520" y2="960" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1A3D63" stopOpacity="0.75" />
              <stop offset="42%" stopColor="#4A7FA7" stopOpacity="0.60" />
              <stop offset="80%" stopColor="#B3CFE5" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </linearGradient>

            {/* 5. Luminous Surface Crest Highlight Sheen */}
            <linearGradient id="hero-crest-shimmer" x1="1380" y1="360" x2="940" y2="820" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F6FAFD" stopOpacity="0.90" />
              <stop offset="25%" stopColor="#B3CFE5" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#4A7FA7" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#1A3D63" stopOpacity="0" />
            </linearGradient>

            {/* 6. Suminagashi Primary Marbling Filament Gradient */}
            <linearGradient id="hero-filament-grad" x1="1440" y1="360" x2="800" y2="880" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F6FAFD" stopOpacity="0.98" />
              <stop offset="25%" stopColor="#B3CFE5" stopOpacity="0.92" />
              <stop offset="65%" stopColor="#4A7FA7" stopOpacity="0.70" />
              <stop offset="100%" stopColor="#1A3D63" stopOpacity="0" />
            </linearGradient>

            {/* 7. Enriched Ambient Atmospheric Glazes */}
            <radialGradient id="hero-ambient-topright" cx="1380" cy="120" r="580" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A7FA7" stopOpacity="0.18" />
              <stop offset="35%" stopColor="#B3CFE5" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#EBF3F9" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="hero-ambient-plates" cx="980" cy="700" r="650" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A7FA7" stopOpacity="0.28" />
              <stop offset="35%" stopColor="#B3CFE5" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#EBF3F9" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="hero-ambient-base" cx="180" cy="940" r="520" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1A3D63" stopOpacity="0.18" />
              <stop offset="30%" stopColor="#4A7FA7" stopOpacity="0.28" />
              <stop offset="65%" stopColor="#B3CFE5" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="hero-ambient-mid-drift" cx="720" cy="500" r="460" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#B3CFE5" stopOpacity="0.22" />
              <stop offset="55%" stopColor="#EBF3F9" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ── TIER 1: Atmospheric Watercolor Washes & Luminous Glazes ── */}
          <rect x="0" y="0" width="1440" height="980" fill="url(#hero-ambient-topright)" />
          <rect x="0" y="0" width="1440" height="980" fill="url(#hero-ambient-plates)" />
          <rect x="0" y="0" width="1440" height="980" fill="url(#hero-ambient-base)" />
          <rect x="0" y="0" width="1440" height="980" fill="url(#hero-ambient-mid-drift)" />

          {/* ── TIER 2: Deep Sculptural Tidal Masses (Layer A - Drift Cycle ~16s) ── */}
          <g className={animClass1}>
            {/* Major Ocean Surge that wraps around Plate II and grounds the right quadrant */}
            <path
              d="M1440 320 C1350 330 1250 410 1170 500 C1080 610 1050 720 1110 820 C1160 905 1240 945 1320 970 C1380 978 1420 980 1440 980 L1440 320 Z"
              fill="url(#hero-deep-surge)"
            />

            {/* Deep Marine Sculptural Ridge entering beneath Plate II */}
            <path
              d="M1440 440 C1360 450 1280 525 1210 615 C1130 715 1120 815 1190 900 C1240 945 1330 975 1440 980 L1440 440 Z"
              fill="#1A3D63"
              fillOpacity={intensity === 'deep' ? '0.75' : '0.58'}
            />

            {/* Translucent Intermediate Wave Shelf (Adds dimensional watercolor layering) */}
            <path
              d="M1440 380 C1330 395 1220 460 1150 560 C1070 670 1050 780 1120 870 C1170 930 1250 960 1350 978 L1440 980 Z"
              fill="url(#hero-wave-shelf)"
            />

            {/* Southwest Grounding Tide (anchors bottom-left without touching ledger) */}
            <path
              d="M0 980 L0 860 C100 850 190 875 270 915 C350 950 420 970 500 980 L0 980 Z"
              fill="url(#hero-ambient-base)"
            />
          </g>

          {/* ── TIER 3: Mid-Ocean Rolling Swell & Interlocking Currents (Layer B - Counter Drift ~20s) ── */}
          <g className={animClass2}>
            {/* Connecting Wave Tongue that weaves between Plate I and Plate II */}
            <path
              d="M1440 560 C1320 570 1200 645 1110 735 C1010 835 940 910 820 955 C750 972 660 980 580 980 L1440 980 Z"
              fill="url(#hero-mid-swell)"
            />

            {/* Subtle undertow curling under the bottom-right corner of Plate I */}
            <path
              d="M1160 720 C1050 745 945 810 875 880 C800 945 730 972 630 980 L1210 980 Z"
              fill="url(#hero-bridge-undertow)"
            />
          </g>

          {/* ── TIER 4: Luminous Crest Surface Glaze (Layer C - Shimmer Shift ~11s) ── */}
          <g className={animShimmer}>
            <path
              d="M1440 350 C1350 360 1260 425 1190 515 C1115 615 1090 715 1145 805 C1190 875 1265 915 1350 945 L1440 955 Z"
              fill="url(#hero-crest-shimmer)"
              fillOpacity="0.75"
            />
          </g>

          {/* ── TIER 5: Suminagashi Marbling Filaments (Layer D - Primary Ribbon Flow ~14s) ── */}
          <g className={animRibbon}>
            {/* Top Atmospheric Filament (drifts gently in upper right above content) */}
            <path
              d="M1440 90 C1350 80 1255 125 1195 175 C1120 235 1100 305 1140 365 C1180 415 1260 445 1345 475 L1440 495"
              stroke="#B3CFE5"
              strokeWidth="1.8"
              strokeOpacity="0.55"
              fill="none"
              strokeLinecap="round"
            />

            {/* Primary Marbling Vein framing the crest above Plate II */}
            <path
              d="M1440 355 C1335 365 1235 430 1150 525 C1060 630 1030 740 1090 840 C1140 915 1225 955 1315 978"
              stroke="url(#hero-filament-grad)"
              strokeWidth="2.75"
              fill="none"
              strokeLinecap="round"
            />

            {/* Parallel Porcelain Foam Lip catching crisp light along Plate II */}
            <path
              d="M1440 455 C1345 465 1255 530 1185 620 C1110 720 1100 820 1170 908 C1210 948 1285 970 1365 978"
              stroke="#F6FAFD"
              strokeWidth="2.2"
              strokeOpacity="0.95"
              fill="none"
              strokeLinecap="round"
            />

            {/* Fine Powder-Blue Current weaving between Plate I and Plate II */}
            <path
              d="M1380 605 C1265 620 1160 695 1070 795 C980 895 910 950 795 978"
              stroke="#B3CFE5"
              strokeWidth="2.0"
              strokeOpacity="0.85"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* ── TIER 6: Secondary Whispering Currents (Layer E - Counter Current Glide ~18s) ── */}
          <g className={animCurrent}>
            {/* Rich Ocean-Blue Ribbon bridging Plate I & Plate II gap */}
            <path
              d="M1320 540 C1220 560 1130 635 1055 730 C975 830 920 890 830 940"
              stroke="#4A7FA7"
              strokeWidth="1.75"
              strokeOpacity="0.65"
              fill="none"
              strokeLinecap="round"
            />

            {/* Whispering Vein curling beneath Plate I */}
            <path
              d="M1100 755 C995 778 900 845 830 918 C760 970 690 978 610 980"
              stroke="#B3CFE5"
              strokeWidth="1.5"
              strokeOpacity="0.70"
              fill="none"
              strokeLinecap="round"
            />

            {/* Southwest Whispering Foam Hairline */}
            <path
              d="M0 885 C105 875 195 898 280 935 C340 958 405 970 475 978"
              stroke="#B3CFE5"
              strokeWidth="1.5"
              strokeOpacity="0.55"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* ── TIER 7: Sea Spray & Mineral Foam Specks (Layer F - Gentle Breathing Pulse ~9s) ── */}
          <g className={animPulse}>
            <circle cx="1190" cy="520" r="3.0" fill="#F6FAFD" fillOpacity="0.88" />
            <circle cx="1150" cy="570" r="2.0" fill="#B3CFE5" fillOpacity="0.78" />
            <circle cx="1110" cy="640" r="2.6" fill="#F6FAFD" fillOpacity="0.90" />
            <circle cx="1075" cy="710" r="1.8" fill="#B3CFE5" fillOpacity="0.72" />
            <circle cx="1055" cy="780" r="2.4" fill="#F6FAFD" fillOpacity="0.82" />
            <circle cx="1085" cy="850" r="2.0" fill="#B3CFE5" fillOpacity="0.70" />
            <circle cx="1135" cy="905" r="2.5" fill="#F6FAFD" fillOpacity="0.78" />
            <circle cx="975" cy="845" r="2.2" fill="#B3CFE5" fillOpacity="0.70" />
            <circle cx="915" cy="895" r="1.8" fill="#F6FAFD" fillOpacity="0.80" />
          </g>
        </svg>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // TRANSITION VARIANT: Sculpted horizon bridging junior and senior chapters
  // Dual undulating wave contours moving in opposing directions across 1440x280.
  // ─────────────────────────────────────────────────────────────────────────────
  if (variant === 'transition') {
    return (
      <div
        className={`relative w-full h-28 sm:h-36 lg:h-44 overflow-hidden select-none pointer-events-none z-0 ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="trans-grad-1" x1="0" y1="130" x2="1440" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1A3D63" stopOpacity="0.14" />
              <stop offset="30%" stopColor="#4A7FA7" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#1A3D63" stopOpacity="0.60" />
              <stop offset="85%" stopColor="#0A1931" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#B3CFE5" stopOpacity="0.18" />
            </linearGradient>

            <linearGradient id="trans-grad-2" x1="0" y1="160" x2="1440" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A7FA7" stopOpacity="0.32" />
              <stop offset="45%" stopColor="#B3CFE5" stopOpacity="0.55" />
              <stop offset="80%" stopColor="#4A7FA7" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#1A3D63" stopOpacity="0.15" />
            </linearGradient>

            <linearGradient id="trans-filament" x1="0" y1="130" x2="1440" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#B3CFE5" stopOpacity="0.25" />
              <stop offset="38%" stopColor="#F6FAFD" stopOpacity="0.95" />
              <stop offset="72%" stopColor="#B3CFE5" stopOpacity="0.90" />
              <stop offset="100%" stopColor="#4A7FA7" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Primary Horizon Swell (Layer A - Drift ~16s) */}
          <g className={animClass1}>
            <path
              d="M0 120 C180 75 340 150 520 128 C720 105 880 45 1080 75 C1240 98 1360 140 1440 108 L1440 260 L0 260 Z"
              fill="url(#trans-grad-1)"
            />
          </g>

          {/* Secondary Counter-Swell (Layer B - Counter Drift ~20s) */}
          <g className={animClass2}>
            <path
              d="M0 155 C220 125 380 180 560 160 C760 140 920 95 1120 120 C1270 140 1380 175 1440 150 L1440 260 L0 260 Z"
              fill="url(#trans-grad-2)"
            />
          </g>

          {/* Flowing Marbling Filaments across Horizon (Layer C - Ribbon Flow ~14s) */}
          <g className={animRibbon}>
            <path
              d="M0 128 C190 85 350 158 530 136 C730 115 890 55 1090 85 C1250 108 1370 148 1440 116"
              stroke="url(#trans-filament)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0 158 C220 128 380 178 560 162 C760 146 920 98 1120 122 C1270 142 1380 172 1440 152"
              stroke="#F6FAFD"
              strokeWidth="1.8"
              strokeOpacity="0.9"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Fine Counter Current Hairline (Layer D - Current Glide ~18s) */}
          <g className={animCurrent}>
            <path
              d="M0 180 C260 155 420 205 620 185 C820 168 980 125 1180 150 C1310 168 1400 190 1440 175"
              stroke="#B3CFE5"
              strokeWidth="1.5"
              strokeOpacity="0.75"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // CHAPTER BAL VIDYAVASHAM VARIANT: Joyful, airy, vibrant powder & ocean blue
  // Encircles the junior school courtyard plate with tactile, spoken fluidity.
  // ─────────────────────────────────────────────────────────────────────────────
  if (variant === 'chapter-bal') {
    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 820"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full object-cover"
        >
          <defs>
            <radialGradient id="bal-wash" cx="260" cy="380" r="680" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A7FA7" stopOpacity="0.32" />
              <stop offset="35%" stopColor="#B3CFE5" stopOpacity="0.58" />
              <stop offset="70%" stopColor="#EBF3F9" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="bal-deep-swirl" x1="0" y1="180" x2="620" y2="720" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A7FA7" stopOpacity="0.38" />
              <stop offset="50%" stopColor="#B3CFE5" stopOpacity="0.58" />
              <stop offset="85%" stopColor="#EBF3F9" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="bal-mid-contour" x1="0" y1="260" x2="520" y2="780" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1A3D63" stopOpacity="0.28" />
              <stop offset="42%" stopColor="#4A7FA7" stopOpacity="0.48" />
              <stop offset="80%" stopColor="#B3CFE5" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="bal-filament" x1="0" y1="220" x2="480" y2="760" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F6FAFD" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#B3CFE5" stopOpacity="0.90" />
              <stop offset="80%" stopColor="#4A7FA7" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#1A3D63" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Left-side ambient glow behind junior image plate */}
          <rect x="0" y="0" width="1440" height="820" fill="url(#bal-wash)" />

          {/* Back Primary Junior Swirl (Layer A - Drift ~16s) */}
          <g className={animClass1}>
            <path
              d="M0 140 C130 120 250 195 335 295 C430 410 460 550 400 665 C355 740 290 780 200 820 L0 820 Z"
              fill="url(#bal-deep-swirl)"
            />
          </g>

          {/* Forward Fluid Contour (Layer B - Counter Drift ~20s) */}
          <g className={animClass2}>
            <path
              d="M0 240 C100 220 210 280 290 380 C370 485 390 610 330 715 C295 770 245 805 160 820 L0 820 Z"
              fill="url(#bal-mid-contour)"
            />
          </g>

          {/* Marbled curlicues and tactile learning currents (Layer C - Ribbon Flow ~14s) */}
          <g className={animRibbon}>
            <path
              d="M0 220 C145 200 270 275 355 385 C440 500 450 625 380 735 C335 800 270 815 200 820"
              stroke="url(#bal-filament)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0 300 C115 280 230 340 305 440 C380 540 390 645 330 750"
              stroke="#F6FAFD"
              strokeWidth="2.0"
              strokeOpacity="0.95"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Counter Current Filaments (Layer D - Current Glide ~18s) */}
          <g className={animCurrent}>
            <path
              d="M0 380 C100 365 200 420 265 510 C325 595 330 685 280 775"
              stroke="#4A7FA7"
              strokeWidth="1.75"
              strokeOpacity="0.70"
              fill="none"
              strokeLinecap="round"
            />
            {/* Right-side counter atmospheric filament */}
            <path
              d="M1440 660 C1280 630 1130 695 1010 770 L1440 820 Z"
              fill="#B3CFE5"
              fillOpacity="0.22"
            />
          </g>
        </svg>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // CHAPTER MANJURMATI VARIANT: Deep, structured, authoritative marine surges
  // Anchors the secondary scholarship & JAC matriculation study plate.
  // ─────────────────────────────────────────────────────────────────────────────
  if (variant === 'chapter-manjur') {
    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 870"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full object-cover"
        >
          <defs>
            <linearGradient id="manjur-surge" x1="1440" y1="160" x2="720" y2="760" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0A1931" stopOpacity="0.94" />
              <stop offset="30%" stopColor="#1A3D63" stopOpacity="0.88" />
              <stop offset="65%" stopColor="#4A7FA7" stopOpacity="0.68" />
              <stop offset="88%" stopColor="#B3CFE5" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="manjur-shelf" x1="1440" y1="280" x2="780" y2="820" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1A3D63" stopOpacity="0.75" />
              <stop offset="45%" stopColor="#4A7FA7" stopOpacity="0.60" />
              <stop offset="80%" stopColor="#B3CFE5" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="manjur-filament" x1="1440" y1="220" x2="780" y2="720" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F6FAFD" stopOpacity="0.98" />
              <stop offset="40%" stopColor="#B3CFE5" stopOpacity="0.90" />
              <stop offset="80%" stopColor="#4A7FA7" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#1A3D63" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Deep Sculptural Academic Surge framing right-side senior plate (Layer A - Drift ~16s) */}
          <g className={animClass1}>
            <path
              d="M1440 50 C1295 70 1160 175 1070 295 C965 425 945 580 1010 715 C1065 805 1180 848 1285 860 L1440 870 Z"
              fill="url(#manjur-surge)"
            />
          </g>

          {/* Secondary Academic Wave Shelf (Layer B - Counter Drift ~20s) */}
          <g className={animClass2}>
            <path
              d="M1440 180 C1320 200 1200 290 1120 400 C1035 520 1025 650 1085 765 C1135 830 1230 860 1330 870 L1440 870 Z"
              fill="url(#manjur-shelf)"
            />
          </g>

          {/* Discipline Ribbons and Board Study Contour Lines (Layer C - Ribbon Flow ~14s) */}
          <g className={animRibbon}>
            <path
              d="M1440 125 C1275 145 1150 250 1068 375 C975 505 975 640 1050 765 C1095 828 1190 858 1275 865"
              stroke="url(#manjur-filament)"
              strokeWidth="2.75"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M1440 210 C1315 220 1210 300 1140 415 C1068 528 1068 640 1122 745 C1165 818 1248 852 1345 865"
              stroke="#F6FAFD"
              strokeWidth="2.0"
              strokeOpacity="0.92"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Fluid Counter Ribbon (Layer D - Current Glide ~18s) */}
          <g className={animCurrent}>
            <path
              d="M1440 290 C1340 305 1255 375 1190 480 C1128 580 1125 680 1175 775"
              stroke="#B3CFE5"
              strokeWidth="1.75"
              strokeOpacity="0.80"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // SCHOOL LIFE VARIANT: Panoramic communal tide + marbling across academic year
  // Frames the morning assembly photograph with an expansive ocean horizon.
  // ─────────────────────────────────────────────────────────────────────────────
  if (variant === 'school-life') {
    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 980"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full object-cover"
        >
          <defs>
            <linearGradient id="life-panoramic" x1="0" y1="180" x2="1440" y2="720" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1A3D63" stopOpacity="0.55" />
              <stop offset="28%" stopColor="#4A7FA7" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#B3CFE5" stopOpacity="0.52" />
              <stop offset="85%" stopColor="#4A7FA7" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#0A1931" stopOpacity="0.65" />
            </linearGradient>

            <radialGradient id="life-ledger-wash" cx="1200" cy="800" r="550" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A7FA7" stopOpacity="0.25" />
              <stop offset="40%" stopColor="#B3CFE5" stopOpacity="0.42" />
              <stop offset="80%" stopColor="#F6FAFD" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Underlay glow behind Assembly photo and category ledger */}
          <rect x="0" y="0" width="1440" height="980" fill="url(#life-ledger-wash)" />

          {/* Sweeping rolling communal horizon (Layer A - Drift ~16s) */}
          <g className={animClass1}>
            <path
              d="M0 240 C260 190 520 270 760 250 C1020 230 1260 160 1440 200 L1440 480 C1240 445 1020 515 780 485 C540 455 260 515 0 465 Z"
              fill="url(#life-panoramic)"
            />
          </g>

          {/* Secondary Undulating Horizon (Layer B - Counter Drift ~20s) */}
          <g className={animClass2}>
            <path
              d="M0 320 C280 275 540 345 780 325 C1040 305 1270 235 1440 275 L1440 420 C1280 395 1050 450 820 430 C580 410 280 460 0 420 Z"
              fill="#B3CFE5"
              fillOpacity="0.35"
            />
          </g>

          {/* Delicate marbling ribbons weaving around Plates V, VI, VII (Layer C - Ribbon Flow ~14s) */}
          <g className={animRibbon}>
            <path
              d="M0 270 C280 220 540 300 780 280 C1040 260 1270 190 1440 230"
              stroke="#F6FAFD"
              strokeWidth="2.5"
              strokeOpacity="0.92"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0 325 C300 275 560 355 800 335 C1050 315 1290 245 1440 285"
              stroke="#B3CFE5"
              strokeWidth="1.8"
              strokeOpacity="0.80"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Counter Current Line (Layer D - Current Glide ~18s) */}
          <g className={animCurrent}>
            <path
              d="M0 370 C290 330 550 400 810 380 C1070 360 1300 295 1440 335"
              stroke="#4A7FA7"
              strokeWidth="1.5"
              strokeOpacity="0.65"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // QUIET VARIANT: Serene, atmospheric watercolor washes & drifting marbling lines
  // Enriches Facilities, Leadership, Noticeboard, Academics, Admissions, Contact
  // with living oceanic depth while preserving pristine readability and contrast.
  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full object-cover"
      >
        <defs>
          {/* Top-Right Soft Marine Wash */}
          <radialGradient id="quiet-ambient-topright" cx="1350" cy="80" r="520" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A7FA7" stopOpacity="0.16" />
            <stop offset="38%" stopColor="#B3CFE5" stopOpacity="0.30" />
            <stop offset="72%" stopColor="#EBF3F9" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
          </radialGradient>

          {/* Bottom-Left Grounding Wash */}
          <radialGradient id="quiet-ambient-bottomleft" cx="120" cy="520" r="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A7FA7" stopOpacity="0.15" />
            <stop offset="42%" stopColor="#B3CFE5" stopOpacity="0.28" />
            <stop offset="78%" stopColor="#EBF3F9" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
          </radialGradient>

          {/* Subtle Lower Wave Horizon */}
          <linearGradient id="quiet-wave-grad" x1="0" y1="380" x2="1440" y2="560" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1A3D63" stopOpacity="0.14" />
            <stop offset="35%" stopColor="#4A7FA7" stopOpacity="0.26" />
            <stop offset="70%" stopColor="#B3CFE5" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#F6FAFD" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Atmospheric Edge Glazes (Preserves generous clear center for text/cards) */}
        <rect x="0" y="0" width="1440" height="600" fill="url(#quiet-ambient-topright)" />
        <rect x="0" y="0" width="1440" height="600" fill="url(#quiet-ambient-bottomleft)" />

        {/* Gentle Undulating Wave Ridge along lower margin (Layer A - Drift ~20s) */}
        <g className={animClass2}>
          <path
            d="M0 420 C240 370 500 450 740 420 C980 390 1220 320 1440 360 L1440 600 L0 600 Z"
            fill="url(#quiet-wave-grad)"
          />
        </g>

        {/* Drifting Suminagashi Filaments (Layer B - Ribbon Flow ~14s) */}
        <g className={animRibbon}>
          <path
            d="M0 240 C340 180 680 280 1020 220 C1220 185 1360 230 1440 205"
            stroke="#B3CFE5"
            strokeWidth="2.0"
            strokeOpacity="0.65"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M0 440 C280 395 560 470 820 445 C1080 420 1300 355 1440 390"
            stroke="#F6FAFD"
            strokeWidth="2.2"
            strokeOpacity="0.88"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Secondary Delicate Hairline (Layer C - Current Glide ~18s) */}
        <g className={animCurrent}>
          <path
            d="M0 470 C310 435 590 505 870 480 C1120 455 1320 390 1440 425"
            stroke="#4A7FA7"
            strokeWidth="1.4"
            strokeOpacity="0.45"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default OceanCanvas;
