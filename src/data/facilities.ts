export type FacilityCampus = 'manjurmati' | 'bal-vidyavasham' | 'shared';
export type FacilityLayoutRole = 'feature-focal' | 'wide-spread' | 'spacious-paired';

export interface SchoolFacility {
  id: string;
  name: string;
  campus: FacilityCampus;
  campusLabel: string;
  stageRole: string;
  layoutRole: FacilityLayoutRole;
  shortDescription: string;
  curriculumContext: string;
  hasAuthenticPhoto: boolean;
  imageSrc: string;
  imageAlt: string;
  objectPosition: string;
  sourceUrl?: string;
  specifications: {
    label: string;
    value: string;
  }[];
}

export const FACILITIES_DATA: SchoolFacility[] = [
  {
    id: 'secondary-classrooms',
    name: 'Secondary Academic Study Spaces & Classrooms',
    campus: 'manjurmati',
    campusLabel: 'Manjurmati High School',
    stageRole: 'Secondary Wing · Classes VI to X (JAC)',
    layoutRole: 'feature-focal',
    shortDescription: 'Spacious, well-lit classrooms fitted with wooden study benches and dual blackboards, organized for structured subject instruction and focused notebook work under natural daylight.',
    curriculumContext: 'Accommodates both Hindi- and English-medium instruction streams preparing students for Jharkhand Academic Council secondary examinations.',
    hasAuthenticPhoto: true,
    imageSrc: '/images/manjurmati-senior-classroom.jpg',
    imageAlt: 'Secondary students at Manjurmati seated at wooden study desks engaged in classroom notebook work and academic study',
    objectPosition: '50% 35%',
    specifications: [
      { label: 'Cohort', value: 'Classes VI through X' },
      { label: 'Medium', value: 'Dual Hindi & English streams' },
      { label: 'Curricular Focus', value: 'JAC Board Matriculation' }
    ]
  },
  {
    id: 'science-laboratories',
    name: 'Science Practical Laboratories',
    campus: 'manjurmati',
    campusLabel: 'Manjurmati High School',
    stageRole: 'Secondary Wing · Classes VI to X (JAC)',
    layoutRole: 'wide-spread',
    shortDescription: 'Dedicated practical demonstration laboratory equipped with observation benches, chemical reagent glassware, anatomical models, and biological specimen jars for guided state-board practical coursework.',
    curriculumContext: 'Provides faculty-supervised experimental apparatus, microscopes, and demonstrative wall charts supporting the Jharkhand Academic Council secondary science syllabus.',
    hasAuthenticPhoto: true,
    imageSrc: '/images/manjurmati-science-laboratory.jpg',
    imageAlt: 'Science practical laboratory at Manjurmati High School featuring experiment workbenches, glassware, specimens, and anatomical skeleton model',
    objectPosition: '50% 40%',
    sourceUrl: 'https://manjurmatihighschool.com/img/science/1.jpg',
    specifications: [
      { label: 'Disciplines', value: 'Physics, Chemistry, Biology' },
      { label: 'Equipment', value: 'Microscopes, Glassware & Models' },
      { label: 'Regulations', value: 'JAC Secondary Practical Syllabus' }
    ]
  },
  {
    id: 'atl-tinkering-lab',
    name: 'Atal Tinkering Lab (ATL)',
    campus: 'manjurmati',
    campusLabel: 'Manjurmati High School',
    stageRole: 'Secondary Wing · Classes VI to X',
    layoutRole: 'spacious-paired',
    shortDescription: 'An official NITI Aayog sanctioned innovation workshop fitted with student project workbenches, soldering stations, electronic prototyping kits, and design tools.',
    curriculumContext: 'Fosters inventive inquiry, hands-on mechanical building, and collaborative STEM design thinking beyond textbook rote learning.',
    hasAuthenticPhoto: true,
    imageSrc: '/images/manjurmati-atl-lab-workbench.jpg',
    imageAlt: 'Atal Tinkering Lab at Manjurmati High School equipped with student workbenches, project models, and official ATL wall banner',
    objectPosition: '50% 45%',
    sourceUrl: 'https://manjurmatihighschool.com/img/atl/1.jpg',
    specifications: [
      { label: 'Framework', value: 'NITI Aayog Atal Innovation Mission' },
      { label: 'Equipment', value: 'Soldering station, Tools & Kits' },
      { label: 'Learning Style', value: 'Project-based tactile engineering' }
    ]
  },
  {
    id: 'botanical-courtyard',
    name: 'Botanical Courtyard & Open Discovery Grounds',
    campus: 'bal-vidyavasham',
    campusLabel: 'Bal Vidyavasham',
    stageRole: 'Foundational Junior Wing · Nursery to Class V',
    layoutRole: 'spacious-paired',
    shortDescription: 'Lush open-air courtyard garden and bougainvillea-framed walkways offering safe, sensory outdoor movement, fresh air, and tactile nature observation for early learners.',
    curriculumContext: 'Forms an integral part of early childhood routine—accommodating gentle recreation, nature walks, and morning outdoor assemblies.',
    hasAuthenticPhoto: true,
    imageSrc: '/images/campus-courtyard-walkway.jpg',
    imageAlt: 'Lush botanical garden walkway with flowering bougainvillea connecting junior classrooms at Bal Vidyavasham',
    objectPosition: '30% 50%',
    specifications: [
      { label: 'Campus Area', value: 'Junior Wing Central Courtyard' },
      { label: 'Setting', value: 'Natural garden flora & sheltered paths' },
      { label: 'Activity', value: 'Nature exploration & safe playtime' }
    ]
  },
  {
    id: 'curricular-library',
    name: 'Curricular Library & Reading Room',
    campus: 'shared',
    campusLabel: 'Central Institutional Resource',
    stageRole: 'Serving Junior (N–V) & Senior (VI–X) Cohorts',
    layoutRole: 'wide-spread',
    shortDescription: 'An organized reference reading hall housing floor-to-ceiling glass-fronted wooden bookcases stocked with JAC textbooks, Hindi and English literature, encyclopedias, and historical educational exhibits.',
    curriculumContext: 'Encourages quiet self-directed reading, research habits, and linguistic fluency in both English and Hindi from early childhood through Class X.',
    hasAuthenticPhoto: true,
    imageSrc: '/images/manjurmati-curricular-library.jpg',
    imageAlt: 'School library and reading room at Manjurmati High School with wooden reading benches, book cabinets, and educational artwork',
    objectPosition: '50% 35%',
    sourceUrl: 'https://manjurmatihighschool.com/img/library/1.jpg',
    specifications: [
      { label: 'Collection', value: 'Board Textbooks, Reference & Fiction' },
      { label: 'Languages', value: 'Dual Hindi & English Collections' },
      { label: 'Facility', value: 'Dedicated reading benches & archives' }
    ]
  }
];
