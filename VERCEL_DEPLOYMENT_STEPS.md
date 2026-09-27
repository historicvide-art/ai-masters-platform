# NEXIAL AI — Vercel Deployment: Step-by-Step Guide

## 🚀 READY TO DEPLOY

**Repository:** historicvide-art/ai-masters-platform  
**Status:** 🟢 Production Ready  
**Deployment Platform:** Vercel  
**Estimated Time:** 5-10 minutes  

---

## 📋 PRE-DEPLOYMENT VERIFICATION

### Verify All Code is Committed

```bash
cd /path/to/ai-masters-platform

# Check git status
git status

# If anything shows "modified" or "untracked", commit it:
git add .
git commit -m "NEXIAL AI v1.0.0: Ready for Vercel deployment"

# Push to GitHub main branch
git push origin main

# Verify remote is correct
git remote -v
# Should show: origin  https://github.com/historicvide-art/ai-masters-platform.git
```

### Expected Output
```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

✅ **Status:** All code committed and pushed to GitHub

---

## 🌐 VERCEL DEPLOYMENT: SCREEN-BY-SCREEN GUIDE

### SCREEN 1: Visit Vercel

**Action:** Open your web browser and navigate to Vercel

```
URL: https://vercel.com
```

**What you see:**
- Vercel homepage with "Deploy" button
- Option to "Sign Up" or "Log In"

**Next Step:** Click "Sign Up" or "Log In"

---

### SCREEN 2: GitHub Authentication

**Action:** Choose GitHub as authentication method

**What you see:**
- Multiple sign-up options:
  - GitHub (recommended)
  - GitLab
  - Bitbucket
  - Email

**Action:** Click **"Continue with GitHub"**

**Expected behavior:**
- Browser redirects to GitHub login
- You may need to enter GitHub credentials
- GitHub asks permission for Vercel to access your account

**Action:** Click **"Authorize Vercel"** on GitHub

**Next Step:** You'll be redirected back to Vercel dashboard

---

### SCREEN 3: Vercel Dashboard

**What you see:**
- Vercel dashboard with your profile
- Button that says **"New Project"** or **"Add New..."**
- List of any existing projects (empty if first time)

**Action:** Click **"New Project"** button (top-right area)

**Expected behavior:**
- Takes you to "Create New Project" page

---

### SCREEN 4: Import Git Repository

**What you see:**
- Page titled "Create a new project"
- Search box that says "Search for a repository"
- Below: List of your GitHub repositories
- May show "Popular" repositories first

**Action:** Search for your repository:

```
Search box: Type "ai-masters-platform"
```

**Expected behavior:**
- Search results show your repository
- You see: "historicvide-art/ai-masters-platform"

**Action:** Click on **"historicvide-art/ai-masters-platform"**

**Next Step:** Takes you to project configuration

---

### SCREEN 5: Project Configuration

**What you see:**
- Page titled "Configure Project"
- Section 1: **Project Name**
  - Field shows: `ai-masters-platform`
  - ✅ This is correct, leave as-is

- Section 2: **Framework Preset**
  - Shows: `Next.js`
  - ✅ Auto-detected correctly

- Section 3: **Build and Output Settings**
  - Build Command: (likely empty or shows default)
  - Install Command: (likely empty or shows default)
  - Output Directory: (likely empty or shows default)
  - ✅ **Leave all blank/default** - Vercel will auto-configure for Next.js

- Section 4: **Environment Variables** (gray box)
  - Currently empty
  - ⚠️ **Skip this for now** (not needed for initial deployment)

**Action:** Scroll down and look for **"Deploy"** button

**Do NOT change any settings on this screen.**

**Action:** Click **"Deploy"** button

**Expected behavior:**
- Page shows "Deployment in progress..."
- Shows building status with progress indicators
- Various steps appear:
  - "Downloading files"
  - "Installing dependencies"
  - "Building project"
  - "Finalizing deployment"

**Time:** This takes 2-3 minutes

---

### SCREEN 6: Deployment Progress

**What you see:**
- "Deployment" header with progress bar
- List of build steps with checkmarks:
  ```
  ✓ Queued (timestamp)
  ✓ Building (timestamp)
  ✓ Production Deployment (timestamp)
  ```

- Real-time build logs showing:
  ```
  > Running "npm install"
  > Running "npm run build"
  > Generating static files
  ```

**What to look for:**
- ❌ **ERRORS:** Red text saying "Error" or "Failed" → If you see this, note the error message
- ✅ **SUCCESS:** Blue checkmarks and "Build successful" message

**If build succeeds:**
- Page shows green checkmark
- Message: "Congratulations! Your project has been successfully deployed"
- Shows your live URL

**Next Step:** Click on the URL to visit your live site

---

### SCREEN 7: Deployment Complete

**What you see:**
- Large success message: "Congratulations! Your project has been successfully deployed"
- Your live URL displayed prominently:
  ```
  https://ai-masters-platform.vercel.app
  ```
- Option to **"Continue to Dashboard"**
- Option to **"Visit"** (opens your live site)

**Action:** Click **"Visit"** button

**Expected behavior:**
- Opens new browser tab
- Shows your NEXIAL AI website
- URL shows: `https://ai-masters-platform.vercel.app`

