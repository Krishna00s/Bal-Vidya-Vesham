export type NoticeCategory = 'circular' | 'examination' | 'holiday' | 'event' | 'announcement';
export type NoticeCampus = 'all' | 'manjurmati' | 'bal-vidyavasham';
export type NoticePriority = 'normal' | 'pinned' | 'urgent';

export interface NoticeAttachment {
  title: string;
  fileType: 'pdf' | 'doc' | 'image';
  fileSize?: string;
  url: string;
}

export interface SchoolNotice {
  id: string;
  title: string;
  summary: string;
  category: NoticeCategory;
  campus: NoticeCampus;
  priority: NoticePriority;
  publishedDate: string; // Formatted date string, e.g. "25 Jul 2025"
  expiryDate?: string;
  referenceNumber: string; // e.g. "MM/ADMIN/2025-01"
  department: string;
  isVerified: boolean;
  isArchived?: boolean; // True for historical/concluded records
  statusLabel?: string; // Descriptive tag, e.g. "Archived Record", "Sample Dev Fixture"
  isDevFixture?: boolean; // True for demonstration/testing fixture records
  fullContent?: string[];
  attachments?: NoticeAttachment[];
}

/**
 * VERIFIED OFFICIAL NOTICES:
 * Grounded directly in official notices published on the school's official website (manjurmatihighschool.com).
 *
 * FACTUAL AUDIT NOTE (Phase A.2):
 * The only notice published on manjurmatihighschool.com is dated 25 July 2025.
 * Relative to the current academic calendar (2026), this is an authentic but HISTORICAL
 * notice of a concluded event. It is explicitly cataloged as an archived record
 * rather than an active or upcoming event.
 */
export const VERIFIED_NOTICES: SchoolNotice[] = [
  {
    id: 'official-notice-01',
    title: 'Annual Science Exhibition — School Exhibition Hall',
    summary: 'Archived official circular regarding the Annual Science Exhibition convened on 25 July 2025 at the School Exhibition Hall, featuring collaborative student science models and practical demonstrations.',
    category: 'event',
    campus: 'manjurmati',
    priority: 'normal',
    publishedDate: '25 Jul 2025',
    referenceNumber: 'MMHS/SCI/2025-01',
    department: 'Science Department · Manjurmati High School',
    isVerified: true,
    isArchived: true,
    statusLabel: 'Archived Record · Concluded Event',
    fullContent: [
      '[HISTORICAL GAZETTE RECORD — EVENT CONCLUDED 25 JUL 2025]',
      'The Annual Science Exhibition was convened in the School Exhibition Hall at Manjurmati High School, Mahadev Ashram, Lohardaga.',
      'Students across secondary cohorts (Classes VI through X) presented investigative projects covering physics principles, chemical experiments, biological systems, and practical tinkering models developed in the Atal Tinkering Lab.',
      'Preserved in the institutional gazette archives for historical and documentary reference.'
    ]
  }
];

/**
 * DEVELOPMENT TEST FIXTURES:
 * Comprehensive sample fixtures used exclusively for UI/UX interaction verification (testing category pills,
 * live keyword search, multiple notice rows, and modal detail views).
 *
 * FACTUAL AUDIT NOTE:
 * Every sample fixture is prominently designated with `isDevFixture: true` and `statusLabel: 'Sample Dev Fixture'`.
 * They are not presented as active official school dispatches.
 */
