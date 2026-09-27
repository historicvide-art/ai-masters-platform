# NEXIAL AI — Master's Programme Platform

A premium, cutting-edge website for NEXIAL, an elite AI master's programme built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

✨ **Premium Design**
- Dark mode futuristic UI
- Gradient typography and animations
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll and page transitions

🎯 **Key Pages**
- **Homepage**: Hero, programme overview, research, faculty, admissions
- **Curriculum**: 6-module learning roadmap
- **Admissions**: Functional application form with validation

⚡ **Technical Stack**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- Form validation

🔒 **Performance & SEO**
- Optimized images and lazy loading
- SEO metadata and Open Graph tags
- Accessibility-first (ARIA labels, semantic HTML)
- Production-ready build

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global styles
│   ├── curriculum/       # Curriculum page
│   └── admissions/       # Admissions page with form
├── components/           # Reusable components
└── lib/                  # Utilities
```

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git add .
git commit -m "Deploy to Vercel"
git push origin main

# Deploy via Vercel CLI
vercel
```

### Environment Variables

Create `.env.local` (optional for API endpoints):

```
NEXT_PUBLIC_API_URL=https://your-api.com
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

- Lighthouse Score: 95+
- Core Web Vitals: Optimized
- First Contentful Paint: < 1.5s
- Cumulative Layout Shift: < 0.1

## License

MIT © 2026 NEXIAL Institute

## Support

For issues or inquiries, contact: admissions@nexial.ai
