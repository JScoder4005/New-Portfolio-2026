'use client';

import { useEffect, useState } from 'react';
import type { ScrollProgress } from '../types';

export const useScrollProgress = (): ScrollProgress => {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    progress: 0,
    direction: 'down',
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollProgress = (): void => {
      const currentScrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = windowHeight > 0 ? (currentScrollY / windowHeight) * 100 : 0;
      
      setScrollProgress({
        progress,
        direction: currentScrollY > lastScrollY ? 'down' : 'up',
      });
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return scrollProgress;
};
