// Smooth scroll utility functions

export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const getScrollProgress = (): number => {
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  return windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
};
