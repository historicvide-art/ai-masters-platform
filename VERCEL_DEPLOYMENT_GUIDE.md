# NEXIAL AI — Vercel Deployment Guide

## 🚀 Pre-Deployment Checklist

### Code Quality
- [x] TypeScript strict mode enabled
- [x] No console errors or warnings
- [x] All pages render correctly
- [x] Navigation tested on all pages
- [x] Forms validate properly
- [x] Mobile responsive verified
- [x] Production build passes

### Configuration Files
- [x] `package.json` — All dependencies listed
- [x] `next.config.js` — Optimized for production
- [x] `tsconfig.json` — Strict mode enabled
- [x] `tailwind.config.ts` — Content paths correct
- [x] `vercel.json` — Deployment config ready
- [x] `.gitignore` — Proper exclusions

### SEO & Metadata
- [x] Page titles optimized
- [x] Meta descriptions present
- [x] Open Graph tags configured
- [x] Canonical URLs set
- [x] Favicon ready (default Next.js)
- [x] sitemap.xml (auto-generated)
- [x] robots.txt (auto-generated)

### Security
- [x] No API keys in code
- [x] Environment variables configured
- [x] CORS headers ready
- [x] Content Security Policy ready
- [x] No sensitive data exposed

---

## 📋 Final Verification Steps

### 1. Local Production Build Test

```bash
# Install dependencies
npm install

# Run type checking
npm run type-check

# Create production build
npm run build

# Test production build locally
npm start

# Open http://localhost:3000 and verify:
# ✓ Homepage loads correctly
# ✓ Navigation works on all pages
# ✓ Curriculum page displays properly
# ✓ Admissions form appears
# ✓ All animations are smooth
# ✓ Mobile menu toggles correctly
# ✓ Responsive design works at all breakpoints
# ✓ Form validation works
```

### 2. Production Build Output Check

After `npm run build`, verify `.next/` folder contains:
```
✓ .next/static/chunks/ — Code bundles
✓ .next/static/css/ — Minified CSS
✓ .next/server/ — Server files
✓ No errors in build logs
✓ No warnings in build logs
```

### 3. Repository Ready Check

```bash
# Ensure all files are committed
git status
# Should show: "On branch main" and "nothing to commit"

# Verify remote is set
git remote -v
# Should show your GitHub remote

# Push latest changes
git add .
git commit -m "Final production ready: NEXIAL AI platform v1.0.0"
git push origin main
```

---

## 🌐 Vercel Deployment (Step-by-Step)

### Option 1: Web Dashboard (Easiest)

1. **Create Vercel Account**
   - Visit https://vercel.com
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub

2. **Import Project**
   - Click "New Project" on Vercel dashboard
   - Search for your repository: `ai-masters-platform`
   - Click "Import"

3. **Configure Project**
   - Framework: Next.js (auto-detected)
   - Build Command: (leave default)
   - Output Directory: (leave default)
   - Environment Variables: (skip for now)
   - Click "Deploy"

4. **Wait for Deployment**
   - Vercel builds and deploys automatically
   - ~2-3 minutes for first build
   - Shows green "Ready" when complete

5. **Get Your Live URL**
   - Vercel assigns a default domain: `ai-masters-platform.vercel.app`
   - Copy this URL and test it

### Option 2: Vercel CLI (For Developers)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy from project directory
cd path/to/ai-masters-platform
vercel

# Answer prompts:
# "Set up and deploy ~ai-masters-platform?" → yes
# "Which scope?" → select your account
# "Link to existing project?" → no
# "Project name?" → ai-masters-platform
# "In which directory is your code?" → ./
# "Want to modify anything?" → no

# Deployment starts automatically
# You'll get a preview URL and production URL
```

### Option 3: GitHub Integration (Recommended)

1. **Connect GitHub to Vercel**
   - Go to Vercel settings: https://vercel.com/settings/git
   - Click "Connect Git Repository"
   - Select GitHub
   - Authorize Vercel
   - Select your repository

2. **Auto-Deploy on Push**
   - Every `git push` to `main` auto-deploys
   - Pull requests get preview deployments
   - No manual deployment needed

---

## 🔗 Custom Domain Setup

### Connect Your Custom Domain

1. **In Vercel Dashboard**
   - Go to your project settings
   - Click "Domains"
   - Enter your domain (e.g., `nexial.ai`)
   - Click "Add"

2. **Update DNS Records**
   - Vercel shows 4 nameservers to add to your domain registrar
   - Or add CNAME record pointing to Vercel
   - Wait 24-48 hours for DNS propagation

3. **Verify Domain**
   - Vercel checks DNS records
   - Shows "Valid Configuration" when ready
   - SSL certificate auto-generated (free)

---

## 📊 Environment Variables (Optional)

If you need API endpoints in future:

1. **In Vercel Dashboard**
   - Project Settings → Environment Variables
   - Add variable: `NEXT_PUBLIC_API_URL`
   - Value: `https://your-api.com`
   - Click "Save"

