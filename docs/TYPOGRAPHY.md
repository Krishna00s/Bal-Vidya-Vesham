# Bal Vidyavasham --- Typography System

## 01. Typographic Philosophy

Typography is the primary structural tool of the website.

The system is inspired by the **Swiss International Typographic Style**,
where hierarchy, alignment, scale, spacing, and contrast create the
visual rhythm.

For Bal Vidyavasham, this is softened with an editorial school
character.

The typography should communicate:

**clarity + intelligence + warmth + confidence.**

------------------------------------------------------------------------

# 02. Font Strategy

Use a two-family system.

### Primary Sans --- UI / Information

Recommended:

``` text
Inter
```

Alternative:

``` text
Helvetica Neue
Arial
system-ui
```

Use the sans family for:

-   navigation
-   buttons
-   micro labels
-   metadata
-   body copy
-   event information
-   forms
-   utility text

### Editorial Serif --- Display

Recommended:

``` text
Cormorant Garamond
```

Alternative:

``` text
DM Serif Display
Instrument Serif
Georgia
```

Use the serif sparingly for:

-   major editorial headlines
-   principal quotation
-   selected storytelling statements

This creates a deliberate contrast between **Swiss functional
typography** and the warmer editorial voice appropriate to a school.

The serif must never be used for navigation, forms, or dense
information.

------------------------------------------------------------------------

# 03. Typographic Hierarchy

## Display XL

Hero headline:

``` text
BAL
VIDYAVASHAM
```

Desktop:

``` text
clamp(4rem, 8vw, 8.5rem)
```

Weight:

``` text
500–600
```

Line height:

``` text
0.82–0.95
```

Letter spacing:

``` text
-0.04em to -0.06em
```

The exact size should be controlled responsively.

------------------------------------------------------------------------

# 04. Display Large

Major editorial statements:

``` text
Every child
has a story
waiting to
unfold.
```

Recommended:

``` text
clamp(3rem, 6vw, 6.5rem)
```

Line height:

``` text
0.90–1.0
```

Use sentence case rather than all caps when the statement is
emotional/editorial.

------------------------------------------------------------------------

# 05. Display Medium

Section headlines:

``` text
Learning designed
for growing minds.
```

Recommended:

``` text
clamp(2.5rem, 4.5vw, 5rem)
```

Line height:

``` text
0.95–1.05
```

------------------------------------------------------------------------

# 06. Body Large

Used for important supporting statements.

``` text
18–22px
line-height: 1.45–1.6
```

Maximum readable line length:

``` text
55–70 characters
```

------------------------------------------------------------------------

# 07. Body

Default copy:

``` text
15–17px
line-height: 1.55–1.7
```

Body text should remain highly readable.

Avoid ultra-thin weights.

------------------------------------------------------------------------

# 08. Small / Metadata

Used for:

-   event information
-   card metadata
-   contact details
-   captions

Recommended:

``` text
12–14px
line-height: 1.4–1.5
```

------------------------------------------------------------------------

# 09. Micro Typography

Used for:

-   section labels
-   navigation
-   categories
-   eyebrow text

Recommended:

``` text
10–12px
font-weight: 500–600
letter-spacing: 0.10–0.16em
text-transform: uppercase
```

Example:

``` text
THE FIRST YEARS MATTER
```

Micro typography should provide orientation rather than decoration.

------------------------------------------------------------------------

# 10. Section Numbers

Section numbers are part of the visual navigation system.

Example:

``` text
03
```

Recommended:

``` text
font-family: primary sans
font-size: clamp(3rem, 5vw, 6rem)
font-weight: 400–500
line-height: 0.8
letter-spacing: -0.05em
```

Numbers should feel editorial and architectural.

------------------------------------------------------------------------

# 11. Navigation Typography

Desktop:

``` text
11–13px
font-weight: 500
letter-spacing: 0.02em
```

Avoid oversized navigation.

Navigation should remain subordinate to the content.

------------------------------------------------------------------------

# 12. Button Typography

``` text
12–14px
font-weight: 600
letter-spacing: 0.01em
```

Button labels should be concise.

Good:

``` text
Explore the School →
```

Avoid:

``` text
CLICK HERE TO LEARN MORE ABOUT OUR SCHOOL
```

------------------------------------------------------------------------

# 13. Line Length

Swiss typography depends heavily on controlled line length.

Recommended:

``` text
Body:
45–70 characters

Editorial headline:
approximately 8–24 characters per line depending on scale
```

Do not allow body copy to span the full desktop viewport.

------------------------------------------------------------------------

# 14. Alignment

Primary rule:

**Prefer left alignment.**

Use centered typography only when it serves a deliberate composition,
such as:

-   selected quotation
-   final CTA
-   special announcement

The default should remain left aligned.

------------------------------------------------------------------------

# 15. Contrast

Hierarchy should be created primarily through:

``` text
size
weight
spacing
alignment
case
```

Do not rely on:

``` text
color
shadow
outline
gradient
```

to create basic hierarchy.

------------------------------------------------------------------------

# 16. Typographic Rhythm

A typical editorial section should read:

``` text
SECTION NUMBER
        ↓
MICRO LABEL
        ↓
DISPLAY HEADLINE
        ↓
BODY COPY
        ↓
ACTION
```

Example:

``` text
04

ACADEMICS

Learning designed
for growing minds.

A strong academic foundation...

Explore Academics →
```

This rhythm should repeat throughout the site.

------------------------------------------------------------------------

# 17. Responsive Typography

Use fluid typography where appropriate.

Example:

``` css
.hero-title {
  font-size: clamp(3.5rem, 8vw, 8.5rem);
}

.section-title {
  font-size: clamp(2.75rem, 5vw, 6rem);
}

.body-large {
  font-size: clamp(1rem, 1.2vw, 1.25rem);
}
```

Do not create dozens of breakpoint-specific font sizes.

------------------------------------------------------------------------

# 18. Mobile Typography

Mobile should remain bold, not tiny.

Recommended starting points:

``` text
Hero:
48–72px

Section headline:
40–56px

Body:
15–17px

Micro label:
10–11px
```

Exact values should be tuned against the actual content.

Long headlines should wrap naturally.

Never force awkward line breaks simply to imitate desktop.

------------------------------------------------------------------------

# 19. Editorial Line Breaks

Intentional line breaks are allowed for major display statements.

For example:

``` text
Every child
has a story
waiting to
unfold.
```

But the implementation should remain responsive.

Use controlled max-widths rather than hard-coded `<br>` tags wherever
possible.

If a deliberate line break is part of the brand composition, use
responsive variants rather than breaking accessibility or readability.

------------------------------------------------------------------------

# 20. Typography Anti-Patterns

Avoid:

-   five or six font families
-   random font weights
-   excessive all-caps
-   tiny body text
-   ultra-thin text on low-contrast backgrounds
-   decorative fonts for headings
-   huge letter spacing on normal text
-   centered paragraphs
-   inconsistent line heights
-   arbitrary `<br>` tags everywhere

------------------------------------------------------------------------

# 21. Final Typographic Rule

Typography should make the website understandable **before animation
begins**.

If the page still communicates its hierarchy with:

``` text
JavaScript disabled
+
animations disabled
+
images still loading
```

then the typographic system is doing its job.
