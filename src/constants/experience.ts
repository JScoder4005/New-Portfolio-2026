export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string;
  type: 'company' | 'freelance';
  subsidiary?: string;
  current?: boolean;
}

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'GlobalITES',
    position: 'Software Developer',
    period: '2024 - Present',
    duration: '',
    description: 'Full-time software development role working on enterprise-level applications.',
    type: 'company',
    current: true,
  },
  {
    id: '2',
    company: 'Radisucard',
    position: 'Software Developer',
    period: '2022-2024',
    duration: '1.5 years',
    description: 'Developed enterprise applications in SAP ecosystem with payroll systems.',
    type: 'company',
    subsidiary: 'Under SAP Payroll',
  },
  {
    id: '3',
    company: 'Self-Employed',
    position: 'Freelance Developer',
    period: '2020-2022',
    duration: '1.5 years',
    description: 'Built custom web applications for various clients using modern stack.',
    type: 'freelance',
  },
];