2. **Use in Code**
   ```typescript
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
   ```

3. **Redeploy**
   - Vercel auto-redeploys on variable changes
   - No code changes needed

---

## ✅ Post-Deployment Verification

### 1. Test All Pages

```
✓ Homepage (/) loads
✓ Curriculum (/curriculum) displays correctly
✓ Admissions (/admissions) form appears
✓ All navigation links work
✓ All anchor links (#programme, #research, etc.) work
✓ Mobile menu toggles on small screens
```

### 2. Test Form Functionality

```
✓ Form inputs accept text
✓ Email validation works
✓ Character counter updates
✓ Submit button is clickable
✓ Success message appears after submit
✓ Form resets properly
```

### 3. Test Responsive Design

```bash
# On desktop browser, use DevTools:
# F12 → Device Toolbar → Toggle

✓ Mobile (375px): All text readable, no scroll
✓ Tablet (768px): Two-column layouts work
✓ Desktop (1920px): Full layout displays
✓ All buttons clickable at all sizes
✓ Navigation adapts to screen size
```

### 4. Test Performance

```bash
# In browser DevTools:
# Lighthouse → Generate report

✓ Performance: 90+
✓ Accessibility: 95+
✓ Best Practices: 95+
✓ SEO: 100
```

### 5. Test SEO

```bash
# Check page titles and descriptions:
# Right-click page → View page source

✓ <title> contains "NEXIAL"
✓ <meta name="description"> present
✓ <meta property="og:title"> present
✓ <meta property="og:image"> present
```

---

## 📱 Mobile Testing Checklist

- [ ] Test on real iPhone (iOS Safari)
- [ ] Test on real Android (Chrome)
- [ ] Test on iPad (tablet view)
- [ ] Verify touch interactions work
- [ ] Verify form input on mobile
- [ ] Check font sizes are readable
- [ ] Verify no horizontal scrolling
- [ ] Test mobile menu toggle
- [ ] Test all links are clickable

---

## 🔐 Security Checklist

- [ ] No API keys exposed in code
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Security headers configured
- [ ] No sensitive data in environment
- [ ] No console errors in production
- [ ] Form data validated on client and server (if backend added)

---

## 📈 Monitoring & Analytics (Optional)

### Vercel Analytics

1. **Enable Vercel Analytics**
   - Project Settings → Analytics
   - Click "Enable Web Analytics"
   - Install `@vercel/analytics` package
   ```bash
   npm install @vercel/analytics
   ```
   - Add to `src/app/layout.tsx`:
   ```typescript
   import { Analytics } from '@vercel/analytics/react';
   
   export default function RootLayout() {
     return (
       <html>
         <body>
           {/* ... */}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

2. **Monitor Performance**
   - View real-time analytics on Vercel dashboard
   - Track page views, response times, errors
   - Get alerts on performance issues

### Google Analytics (Optional)

1. **Create Google Analytics Property**
   - Go to https://analytics.google.com
   - Create new account for NEXIAL
   - Get tracking ID

2. **Add to Next.js**
   ```bash
   npm install @react-google-analytics-4/simple
   ```

3. **Configure in `layout.tsx`**
   ```typescript
   // Add tracking script
   ```

---

## 🆘 Troubleshooting

### Deployment Failed

**Problem:** Build fails on Vercel  
**Solution:**
1. Check build logs in Vercel dashboard
2. Ensure `npm run build` works locally
3. Verify all dependencies in `package.json`
4. Check for hardcoded paths (use relative paths)

### Pages Not Loading

**Problem:** 404 errors on Vercel  
**Solution:**
1. Verify file structure matches app router
2. Check page.tsx files exist in correct directories
3. Ensure no naming conflicts
4. Clear Vercel cache and redeploy

### Form Not Submitting

**Problem:** Form submission fails  
**Solution:**
1. Check browser console for errors
2. Verify API endpoint (if backend added)
3. Check environment variables
4. Test form locally before deploying

### Slow Performance

**Problem:** Site loads slowly  
**Solution:**
1. Optimize images (use Next.js Image component)
2. Enable caching headers
3. Reduce bundle size
4. Use Vercel analytics to identify bottlenecks

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **GitHub Issues:** https://github.com/historicvide-art/ai-masters-platform/issues

---

## 🎉 Deployment Complete!

**Your live NEXIAL AI website is now live on Vercel.**

### Next Steps:
1. Share your live URL
2. Set up custom domain (optional)
3. Enable analytics
4. Monitor performance
5. Plan future features

### Quick Links:
- **Default URL:** https://ai-masters-platform.vercel.app
- **Repository:** https://github.com/historicvide-art/ai-masters-platform
- **Vercel Dashboard:** https://vercel.com/dashboard

---

*Deployment Guide for NEXIAL AI Platform*  
*Version 1.0.0 — Ready for Production*
