# Bal Vidyavasham --- Visual Design System

## 01. System Definition

Bal Vidyavasham uses a **Swiss-inspired editorial design system with a
warm educational character**.

The system combines:

-   International Typographic Style principles
-   editorial photography
-   strict grid alignment
-   warm paper-like neutrals
-   deep institutional green
-   oversized section numbering
-   restrained interface controls
-   human-centered school imagery

The system should feel:

**Precise + warm + intelligent + youthful + trustworthy.**

------------------------------------------------------------------------

# 02. Core Design Principles

## Order

Every section belongs to the same underlying grid.

## Hierarchy

There must always be an obvious:

``` text
Primary message
↓
Supporting message
↓
Action
↓
Metadata
```

## Contrast

Use contrast structurally:

``` text
Light section
↓
Dark section
↓
Light section
↓
Dark CTA
```

## Restraint

The system should never depend on decoration to create quality.

## Humanity

Children, teachers, classrooms, campus spaces, and school activities are
the emotional content.

------------------------------------------------------------------------

# 03. Color Tokens

Recommended initial palette:

``` css
:root {
  --color-paper: #F5F1E8;
  --color-paper-soft: #EEE9DD;
  --color-ink: #14201F;
  --color-ink-soft: #4B5552;
  --color-green: #063B31;
  --color-green-deep: #022B24;
  --color-line: rgba(20, 32, 31, 0.16);
  --color-line-light: rgba(245, 241, 232, 0.18);
  --color-white: #FFFFFF;
  --color-accent: #CDA66B;
}
```

The palette should remain restrained.

The accent color is for:

-   small highlights
-   active states
-   admission emphasis
-   selected metadata

It should not become the dominant brand color.

------------------------------------------------------------------------

# 04. Surface System

There are three primary surfaces.

### Paper

Primary page background.

``` text
Warm off-white
```

### Ink

Typography and high-contrast UI.

``` text
Near-black green
```

### Forest

Structural contrast.

``` text
Deep institutional green
```

Avoid introducing additional surface colors without a documented reason.

------------------------------------------------------------------------

# 05. Grid System

Desktop:

``` text
12 columns
24–32px gutters
48–80px margins
```

Tablet:

``` text
8 columns
20–24px gutters
32–48px margins
```

Mobile:

``` text
4 columns
12–16px gutters
20–24px margins
```

All major components should use the same container.

------------------------------------------------------------------------

# 06. Spacing System

Use a consistent spacing scale.

Recommended:

``` text
4
8
12
16
24
32
48
64
80
96
120
160
```

Small values:

-   icon gaps
-   label spacing
-   metadata

Medium values:

-   card padding
-   paragraph spacing
-   control spacing

Large values:

-   section separation
-   editorial breathing room

Do not create a new spacing value when an existing token works.

------------------------------------------------------------------------

# 07. Borders

Borders should be extremely restrained.

Default:

``` css
border: 1px solid var(--color-line);
```

Use borders for:

-   cards
-   navigation separation
-   event rows
-   grid structure

Avoid borders around every piece of content.

------------------------------------------------------------------------

# 08. Radius

Swiss-inspired components should remain relatively geometric.

Recommended:

``` text
small: 2–4px
medium: 6–8px
large: 10–12px
```

Avoid the common modern-web pattern of `24px–32px` rounded cards
everywhere.

Photography may have slightly softer corners when required by the
composition.

------------------------------------------------------------------------

# 09. Shadows

Shadows should be rare.

Default:

``` text
No shadow.
```

If a floating control genuinely needs elevation, use an extremely subtle
shadow.

The primary depth system is:

``` text
scale
spacing
overlap
contrast
```

not shadows.

------------------------------------------------------------------------

# 10. Image System

Photography is a primary design element.

Image treatment:

-   natural color
-   warm editorial grading
-   realistic skin tones
-   shallow depth of field where appropriate
-   authentic school environments
-   no excessive filters

Recommended aspect ratios:

``` text
Hero:        4:3 / 5:4
Editorial:   4:3
Portrait:    3:4
Card:        4:3
Wide:        16:9
```

