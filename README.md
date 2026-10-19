# Bal Vidyavasham × Manjurmati High School

The official dual-institution web platform for **Bal Vidyavasham** (Foundational & Primary Wing, Classes Nursery–V) and **Manjurmati High School** (Secondary Wing, Classes VI–X, JAC Affiliated), located in Mahadetoli, Senha, Lohardaga, Jharkhand.

---

## 🏛️ Project Overview

- **Dual-School Identity:** Bal Vidyavasham (Foundational & Primary) and Manjurmati High School (JAC Secondary).
- **Core Visual Identity:** The Living Ocean Canvas with editorial styling.
  - Midnight Navy: `#0A1931`
  - Deep Marine: `#1A3D63`
  - Ocean Blue: `#4A7FA7`
  - Powder Blue: `#B3CFE5`
  - Porcelain: `#F6FAFD`
- **Typography:**
  - Display: *Cormorant Garamond*
  - Editorial & Gazette: *Newsreader*
  - Body & UI: *Plus Jakarta Sans*
  - Monospace / Metadata: *JetBrains Mono*
- **Motion Architecture:** Lenis smooth scrolling, GSAP ScrollTrigger timeline reveals, ImageApertures, and WebGL dynamic wave shaders.

---

## 🗺️ Website Architecture & Destinations

The application features 10 fully implemented client-side destinations:

1. `/` — Home (Hero, School Chapters, Facilities, Principals' Leadership, Gazette Noticeboard, School Life Chronicle, Admissions callout)
2. `/junior-school` — Bal Vidyavasham Primary Wing (Nursery–V)
3. `/senior-school` — Manjurmati High School Secondary Wing (VI–X)
4. `/academics` — Comprehensive Curricular Frameworks & Pedagogical Structure
5. `/facilities` — Infrastructure, Science Laboratories, Atal Tinkering Lab (ATL), and Campus Grounds
6. `/faculty-leadership` — Administrative Leadership, Principals' Messages, and Faculty Profiles
7. `/notices` — Institutional Gazette & Archival Document Register
8. `/school-life` — Visual Chronicles, Daily Schedule, and Student Cohort Milestones
9. `/admissions` — 3-Step Enrolment Roadmap (School Selection, Document Checklist, Static Client-Side Dispatch)
10. `/contact` — Campus Location, Transportation Guides, and Direct Enquiry Helplines
11. `*` — 404 Institutional Recovery Page

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (native `@theme` tokens in `src/index.css`)
- **Animation:** GSAP 3 + Lenis smooth scroll
- **Type Checking:** TypeScript Compiler (`tsc --noEmit`)

---

## 📂 Project Structure

```text
src/
├── components/          # Institutional components (Hero, SchoolChapters, Facilities,
│                        # PrincipalsMessage, Noticeboard, OceanCanvas, Header, Footer)
├── data/                # Typed domain models (notices, facilities, faculty, principals, contact)
├── motion/              # Lenis smooth scroll, GSAP context, ImageAperture, ScrollReveal
├── pages/               # 10 dedicated view destinations + 404 recovery
├── router/              # Lightweight client-side router
├── App.tsx              # Root application shell with Living Ocean Canvas & Lenis provider
├── index.css            # Tailwind v4 theme tokens, color scales, custom typography
└── main.tsx             # Client entry point
public/
├── images/              # High-fidelity WebP & JPG documentary photographs
├── images_source_originals/ # Source archive photographs
├── favicon.svg          # Institutional SVG mark
├── robots.txt           # Production search crawler instructions
├── sitemap.xml          # XML sitemap indexing all 10 destinations
└── _redirects           # Static SPA rewrite rules
```

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Type Checking & Production Build
```bash
npm run typecheck
npm run build
```

### Production Preview
```bash
npm run preview
```

---

## 📚 Historical Documentation

Legacy phase reports and initial foundation documentation are archived in [`docs/archive_legacy_phases/`](./docs/archive_legacy_phases/).
