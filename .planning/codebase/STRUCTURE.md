# Codebase Structure

**Analysis Date:** 2026-04-05

## Directory Layout

```
infinite-play/
├── app/                        # Next.js App Router
│   ├── api/
│   │   └── submit-email/
│   │       └── route.ts        # Email capture API endpoint
│   ├── favicon.ico
│   ├── globals.css             # Tailwind base + CSS custom properties
│   ├── icon.png
│   ├── layout.tsx              # Root layout: fonts, metadata, dark mode
│   └── page.tsx                # Home page: section composition
├── components/                 # Page section and reusable UI components
│   ├── About.tsx
│   ├── CTA.tsx
│   ├── EmailForm.tsx           # Reusable email capture form
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Introduction.tsx
│   ├── Navigation.tsx
│   ├── Process.tsx
│   └── Services.tsx
├── lib/                        # Shared utilities and data
│   ├── animations.ts           # Framer Motion variant definitions
│   ├── constants.ts            # All static copy, config, and data
│   └── utils.ts                # cn() Tailwind class merge helper
├── public/                     # Static assets served at root
│   ├── founder-photo.jpg
│   ├── infinite-play-logo.png
│   └── *.svg                   # SVG icons (file, globe, next, vercel, window)
├── .planning/                  # GSD planning documents (not committed to prod)
│   └── codebase/               # Codebase analysis documents
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs           # ESLint config (next/core-web-vitals + TypeScript)
├── next.config.ts              # Next.js config (minimal, Turbopack via package.json)
├── package.json
├── postcss.config.mjs          # PostCSS for Tailwind CSS v4
└── tsconfig.json               # TypeScript strict mode, @/* path alias
```

## Directory Purposes

**`app/`:**
- Purpose: Next.js App Router root — layout, pages, and API routes
- Contains: `layout.tsx`, `page.tsx`, `globals.css`, one API route group
- Key files: `app/layout.tsx` (global setup), `app/page.tsx` (home page assembly)

**`app/api/submit-email/`:**
- Purpose: Single API route for email capture
- Contains: `route.ts` with POST handler
- Key files: `app/api/submit-email/route.ts`

**`components/`:**
- Purpose: All React components — one file per page section plus `EmailForm` as a reusable sub-component
- Contains: Eight section components + one reusable form component
- Key files: `components/EmailForm.tsx` (only reusable component), `components/Navigation.tsx` (fixed nav with mobile drawer)

**`lib/`:**
- Purpose: Shared non-component code
- Contains: Animation variants, static site data, and the `cn()` utility
- Key files: `lib/constants.ts` (all copy lives here), `lib/animations.ts` (all Framer Motion variants live here)

**`public/`:**
- Purpose: Static assets served at `/`
- Contains: Logo PNG, founder photo JPG, SVG icons
- Key files: `public/infinite-play-logo.png` (used in `<Image>` across multiple components), `public/founder-photo.jpg` (used in `About.tsx`)

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: Root layout — font variables, metadata export, dark mode class
- `app/page.tsx`: Home page — imports and arranges all section components
- `app/api/submit-email/route.ts`: Only API endpoint

**Configuration:**
- `tsconfig.json`: TypeScript config — strict mode, `@/*` maps to project root
- `components.json`: shadcn/ui config — New York style, neutral base, RSC enabled
- `eslint.config.mjs`: ESLint rules
- `postcss.config.mjs`: PostCSS for Tailwind v4
- `next.config.ts`: Next.js config (minimal)

**Core Logic:**
- `lib/constants.ts`: All static content — copy, navigation items, process steps, services, credentials, contact info, footer links, site config
- `lib/animations.ts`: All Framer Motion variant objects used across components
- `lib/utils.ts`: `cn()` helper (clsx + tailwind-merge)

**Styling:**
- `app/globals.css`: Tailwind directives + CSS custom property definitions for the design system (colors mapped as CSS variables)

## Naming Conventions

**Files:**
- Section components: PascalCase matching the section name — `Hero.tsx`, `Process.tsx`, `Services.tsx`
- Utility modules: camelCase — `animations.ts`, `constants.ts`, `utils.ts`
- API routes: `route.ts` (Next.js convention)
- No barrel `index.ts` files

**Directories:**
- Lowercase with hyphens for API route segments: `submit-email/`
- Lowercase for all other directories: `app/`, `components/`, `lib/`, `public/`

**Exports:**
- Components: Default export only, named after the file
- Library modules: Named exports only (no default export)

**Constants:**
- Exported as `as const` typed arrays/objects with descriptive names: `processSteps`, `navigationItems`, `services`, `valueProps`, `footerLinks`

## Where to Add New Code

**New Page Section:**
- Implementation: `components/[SectionName].tsx` (PascalCase, default export, `"use client"` at top if animated)
- Static data/copy: Add to `lib/constants.ts` as a named export
- Register in page: Import and add to `app/page.tsx` within `<main>`

**New API Endpoint:**
- Implementation: `app/api/[endpoint-name]/route.ts`
- Pattern: Follow `app/api/submit-email/route.ts` — named HTTP method exports, `NextRequest`/`NextResponse`

**New Reusable Component:**
- Implementation: `components/[ComponentName].tsx`
- If using shadcn/ui: Place generated files in `components/ui/` (shadcn/ui convention from `components.json`)

**New Animation Variants:**
- Add to `lib/animations.ts` as a named `Variants` export
- Import by name in the component that uses it

**New Static Copy or Config:**
- Add to `lib/constants.ts` as a named `as const` export
- Import directly in the component that renders it

**Utilities:**
- Shared helpers: `lib/utils.ts`

**Static Assets:**
- Images, SVGs: `public/` — referenced as `/filename.ext` in code

## Special Directories

**`.next/`:**
- Purpose: Next.js build output and cache
- Generated: Yes
- Committed: No

**`.planning/`:**
- Purpose: GSD planning documents and codebase analysis
- Generated: By GSD tooling
- Committed: Yes (per project convention)

**`node_modules/`:**
- Purpose: npm dependencies
- Generated: Yes
- Committed: No

---

*Structure analysis: 2026-04-05*
