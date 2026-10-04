# Bal Vidyavasham — Official School Website

An editorial, Swiss International Typographic Style-inspired website for **Bal Vidyavasham**, blending rigorous typographic discipline, structured grid systems, warm educational atmosphere, and high-performance frontend architecture.

---

## 🏛️ Project Overview

- **Design Philosophy:** Swiss International Style + Warm Academic Heritage.
- **Core Palette:** Warm Paper / Ivory (`#F5F1E8`), Deep Institutional Green (`#063B31`), Dark Ink (`#14201F`), Restrained Champagne / Gold (`#CDA66B`).
- **Typography:** `Inter` (Functional/UI hierarchy) + `Cormorant Garamond` (Editorial display & storytelling).
- **Smooth Scrolling & Motion:** Lenis + GSAP (ScrollTrigger-ready, strict lifecycle teardown via `gsap.context()`, and `prefers-reduced-motion` compliance).

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (native `@theme` tokens in `src/index.css`)
- **Animation:** GSAP 3 + Lenis smooth scroll
- **Icons:** Lucide React
- **Quality & Linting:** ESLint 9 + TypeScript Compiler (`tsc -b`)

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── layout/            # Header, MobileNav, Layout wrappers
│   ├── sections/          # Page sections (HeroSection, etc.)
│   └── ui/                # Core primitives (Container, Button, MicroLabel, etc.)
├── content/               # Typed school data & navigation models
├── hooks/                 # Custom hooks (e.g. usePrefersReducedMotion)
├── motion/                # Centralized Lenis & GSAP ticker bridge
├── types/                 # TypeScript interfaces and domain schemas
├── App.tsx                # Application root with smooth scroll provider
├── index.css              # Tailwind v4 theme tokens & typography styles
└── main.tsx               # Client entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm or pnpm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build & Verification
```bash
npm run build
npm run lint
```

---

## 📄 Phase 1 Implementation Status

- [x] Design token system defined in Tailwind v4 (`@theme`)
- [x] Centralized Lenis smooth scroll & GSAP ticker integration
- [x] Accessible, responsive navigation header (Desktop numbered menu + Mobile drawer with focus trapping)
- [x] Complete Hero Section visual benchmark according to design specification
- [x] Verified zero horizontal overflow across 320px–1920px viewports
- [x] Full audit report available in [`PHASE_1_IMPLEMENTATION_REPORT.md`](./PHASE_1_IMPLEMENTATION_REPORT.md)
