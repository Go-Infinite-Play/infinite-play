# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 marketing website for Infinite Play, an AI transformation consulting company. The project uses:

- **Framework**: Next.js 15 with App Router
- **Build Tool**: Turbopack (enabled for both dev and build)
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Animations**: Framer Motion
- **Fonts**: Inter and Plus Jakarta Sans (Google Fonts)
- **Icons**: Lucide React

### Project Structure

- `app/` - Next.js App Router with layout.tsx and page.tsx
- `components/` - Reusable React components for each section (Hero, Navigation, Process, Services, etc.)
- `lib/` - Utility functions including animations, constants, and utils

### Key Components

The main page (`app/page.tsx`) is structured as a single-page application with these sections:
- Navigation
- Hero
- Introduction  
- Process
- Services
- About
- CTA (Call to Action)
- Footer

### Configuration Notes

- **TypeScript**: Strict mode enabled with `@/*` path alias
- **shadcn/ui**: Configured with New York style, RSC enabled, neutral base color
- **ESLint**: Uses Next.js core-web-vitals and TypeScript rules
- **Metadata**: SEO-optimized with Open Graph and Twitter card support for infiniteplay.ai domain

### Component Aliases

As defined in `components.json`:
- `@/components` - Main components directory
- `@/lib/utils` - Utility functions  
- `@/components/ui` - shadcn/ui components
- `@/lib` - Library functions
- `@/hooks` - Custom React hooks

<!-- GSD:project-start source:PROJECT.md -->
## Project

**Infinite Play**

A Claude implementation consulting business and website. Infinite Play helps SMBs, mid-market teams, and knowledge workers get real value from Claude — through setup, workflow redesign, and hands-on training. The website (infiniteplay.ai) is the primary lead generation tool: a clean, minimal, personal-brand site that clearly communicates services, builds trust, and converts visitors into clients.

**Core Value:** A site that makes it immediately obvious what Jeremy does (Claude implementation consulting), feels authentic and direct, and generates inbound leads from people who need help getting the most out of Claude.

### Constraints

