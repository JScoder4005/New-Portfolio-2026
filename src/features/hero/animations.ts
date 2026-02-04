import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateHeroText = (element: HTMLElement): gsap.core.Tween => {
  return gsap.from(element, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
  });
};

export const animateHeroWords = (elements: HTMLElement[]): gsap.core.Tween => {
  return gsap.from(elements, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
  });
};

export const createHeroScrollTrigger = (
  trigger: string,
  elements: HTMLElement[]
): ScrollTrigger => {
  return ScrollTrigger.create({
    trigger,
    start: 'top center',
    end: 'bottom center',
    onEnter: () => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
      });
    },
  });
};
