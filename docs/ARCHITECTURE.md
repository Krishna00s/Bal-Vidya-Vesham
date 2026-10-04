# Bal Vidyavasham --- Website Architecture

## 01. Design Direction

Bal Vidyavasham should be treated as a **Swiss-inspired editorial school
website** rather than a conventional school template.

The architecture follows five principles:

1.  **Order** --- a strict grid and predictable information hierarchy.
2.  **Clarity** --- every section has one primary message and one
    primary action.
3.  **Typography as structure** --- headings, numbering, labels, and
    metadata carry the navigation of the page.
4.  **Asymmetry with discipline** --- compositions may feel editorial
    and asymmetric, but every element remains aligned to the underlying
    grid.
5.  **Content before decoration** --- photography, copy, statistics,
    admissions information, and school facts are the content; motion and
    visual effects support them rather than compete with them.

The visual reference is the supplied Bal Vidyavasham homepage mockup.
The homepage is organized as a numbered narrative from `01` through
`10`, ending in admissions and the footer.

------------------------------------------------------------------------

## 02. Application Structure

Recommended implementation:

``` text
bal-vidyavasham/
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── SectionNumber.tsx
│   │   │   └── Container.tsx
│   │   ├── navigation/
│   │   │   ├── MainNav.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── EnquireButton.tsx
│   │   ├── media/
│   │   │   ├── Image.tsx
│   │   │   ├── ImageGrid.tsx
│   │   │   └── EditorialMedia.tsx
│   │   ├── cards/
│   │   │   ├── AcademicCard.tsx
│   │   │   ├── ActivityCard.tsx
│   │   │   ├── CampusCard.tsx
│   │   │   └── EventCard.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── FirstYearsMatter.tsx
│   │   │   ├── AcademicsSection.tsx
│   │   │   ├── ActivitiesSection.tsx
│   │   │   ├── CampusSection.tsx
│   │   │   ├── PrincipalMessage.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── EventsSection.tsx
│   │   │   └── AdmissionsCTA.tsx
│   │   └── ui/
│   │       ├── ArrowButton.tsx
│   │       ├── PillButton.tsx
│   │       ├── Divider.tsx
│   │       └── Marquee.tsx
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── academics.ts
│   │   ├── activities.ts
│   │   ├── campus.ts
│   │   ├── gallery.ts
│   │   └── events.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Academics.tsx
│   │   ├── Campus.tsx
│   │   ├── Activities.tsx
│   │   ├── Gallery.tsx
│   │   ├── Admissions.tsx
│   │   └── Contact.tsx
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── typography.css
│   │   ├── grid.css
│   │   └── globals.css
│   ├── hooks/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
└── README.md
```

The exact folder names may change during implementation, but the
separation of **layout, content, media, sections, data, and design
tokens** should remain.

------------------------------------------------------------------------

## 03. Page Architecture

### Primary routes

``` text
/
├── Home
├── About
├── Academics
├── Campus
├── Activities
├── Gallery
├── Admissions
└── Contact
```

Secondary utility routes may include:

``` text
/privacy
/terms
/404
```

The homepage should not become a giant monolithic component. Each
numbered narrative section should be independently maintainable.

------------------------------------------------------------------------

## 04. Homepage Information Architecture

The homepage follows this sequence:

``` text
Header
  ↓
01 — Hero / School Introduction
  ↓
02 — About Our School
  ↓
03 — The First Years Matter
  ↓
04 — Academics
  ↓
05 — Life at Bal Vidyavasham
  ↓
06 — Our Campus
  ↓
07 — Principal's Message
  ↓
08 — Our Gallery
  ↓
09 — What's Happening / Events
  ↓
10 — Admissions
  ↓
Footer
```

This order should remain stable unless there is a documented content
reason to change it.

------------------------------------------------------------------------

## 05. Content Architecture

Content should be data-driven wherever repetition exists.

Example:

``` ts
type AcademicLevel = {
  title: string
  ageRange?: string
  description?: string
  image: string
  href: string
}

type Activity = {
  title: string
  image: string
  href?: string
}

type CampusSpace = {
  title: string
  image: string
  description?: string
}

type SchoolEvent = {
  date: string
  month: string
  title: string
  category: string
  href?: string
}
```

Repeated cards must not be hard-coded as separate JSX structures.

------------------------------------------------------------------------

## 06. Layout Architecture

Use a global editorial container rather than independently positioned
sections.

Conceptually:

``` text
| outer margin | 12-column grid | outer margin |
```

Desktop sections can use asymmetric column spans:

``` text
Section label / number
        +
Large editorial headline
        +
Supporting copy
        +
Media composition
```

The grid is the invisible structure behind the apparent freedom.

Absolute positioning should be reserved for decorative or intentionally
overlapping elements. Core content must remain in normal document flow.

------------------------------------------------------------------------

## 07. Responsive Architecture

Responsive behavior should be designed, not merely scaled.

### Large desktop

-   12-column grid
-   generous outer margins
-   asymmetric media compositions
-   large editorial typography
-   overlapping image compositions where useful

### Tablet

-   8-column conceptual grid
-   reduced image overlap
-   reduced headline scale
-   fewer simultaneous cards

### Mobile

-   4-column conceptual grid
-   one dominant content flow
-   image compositions become stacked or horizontally scrollable
-   navigation becomes a compact menu
-   decorative metadata is reduced
-   section numbering remains visible
-   no horizontal page overflow

The mobile layout should preserve the **hierarchy** of the desktop
design, not necessarily its exact geometry.

------------------------------------------------------------------------

## 08. Motion Architecture

Motion should reinforce the editorial sequence.

Recommended motion categories:

-   `fade-up` --- section copy
-   `image-reveal` --- editorial imagery
-   `clip-reveal` --- large image entrances
-   `stagger` --- card groups
-   `horizontal-drift` --- selected editorial elements
-   `counter` --- statistics where meaningful
-   `marquee` --- restrained text or event information
-   `hover-lift` --- interactive cards

GSAP/ScrollTrigger may be used for high-quality sequencing, but every
animation must have cleanup and must respect `prefers-reduced-motion`.

No animation should delay access to essential school information.

------------------------------------------------------------------------

## 09. Performance Architecture

Images are the largest visual payload and must be treated as first-class
performance assets.

Rules:

-   Use responsive image sizes.
-   Prefer AVIF/WebP where supported.
-   Lazy-load below-the-fold imagery.
-   Eager-load only the primary hero media.
-   Provide explicit image dimensions to reduce layout shift.
-   Avoid loading gallery images before the gallery is near the
    viewport.
-   Avoid shipping duplicate image variants unnecessarily.
-   Keep animation libraries scoped to actual usage.
-   Avoid global event listeners when a component-scoped observer is
    sufficient.

The first viewport must remain visually rich without becoming
unnecessarily heavy.

------------------------------------------------------------------------

## 10. Accessibility Architecture

The Swiss-inspired aesthetic must not compromise usability.

Required:

-   semantic headings
-   logical heading order
-   keyboard navigation
-   visible focus states
-   descriptive image `alt` text
-   accessible buttons and links
-   sufficient contrast
-   reduced-motion support
-   accessible mobile navigation
-   form labels and validation
-   meaningful link text

Visual minimalism must never mean removing useful accessibility
information.

------------------------------------------------------------------------

## 11. Architectural Rule

**Do not build visual complexity through technical complexity.**

The implementation should feel sophisticated while remaining
structurally simple:

``` text
Design System
      ↓
Reusable Components
      ↓
Data
      ↓
Sections
      ↓
Pages
```

The architecture should make it possible to update school content
without rewriting the visual system.