Use `object-fit: cover` when an image is designed to fill a defined
composition.

Never stretch images.

------------------------------------------------------------------------

# 11. Image Composition

Images should behave like editorial photographs, not thumbnails.

Use:

-   large hero images
-   cropped supporting images
-   contact-sheet galleries
-   asymmetrical compositions
-   full-bleed CTA imagery

Avoid:

-   identical cards everywhere
-   unnecessary image borders
-   stock-photo collage aesthetics
-   excessive overlays

------------------------------------------------------------------------

# 12. Buttons

Buttons should be functional and compact.

Primary:

``` text
Explore the School →
```

Secondary:

``` text
Explore Academics →
```

Tertiary:

``` text
View Gallery →
```

Recommended visual structure:

``` text
[ label + arrow ]
```

Use a small circular or geometric arrow treatment where appropriate.

Avoid oversized pill buttons.

------------------------------------------------------------------------

# 13. Section Number System

Every major homepage chapter receives a number:

``` text
01
02
03
04
...
10
```

The number is part of the information architecture.

It should be:

-   large enough to identify the chapter
-   visually quiet enough not to compete with the headline
-   consistently positioned
-   aligned to the master grid

Example:

``` text
03

THE FIRST YEARS MATTER
```

------------------------------------------------------------------------

# 14. Micro Labels

Micro labels establish editorial hierarchy.

Examples:

``` text
ABOUT OUR SCHOOL
ACADEMICS
OUR CAMPUS
A MESSAGE FROM THE PRINCIPAL
OUR GALLERY
WHAT'S HAPPENING
```

Recommended:

``` text
font-size: 10–12px
letter-spacing: 0.10–0.16em
text-transform: uppercase
```

Do not make micro labels too loud.

------------------------------------------------------------------------

# 15. Iconography

Icons should be simple and geometric.

Preferred:

-   arrow
-   plus
-   menu
-   close
-   external-link
-   social icons

Avoid mixing multiple icon styles.

Use one consistent icon family.

------------------------------------------------------------------------

# 16. Motion System

Motion should be quiet and intentional.

### Entrance

``` text
opacity: 0 → 1
translateY: 20–40px → 0
```

### Image reveal

Use a clipped container:

``` text
clip-path:
inset(0 0 100% 0)
→
inset(0 0 0% 0)
```

### Stagger

Recommended:

``` text
50–100ms
```

### Duration

``` text
micro interaction: 180–250ms
standard:           400–700ms
editorial reveal:   700–1200ms
```

### Easing

Prefer smooth editorial easing over bouncy effects.

Avoid:

-   elastic animations
-   excessive parallax
-   constant floating elements
-   animation on every element

------------------------------------------------------------------------

# 17. Interaction Principles

Hover states should be subtle.

Example:

``` text
image scale: 1 → 1.025
arrow movement: 0 → 4px
opacity: slight change
```

No dramatic transformations.

The site should still feel premium when all animation is disabled.

------------------------------------------------------------------------

# 18. Accessibility

Minimum requirements:

-   WCAG-conscious contrast
-   keyboard access
-   visible focus
-   reduced motion
-   semantic HTML
-   descriptive alternative text
-   accessible form labels
-   touch targets of appropriate size

Never use color alone to communicate state.

------------------------------------------------------------------------

# 19. Responsive System

At smaller widths:

-   reduce typography proportionally
-   reduce section spacing
-   simplify image compositions
-   collapse navigation
-   convert grids into stacks
-   turn selected rows into horizontal scrollers
-   remove purely decorative elements

Do not simply hide content to make mobile easier.

------------------------------------------------------------------------

# 20. Swiss Design Rules

The system should continuously ask:

``` text
Can this be simpler?
Can this be better aligned?
Can typography communicate this?
Does this element have a purpose?
Is the whitespace doing enough work?
```

If the answer to the last question is no, the design is probably too
crowded.

------------------------------------------------------------------------

# 21. Design System Constraint

Do not introduce a new visual pattern without checking whether an
existing token/component can solve the problem.

The system should feel like **one visual language**, not a collection of
individual sections.
