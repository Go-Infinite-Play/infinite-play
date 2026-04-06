# Technology Stack

**Analysis Date:** 2026-04-05

## Languages

**Primary:**
- TypeScript 5.x - All application code (`app/`, `components/`, `lib/`)
- CSS - Global styles (`app/globals.css`)

**Secondary:**
- JavaScript - Config files (`eslint.config.mjs`, `postcss.config.mjs`)

## Runtime

**Environment:**
- Node.js (version not pinned - no `.nvmrc` or `.node-version`)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` (present)

## Frameworks

**Core:**
- Next.js 15.5.2 - App Router, SSR/SSG, API Routes
- React 19.1.0 - UI rendering

**Build/Dev:**
- Turbopack - Enabled for both `next dev` and `next build` (via `--turbopack` flag)
- TypeScript 5.x - Strict mode, ES2017 target, bundler module resolution

**Styling:**
- Tailwind CSS 4.x - Utility-first CSS, configured via `app/globals.css`
- `@tailwindcss/postcss` 4.x - PostCSS integration (`postcss.config.mjs`)
- `tw-animate-css` 1.3.7 - Animation utility classes
- shadcn/ui - Component system (New York style, RSC enabled, neutral base color, CSS variables)
  - Config: `components.json`

## Key Dependencies

**Critical:**
- `airtable` 0.12.2 - Email capture data storage (used in `app/api/submit-email/route.ts`)
- `framer-motion` 12.23.12 - Page and component animations (`lib/animations.ts`)
- `lucide-react` 0.542.0 - Icon library (shadcn/ui integration)

**UI Utilities:**
- `class-variance-authority` 0.7.1 - Variant-based class generation for components
- `clsx` 2.1.1 - Conditional class name composition
- `tailwind-merge` 3.3.1 - Tailwind class conflict resolution (used in `lib/utils.ts`)

## Configuration

**Environment:**
- `.env.local` present - contains Airtable credentials
- Required env vars:
  - `AIRTABLE_PERSONAL_ACCESS_TOKEN` - Required, throws at startup if missing
  - `AIRTABLE_BASE_ID` - Optional, defaults to `app1cZoJ2TlJFYjTr`
  - `AIRTABLE_TABLE_NAME` - Optional, defaults to `Email Capture`

**TypeScript:**
- Config: `tsconfig.json`
- Strict mode enabled
- Path alias: `@/*` maps to project root
- Target: ES2017
- Module resolution: bundler

**Linting:**
- Config: `eslint.config.mjs`
- Extends: `next/core-web-vitals`, `next/typescript`
- Flat config format (ESLint 9.x)

**Build:**
- Config: `next.config.ts` (minimal, no custom options)
- PostCSS: `postcss.config.mjs` (only `@tailwindcss/postcss` plugin)

**Fonts:**
- Inter (CSS variable: `--font-inter`)
- Plus Jakarta Sans (CSS variable: `--font-plus-jakarta-sans`)
- Loaded via `next/font/google` in `app/layout.tsx`

## Platform Requirements

**Development:**
- Node.js with npm
- Run: `npm run dev` (Turbopack dev server)

**Production:**
- Deployment target: `infiniteplay.ai` domain (configured in metadata)
- Run: `npm run build && npm start`
- Static assets in `public/`

---

*Stack analysis: 2026-04-05*
