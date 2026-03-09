import type { Project } from '@/shared/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Expense Tracker Application',
    description: 'Full-stack expense tracking app with category management, analytics dashboard, and CSV/PDF export features. Built with MERN stack, featuring JWT authentication, CI/CD via Jenkins + GitHub Actions, and Docker containerization.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Docker', 'Jenkins'],
    githubUrl: 'https://github.com/JScoder4005/expense-tracker',
  },
  {
    id: '2',
    title: 'Creative Portfolio',
    description: 'Modern portfolio website showcasing projects and skills with stunning animations using Aceternity UI components, GSAP, and Three.js effects. Deployed on Vercel with automated CI/CD pipelines.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Docker'],
    githubUrl: 'https://github.com/JScoder4005/New-Portfolio-2026',
  },
  {
    id: '3',
    title: 'Task Management System',
    description: 'Enterprise task management solution with real-time collaboration, role-based access control, and automated workflow features. Includes PostgreSQL with Prisma ORM and secure JWT-based authentication.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'tRPC', 'TypeScript'],
    githubUrl: 'https://github.com/JScoder4005/task-manager',
  },
];

