# Shahid's Changes Log

This document tracks all modifications made to the template for custom website development.

---

## Date: 2026-03-30

### 1. Hero Demo Video Swapped

**Status**: ✅ Completed

**Files Modified**:
- `components/hero-section.tsx`
- `public/smart-rings-demo.mov` (new file)

**Changes Made**:
- Replaced `/lol2.mp4` with `/smart-rings-demo.mov` as the demo video in the hero section
- Source file: `Smart Rings Are In! - VEED Export.mov` from Downloads

---

### 2. Hero Photo Stack — Order Swapped

**Status**: ✅ Completed

**Files Modified**:
- `components/hero-section.tsx`

**Changes Made**:
- Man's photo (`premium_photo-1674823160036-d9506f9d1a61.jpg`) is now the front card on load
- Woman's photo (`woman_2.jpeg`) is now the back card on load
- Click-to-swap behavior preserved as-is

---

### 3. Removed "Startup" Reference from Pricing

**Status**: ✅ Completed

**Files Modified**:
- `components/pricing.tsx`

**Changes Made**:
- Removed phrase "We're a startup, so" from the waitlist description paragraph

---

### 4. Shelved "Our Team" Nav Link

**Status**: ✅ Shelved (easily restorable)

**Files Modified**:
- `lib/menuItems.ts`

**Changes Made**:
- Commented out `{ name: "Our Team", href: "/about" }` from the menu items
- The `/about` page and all its code remain fully intact on GitHub
- **To restore**: Uncomment line 5 in `lib/menuItems.ts`

---

## Date: 2025-10-15

### 1. Theme System Conversion (Dark → Light)

**Status**: ✅ Completed

**Files Modified**:
- `app/layout.tsx`

**Changes Made**:
1. **ThemeProvider Settings** (Line 110-118)
   - Changed `defaultTheme` from `"dark"` to `"light"`
   - Changed `forcedTheme` from `"dark"` to `"light"`
   - Changed `themes` array from `["dark"]` to `["light"]`
   - Storage key remains `"pluely-theme"` (consider renaming later)

2. **Viewport Theme Color** (Line 88-92)
   - Simplified from media query array to single value: `"white"`
   - Removed dark mode theme color option

**Result**: Website now forced to light mode with no dark mode option.

**Next Steps**:
- Test all components in light mode
- Review color contrast/accessibility
- Consider updating CSS variable names if needed

---

### 2. Background Video Replacement

**Status**: ✅ Completed

**Files Modified**:
- `components/hero-section.tsx` (Line 37)
- Added: `/public/Trees_Swaying_in_Gentle_Breeze.mp4`

**Changes Made**:
1. **Background Video Replaced**
   - **Old**: External CDN video `https://assets.pluely.com/bg.mp4`
   - **New**: Local file `/Trees_Swaying_in_Gentle_Breeze.mp4`
   - Changed from `src="https://assets.pluely.com/bg.mp4"` to `src="/Trees_Swaying_in_Gentle_Breeze.mp4"`
   - Video file stored in `/public` folder for faster loading

**Result**: Background video now loads from local source, improving performance and reliability.

**Remaining Videos** (Not yet replaced):
- Hero Demo Video - Desktop (Line 176-188): `https://assets.pluely.com/pluely-hero.mp4`
- Hero Demo Video - Mobile (Line 189-201): `https://assets.pluely.com/mobile-hero.mp4`

**Note**: Files in `/public` folder are served from root path (no "public/" prefix needed in src attribute)

---

### 3. Hero Demo Videos Replacement

**Status**: ✅ Completed

**Files Modified**:
- `components/hero-section.tsx` (Lines 178, 191)
- Added: `/public/affan_smash.MP4`

**Changes Made**:
1. **Hero Demo Videos Replaced**
   - **Old Desktop**: `https://assets.pluely.com/pluely-hero.mp4`
   - **Old Mobile**: `https://assets.pluely.com/mobile-hero.mp4`
   - **New (Both)**: Local file `/affan_smash.MP4`
   - Both desktop and mobile now use the same video

**Result**: Hero demo section now shows custom content with local video file.

---

## Git Branching Strategy

**Date**: 2025-10-15

### Branch Structure

We've created a **3-branch workflow** for safe development:

