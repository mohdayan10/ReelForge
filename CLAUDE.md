# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 marketing website template, originally for "Pluely" but being customized for a new project. The project is configured for standalone deployment with enhanced security headers and performance optimizations.

**Current State**: Active redesign on `shahid-redesign` branch. See `SHAHID_CHANGES.md` for detailed change log.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Development server runs on `http://localhost:3000` with hot-reload enabled.

### Building for Production
```bash
npm run build
```
Creates an optimized production build in standalone mode.

### Running Production Build
```bash
npm run start
```
Starts the production server (requires a build first).

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality (configured with Next.js TypeScript rules).

## Architecture

### Framework Configuration

**Next.js Config** (`next.config.ts`):
- Standalone output mode for Docker/containerized deployments
- Security headers: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- ETag generation enabled, compression enabled, powered-by header disabled
- Cache headers for sitemap.xml and robots.txt (24h max-age, 12h stale-while-revalidate)

**TypeScript Config**:
- ES2017 target with strict mode enabled
- Path alias: `@/*` maps to project root
- Next.js plugin included for type safety

### UI Component System

**shadcn/ui Integration** (`components.json`):
- Style: "new-york" variant
- React Server Components (RSC) enabled
- Base color: "neutral" with CSS variables
- Icon library: lucide-react
- Path aliases configured for components, utils, ui, lib, and hooks
- Additional registry: @tailark (https://tailark.com)

**Styling**:
- Tailwind CSS v4 with PostCSS
- tw-animate-css for animations
- Custom CSS variables for theming (light/dark modes)
- Oklahoma LCH (oklch) color space for consistent color perception
- Custom video controls hidden globally (see app/globals.css)

### Component Organization

**Active Components** (`components/` directory):
- `hero-section.tsx` - Main hero/landing section with custom videos
- `features-5.tsx` - Features section with MainFeatures carousel and feature grid
- `MainFeatures.tsx` - Interactive feature carousel with videos
- `pricing.tsx` - Pricing table/cards
- `call-to-action.tsx` - CTA section
- `enhanced-footer.tsx` - Footer component
- `header.tsx` - Navigation header
- `feature-template.tsx` - Template for feature sections
- `logo.tsx` - Site logo component
- `theme-provider.tsx` - Theme management wrapper
- `GetLicense/` - License information component
- `magicui/` - Special UI effects/animations (BorderBeam, etc.)

**Unused Components** (`components/trash/` directory):
- Components moved here are not deleted but archived
- Can be restored or referenced for code/styling
- Includes: pricing.tsx (restored), faqs-3.tsx, GitStars.tsx, features-12.tsx, speech-to-text-features.tsx

**UI Primitives** (`components/ui/`):
- Radix UI components wrapped with consistent styling
- Includes: accordion, alert, badge, button, card, carousel, dialog, dropdown-menu, input, label, radio-group
- `platform-icons.tsx` - Platform-specific icon components
- `text-effect.tsx` - Text animation effects
- `animated-group.tsx` - Group animation wrapper

### Theme System

**ThemeProvider** (`components/theme-provider.tsx`):
- Wraps entire application in `app/layout.tsx`
- **Forced light mode**: `defaultTheme="light"`, `forcedTheme="light"`
- System theme detection disabled
- Storage key: "pluely-theme"
- Transition animations disabled for instant theme switching

**Fonts**:
- Geist Sans (variable: `--font-geist-sans`)
- Geist Mono (variable: `--font-geist-mono`)

### Page Structure

The main landing page (`app/page.tsx`) current structure:
1. **HeroSection** - Custom videos (Trees_Swaying_in_Gentle_Breeze.mp4 background, affan_smash.MP4 demo)
2. **FeaturesSection** - MainFeatures carousel + feature grid cards
3. **Pricing** - Pricing section
4. **CallToAction** - CTA section
5. **EnhancedFooter** - Footer

**Videos Location**: All local videos stored in `/public` folder, referenced as `/filename.mp4`

### Utilities

**`lib/utils.ts`**:
- `cn()` function: Combines clsx and tailwind-merge for conditional className handling
- Used throughout components for dynamic styling

### Key Dependencies

**UI/Animation**:
- Radix UI primitives (accordion, avatar, dialog, label, slot)
- Motion (v12.23.12) for animations
- Embla Carousel with autoplay
- Lucide React for icons
- Sonner for toast notifications (positioned top-center with rich colors)

**Content Rendering**:
- react-markdown with remark-gfm (GitHub Flavored Markdown)
- remark-math & rehype-katex for mathematical expressions
- rehype-raw for raw HTML in markdown

**Styling**:
- class-variance-authority (cva) for component variant management
- clsx & tailwind-merge combined in cn() utility

### Metadata & SEO

Comprehensive metadata configured in `app/layout.tsx`:
- Open Graph tags with 1200x630 image
- Twitter card support (summary_large_image)
- Canonical URL: https://pluely.com
- Author: Srikanth Nani (@truly_sn)
- Responsive viewport with user scaling disabled
- Theme color adapts to system preference
- Article tags for structured data

---

## Making Changes in This Repository

### Git Workflow

**Branch Structure**:
```
main              - Production branch (deployed to Railway)
original-template - Frozen backup (never touch)
shahid-redesign   - Active development branch (work here)
```

**Daily Workflow**:
```bash
# Always work on shahid-redesign
git checkout shahid-redesign

# Make changes, then commit
git add .
git commit -m "Description of changes"
git push origin shahid-redesign
```

**When Ready for Production**:
```bash
git checkout main
git merge shahid-redesign
git push origin main
```

### Component Management

**Removing Components**:
1. Move to `components/trash/` instead of deleting
2. Remove imports and usage from page files
3. Update `SHAHID_CHANGES.md` with what was moved and why

**Example**:
```bash
git mv components/unwanted.tsx components/trash/unwanted.tsx
# Then remove from page.tsx and commit
```

**Restoring Components**:
```bash
cp components/trash/pricing.tsx components/pricing.tsx
# Add back to page.tsx imports
```

### Video Assets

**Adding Videos**:
1. Place video file in `/public` folder
2. Reference in code as `/filename.mp4` (no "public/" prefix)
3. Example: `<video src="/my-video.mp4" />`

**Performance**: Local files load faster than external CDN URLs for most deployments.

### Development Notes

1. **Adding New Components**: Follow shadcn/ui patterns with Radix primitives, use the `cn()` utility for className management, ensure light mode compatibility.

2. **Styling Conventions**: Use CSS variables from globals.css, leverage oklch color space for consistency, test in light mode (site is forced to light theme).

3. **Video Elements**: All video controls are globally hidden via CSS in globals.css - modify those styles if video controls are needed.

4. **Path Imports**: Always use `@/` alias for imports (e.g., `@/components`, `@/lib/utils`) as configured in tsconfig.json.

5. **Server Components**: This project uses React Server Components (RSC). Components are server components by default unless marked with 'use client' directive.

6. **Change Tracking**: Always update `SHAHID_CHANGES.md` when making significant changes. This helps team understand what changed and why.

### Common Tasks

**Change text in hero section**: Edit `components/hero-section.tsx`
**Add/remove landing page sections**: Edit `app/page.tsx`
**Modify feature cards**: Edit `components/features-5.tsx`
**Update pricing**: Edit `components/pricing.tsx`
**Change site metadata**: Edit `app/layout.tsx`

### Need Old Components?

All removed components are in `components/trash/`. You can:
- Copy them back to `components/`
- Reference them for styling/code patterns
- Cherry-pick specific features from them
