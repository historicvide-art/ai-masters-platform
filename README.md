# NEXIAL AI — Master's Programme Platform

A premium, cutting-edge website for NEXIAL, an elite AI master's programme built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### Premium Design
- Dark mode futuristic UI with gradient effects
- Smooth animations and transitions (Framer Motion)
- Fully responsive design (mobile, tablet, desktop)
- Optimized performance and accessibility

### Pages
- **Homepage** (`/`): Hero section, programme overview, specializations, research section, faculty, and admissions CTA
- **Curriculum** (`/curriculum`): 6-module learning roadmap with detailed module descriptions
- **Admissions** (`/admissions`): Fully functional application form with validation, error handling, and success states

### Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 10.16
- **Icons**: React Icons 4.12
- **Form Validation**: Client-side validation with error states

### Performance & Production-Ready
- ✅ Clean TypeScript compilation (strict mode enabled)
- ✅ SEO optimized (metadata, Open Graph tags)
- ✅ Accessibility first (ARIA labels, semantic HTML, focus management)
- ✅ Mobile-first responsive design
- ✅ Form validation with real-time feedback
- ✅ Success/error states for user feedback
- ✅ Vercel deployment ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build & Testing

```bash
# Build for production
npm run build

# Run production server locally
npm start

# Type checking
npm run type-check
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Homepage with all sections
│   ├── globals.css          # Global styles and custom animations
│   ├── curriculum/
│   │   └── page.tsx         # Curriculum page with modules
│   └── admissions/
│       └── page.tsx         # Admissions form with validation
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript strict configuration
├── package.json             # Dependencies and scripts
└── vercel.json              # Vercel deployment configuration
```

## 🌐 Deployment

### Vercel (One-Click Deploy)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy (automatic build & deployment)

```bash
# Via Vercel CLI
vercel
```

### Environment Variables (Optional)

Create `.env.local` if needed:

```
NEXT_PUBLIC_API_URL=https://your-api.com
```

## ✅ Quality Checklist

- [x] TypeScript strict mode enabled
- [x] No unused variables or imports
- [x] No implicit any types
- [x] All pages render correctly
- [x] Navigation links work on all pages
- [x] Forms validate input properly
- [x] Mobile responsive design tested
- [x] Animations smooth and performant
- [x] SEO metadata optimized
- [x] Accessibility (ARIA, semantic HTML)
- [x] Production build passes without errors
- [x] Ready for Vercel deployment

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile: iOS Safari, Chrome Mobile

## 📊 Performance Targets

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 2.5s

## 📝 License

MIT © 2026 NEXIAL Institute

## 📞 Contact

For inquiries: admissions@nexial.ai
