'use client';

import { Suspense, lazy } from 'react';
import { ScrollIndicator } from './ScrollIndicator';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { EncryptedText } from '@/components/ui/encrypted-text';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Star Background */}
      <StarsBackground />
      <ShootingStars />

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="block">
              Hi, I&apos;m <EncryptedText text="Uday" className="text-gradient" />
            </span>
            <span className="block mt-4">
              Full Stack Developer
            </span>
            {/* <span className="block text-muted-foreground text-4xl md:text-6xl mt-4">
              & DevOps Engineer
            </span> */}
          </h1>

          <TextGenerateEffect
            words="Building scalable applications with MERN stack, Next.js, and AWS cloud infrastructure"
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          />

          <div className="flex items-center justify-center pt-8">
            <button className="px-8 py-4 glass rounded-full font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};
