export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  subject: string;
  department: string;
  institution: 'manjurmati' | 'bal-vidyavasham' | 'shared';
  verifiedSource: string;
}

/**
 * FACTUAL PROVENANCE AUDIT (Phase B):
 * Sourced directly from manjurmatihighschool.com/faculty.php.
 * All teacher names, designations (TGT, Subject Teacher), and disciplines
 * match the official faculty directory.
 * No arbitrary degrees or fabricated biographies are added.
 */
export const VERIFIED_FACULTY: FacultyMember[] = [
  {
    id: 'fac-01',
    name: 'Mamta Agarwal',
    designation: 'Trained Graduate Teacher (TGT)',
    subject: 'Social Science (SST)',
    department: 'Humanities & Social Studies',
    institution: 'manjurmati',
    verifiedSource: 'manjurmatihighschool.com/faculty.php'
  },
  {
    id: 'fac-02',
    name: 'Deepa Sahu',
    designation: 'Subject Teacher',
    subject: 'Mathematics',
    department: 'Mathematics & Logical Reasoning',
    institution: 'manjurmati',
    verifiedSource: 'manjurmatihighschool.com/faculty.php'
  },
  {
    id: 'fac-03',
    name: 'Suraj Kumar',
    designation: 'Subject Teacher',
    subject: 'Sanskrit',
    department: 'Classical & Regional Languages',
    institution: 'manjurmati',
    verifiedSource: 'manjurmatihighschool.com/faculty.php'
  },
  {
    id: 'fac-04',
    name: 'Vivek Sidharth',
    designation: 'Senior Science Teacher',
    subject: 'Physics & Chemistry',
    department: 'Physical Sciences & Laboratory In-charge',
    institution: 'manjurmati',
    verifiedSource: 'manjurmatihighschool.com/faculty.php'
  },
  {
    id: 'fac-05',
    name: 'Anil Thakur',
    designation: 'Subject Teacher',
    subject: 'Hindi Literature & Language',
    department: 'Linguistic Studies',
    institution: 'manjurmati',
    verifiedSource: 'manjurmatihighschool.com/faculty.php'
  },
  {
    id: 'fac-06',
    name: 'Ram Swarup Prasad',
    designation: 'Subject Teacher',
    subject: 'Mathematics',
    department: 'Mathematics & Quantitative Problem Solving',
    institution: 'manjurmati',
    verifiedSource: 'manjurmatihighschool.com/faculty.php'
  },
  {
    id: 'fac-07',
    name: 'Sudipta Mukherjee',
    designation: 'Trained Graduate Teacher (TGT)',
    subject: 'English Language & Literature',
    department: 'English Medium Secondary Stream',
    institution: 'manjurmati',
    verifiedSource: 'manjurmatihighschool.com/faculty.php'
  },
  {
    id: 'fac-08',
    name: 'Anuradha Kujur',
    designation: 'Trained Graduate Teacher (TGT)',
    subject: 'Social Science (SST)',
    department: 'Humanities & Environmental Studies',
    institution: 'manjurmati',
    verifiedSource: 'manjurmatihighschool.com/faculty.php'
  },
  {
    id: 'fac-09',
    name: 'Sunita Kumari',
    designation: 'Subject Teacher',
    subject: 'Biology & Life Sciences',
    department: 'Biological Sciences & Nature Study',
    institution: 'manjurmati',
    verifiedSource: 'manjurmatihighschool.com/faculty.php'
  }
];