```
main (production branch)
  │
  ├─→ original-template (frozen backup)
  │   └─ Never touch this branch
  │      Contains full template with all features
  │
  └─→ shahid-redesign (active development)
      └─ Work happens here
         Strip down to bare bones
         When ready, merge to main
```

### Branch Purposes

**`main`**
- Production-ready code
- What's deployed on Railway
- Only updated via merges from `shahid-redesign`

**`original-template`** (Backup/Archive)
- Frozen snapshot of the full template
- Created: 2025-10-15 at commit `274c2c6`
- **Never modified** - acts as a time capsule
- Use case: If you need to grab old components (Pricing, MainFeatures, etc.)

**`shahid-redesign`** (Active Work)
- Day-to-day development happens here
- Started from: `main` at commit `274c2c6`
- This is where we remove unnecessary components
- Push regularly so lead can see progress on Railway preview

### Workflow

**Daily Development:**
```bash
# Make sure you're on shahid-redesign
git checkout shahid-redesign

# Make changes, then commit
git add .
git commit -m "Your changes"
git push origin shahid-redesign
```

**When Ready to Deploy:**
```bash
# Merge redesign into main
git checkout main
git merge shahid-redesign
git push origin main
```

**Need Old Component?**
```bash
# Cherry-pick specific file from backup
git checkout original-template -- components/pricing.tsx
```

### Railway Deployment

Railway will auto-deploy:
- **`main`** branch → Main production URL
- **`shahid-redesign`** branch → Preview URL (check Railway dashboard)

Your lead can view both versions by checking different branch deployments.

---

### 4. Remove Pricing and FAQ Sections

**Status**: ✅ Completed
**Branch**: `shahid-redesign`

**Files Modified**:
- `app/page.tsx`

**Changes Made**:
1. **Removed Components**:
   - ❌ `Pricing` component - No pricing page needed for this site
   - ❌ `FAQsThree` component - FAQ section not needed at this stage
   - Removed imports and component usage from landing page

**Remaining Sections**:
- ✅ HeroSection
- ✅ FeaturesSection (features-5)
- ✅ Features (features-12)
- ✅ SpeechToTextFeatures
- ✅ CallToAction
- ✅ EnhancedFooter

**Result**: Cleaner landing page focused on core content without pricing/FAQ clutter.

---

### 5. Create Trash Folder & Remove GitHub Link

**Status**: ✅ Completed
**Branch**: `shahid-redesign`

**Files Modified**:
- Created: `components/trash/` directory
- Moved: `components/pricing.tsx` → `components/trash/pricing.tsx`
- Moved: `components/faqs-3.tsx` → `components/trash/faqs-3.tsx`
- Moved: `components/GitStars.tsx` → `components/trash/GitStars.tsx`
- `components/hero-section.tsx` - Removed GitHub button and import

**Changes Made**:
1. **Created Trash Folder**:
   - New folder: `components/trash/`
   - Purpose: Store unused components for reference without cluttering main components folder
   - Can grab code/styling when needed, easy to delete later

2. **Removed GitHub Link Button**:
   - Removed GitHubLink import from hero-section.tsx
   - Removed GitHub button (was second CTA button in hero)
   - Now only "Download Now" button remains in hero CTA

**Going Forward**:
- All removed components will be moved to `components/trash/` instead of deletion
- Keeps codebase clean while preserving code for reference
- Easy to restore or grab styling/patterns when needed

---

### 6. Restore Pricing Component

**Status**: ✅ Completed
**Branch**: `shahid-redesign`

**Files Modified**:
- Restored: `components/pricing.tsx` (copied from trash)
- `app/page.tsx` - Added Pricing import and component back

**Changes Made**:
1. **Pricing Restored**:
   - Copied pricing.tsx from trash back to components/
   - Added import and component to page.tsx
   - Positioned before CallToAction section

**Reason**: Lead confirmed pricing section is needed for the site

**Result**: Pricing section is back on the landing page with original design intact

---

### 7. Remove Video-Heavy Feature Sections

**Status**: ✅ Completed
**Branch**: `shahid-redesign`

**Files Modified**:
- Moved: `components/speech-to-text-features.tsx` → `components/trash/`
- Moved: `components/features-12.tsx` → `components/trash/`
- `app/page.tsx` - Removed both imports and components

