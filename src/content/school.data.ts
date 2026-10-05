import type { SchoolMetadata, HeroContent, AboutContent } from '@/types/content.ts'

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

export const ABOUT_CONTENT: AboutContent = {
  chapterIndex: '02',
  microLabel: 'ABOUT OUR SCHOOL',
  headlinePart1: 'Every child\nhas a ',
  headlineHighlight: 'story',
  headlinePart2: '\nwaiting to\nunfold.',
  bodyText:
    'At Bal Vidyavasham, we believe in a joyful and meaningful learning journey where children are encouraged to ask, explore, create and grow every single day.',
  action: {
    label: 'Our Approach',
    href: '#approach',
  },
  valuesList: ['LEARN', 'EXPLORE', 'CREATE', 'GROW', 'BELONG'],
  handwrittenNote: 'A brighter tomorrow begins right here.',
  primaryImage: {
    src: '/images/about-students-walking.png',
    alt: 'Bal Vidyavasham elementary students in school uniform walking along campus corridor with backpacks',
  },
  secondaryImage: {
    src: '/images/about-student-learning.png',
    alt: 'Young student engaged in focused writing study inside Bal Vidyavasham classroom',
  },
}

