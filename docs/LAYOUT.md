# Bal Vidyavasham --- Layout Specification

## 01. Layout Philosophy

The website uses a **Swiss-inspired editorial layout system**.

The goal is not sterile minimalism. The goal is **controlled
composition**:

-   strict alignment
-   generous negative space
-   asymmetric balance
-   oversized typography
-   clear information hierarchy
-   strong photography
-   restrained decoration
-   functional navigation
-   consistent section numbering

The supplied homepage mockup should be treated as the visual reference
for composition.

------------------------------------------------------------------------

## 02. Global Canvas

The page should feel like a large editorial sheet rather than a stack of
conventional website sections.

Primary characteristics:

``` text
Warm off-white canvas
+
Fine grid lines
+
Dark ink typography
+
Deep green structural moments
+
Large photography
+
Small metadata
+
Oversized section numbers
```

The background should generally be warm rather than pure white.

Recommended base:

``` text
Canvas: #F5F1E8
Ink:    #14201F
Deep:   #063B31
```

These values are starting tokens, not immutable requirements.

------------------------------------------------------------------------

## 03. Global Grid

Desktop:

``` text
12 columns
24–32px gutters
48–80px outer margins
```

Large desktop:

``` text
| margin | 12-column editorial grid | margin |
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
20–24px outer padding
```

All major content should align to the same grid.

Avoid arbitrary left offsets between sections.

------------------------------------------------------------------------

# 04. Header

The header is intentionally quiet.

### Desktop composition

``` text
[Logo]       Home  About  Academics  Campus  Activities  Gallery  Admissions  Contact     [Enquire Now →]
```

Characteristics:

-   compact height
-   small uppercase or micro-label navigation
-   subtle separators/grid alignment
-   active state indicated through a small underline or marker
-   enquiry action visually separated from ordinary navigation

The header should not compete with the hero.

### Mobile

Use:

``` text
[Logo]                         [Menu]
```

The mobile menu should open as a clean editorial panel.

------------------------------------------------------------------------

# 05. Section 01 --- Hero

The hero establishes the entire visual language.

### Composition

Left:

-   micro label
-   oversized `BAL VIDYAVASHAM`
-   editorial statement
-   short description
-   primary CTA

Right:

-   large school-child image
-   image extends beyond the normal text rhythm
-   section metadata at the edge

Concept:

``` text
┌─────────────────────────────────────────────┐
│ Logo / Navigation                           │
├───────────────┬─────────────────────────────┤
│ micro label   │                             │
│ BAL           │       LARGE HERO IMAGE      │
│ VIDYAVASHAM   │                             │
│               │                             │
│ statement     │                             │
│ CTA           │                             │
└───────────────┴─────────────────────────────┘
```

The headline may visually overlap the image, but the semantic HTML must
remain logical.

------------------------------------------------------------------------

# 06. Section 02 --- About Our School

This section introduces the school's philosophy.

Left:

``` text
02
ABOUT OUR SCHOOL

Every child
has a story
waiting to
unfold.
```

Middle/right:

-   large environmental photograph
-   smaller supporting photograph
-   short paragraph
-   secondary CTA

The composition should feel asymmetrical but grid-aligned.

A handwritten-style note may be used sparingly as a human accent, but it
must never become a primary typography style.

------------------------------------------------------------------------

# 07. Section 03 --- The First Years Matter

This is the primary dark section.

Use deep green as a structural contrast.

Layout:

``` text
03
THE FIRST YEARS MATTER

01                 02                 03
Curious Minds      Kind Hearts        Confident Steps
[image]            [image]            [image]
description        description        description
```

Three principles should feel equal in importance.

The dark section should act as a visual pause between light editorial
sections.

------------------------------------------------------------------------

# 08. Section 04 --- Academics

The academics section returns to the light canvas.

Left:

``` text
04
ACADEMICS

Learning
designed for
growing minds.

supporting copy
CTA
```

Right:

``` text
[ Early Years ]
[ Primary Years ]
[ Higher Classes ]
```

Cards should share the same dimensions and alignment.

Use subtle borders, not heavy shadows.

------------------------------------------------------------------------

# 09. Section 05 --- Life at Bal Vidyavasham

This section communicates that school life extends beyond classrooms.

Large statement:

``` text
School isn't
only about
the classroom.
```

Below/alongside:

A horizontal editorial activity strip:

