import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiPostgresql,
  SiAmazon,
  SiJenkins,
  SiGit
} from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  title: string;
  icon: ReactNode;
}

export const SKILLS: Skill[] = [
  { 
    name: 'MongoDB', 
    title: 'NoSQL Database',
    icon: <SiMongodb className="text-green-500" />
  },
  { 
    name: 'Express.js', 
    title: 'Backend Framework',
    icon: <SiExpress className="text-gray-400" />
  },
  { 
    name: 'React & Next.js', 
    title: 'Frontend Framework',
    icon: <SiReact className="text-cyan-400" />
  },
  { 
    name: 'Node.js', 
    title: 'JavaScript Runtime',
    icon: <SiNodedotjs className="text-green-500" />
  },
  { 
    name: 'TypeScript', 
    title: 'Type-Safe JavaScript',
    icon: <SiTypescript className="text-blue-500" />
  },
  { 
    name: 'PostgreSQL & SQL', 
    title: 'Relational Database',
    icon: <SiPostgresql className="text-blue-400" />
  },
  { 
    name: 'AWS Cloud', 
    title: 'Cloud Infrastructure',
    icon: <SiAmazon className="text-orange-400" />
  },
  { 
    name: 'DevOps & Jenkins', 
    title: 'CI/CD Pipeline',
    icon: <SiJenkins className="text-red-500" />
  },
  { 
    name: 'Git', 
    title: 'Version Control',
    icon: <SiGit className="text-orange-500" />
  },
  { 
    name: 'Cybersecurity', 
    title: 'Security Best Practices',
    icon: <MdSecurity className="text-indigo-400" />
  },
];