---

## ✅ LIVE SITE VERIFICATION

### DESKTOP TESTING (1920px)

**URL:** https://ai-masters-platform.vercel.app

#### Hero Section
- [ ] Page loads without errors
- [ ] Large "NEXIAL" title visible
- [ ] Subtitle text visible: "An intensive master's degree..."
- [ ] Two CTA buttons visible: "Explore the programme" and "Apply to 2026 cohort"
- [ ] Animated gradient orbs visible in background
- [ ] Navigation bar at top with: logo, menu items, "Apply now" button

#### Navigation
- [ ] Click "Programme" link → Scrolls to programme section
- [ ] Click "Research" link → Scrolls to research section
- [ ] Click "Curriculum" link → Goes to `/curriculum` page ✅
- [ ] Click "Admissions" link → Goes to `/admissions` page ✅
- [ ] Click "Apply now" button → Goes to `/admissions` page ✅

#### Programme Section
- [ ] "Three Specializations" heading visible
- [ ] Three cards visible:
  - Quantum Intelligence
  - Ethical Emergence
  - Neural Symbiosis
- [ ] Cards are clickable (border highlights on click)

#### Study Formats
- [ ] Section title "Study Formats" visible
- [ ] Three program cards visible:
  - 🧠 Deep Learning Lab
  - ⚡ Emergent Systems
  - 🔬 Research Studio
- [ ] Each card shows: title, cohort count, and focus area

#### Research Section
- [ ] "Frontier Work. Real Impact." heading visible
- [ ] Left side: "[AI Labs]" placeholder box
- [ ] Right side: List with checkmarks
  - Live projects from industry partners
  - Access to state-of-the-art compute
  - Publish in top venues
  - Build production systems

#### Faculty Section
- [ ] "Learn from pioneers" heading visible
- [ ] Four faculty cards in grid
- [ ] Each card shows: avatar, name, specialization, bio

#### Admissions CTA Section
- [ ] "Your Next Chapter Starts Here" heading visible
- [ ] Three info boxes:
  - Applications Open: 01 October 2025
  - Cohort Begins: September 2026
  - Location: London + Global
- [ ] "Start your application" button visible

#### Footer
- [ ] Footer contains: NEXIAL logo/name, copyright, social links
- [ ] Four columns: NEXIAL info, Programme, Connect, Social
- [ ] Social icons: Twitter, LinkedIn, GitHub

#### Performance
- [ ] Page loads in < 2 seconds
- [ ] Animations are smooth (60fps)
- [ ] No console errors (F12 → Console tab)
- [ ] No broken images

---

### MOBILE TESTING (375px - iPhone SE)

**How to test:**

1. Open site on iPhone or Android phone
2. OR use Chrome DevTools:
   - Press F12
   - Click device icon (top-left)
   - Select "iPhone SE" from dropdown
   - Refresh page

