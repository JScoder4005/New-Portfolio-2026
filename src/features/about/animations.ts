import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateAboutSection = (element: HTMLElement): gsap.core.Tween => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
};

export const animateAboutItems = (elements: HTMLElement[]): gsap.core.Timeline => {
  return gsap.from(elements, {
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 75%',
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
  });
};
