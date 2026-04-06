# Architecture

**Analysis Date:** 2026-04-05

## Pattern Overview

**Overall:** Single-page marketing site with Next.js App Router

**Key Characteristics:**
- Single route (`/`) rendered as a vertical stack of section components
- One API route (`/api/submit-email`) handles the only server-side operation: email capture to Airtable
- All page sections are client components (`"use client"`) due to Framer Motion animations
- Static content (copy, colors, links) is centralized in `lib/constants.ts` and imported by components
- Animation variants are centralized in `lib/animations.ts` and shared across components

## Layers

**App Layer:**
- Purpose: Next.js routing, global layout, metadata, and page assembly
- Location: `app/`
- Contains: `layout.tsx` (root layout with fonts and metadata), `page.tsx` (section composition), `globals.css` (Tailwind base styles)
- Depends on: All section components
- Used by: Next.js router

**API Layer:**
- Purpose: Server-side form submission handler
- Location: `app/api/submit-email/route.ts`
- Contains: POST handler that validates email and writes to Airtable
- Depends on: `airtable` npm package, env vars
- Used by: `components/EmailForm.tsx` via `fetch('/api/submit-email')`

**Component Layer:**
- Purpose: UI sections rendered as client components with animations
- Location: `components/`
- Contains: One file per page section (`Navigation.tsx`, `Hero.tsx`, `Introduction.tsx`, `Process.tsx`, `Services.tsx`, `About.tsx`, `CTA.tsx`, `Footer.tsx`) plus a reusable `EmailForm.tsx`
- Depends on: `lib/constants.ts`, `lib/animations.ts`, Framer Motion, Lucide React
- Used by: `app/page.tsx`

**Library Layer:**
- Purpose: Shared constants, animation variants, and utility functions
- Location: `lib/`
- Contains: `constants.ts` (all static copy and config data), `animations.ts` (reusable Framer Motion variants), `utils.ts` (`cn()` helper for Tailwind class merging)
- Depends on: Nothing internal
- Used by: Components

## Data Flow

**Email Submission Flow:**

1. User types email into `components/EmailForm.tsx` (local `useState`)
2. On form submit, `EmailForm` calls `POST /api/submit-email` with JSON body `{ email }`
3. `app/api/submit-email/route.ts` validates email format
4. Route handler writes a record to Airtable via the `airtable` SDK
5. Route returns `{ success: true, recordId }` or an error JSON
6. `EmailForm` updates its `status` state to display a success or error message, auto-resetting after 5 seconds

**Navigation / Scroll Flow:**

1. Navigation links and hero CTA buttons call `document.querySelector(href).scrollIntoView()`
2. All navigation targets are `id` anchors on section elements within `app/page.tsx`
3. No client-side routing occurs — the site is a single scroll page

**Animation Flow:**

1. Shared variants are defined once in `lib/animations.ts`
2. Components import named variants and apply them to `motion.*` elements
3. Scroll-triggered animations use Framer Motion's `whileInView` prop on individual sections
4. Stagger animations use `staggerContainer` + `staggerItem` variant pairs

**State Management:**
- No global state management library; all state is local `useState` within components
- `Navigation` holds `isMenuOpen` and `isScrolled` (scroll position listener)
- `Hero` holds `currentWordIndex` for rotating headline words
- `EmailForm` holds `email`, `status`, and `message`

## Key Abstractions

**Section Components:**
- Purpose: Each represents one full-width section of the page
- Examples: `components/Hero.tsx`, `components/Process.tsx`, `components/Services.tsx`
- Pattern: Default export, client component, imports data from `lib/constants.ts` and variants from `lib/animations.ts`

**EmailForm:**
- Purpose: Reusable controlled form component with loading/success/error states
- Examples: `components/EmailForm.tsx`, used in `components/CTA.tsx`
- Pattern: Accepts `placeholder`, `buttonText`, `subText` props with sensible defaults; manages its own async submission state

**Animation Variants:**
- Purpose: Centralized Framer Motion `Variants` objects reused across components
- Examples: `lib/animations.ts` — `fadeIn`, `staggerContainer`, `staggerItem`, `buttonHover`, `floatingOrb`, `drawerAnimation`
- Pattern: Named exports of `Variants` typed objects; components destructure what they need

**Constants:**
- Purpose: Single source of truth for all static copy, navigation items, process steps, services list, and contact info
- Examples: `lib/constants.ts` — `processSteps`, `services`, `navigationItems`, `footerLinks`, `siteConfig`
- Pattern: `as const` typed objects and arrays, named exports

## Entry Points

**Root Layout:**
- Location: `app/layout.tsx`
- Triggers: All page requests
- Responsibilities: Font loading (Inter, Plus Jakarta Sans), global metadata/SEO tags (Open Graph, Twitter Card), dark mode class on `<html>`

**Home Page:**
- Location: `app/page.tsx`
- Triggers: `GET /`
- Responsibilities: Imports and renders all section components in document order within a `min-h-screen` wrapper

**Email API Route:**
- Location: `app/api/submit-email/route.ts`
- Triggers: `POST /api/submit-email`
- Responsibilities: Input validation, Airtable client initialization, record creation, error handling and JSON response

## Error Handling

**Strategy:** Local try/catch in async handlers; no global error boundary

**Patterns:**
- API route wraps Airtable call in `try/catch`, returns structured JSON errors with appropriate HTTP status codes (400 for validation, 500 for server errors)
- `EmailForm` catches fetch errors and sets `status: "error"` with a user-visible message
- Airtable token missing at module load time throws immediately (`throw new Error(...)`) to fail fast at startup

## Cross-Cutting Concerns

**Logging:** `console.error` in the API route only; no structured logging
**Validation:** Email validation via string `.includes('@')` check in both client (`EmailForm`) and server (`route.ts`)
**Authentication:** None — public marketing site with one public API endpoint

---

*Architecture analysis: 2026-04-05*