``` text
[Play] [Create] [Discover] [Perform] [Explore] [Celebrate]
```

The strip can be horizontally scrollable on mobile.

Images should dominate the cards.

Text should remain minimal.

------------------------------------------------------------------------

# 10. Section 06 --- Our Campus

This section uses a collage-like grid while remaining aligned to the
master grid.

Main image:

``` text
[Large Campus Photograph]
```

Supporting spaces:

``` text
[Classroom] [Library]
[Science Lab] [Playground]
```

One typographic card can interrupt the image rhythm:

``` text
Small
Beginnings

Endless
Possibilities
```

This typographic card should behave like an editorial object rather than
a generic UI card.

------------------------------------------------------------------------

# 11. Section 07 --- Principal's Message

The composition should slow down.

Left:

-   principal portrait

Center:

-   oversized quotation

Right:

-   small supporting photograph or environmental image

Example hierarchy:

``` text
07

A MESSAGE FROM THE PRINCIPAL

“Education begins
with knowing
the child.”

Principal name
Role
```

Do not overdesign this section.

The quotation is the visual anchor.

------------------------------------------------------------------------

# 12. Section 08 --- Gallery

The gallery should feel like an editorial contact sheet.

Use varied image dimensions while preserving grid alignment.

Possible structure:

``` text
[small] [large]
[wide ] [small]
[small] [small] [portrait]
```

The visual rhythm should communicate real school life rather than
polished stock imagery.

Primary CTA:

``` text
View Full Gallery →
```

------------------------------------------------------------------------

# 13. Section 09 --- Events

Events should be presented as structured information rather than
decorative cards.

Example:

``` text
09
WHAT'S HAPPENING

25 JUL
Annual Science Exhibition
School Exhibition Hall
→

15 AUG
Independence Day Celebration
School Ground
→

30 AUG
Inter-House Sports Day
School Ground
→
```

Dates should have strong typographic hierarchy.

This section should be highly scannable.

------------------------------------------------------------------------

# 14. Section 10 --- Admissions

The final CTA should return to the deep green system.

Background:

-   school children / campus image
-   dark overlay only if necessary for legibility

Typography:

``` text
10

THEIR JOURNEY
STARTS HERE.

Give your child a strong foundation
for a brighter tomorrow.
```

Actions:

``` text
Explore Admission Process →
Enquire Now
Download Prospectus
```

The CTA hierarchy should be clear.

------------------------------------------------------------------------

# 15. Footer

The footer should feel like the final page of an editorial document.

Columns:

``` text
Brand
Quick Links
Contact
Social
```

Bottom:

``` text
© Bal Vidyavasham
Privacy Policy
Terms
Designed by Zenova
```

Keep the footer information-dense but visually quiet.

------------------------------------------------------------------------

# 16. Responsive Transformation

Desktop compositions should not simply shrink.

### Desktop

Use:

-   overlap
-   asymmetry
-   large typography
-   multi-column galleries
-   horizontal activity strips

### Tablet

Reduce:

-   overlap
-   headline scale
-   simultaneous cards
-   decorative metadata

### Mobile

Transform compositions into:

``` text
number
label
headline
copy
image
CTA
```

This vertical rhythm should become the default mobile pattern.

Horizontal carousels are allowed for:

-   activities
-   gallery
-   campus cards
-   selected academic cards

But the page itself must never horizontally overflow.

------------------------------------------------------------------------

# 17. Swiss Layout Rules

1.  Align before decorating.
2.  Use whitespace as an active element.
3.  Prefer one strong image over many weak images.
4.  Use asymmetry inside a consistent grid.
5.  Keep repeated components geometrically consistent.
6.  Do not center everything.
7.  Do not use gradients as a substitute for composition.
8.  Avoid excessive rounded cards.
9.  Avoid excessive shadows.
10. Keep visual hierarchy stronger than animation.
11. Let typography create rhythm.
12. Every decorative element must have a reason to exist.

------------------------------------------------------------------------

# 18. Layout Anti-Patterns

Avoid:

-   generic SaaS cards
-   excessive glassmorphism
-   floating blobs
-   random gradients
-   huge rounded containers
-   excessive drop shadows
-   centered-everything layouts
-   decorative animation without information purpose
-   inconsistent section widths
-   random font sizes
-   arbitrary spacing values

The website should feel **designed**, not decorated.
