export interface PrincipalProfile {
  id: 'manjurmati' | 'bal-vidyavasham';
  institutionTitle: string;
  stageRole: string;
  designation: string;
  isVerified: boolean;
  statusNote: string;
  officialMessage: string;
  institutionalScope: string;
  curriculumPillars: {
    title: string;
    description: string;
  }[];
  portraitSrc: string;
  portraitAlt: string;
  objectPosition: string;
  sourceUrl: string;
}

/**
 * FACTUAL PROVENANCE AUDIT (Phase A.2):
 * Sourced directly from manjurmatihighschool.com.
 * - Manjurmati portrait (D_msg.jpg) is published under "Principal's Message" on index.php.
 * - Bal Vidyavasham portrait (principal.jpg) is published under "Principal's Message — Junior Section (Bal Vidyavesham)" on junior_section.php.
 * - The official website publishes these portraits and messages without specifying personal names.
 * - In strict adherence to documentary integrity, no personal names are inferred or fabricated.
 */
export const PRINCIPALS_DATA: Record<'manjurmati' | 'bal-vidyavasham', PrincipalProfile> = {
  manjurmati: {
    id: 'manjurmati',
    institutionTitle: 'Manjurmati High School',
    stageRole: 'Secondary Academic Wing · Classes VI through X (JAC)',
    designation: 'Principal / Head of Institution',
    isVerified: true,
    statusNote: 'Executive portrait and signed address published under "Principal\'s Message" on official domain (manjurmatihighschool.com). Personal name is omitted on official source.',
    officialMessage:
      'At Manjurmati High School, we are committed to nurturing young minds with knowledge, creativity, and discipline. Our goal is to provide a learning environment that fosters innovation, leadership, and personal growth. Education is not just about academics but also about building character and confidence. We strive to equip our students with skills that will help them succeed in the modern world. Together, let’s create a future full of possibilities and achievements.',
    institutionalScope:
      'Secondary school education under Jharkhand Academic Council (JAC) affiliation, encompassing dual-medium (Hindi & English) academic streams, practical scientific laboratories, the Atal Tinkering Lab, and state board matriculation preparation.',
    curriculumPillars: [
      {
        title: 'State Board Matriculation (JAC)',
        description: 'Structured academic curriculum preparing students for secondary state board examinations.'
      },
      {
        title: 'Dual-Medium Instruction',
        description: 'Parallel instruction streams honoring regional Hindi and English linguistic foundations.'
      },
      {
        title: 'Innovation & Character',
        description: 'Instilling ethical discipline, practical experimentation in ATL labs, and community leadership.'
      }
    ],
    portraitSrc: '/images/principal-manjurmati-high-school.jpg',
    portraitAlt: 'Executive portrait published under Principal\'s Message on manjurmatihighschool.com, seated at office desk with national flag and library bookcases',
    objectPosition: '50% 25%',
    sourceUrl: 'https://manjurmatihighschool.com/img/about/D_msg.jpg'
  },
  'bal-vidyavasham': {
    id: 'bal-vidyavasham',
    institutionTitle: 'Bal Vidyavasham',
    stageRole: 'Foundational Junior Wing · Nursery through Class V',
    designation: 'Principal / Head of Junior School',
    isVerified: true,
    statusNote: 'Junior section executive portrait and signed address published under "Principal\'s Message — Junior Section (Bal Vidyavesham)" on official domain (manjurmatihighschool.com). Personal name is omitted on official source.',
    officialMessage:
      'Welcome to the Junior Section of M.M. High School (Bal Vidyavesham), a place where young minds begin their journey toward excellence. At Manjurmati Uch Vidyalaya, we believe that every child is unique and full of potential. Our mission is to cultivate curiosity, discipline, and creativity through a balanced blend of academic learning and moral values. We provide a safe, supportive, and engaging environment where children are encouraged to explore, ask questions, and develop a love for learning. Along with scholastic excellence, we focus on character-building, respect, and responsibility to shape students into confident and responsible citizens. As we walk hand-in-hand with parents and guardians, we aim to create a nurturing foundation that inspires lifelong learning and future success. Let us work together to empower our students.',
    institutionalScope:
      'Early childhood and foundational primary schooling in an English-medium environment, emphasizing sensory curiosity, tactile creative arts, guided literacy, and secure, botanical courtyard learning grounds.',
    curriculumPillars: [
      {
        title: 'English-Medium Foundation',
        description: 'Structured early literacy and conversational confidence from Nursery through Class V.'
      },
      {
        title: 'Tactile & Question-Driven Learning',
        description: 'Nurturing innate childhood curiosity through experiential discovery and creative play.'
      },
      {
        title: 'Safe, Botanical Environment',
        description: 'A secure, human-scaled setting designed for social warmth and individualized emotional care.'
      }
    ],
    portraitSrc: '/images/principal-bal-vidyavasham.jpg',
    portraitAlt: 'Executive portrait published under Junior Section Principal\'s Message on manjurmatihighschool.com, seated at office desk with administrative files and floral vase',
    objectPosition: '50% 18%',
    sourceUrl: 'https://manjurmatihighschool.com/img/junior%20section/principal.jpg'
  }
};
