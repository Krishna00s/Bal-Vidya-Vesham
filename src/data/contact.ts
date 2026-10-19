export interface InstitutionalContact {
  campusId: 'manjurmati' | 'bal-vidyavasham' | 'shared';
  institutionName: string;
  stageRole: string;
  postalAddress: {
    line1: string;
    postOffice: string;
    block: string;
    policeStation: string;
    district: string;
    state: string;
    pinCode: string;
  };
  phoneNumbers: string[];
  emailAddresses: string[];
  officeHours: {
    days: string;
    timings: string;
    notes: string;
  };
  landmarkDirections: string;
}

export const INSTITUTIONAL_CONTACT_DATA: Record<'manjurmati' | 'bal-vidyavasham', InstitutionalContact> = {
  manjurmati: {
    campusId: 'manjurmati',
    institutionName: 'Manjurmati High School',
    stageRole: 'Secondary Senior Wing · Classes VI to X · JAC Affiliated',
    postalAddress: {
      line1: 'Mahadev Aashram (Mahadetoli)',
      postOffice: 'PO Badla',
      block: 'Block Senha',
      policeStation: 'PS Senha',
      district: 'Lohardaga',
      state: 'Jharkhand',
      pinCode: '835302'
    },
    phoneNumbers: ['+91 8340469822', '+91 9304544100'],
    emailAddresses: ['mmhs66535@gmail.com', 'shivayashivi@gmail.com'],
    officeHours: {
      days: 'Monday through Saturday (Excluding Gazetted Holidays)',
      timings: '08:30 AM – 02:00 PM',
      notes: 'Administrative inquiries, fee desk, and state-board registration slip verifications.'
    },
    landmarkDirections: 'Located along the access road in Mahadetoli / Mahadev Ashram, Senha Block, facing Bal Vidyavasham across the roadway, approximately 12 km from Lohardaga District Headquarters.'
  },
  'bal-vidyavasham': {
    campusId: 'bal-vidyavasham',
    institutionName: 'Bal Vidyavasham (Junior Section)',
    stageRole: 'Foundational Junior Wing · Nursery through Class V · English Medium',
    postalAddress: {
      line1: 'Mahadetoli (Opposite Manjurmati High School)',
      postOffice: 'PO Badla',
      block: 'Block Senha',
      policeStation: 'PS Senha',
      district: 'Lohardaga',
      state: 'Jharkhand',
      pinCode: '835302'
    },
    phoneNumbers: ['+91 8340469822', '+91 9304544100'],
    emailAddresses: ['mmhs66535@gmail.com'],
    officeHours: {
      days: 'Monday through Saturday',
      timings: '08:30 AM – 01:30 PM',
      notes: 'Junior section admission inquiries, parent-teacher liaison, and early-grade registration.'
    },
    landmarkDirections: 'Facing the senior school campus entrance arch across the shared road in Mahadetoli, Senha. Dedicated pedestrian gate and sheltered botanical courtyard entrance for young children.'
  }
};
