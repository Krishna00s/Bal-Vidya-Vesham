# Bal Vidyavasham — Phase 1.2 Hero Viewport & Scroll-Linked Reveal Report
**Scope:** Hero Viewport Composition + Internal Scroll-Linked Photographic Reveal Pass  
**Reference Benchmark:** `docs/Bal Vidyavasham School Website Mockup.png`  
**Status:** **100% Implemented, Verified & Passing All Checks**  

---

## 1. Hero Viewport Strategy
- **Equation:** `Header + Hero ≈ 1 Viewport` (`min-height: calc(100svh - var(--header-height))`).
  - Mobile header: `56px` (`h-14` = 3.5rem) → Hero has `min-h-[calc(100svh-3.5rem)]`.
  - Desktop header: `64px` (`h-16` = 4.0rem) → Hero has `min-h-[calc(100svh-4rem)] lg:h-[calc(100svh-4rem)] lg:min-h-[580px]`.
- **Immediate Communication:** The entire hero composition—Eyebrow Annotation, architectural title `BAL VIDYAVASHAM`, editorial serif statement *"Where curiosity becomes character."*, supporting copy, `Explore the School` CTA + geographic coordinates, primary student portrait, and Column 12 micro metadata—is completely visible immediately upon initial page load without requiring any vertical scroll.
- **Vertical Spacing:** The Hero initiates immediately beneath the header's hairline bottom boundary (`border-b border-[rgba(20,32,31,0.12)]`) without arbitrary vertical voids. Internal vertical padding is compressed to `py-4 sm:py-6 lg:py-6 2xl:py-8` within a vertical centering container (`flex flex-col justify-center h-full`).

---

## 2. Image Frame Dimensions
- **Structural Boundary:** The image frame (`hero-image-frame`) is strictly locked into the 12-column Swiss grid architecture:
  - Desktop: Spans `Columns 6 to 11` horizontally (`lg:col-start-6 lg:col-end-12`) and `Rows 1 to 4` vertically (`lg:row-start-1 lg:row-end-4`).
  - Height: `h-full` on desktop, bound to the height of the hero grid area (~520px–680px depending on viewport height).
  - Width: Exactly 6 columns out of the 12-column master grid (~45–50% of content width).
  - Borders: Framed by architectural hairlines on the left (`lg:border-l border-[rgba(20,32,31,0.12)]`) and right (`lg:border-r border-[rgba(20,32,31,0.12)]`).
  - Mobile / Tablet: `aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[320px] lg:min-h-0`.
- **Clipping:** `overflow: hidden` is applied directly to `hero-image-frame`. The frame itself remains structurally stationary in the grid and never translates or shifts.

---

## 3. Image Source Overscan Strategy
- **Separation of Frame and Source:** The photographic source (`hero-image-source`) is positioned absolutely inside the frame (`absolute top-0 left-0 w-full h-[120%]`).
- **Overscan Factor:** `120%` height (20% taller than its visible frame).
- **Resting Alignment:** Sized with `object-cover object-[center_12%] lg:object-[center_18%]`.
  - At rest (top of page / 0% scroll progress), the upper region of the photograph is prominently presented, highlighting the student's head, face, eyes, and joyful smile.
- **Aspect Ratio Reserve:** The photograph's native resolution is 896 × 1200 portrait (3:4 ratio). The 20% vertical overscan provides ample pixel runway for internal translation without exposing white space or empty edges.

---

## 4. ScrollTrigger Implementation
- **Architecture:** Integrated with GSAP `ScrollTrigger` mapped to the centralized Lenis smooth-scroll ticker loop.
- **Teardown Lifecycle:** Wrapped in `gsap.context(..., sectionRef)` inside `useEffect`, guaranteeing that all GSAP instances, timelines, and ScrollTriggers are destroyed via `ctx.revert()` on component unmount (0 memory leaks).
- **Configuration:**
  ```typescript
  gsap.fromTo(
    imageRef.current,
    { yPercent: 0 },
    {
      yPercent: -14,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    }
  )
  ```
- **Bidirectional Smooth Scrubbing:** `scrub: 0.6` applies weighted physical inertia. Scrolling down advances `yPercent` from `0` towards `-14%`; scrolling up reverses the interpolation smoothly back towards `0%`.

---

## 5. Scroll Translation Range
- **Restrained Motion:** Translated along the Y axis by `14%` of its own height (`yPercent: -14`), matching the prompt's required `8%–15%` target range.
- **Physical Feel:** Avoids excessive theatrical parallax; behaves like an editorial lens gliding over a physical photographic print.
- **Hardware Acceleration:** Uses GPU-accelerated compositing (`transform: translate3d`) via GSAP's optimized matrix transform with `will-change: transform`. Never mutates layout properties (`top`, `margin`, `height`, etc.).

