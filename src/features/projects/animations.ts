import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateProjectCards = (elements: HTMLElement[]): gsap.core.Tween => {
  return gsap.from(elements, {
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 80%',
    },
    x: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
  });
};

export const createHorizontalScroll = (container: HTMLElement, wrapper: HTMLElement): ScrollTrigger => {
  const scrollWidth = wrapper.scrollWidth - window.innerWidth;
  
  return ScrollTrigger.create({
    trigger: container,
    start: 'top top',
    end: () => `+=${scrollWidth}`,
    pin: true,
    anticipatePin: 1,
    scrub: 1,
    onUpdate: (self) => {
      gsap.to(wrapper, {
        x: -scrollWidth * self.progress,
        duration: 0,
      });
    },
  });
};
