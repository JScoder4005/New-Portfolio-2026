# 🚀 Creative Portfolio 2026

A modern, stunning portfolio website built with Next.js 16, featuring advanced animations, 3D graphics, and a premium user experience.

## 🌐 Live Demo

**✨ [View Live Portfolio](https://new-portfolio-2026-lac.vercel.app/)** ✨

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?logo=tailwindcss)
![pnpm](https://img.shields.io/badge/pnpm-9.x-f69220?logo=pnpm)
![Deployment](https://img.shields.io/badge/Deployment-Live%20on%20Vercel-00C7B7?logo=vercel)

## ✨ Features

- 🎨 **Modern UI/UX** - Premium design with glassmorphism, gradients, and smooth animations
- 🌟 **Advanced Animations** - Powered by Framer Motion, GSAP, and custom effects
- 🎭 **3D Graphics** - Interactive Three.js canvas with React Three Fiber
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **High Performance** - Fast page loads with Next.js App Router
- 🔒 **Type Safe** - Built with TypeScript and strict type checking
- 🎯 **SEO Optimized** - Meta tags, semantic HTML, and best practices
- 🚢 **CI/CD Ready** - GitHub Actions, Docker, and Jenkins integration

## 🛠️ Tech Stack

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS

### Animation & Graphics
- **[Framer Motion](https://www.framer.com/motion/)** - Advanced animations
- **[GSAP](https://greensock.com/gsap/)** - Professional-grade animations
- **[Three.js](https://threejs.org/)** - 3D graphics
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - Schema validation

### DevOps
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline
- **Jenkins** - Automated deployment

## 📂 Project Structure

```
creative-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable UI components
│   │   └── ui/                # UI primitives
│   ├── features/              # Feature-based modules
│   │   ├── hero/              # Hero section
│   │   ├── about/             # About section
│   │   ├── projects/          # Projects showcase
│   │   ├── contact/           # Contact form
│   │   ├── nav/               # Navigation
│   │   └── footer/            # Footer
│   ├── constants/             # App constants and data
│   ├── lib/                   # Utility functions
│   └── shared/                # Shared types and hooks
├── public/                    # Static assets
├── .github/workflows/         # GitHub Actions
├── scripts/                   # Build and deployment scripts
└── docs/                      # Documentation

```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **pnpm** 8.x or higher (recommended)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JScoder4005/New-Portfolio-2026.git
   cd New-Portfolio-2026
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🐳 Docker

### Build and Run with Docker

```bash
# Build the image
docker build -t creative-portfolio .

# Run the container
docker run -p 3000:3000 creative-portfolio
```

### Using Docker Compose

```bash
docker-compose up
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JScoder4005/New-Portfolio-2026)

### Environment Variables

Create a `.env.local` file if needed:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 🎨 Customization

### Update Personal Information

1. **Skills & Experience**: Edit `src/constants/skills.tsx` and `src/constants/experience.ts`
2. **Projects**: Update `src/features/projects/data.ts`
3. **Contact Info**: Modify `src/constants/contact.ts`
4. **Social Links**: Edit `src/constants/social.tsx`
5. **Stats**: Update `src/constants/stats.ts`

### Change Colors & Theme

Edit `src/app/globals.css` to customize the color palette and design tokens.

## 📊 Performance

- ✅ **Lighthouse Score**: 95+ on all metrics
- ✅ **Core Web Vitals**: Optimized LCP, FID, and CLS
- ✅ **Code Splitting**: Automatic with Next.js
- ✅ **Image Optimization**: Next.js Image component

## 🔒 CI/CD Pipeline

The project includes a comprehensive CI/CD setup:

- **Linting & Type Checking**: Automated on every push
- **Build Validation**: Ensures production builds succeed
- **Docker Image**: Automated multi-platform builds
- **Security Scanning**: Trivy vulnerability scanner

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Uday**
- GitHub: [@JScoder4005](https://github.com/JScoder4005)
- Portfolio: [https://new-portfolio-2026-lac.vercel.app/](https://new-portfolio-2026-lac.vercel.app/)

## 🙏 Acknowledgments

- [Aceternity UI](https://ui.aceternity.com/) - Beautiful UI components
- [Vercel](https://vercel.com/) - Hosting platform
- [Next.js Team](https://nextjs.org/) - Amazing framework

---

<div align="center">
  Made with ❤️ using Next.js
  
  ⭐ Star this repo if you like it!
</div>