**Components Removed**:
1. **SpeechToTextFeatures** (`speech-to-text-features.tsx`)
   - "Speech-to-Text Integration" section
   - Had videos: openai-stt.mp4, elevenlabs-stt.mp4

2. **Features** (`features-12.tsx`)
   - "AI Provider Integration" section
   - Had videos: pluely-api-main.mp4, ai-custom-provider.mp4, openai.mp4, grok.mp4, gemini.mp4, claude.mp4

**Current Landing Page Sections**:
- ✅ HeroSection
- ✅ FeaturesSection (features-5)
- ✅ Pricing
- ✅ CallToAction
- ✅ EnhancedFooter

**Result**: Removed all video-heavy sections, keeping landing page cleaner and focused

---

### 8. Remove Manual Screenshot Analysis Section

**Status**: ✅ Completed
**Branch**: `shahid-redesign`

**Files Modified**:
- `components/features-5.tsx` - Removed FeatureTemplate section and import

**Component Removed**:
- **Manual Screenshot Analysis Section** (Bottom of features section)
  - FeatureTemplate component showing manual-screenshot.mp4 video
  - Description text about capturing screenshots for AI analysis

**What's Kept in features-5**:
- ✅ MainFeatures carousel (with interactive feature videos)
- ✅ "Privacy-First AI Assistant" heading + description
- ✅ 12 feature cards grid (Complete Stealth Mode, Lightning-Fast Performance, etc.)

**Result**: Removed just the Manual Screenshot section at bottom, keeping rest of features intact

---

## Change Categories

- ✅ Completed
- ⏳ In Progress
- 📋 Planned
- ❌ Blocked/Issues

---

## Notes for Team

1. **Testing Checklist After Changes**:
   - [ ] Run `npm run dev` to test locally
   - [ ] Check all pages in light mode
   - [ ] Verify no console errors
   - [ ] Test on mobile viewport

2. **Rollback Instructions**:
   - Use git to revert: `git checkout <file-path>`
   - Or restore from previous commit

3. **Questions/Issues**:
   - Add any blockers here

---

---

## Date: 2026-03-24

### 9. Replace Pricing with Waitlist (Firebase + Email Notifications)

**Status**: ✅ Completed

**Files Added**:
- `components/waitlist-form.tsx` — 2-step form (email → use case)
- `components/hash-scroll-handler.tsx` — Fixes scroll position on initial load
- `lib/firebase.ts` — Firebase app init
- `app/api/waitlist/route.ts` — API route that sends email via Resend on each signup
- `app/waitlist/page.tsx` — Dedicated `/waitlist` page with header/footer
- `firebase.json` — Firebase project config
- `firestore.rules` — Firestore security rules (write-only for public)

**Files Modified**:
- `components/pricing.tsx` — Replaced Enterprise pricing card with waitlist form card
- `lib/menuItems.ts` — Changed "Pricing" → "Waitlist" linking to `/waitlist`
- `app/page.tsx` — Added `HashScrollHandler` component
- `components/header.tsx` — Use plain `<a>` tags for hash links, added `history.scrollRestoration = "manual"`
- `package.json` — Added `firebase` and `resend` dependencies

**Firebase Setup**:
- Project ID: `fewcuts-cbf54`
- Firestore collection: `waitlist`
- Each document stores: `email`, `useCase`, `createdAt`
- Rules: public write-only (no public reads)
- View submissions: https://console.firebase.google.com/project/fewcuts-cbf54/firestore/databases/-default-/data

**Email Notifications**:
- Provider: Resend (`onboarding@resend.dev`)
- Sends to: `affan@fewcuts.com` on every signup
- Note: Resend free tier requires domain verification to send to non-Gmail addresses. Add `fewcuts.com` at resend.com/domains to send from `noreply@fewcuts.com`

**Environment Variables** (set in Vercel + `.env.local`):
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
RESEND_API_KEY
```

**Scroll Fix**:
- `history.scrollRestoration = "manual"` prevents browser from restoring old scroll position
- `scroll-mt-8` on `#waitlist` section offsets fixed header
- `HashScrollHandler` re-scrolls after 500ms to correct for layout shifts from media loading

**Result**: Pricing section replaced with waitlist. Users enter email, answer one question, data saved to Firebase, Affan gets email notification.

---

*Last Updated: 2026-03-24 by Affan (via Claude)*
