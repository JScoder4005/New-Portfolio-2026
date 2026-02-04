'use client';

import { HeroParallax } from '@/components/ui/hero-parallax';

// Project data for Hero Parallax (needs thumbnail images)
const projectsData = [
  {
    title: "E-Commerce Platform",
    link: "https://github.com/example/ecommerce",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    title: "AI Dashboard",
    link: "https://github.com/example/ai-dashboard",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "3D Portfolio",
    link: "https://github.com/example/3d-portfolio",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  },
  {
    title: "Task Management App",
    link: "https://github.com/example/task-manager",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    title: "Social Media Platform",
    link: "https://github.com/example/social-app",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    title: "Real-time Chat App",
    link: "https://github.com/example/chat-app",
    thumbnail: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
  },
  {
    title: "Weather Dashboard",
    link: "https://github.com/example/weather-app",
    thumbnail: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
  },
  {
    title: "Crypto Tracker",
    link: "https://github.com/example/crypto-tracker",
    thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
  },
  {
    title: "Fitness Tracker",
    link: "https://github.com/example/fitness-app",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  },
  {
    title: "Recipe Finder",
    link: "https://github.com/example/recipe-app",
    thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
  },
  {
    title: "Music Player",
    link: "https://github.com/example/music-player",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
  },
  {
    title: "Blog Platform",
    link: "https://github.com/example/blog-platform",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    title: "Video Streaming",
    link: "https://github.com/example/video-stream",
    thumbnail: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
  },
  {
    title: "Booking System",
    link: "https://github.com/example/booking-system",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/example/portfolio",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full">
      <HeroParallax products={projectsData} />
    </section>
  );
};
