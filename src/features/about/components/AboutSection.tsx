'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { animateAboutItems } from '../animations';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { SKILLS, STATS, CORE_COMPETENCIES, EXPERIENCES } from '@/constants';


export const AboutSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skillsTitleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const elements = [titleRef.current, textRef.current, skillsTitleRef.current].filter(Boolean) as HTMLElement[];
    if (elements.length > 0) {
      animateAboutItems(elements);
    }
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center py-32">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {/* Title */}
          <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          {/* Two Column Layout: About Left, Experience Right */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - About Me */}
            <div ref={textRef} className="space-y-6">
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  I&apos;m Uday, a Full Stack Developer passionate about building 
                  robust and scalable web applications using modern technologies.
                </p>
                <p>
                  With expertise in the MERN stack (MongoDB, Express.js, React, Node.js) 
                  and Next.js, I create performant applications with TypeScript for 
                  type-safe development.
                </p>
                <p>
                  I also have strong DevOps skills including Jenkins, Git, AWS cloud 
                  infrastructure, and database management with SQL and PostgreSQL. 
                  Additionally, I bring cybersecurity awareness to ensure secure application development.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <CardSpotlight className="h-24">
                  <div className="p-4 h-full flex flex-col justify-center">
                    <div className="text-3xl font-bold text-gradient">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </CardSpotlight>

                <CardSpotlight className="h-24">
                  <div className="p-4 h-full flex flex-col justify-center">
                    <div className="text-3xl font-bold text-gradient">20+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </div>
                </CardSpotlight>

                <CardSpotlight className="h-24">
                  <div className="p-4 h-full flex flex-col justify-center">
                    <div className="text-3xl font-bold text-gradient">3</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </div>
                </CardSpotlight>

                <CardSpotlight className="h-24">
                  <div className="p-4 h-full flex flex-col justify-center">
                    <div className="text-3xl font-bold text-gradient">100%</div>
                    <div className="text-sm text-muted-foreground">Commitment</div>
                  </div>
                </CardSpotlight>
              </div>

              {/* Key Skills Highlight */}
              <div className="pt-4">
                <h4 className="text-lg font-bold mb-3">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="glass px-3 py-1.5 rounded-full text-sm">Full Stack Development</span>
                  <span className="glass px-3 py-1.5 rounded-full text-sm">Cloud Infrastructure</span>
                  <span className="glass px-3 py-1.5 rounded-full text-sm">DevOps & CI/CD</span>
                  <span className="glass px-3 py-1.5 rounded-full text-sm">Database Design</span>
                  <span className="glass px-3 py-1.5 rounded-full text-sm">Security Best Practices</span>
                </div>
              </div>
            </div>

            {/* Right Column - Work Experience Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Work Experience</h3>
              
              <ol className="relative border-l-2 border-primary/30 ml-4">
                {/* GlobalITES - Current */}
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full -left-5 ring-4 ring-background">
                    <span className="text-lg">🏢</span>
                  </span>
                  <CardSpotlight className="h-48">
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-bold">Software Developer</h4>
                          <p className="text-sm text-primary">GlobalITES</p>
                        </div>
                        <span className="text-xs glass px-3 py-1 rounded-full bg-primary/10">Present</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">2024 - Present</p>
                      <p className="text-sm flex-1">
                        Full-time software development role working on enterprise-level applications.
                      </p>
                    </div>
                  </CardSpotlight>
                </li>

                {/* Radisucard */}
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-full -left-5 ring-4 ring-background">
                    <span className="text-lg">🏢</span>
                  </span>
                  <CardSpotlight className="h-48">
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-bold">Software Developer</h4>
                          <p className="text-sm text-secondary">Radisucard</p>
                          <p className="text-xs text-muted-foreground">Under SAP Payroll</p>
                        </div>
                        <span className="text-xs glass px-3 py-1 rounded-full">2022-2024</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">1.5 years</p>
                      <p className="text-sm flex-1">
                        Developed enterprise applications in SAP ecosystem with payroll systems.
                      </p>
                    </div>
                  </CardSpotlight>
                </li>

                {/* Freelancing */}
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-full -left-5 ring-4 ring-background">
                    <span className="text-lg">💼</span>
                  </span>
                  <CardSpotlight className="h-48">
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-bold">Freelance Developer</h4>
                          <p className="text-sm text-accent">Self-Employed</p>
                        </div>
                        <span className="text-xs glass px-3 py-1 rounded-full">2020-2022</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">1.5 years</p>
                      <p className="text-sm flex-1">
                        Built custom web applications for various clients using modern stack.
                      </p>
                    </div>
                  </CardSpotlight>
                </li>
              </ol>
            </div>
          </div>

          {/* Skills Moving Cards */}
          <div className="space-y-8">
            <h3 ref={skillsTitleRef} className="text-3xl font-bold text-center">
              Technical Expertise
            </h3>
            
            <InfiniteMovingCards
              items={SKILLS}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
