import { NavBar } from '@/features/nav';
import { HeroSection } from '@/features/hero/components/HeroSection';
import { AboutSection } from '@/features/about/components/AboutSection';
import { ProjectsSection } from '@/features/projects/components/ProjectsSection';
import { Footer } from '@/features/footer';
import { JSX } from 'react';

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
