# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (http://localhost:3000)
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint (max 20 warnings threshold)
```

No test runner is configured. TypeScript type-checking (`tsc --noEmit`) is currently commented out in CI due to a JSX namespace config issue.

## Architecture

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 4 · Framer Motion · GSAP · Three.js / React Three Fiber

**Feature-based structure** — each section of the page is a self-contained feature module:

```
src/
├── app/                  # Next.js App Router (layout, page, globals.css, /api/health)
├── features/             # hero, nav, about, projects, contact, footer
│   └── <feature>/
│       ├── components/   # React components
│       ├── animations.ts # GSAP/Framer animation logic
│       ├── data.ts       # Static data (projects feature)
│       └── types.ts
├── components/ui/        # Reusable visual effects (beams, stars, parallax, spotlight, etc.)
├── constants/            # All site data: skills, experience, social, navigation, stats, contact
├── shared/               # Global types, hooks (useScrollProgress), scroll utils
└── lib/utils.ts          # cn() helper (clsx + tailwind-merge)
```

**Page composition:** `src/app/page.tsx` composes all feature sections in order.

## Key Patterns

**Customization:** All content data lives in `src/constants/` and `src/features/projects/data.ts` — edit these to change portfolio content without touching components.

**Animation split:** GSAP handles scroll-triggered and timeline animations (defined in `animations.ts` per feature); Framer Motion handles component-level transitions.

**Form handling:** Contact form uses React Hook Form + Zod (`src/features/contact/`). The submit handler is a simulated 2s delay — wire up a real API if needed.

**Styling:** Tailwind CSS 4 with design tokens defined as CSS custom properties in `globals.css` (oklch color space). Custom utilities: `.text-gradient`, `.glass`, `.glow`. Path alias `@/*` maps to `src/*`.

**Client components:** Interactive components use `'use client'`. The hero canvas (`HeroCanvas.tsx`) uses Three.js via React Three Fiber.

## Deployment

- **Live:** https://new-portfolio-2026-lac.vercel.app/ (Vercel)
- **Docker:** Multi-stage build, non-root user, health check at `/api/health`, port 3000
- **CI:** GitHub Actions runs lint + build on push (`.github/workflows/ci.yml`)
- **Env var:** `NEXT_PUBLIC_SITE_URL` (optional, for canonical URLs)
- **Images:** Remote patterns configured for `images.unsplash.com`