#### Navigation (Mobile)
- [ ] NEXIAL logo visible (left)
- [ ] Hamburger menu icon visible (right)
- [ ] "Apply now" button NOT visible (only on desktop)
- [ ] Click hamburger menu → Mobile menu opens
- [ ] Menu shows: Programme, Research, Curriculum, Admissions
- [ ] Click item → Menu closes and navigates
- [ ] Click X or outside → Menu closes

#### Hero Section (Mobile)
- [ ] "NEXIAL" title readable
- [ ] Subtitle text readable without zoom
- [ ] Two buttons stacked vertically
- [ ] Buttons are full width or near-full width
- [ ] Button text readable
- [ ] Touch targets at least 44px tall

#### Content Sections (Mobile)
- [ ] Heading text large enough to read
- [ ] Cards stack vertically (1 column)
- [ ] No horizontal scroll
- [ ] Images scale to screen width
- [ ] Text has proper margins
- [ ] Spacing is readable

#### Admissions Section (Mobile)
- [ ] "Your Next Chapter Starts Here" visible
- [ ] Info boxes stack vertically
- [ ] "Start your application" button visible and clickable
- [ ] Touch target large enough (44px+)

#### Footer (Mobile)
- [ ] Footer content stacks vertically
- [ ] Social links visible and clickable
- [ ] Text readable
- [ ] Links are properly spaced

#### Performance (Mobile)
- [ ] Page loads without spinning (< 3 seconds on 4G)
- [ ] No jank or stuttering on scroll
- [ ] Animations run smoothly
- [ ] No console errors

---

### TABLET TESTING (768px - iPad)

**How to test:**
- Use Chrome DevTools device toggle
- Select "iPad" from dropdown

#### Tablet Layout
- [ ] Desktop navigation shows (not mobile menu)
- [ ] Two-column layouts display correctly
- [ ] Grid items arrange properly
- [ ] Text is readable
- [ ] Images scale properly
- [ ] All interactive elements clickable
- [ ] No horizontal scroll

---

## 📋 ADMISSIONS FORM TESTING

**URL:** https://ai-masters-platform.vercel.app/admissions

### Desktop Form Testing

#### Page Load
- [ ] Page loads without errors
- [ ] Back button visible (top-left)
- [ ] Form title visible: "Apply for the 2026 cohort"
- [ ] Subtitle visible
- [ ] All form fields visible

#### Form Fields
- [ ] Name input field visible and clickable
- [ ] Email input field visible and clickable
- [ ] Background dropdown visible and clickable
- [ ] Statement textarea visible and clickable
- [ ] Submit and Cancel buttons visible

#### Form Validation - Name Field
- [ ] Leave name empty and click Submit
  - ❌ Error message appears: "Name is required"
  - Button has red border
  - Red text appears below field
- [ ] Type a name
  - ✅ Error disappears
  - Border returns to normal

#### Form Validation - Email Field
- [ ] Leave email empty and click Submit
  - ❌ Error: "Email is required"
- [ ] Type invalid email (e.g., "abc")
  - ❌ Error: "Please enter a valid email"
- [ ] Type valid email (e.g., "test@example.com")
  - ✅ Error disappears
- [ ] Valid email formats:
  - user@example.com ✅
  - name.last@domain.co.uk ✅
  - test+tag@gmail.com ✅

#### Form Validation - Background Field
- [ ] Leave background unselected and click Submit
  - ❌ Error: "Background is required"
- [ ] Click dropdown
  - ✅ Shows 6 options:
    1. Computer Science / Engineering
    2. Mathematics / Physics
    3. Other STEM
    4. Business / Economics
    5. Research / Academia
    6. Other
- [ ] Select any option
  - ✅ Error disappears

#### Form Validation - Statement Field
- [ ] Leave statement empty and click Submit
  - ❌ Error: "Statement of purpose is required"
- [ ] Type fewer than 50 characters (e.g., "I want to study AI")
  - ❌ Error: "Please provide at least 50 characters"
  - ✅ Character counter shows current count (e.g., "18 characters")