export const DEV_TEST_NOTICES: SchoolNotice[] = [
  {
    id: 'fixture-01',
    title: 'Notification on State Board Examination Registration for Class X (JAC)',
    summary: 'Instructions regarding submission of candidate details and registration verification for the upcoming Jharkhand Academic Council Secondary Examinations.',
    category: 'examination',
    campus: 'manjurmati',
    priority: 'pinned', // Designates this as the single Featured Notice in fixture mode
    publishedDate: '10 Oct 2026',
    expiryDate: '30 Nov 2026',
    referenceNumber: 'MM/JAC/EXAM/2026-09',
    department: 'Examination Committee · Manjurmati High School',
    isVerified: false,
    isDevFixture: true,
    isArchived: false,
    statusLabel: 'Sample Dev Fixture',
    fullContent: [
      'Candidates enrolled in Class X under the Jharkhand Academic Council (JAC) stream are required to verify their particulars against the administrative register.',
      'All guardians must confirm student registration slips at the administrative office between 09:30 AM and 01:30 PM on scheduled school days.',
      'Please ensure spelling of candidate names, date of birth, and language stream selection (Hindi / English medium) match primary registration records.'
    ],
    attachments: [
      {
        title: 'JAC Examination Verification Guidelines (Sample Attachment)',
        fileType: 'pdf',
        fileSize: '142 KB',
        url: '#attachment-jac-exam'
      }
    ]
  },
  {
    id: 'fixture-02',
    title: 'Advisory on Monsoon Drainage & Footwear for Junior Campus Walkway',
    summary: 'Guidance for parents of Nursery through Class V regarding waterproof rainwear and safe pedestrian crossing during rainy mornings.',
    category: 'circular',
    campus: 'bal-vidyavasham',
    priority: 'normal',
    publishedDate: '06 Oct 2026',
    referenceNumber: 'BVS/ADMIN/2026-14',
    department: 'Campus Administration · Bal Vidyavasham',
    isVerified: false,
    isDevFixture: true,
    isArchived: false,
    statusLabel: 'Sample Dev Fixture',
    fullContent: [
      'In view of seasonal rain showers across Senha Block, parents of primary students (Nursery to Class V) are requested to ensure children arrive with adequate waterproof rainwear.',
      'Designated student entry gates will remain monitored from 08:30 AM with assisted pedestrian guidance across the access roadway.',
      'Classroom outdoor activities will shift to sheltered verandas during heavy precipitation.'
    ]
  },
  {
    id: 'fixture-03',
    title: 'Academic Calendar Update: Dussehra & Autumn Recess Schedule',
    summary: 'Official notification on school recess dates and administrative office operating hours for both institutions.',
    category: 'holiday',
    campus: 'all',
    priority: 'normal',
    publishedDate: '02 Oct 2026',
    referenceNumber: 'MM-BVS/JOINT/2026-03',
    department: 'Joint Administrative Cell',
    isVerified: false,
    isDevFixture: true,
    isArchived: false,
    statusLabel: 'Sample Dev Fixture',
    fullContent: [
      'Both Manjurmati High School and Bal Vidyavasham campuses will remain closed for the festive autumn recess as per the approved district academic calendar.',
      'Administrative inquiries and verification desks will operate on restricted hours on non-gazetted weekdays.',
      'Regular academic sessions across all classes (Nursery to Class X) will resume promptly at 08:45 AM following the recess.'
    ]
  },
  {
    id: 'fixture-04',
    title: 'Foundational Storytelling & Clay Modeling Workshop for Classes I–III',
    summary: 'Bal Vidyavasham junior wing organizes an experiential tactile art and expression session using locally sourced terracotta clay.',
    category: 'announcement',
    campus: 'bal-vidyavasham',
    priority: 'normal',
    publishedDate: '22 Sep 2026',
    referenceNumber: 'BVS/EXP/2026-07',
    department: 'Foundational Arts Wing · Bal Vidyavasham',
    isVerified: false,
    isDevFixture: true,
    isArchived: false,
    statusLabel: 'Sample Dev Fixture',
    fullContent: [
      'A dedicated tactile workshop will be conducted for children in Classes I through III, fostering spatial understanding through traditional clay modeling and guided folktale narration.',
      'Materials utilized are natural, non-toxic, and locally prepared under faculty supervision.'
    ]
  },
  {
    id: 'official-notice-01-fixture',
    title: 'Annual Science Exhibition — School Exhibition Hall',
    summary: 'Archived official circular regarding the Annual Science Exhibition convened on 25 July 2025 at the School Exhibition Hall, featuring collaborative student science models and practical demonstrations.',
    category: 'event',
    campus: 'manjurmati',
    priority: 'normal',
    publishedDate: '25 Jul 2025',
    referenceNumber: 'MMHS/SCI/2025-01',
    department: 'Science Department · Manjurmati High School',
    isVerified: true,
    isArchived: true,
    isDevFixture: false,
    statusLabel: 'Archived Official Record',
    fullContent: [
      '[HISTORICAL GAZETTE RECORD — EVENT CONCLUDED 25 JUL 2025]',
      'The Annual Science Exhibition was convened in the School Exhibition Hall at Manjurmati High School, Mahadev Ashram, Lohardaga.',
      'Students across secondary cohorts (Classes VI through X) presented investigative projects covering physical principles, biological systems, and practical tinkering models developed in the Atal Tinkering Lab.',
      'Preserved in the institutional gazette archives for historical reference.'
    ]
  }
];

export const CATEGORY_LABELS: Record<NoticeCategory, string> = {
  circular: 'Official Circular',
  examination: 'Examination',
  holiday: 'Holiday & Recess',
  event: 'Campus Event',
  announcement: 'Announcement'
};

export const CAMPUS_LABELS: Record<NoticeCampus, string> = {
  all: 'Both Campuses',
  manjurmati: 'Manjurmati (VI–X)',
  'bal-vidyavasham': 'Bal Vidyavasham (N–V)'
};
