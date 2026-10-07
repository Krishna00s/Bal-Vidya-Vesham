export interface NavItem {
  index: string
  label: string
  href: string
}

export interface SchoolMetadata {
  name: string
  tagline: string
  location: {
    area: string
    subdistrict: string
    district: string
    state: string
    pincode: string
    fullAddress: string
  }
  contact: {
    phone: string
    email: string
  }
  affiliationNote: string
}

export interface HeroImageItem {
  src: string
  alt: string
  caption: string
  role: 'primary' | 'environmental' | 'emotional' | 'learning'
}

export interface HeroContent {
  microLabel: string
  schoolNamePrimary: string
  schoolNameSecondary: string
  statement: string
  supportingCopy: string
  primaryAction: {
    label: string
    href: string
  }
  locationBadge: {
    line1: string
    line2: string
  }
  chapterIndex: string
  chapterTheme: string
  scrollIndicator: string
  photography: {
    primary: HeroImageItem
    environmental: HeroImageItem
    emotional: HeroImageItem
    learning: HeroImageItem
  }
}

export interface AboutContent {
  chapterIndex: string
  microLabel: string
  headlinePart1: string
  headlineHighlight: string
  headlinePart2: string
  bodyText: string
  action: {
    label: string
    href: string
  }
  valuesList: string[]
  handwrittenNote: string
  primaryImage: {
    src: string
    alt: string
  }
  secondaryImage: {
    src: string
    alt: string
  }
}

export interface FirstYearsPillar {
  index: string
  titleLine1: string
  titleLine2: string
  description: string
  actionHref?: string
  image: {
    src: string
    alt: string
  }
}

export interface FirstYearsContent {
  chapterIndex: string
  microLabel: string
  pillars: FirstYearsPillar[]
  scriptNote: {
    lines: string[]
    fullText: string
    src?: string
  }
}
