import type { SchoolMetadata, HeroContent } from '@/types/content.ts'

export const SCHOOL_METADATA: SchoolMetadata = {
  name: 'Bal Vidyavasham',
  tagline: 'Where curiosity becomes character.',
  location: {
    area: 'Mahadetoli',
    subdistrict: 'Senha',
    district: 'Lohardaga',
    state: 'Jharkhand',
    pincode: '835302 [PLACEHOLDER — PENDING SCHOOL CONFIRMATION]',
    fullAddress: 'Mahadetoli, Senha block, Lohardaga, Jharkhand - 835302',
  },
  contact: {
    phone: '+91 98765 43210 [PLACEHOLDER — PENDING SCHOOL CONFIRMATION]',
    email: 'balvidyavasham@gmail.com [PLACEHOLDER — PENDING SCHOOL CONFIRMATION]',
  },
  affiliationNote:
    'A nurturing beginning for young minds. Connected to Manjhurmati High School and guided by a shared vision for a better tomorrow. [PLACEHOLDER — PENDING SCHOOL CONFIRMATION]',
}

export const HERO_CONTENT: HeroContent = {
  microLabel: 'A NURTURING BEGINNING FOR YOUNG MINDS',
  schoolNamePrimary: 'BAL',
  schoolNameSecondary: 'VIDYAVASHAM',
  statement: 'Where curiosity becomes character.',
  supportingCopy:
    'A warm, safe and inspiring space for every child to explore, learn and grow.',
  primaryAction: {
    label: 'Explore the School',
    href: '#about',
  },
  locationBadge: {
    line1: 'MAHADETOLI',
    line2: 'SENHA • LOHARDAGA',
  },
  chapterIndex: '01',
  chapterTheme: 'SMALL BEGINNINGS ENDLESS POSSIBILITIES',
  scrollIndicator: 'SCROLL TO EXPLORE',
}