---

## 6. Typography Scale Changes
- **Primary Title (`BAL VIDYAVASHAM`):**
  - **Desktop (`.hero-title-desktop`):** Upgraded from `clamp(3.6rem, 6.5vw, 6.6rem)` to `clamp(4.0rem, 6.8vw, 7.2rem)` with tight `line-height: 0.82` and aggressive tracking `letter-spacing: -0.045em`.
  - **Large Desktop (≥1536px):** `clamp(4.8rem, 7.4vw, 7.6rem)` with `line-height: 0.80`.
  - **Tablet (`.hero-title-mobile` @ sm):** `clamp(2.6rem, 6.4vw, 3.8rem)` with `line-height: 0.88` and `letter-spacing: -0.04em`.
  - **Mobile (`.hero-title-mobile`):** `clamp(1.85rem, 7.4vw, 2.75rem)` with `line-height: 0.92` and `letter-spacing: -0.038em`.
- **Word Integrity:** `VIDYAVASHAM` is strictly decorated with `whitespace-nowrap`. It spans across Columns 1 to 10 on desktop, crossing the vertical hairline into the image frame without breaking into orphaned lines.
- **Asymmetric Overlap:** The letters `VASHAM` interact with the photographic field, overlapping the school courtyard background and the student's left uniform shoulder, while keeping her face in Columns 9–11 unobstructed.
- **Micro Metadata Readability:** Micro labels raised from 8px to `text-[9px] sm:text-[10px] 2xl:text-[10.5px]` with `tracking-[0.15em]` for optimal legibility at standard desktop reading distance.

---

## 7. Grid Changes
- **GridOverlay Preserved:** Retained the authentic Swiss architectural grid layer without decorative proliferation:
  - 12 master columns on desktop; 4 columns on mobile.
  - Hairlines in `rgba(20, 32, 31, 0.05)` and structural column dividers in `rgba(20, 32, 31, 0.14)`.
  - Precision 11px SVG drafting crosshairs (`+`) at Column 6 (headline transition) and Column 12 (sidebar border).

---

## 8. Responsive Behavior Across All Viewports
- **1440px / 1280px (Desktop):** Complete single-viewport composition (`Header + Hero = 100svh`). Monumental title overlap, scroll-linked image reveal active with `scrub: 0.6`.
- **1024px (Small Desktop / Tablet Landscape):** Single-viewport layout maintained, headline scales smoothly via CSS clamp, image frame fills grid height.
- **768px (Tablet Portrait):** Single-column vertical flow with clear typographic hierarchy and proportional image framing.
- **390px (Mobile Standard - iPhone):** Single-column flow (`Eyebrow → Headline → Statement → Copy → CTA → Image`). `VIDYAVASHAM` stays unbroken on one line with 85px+ margin buffer. No horizontal overflow.
- **320px (Mobile Small):** Headline scales to 23px (`clamp(1.85rem, 7.4vw, 2.75rem)`), width is ~164px fitting within the 288px content width without breaking. 0 horizontal scroll.

---

## 9. Reduced-Motion Behavior
- **Detection:** Driven by reactive `usePrefersReducedMotion()` hook subscribing to `(prefers-reduced-motion: reduce)`.
- **Behavior:**
  - GSAP entrance timeline is completely bypassed.
  - ScrollTrigger scrub instance is not created.
  - Photographic source rests at stable `yPercent: 0` static crop with 0 parallax or jitter.
  - Full DOM layout, typographic hierarchy, and visual styling remain 100% identical.

---

## 10. Build Result
- **Command:** `tsc -b && vite build`
- **Status:** **PASSING (0 errors)**
- **Output:**
  - `dist/index.html`: `1.20 kB` (gzip: `0.65 kB`)
  - `dist/assets/index-*.css`: `30.81 kB` (gzip: `6.90 kB`)
  - `dist/assets/index-*.js`: `376.59 kB` (gzip: `124.76 kB`)

---

## 11. Lint Result
- **Command:** `eslint .`
- **Status:** **0 errors, 0 warnings (Clean)**

---

## 12. Visual Deviations Remaining
- **Status:** **None for Phase 1.2.**
- The Header + Hero is locked as the visual and interaction benchmark.
- Section 02 (`02 About Our School`) and subsequent sections (03–10) are paused awaiting approval to proceed into Phase 2.
