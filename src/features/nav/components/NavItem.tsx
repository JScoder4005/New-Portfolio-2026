'use client';

import { scrollToElement } from '@/shared/utils/scroll';
import type { NavItem } from '../types';

interface NavItemProps {
  item: NavItem;
  isActive?: boolean;
}

export const NavItemComponent = ({ item, isActive = false }: NavItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const id = item.href.replace('#', '');
    scrollToElement(id);
  };

  return (
    <a
      href={item.href}
      onClick={handleClick}
      className={`
        relative px-4 py-2 text-sm font-medium transition-all duration-300
        hover:text-primary
        ${isActive ? 'text-primary' : 'text-muted-foreground'}
      `}
    >
      {item.label}
      <span
        className={`
          absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary
          transition-all duration-300
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
      />
    </a>
  );
};