- **Tech stack**: Keep Next.js 15, Tailwind, shadcn/ui, Framer Motion — already validated
- **Domain**: infiniteplay.ai — keep the brand name, reposition what it means
- **Tone**: Direct, practical, personal — no corporate speak, no AI hype
- **Design**: Clean and minimal — content speaks, not decoration
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- TypeScript 5.x - All application code (`app/`, `components/`, `lib/`)
- CSS - Global styles (`app/globals.css`)
- JavaScript - Config files (`eslint.config.mjs`, `postcss.config.mjs`)
## Runtime
- Node.js (version not pinned - no `.nvmrc` or `.node-version`)
- npm
- Lockfile: `package-lock.json` (present)
## Frameworks
- Next.js 15.5.2 - App Router, SSR/SSG, API Routes
- React 19.1.0 - UI rendering
- Turbopack - Enabled for both `next dev` and `next build` (via `--turbopack` flag)
- TypeScript 5.x - Strict mode, ES2017 target, bundler module resolution
- Tailwind CSS 4.x - Utility-first CSS, configured via `app/globals.css`
- `@tailwindcss/postcss` 4.x - PostCSS integration (`postcss.config.mjs`)
- `tw-animate-css` 1.3.7 - Animation utility classes
- shadcn/ui - Component system (New York style, RSC enabled, neutral base color, CSS variables)
## Key Dependencies
- `airtable` 0.12.2 - Email capture data storage (used in `app/api/submit-email/route.ts`)
- `framer-motion` 12.23.12 - Page and component animations (`lib/animations.ts`)
- `lucide-react` 0.542.0 - Icon library (shadcn/ui integration)
- `class-variance-authority` 0.7.1 - Variant-based class generation for components
- `clsx` 2.1.1 - Conditional class name composition
- `tailwind-merge` 3.3.1 - Tailwind class conflict resolution (used in `lib/utils.ts`)
## Configuration
- `.env.local` present - contains Airtable credentials
- Required env vars:
- Config: `tsconfig.json`
- Strict mode enabled
- Path alias: `@/*` maps to project root
- Target: ES2017
- Module resolution: bundler
- Config: `eslint.config.mjs`
- Extends: `next/core-web-vitals`, `next/typescript`
- Flat config format (ESLint 9.x)
- Config: `next.config.ts` (minimal, no custom options)
- PostCSS: `postcss.config.mjs` (only `@tailwindcss/postcss` plugin)
- Inter (CSS variable: `--font-inter`)
- Plus Jakarta Sans (CSS variable: `--font-plus-jakarta-sans`)
- Loaded via `next/font/google` in `app/layout.tsx`
## Platform Requirements
- Node.js with npm
- Run: `npm run dev` (Turbopack dev server)
- Deployment target: `infiniteplay.ai` domain (configured in metadata)
- Run: `npm run build && npm start`
- Static assets in `public/`
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- PascalCase for component files: `Navigation.tsx`, `Hero.tsx`, `EmailForm.tsx`
- camelCase for library/utility files: `animations.ts`, `constants.ts`, `utils.ts`
- kebab-case for directories: `app/api/submit-email/`
- Next.js App Router conventions: `route.ts` for API handlers, `page.tsx` for pages, `layout.tsx` for layouts
- camelCase for regular functions: `scrollToSection`, `handleSubmit`
- PascalCase for React components (default exports): `export default function Hero()`
- Event handlers prefixed with `handle`: `handleSubmit`
- camelCase for local variables and state: `currentWordIndex`, `isMenuOpen`, `isScrolled`
- SCREAMING_SNAKE_CASE for module-level constants derived from environment: `AIRTABLE_PERSONAL_ACCESS_TOKEN`, `AIRTABLE_BASE_ID`
- camelCase for exported constants objects: `colors`, `navigationItems`, `processSteps`
- PascalCase interfaces: `interface EmailFormProps`
- Suffix Props interfaces with `Props`: `EmailFormProps`
- Use `as const` on data objects to preserve literal types: `export const navigationItems = [...] as const`
- Inline union types for state: `"idle" | "loading" | "success" | "error"`
- camelCase descriptive names: `fadeIn`, `fadeInUp`, `staggerContainer`, `buttonHover`, `floatingOrb`
- State keys use plain strings: `"hidden"`, `"visible"`, `"rest"`, `"hover"`, `"tap"`, `"open"`, `"closed"`
## Code Style
- No Prettier config detected; formatting follows ESLint rules
- Double quotes for JSX attribute strings
- Single quotes for JS/TS string literals
- 2-space indentation throughout
- ESLint with `next/core-web-vitals` and `next/typescript` rule sets
- Config at `eslint.config.mjs` (flat config format)
- Ignores: `node_modules/`, `.next/`, `out/`, `build/`, `next-env.d.ts`
- TypeScript strict mode enabled (`"strict": true` in `tsconfig.json`)
## Import Organization
- `@/*` maps to project root `./*`
- Use `@/components/...`, `@/lib/...` for all internal imports
- No relative `../` imports observed
## Client/Server Boundary
- Interactive components requiring browser APIs or state use `"use client"` directive on line 1
- `"use client"` is used in: `Hero.tsx`, `Navigation.tsx`, `EmailForm.tsx`, `Services.tsx` (and likely all components with state/effects)
- Server components (no directive): `app/page.tsx`, `app/layout.tsx`
- API routes are server-only: `app/api/submit-email/route.ts`
## Error Handling
- Try/catch blocks in async handlers with typed error checks:
- HTTP errors checked via `response.ok` before parsing JSON:
- Status resets via `setTimeout` after 5 seconds
- Try/catch wrapping entire handler body
- Validation errors return 400 with `{ error: string }` shape
- Server errors return 500 with `{ error: string }` shape
- Successful responses return `{ success: true, message: string, ...data }`
- `console.error` for server-side error logging: `console.error('Error submitting to Airtable:', error)`
- Critical env vars checked at module level with immediate throw:
## Logging
- Server errors logged with `console.error` before returning error response
- No client-side logging patterns observed
- No structured logging library in use
## Comments
- Section headers in JSX to label regions: `{/* Animated background orbs */}`, `{/* Desktop Navigation */}`
- Short inline comments on non-obvious logic: `// Rotate words every 1.5 seconds`
- Animation variant definitions commented by type: `// Button animations`, `// Floating orb animations`
- Not used; no function-level documentation comments observed
- TypeScript types serve as self-documentation
## Component Design
- Optional props use `?` and provide defaults in destructuring:
- Single props interface defined inline above the component
## Animation Conventions
- Components import named variants: `import { staggerContainer, staggerItem } from "@/lib/animations"`
- Inline variants only for component-specific one-off animations
- Standard variant key pairs: `hidden`/`visible` for scroll/mount animations, `rest`/`hover`/`tap` for interactive animations
## Data/Content Separation
## Module Design
- Components: single default export per file
- Libraries: named exports only (`lib/animations.ts`, `lib/constants.ts`, `lib/utils.ts`)
- API routes: named function exports by HTTP method (`export async function POST(...)`)
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Pattern Overview
- Single route (`/`) rendered as a vertical stack of section components
- One API route (`/api/submit-email`) handles the only server-side operation: email capture to Airtable
- All page sections are client components (`"use client"`) due to Framer Motion animations
- Static content (copy, colors, links) is centralized in `lib/constants.ts` and imported by components
- Animation variants are centralized in `lib/animations.ts` and shared across components
## Layers
- Purpose: Next.js routing, global layout, metadata, and page assembly
- Location: `app/`
- Contains: `layout.tsx` (root layout with fonts and metadata), `page.tsx` (section composition), `globals.css` (Tailwind base styles)
- Depends on: All section components
- Used by: Next.js router
- Purpose: Server-side form submission handler
- Location: `app/api/submit-email/route.ts`
- Contains: POST handler that validates email and writes to Airtable
- Depends on: `airtable` npm package, env vars
- Used by: `components/EmailForm.tsx` via `fetch('/api/submit-email')`
- Purpose: UI sections rendered as client components with animations
- Location: `components/`
- Contains: One file per page section (`Navigation.tsx`, `Hero.tsx`, `Introduction.tsx`, `Process.tsx`, `Services.tsx`, `About.tsx`, `CTA.tsx`, `Footer.tsx`) plus a reusable `EmailForm.tsx`
- Depends on: `lib/constants.ts`, `lib/animations.ts`, Framer Motion, Lucide React
- Used by: `app/page.tsx`
- Purpose: Shared constants, animation variants, and utility functions
- Location: `lib/`
- Contains: `constants.ts` (all static copy and config data), `animations.ts` (reusable Framer Motion variants), `utils.ts` (`cn()` helper for Tailwind class merging)
- Depends on: Nothing internal
- Used by: Components
## Data Flow
- No global state management library; all state is local `useState` within components
- `Navigation` holds `isMenuOpen` and `isScrolled` (scroll position listener)
- `Hero` holds `currentWordIndex` for rotating headline words
- `EmailForm` holds `email`, `status`, and `message`
## Key Abstractions
- Purpose: Each represents one full-width section of the page
- Examples: `components/Hero.tsx`, `components/Process.tsx`, `components/Services.tsx`
- Pattern: Default export, client component, imports data from `lib/constants.ts` and variants from `lib/animations.ts`
- Purpose: Reusable controlled form component with loading/success/error states
- Examples: `components/EmailForm.tsx`, used in `components/CTA.tsx`
- Pattern: Accepts `placeholder`, `buttonText`, `subText` props with sensible defaults; manages its own async submission state
- Purpose: Centralized Framer Motion `Variants` objects reused across components
- Examples: `lib/animations.ts` — `fadeIn`, `staggerContainer`, `staggerItem`, `buttonHover`, `floatingOrb`, `drawerAnimation`
- Pattern: Named exports of `Variants` typed objects; components destructure what they need
- Purpose: Single source of truth for all static copy, navigation items, process steps, services list, and contact info
- Examples: `lib/constants.ts` — `processSteps`, `services`, `navigationItems`, `footerLinks`, `siteConfig`
- Pattern: `as const` typed objects and arrays, named exports
## Entry Points
- Location: `app/layout.tsx`
- Triggers: All page requests
- Responsibilities: Font loading (Inter, Plus Jakarta Sans), global metadata/SEO tags (Open Graph, Twitter Card), dark mode class on `<html>`
- Location: `app/page.tsx`
- Triggers: `GET /`
- Responsibilities: Imports and renders all section components in document order within a `min-h-screen` wrapper
- Location: `app/api/submit-email/route.ts`
- Triggers: `POST /api/submit-email`
- Responsibilities: Input validation, Airtable client initialization, record creation, error handling and JSON response
## Error Handling
- API route wraps Airtable call in `try/catch`, returns structured JSON errors with appropriate HTTP status codes (400 for validation, 500 for server errors)
- `EmailForm` catches fetch errors and sets `status: "error"` with a user-visible message
- Airtable token missing at module load time throws immediately (`throw new Error(...)`) to fail fast at startup
## Cross-Cutting Concerns
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
