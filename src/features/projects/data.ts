import type { Project } from '@/shared/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Expense Tracker Application',
    description: 'Full-stack expense tracking app with category management, analytics dashboard, and CSV/PDF export features. Built with MERN stack and features responsive design.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    githubUrl: 'https://github.com/yourusername/expense-tracker',
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'Modern portfolio website showcasing projects and skills with stunning animations using Aceternity UI components, GSAP, and Three.js effects.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    githubUrl: 'https://github.com/yourusername/creative-portfolio',
  },
  {
    id: '3',
    title: 'Task Management System',
    description: 'Enterprise task management solution with real-time collaboration, role-based access control, and automated workflow features.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'tRPC', 'AWS'],
    githubUrl: 'https://github.com/yourusername/task-manager',
  },
];