- [ ] Type more than 50 characters
  - ✅ Error disappears
  - ✅ Character counter updates in real-time as you type

#### Form Submission
- [ ] Fill all fields with valid data:
  - Name: "John Smith"
  - Email: "john@example.com"
  - Background: "Computer Science / Engineering"
  - Statement: "I am interested in AI research..." (51+ chars)
- [ ] Click Submit button
  - ✅ Button shows "Submitting..." state
  - ✅ After 1-2 seconds, success modal appears

#### Success Modal
- [ ] Green checkmark icon visible
- [ ] Title: "Application Submitted!"
- [ ] Message: "Thank you for your interest..."
- [ ] After 3 seconds, form resets
- [ ] All fields become empty
- [ ] Modal disappears
- [ ] Form is ready to submit again

#### Cancel Button
- [ ] Fill form with data
- [ ] Click "Cancel" button
- [ ] ✅ Navigates back to homepage (/)

#### Back Navigation
- [ ] Click "Back home" button at top
- [ ] ✅ Navigates back to homepage (/)

### Mobile Form Testing (375px)

#### Mobile Layout
- [ ] Form fits on screen without horizontal scroll
- [ ] Fields stack vertically
- [ ] Labels visible above each field
- [ ] Buttons are full-width and large (44px+ tall)
- [ ] Keyboard doesn't cover form inputs (iOS/Android)
- [ ] Touch targets are large enough

#### Mobile Form Submission
- [ ] All validation works same as desktop
- [ ] Submit button responds to touch
- [ ] Success modal displays properly
- [ ] Can scroll to see success message
- [ ] Form resets and is usable again

---

## 📂 CURRICULUM PAGE TESTING

**URL:** https://ai-masters-platform.vercel.app/curriculum

### Page Load
- [ ] Page loads without errors
- [ ] Back button visible (top-left)
- [ ] Title: "A roadmap to research and impact"
- [ ] Description text visible

### Module List
- [ ] All 6 modules displayed:
  1. Foundations of AI and Intelligence Systems
  2. Advanced Machine Learning and Optimisation
  3. Responsible AI and Governance
  4. Human-AI Collaboration
  5. Generative Systems and Creative Intelligence
  6. Capstone: Research-to-Production Mentoring
- [ ] Each module has a numbered badge (1-6)
- [ ] Each module shows full title
- [ ] Cards have hover effect (border highlights on desktop)

### "What You'll Master" Section
- [ ] Section visible below modules
- [ ] Shows 6 items in 2-column grid (desktop) or 1 column (mobile)
- [ ] Each item has checkmark icon:
  - Advanced neural network architectures
  - Large language model fundamentals
  - Ethical AI and governance frameworks
  - Research methodology and publication
  - Production-grade system design
  - Human-centered AI development

### Navigation
- [ ] Click "Back home" button → Goes to homepage (/)

### Responsive Design (Mobile)
- [ ] Modules stack in single column
- [ ] Full width with proper padding
- [ ] Text readable without zoom
- [ ] "What You'll Master" items stack properly

---

## 🌐 CROSS-BROWSER TESTING

### Chrome/Edge (Desktop)
- [ ] All content visible
- [ ] Animations smooth
- [ ] Form works
- [ ] No console errors

### Firefox (Desktop)
- [ ] All content visible
- [ ] Animations smooth
- [ ] Form works
- [ ] No console errors

### Safari (Desktop)
- [ ] All content visible
- [ ] Animations smooth
- [ ] Form works
- [ ] No console errors

### Mobile Chrome (Android)
- [ ] Mobile layout correct
- [ ] Form works
- [ ] Touch interactions smooth

### Mobile Safari (iPhone)
- [ ] Mobile layout correct
- [ ] Form works
- [ ] Touch interactions smooth
- [ ] No iOS-specific bugs

---

## 📊 PERFORMANCE VERIFICATION

### Check Lighthouse Score

1. **Open DevTools:**
   - Press F12
   - Go to "Lighthouse" tab
   - (If not visible, click >> and find it)

2. **Generate Report:**
   - Select "Desktop" or "Mobile"
   - Click "Analyze page load"
   - Wait 30-60 seconds

