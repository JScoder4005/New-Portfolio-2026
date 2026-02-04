'use client';

import { useScrollProgress } from '@/shared/hooks/useScrollProgress';
import { NavItemComponent } from './NavItem';
import { Logo } from '@/components/Logo';
import { NAV_ITEMS, CONTACT } from '@/constants';

export const NavBar = () => {
  const { progress } = useScrollProgress();
  const isScrolled = progress > 5;

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}
      `}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Logo className="w-10 h-10" />
        </div>

        <div className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <NavItemComponent key={item.href} item={item} />
          ))}
        </div>


        <a
          href={CONTACT.buyMeCoffeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 py-2 rounded-full glass text-sm font-medium
            hover:bg-white/10 transition-all duration-300
            flex items-center gap-2
          "
        >
          <span>☕</span>
          <span>Buy Me a Coffee</span>
        </a>
      </div>
    </nav>
  );
};
