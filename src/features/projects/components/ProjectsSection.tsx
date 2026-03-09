'use client';

import { HeroParallax } from '@/components/ui/hero-parallax';

// Project data for Hero Parallax
const projectsData = [
  {
    title: "Expense Tracker App",
    link: "https://github.com/JScoder4005/expense-tracker",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    title: "Creative Portfolio",
    link: "https://github.com/JScoder4005/New-Portfolio-2026",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
  {
    title: "Task Management System",
    link: "https://github.com/JScoder4005/task-manager",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    title: "CI/CD Pipeline Setup",
    link: "https://github.com/JScoder4005/expense-tracker",
    thumbnail: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
  },
  {
    title: "Analytics Dashboard",
    link: "https://github.com/JScoder4005/expense-tracker",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "REST API Backend",
    link: "https://github.com/JScoder4005/expense-tracker",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    title: "PDF & CSV Export",
    link: "https://github.com/JScoder4005/expense-tracker",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    title: "Authentication System",
    link: "https://github.com/JScoder4005/expense-tracker",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
  },
  {
    title: "Docker Containerization",
    link: "https://github.com/JScoder4005/New-Portfolio-2026",
    thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
  },
  {
    title: "Real-time Chat App",
    link: "https://github.com/JScoder4005",
    thumbnail: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
  },
  {
    title: "Cloud Infrastructure",
    link: "https://github.com/JScoder4005",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    title: "Database Design",
    link: "https://github.com/JScoder4005",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
  },
  {
    title: "Jenkins Automation",
    link: "https://github.com/JScoder4005",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  },
  {
    title: "Security Scanning",
    link: "https://github.com/JScoder4005",
    thumbnail: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
  },
  {
    title: "Microservices Architecture",
    link: "https://github.com/JScoder4005",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full">
      <HeroParallax products={projectsData} />
    </section>
  );
};