3. **Review Scores:**
   ```
   Target Scores:
   ✓ Performance: 90+
   ✓ Accessibility: 95+
   ✓ Best Practices: 95+
   ✓ SEO: 100
   ```

4. **If scores are lower:**
   - Check "Opportunities" section
   - Most common issues are image optimization (not critical for launch)
   - Site is still production-ready

### Check Core Web Vitals

1. **Open DevTools:**
   - F12 → Network tab

2. **Reload page:**
   - Press Ctrl+Shift+R (hard refresh)

3. **Check load time:**
   - Look for first item in list
   - "DOMContentLoaded" should be < 1.5s
   - "Load" should be < 2.5s

---

## 🔒 SECURITY VERIFICATION

### Check HTTPS
- [ ] URL shows: `https://ai-masters-platform.vercel.app`
- [ ] Browser shows green padlock icon (left of URL)
- [ ] Clicking padlock shows: "Connection is secure"

### Check Security Headers

1. **Open DevTools:**
   - F12 → Network tab

2. **Reload page**

3. **Click first request (the page itself)**

4. **Go to "Response Headers" tab**

5. **Look for:**
   - `X-Content-Type-Options: nosniff` ✅
   - `X-Frame-Options: SAMEORIGIN` ✅
   - `X-XSS-Protection: 1; mode=block` ✅

---

## 📚 SEO VERIFICATION

### Check Meta Tags

1. **Right-click on page** → **"View Page Source"**

2. **Look for:**
   ```html
   <title>NEXIAL | Master the Intelligence Age</title>
   <meta name="description" content="Elite AI master's programme...">
   <meta property="og:title" content="NEXIAL...">
   <meta property="og:description" content="...">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

3. **All present?** ✅ SEO is properly configured

---

## 🎉 DEPLOYMENT SUCCESS SUMMARY

### If ALL Tests Pass:

```
✅ Homepage loads and displays correctly
✅ All navigation links work
✅ Curriculum page accessible and correct
✅ Admissions form works with validation
✅ Mobile layout responsive and usable
✅ Desktop layout displays properly
✅ Form submission successful
✅ Success modal appears
✅ No console errors
✅ HTTPS working
✅ Performance acceptable
✅ SEO configured

✅ DEPLOYMENT SUCCESSFUL - READY FOR PRODUCTION USE
```

### Your Live URL
```
https://ai-masters-platform.vercel.app
```

### Next Steps (Optional)

1. **Add Custom Domain**
   - Vercel Dashboard → Settings → Domains
   - Add nexial.ai
   - Update DNS records
   - Wait 24-48 hours

2. **Enable Analytics**
   - Vercel Dashboard → Analytics
   - Click "Enable Web Analytics"

3. **Connect Admissions Form to Email**
   - Add backend API endpoint
   - Configure email notifications
   - Test form submission end-to-end

---

## 📧 TROUBLESHOOTING

### "Build Failed" Error

**Symptoms:** Deployment failed with red error  
**Solution:**
1. Check Vercel build logs
2. Look for error message (e.g., "TypeScript error")
3. If TypeScript error: Fix locally, commit, push
4. Vercel auto-redeploys

### Page Shows "404 Not Found"

**Symptoms:** Homepage or specific page returns 404  
**Solution:**
1. Wait 5 minutes (Vercel cache)
2. Hard refresh: Ctrl+Shift+R
3. Try from incognito window
4. If still fails: Redeploy from Vercel dashboard

### Styles Look Broken

**Symptoms:** Page shows plain text, no colors  
**Solution:**
1. Hard refresh: Ctrl+Shift+R
2. Clear browser cache
3. Try different browser
4. Check DevTools Console for errors

### Form Doesn't Work

**Symptoms:** Submit button doesn't respond  
**Solution:**
1. Open DevTools Console (F12)
2. Check for JavaScript errors
3. Try in incognito window
4. Test on different browser

---

**Congratulations! Your NEXIAL AI website is now live on Vercel! 🎉**

*Last Updated: 27 September 2026*
