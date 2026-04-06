# Coding Conventions

**Analysis Date:** 2026-04-05

## Naming Patterns

**Files:**
- PascalCase for component files: `Navigation.tsx`, `Hero.tsx`, `EmailForm.tsx`
- camelCase for library/utility files: `animations.ts`, `constants.ts`, `utils.ts`
- kebab-case for directories: `app/api/submit-email/`
- Next.js App Router conventions: `route.ts` for API handlers, `page.tsx` for pages, `layout.tsx` for layouts

**Functions:**
- camelCase for regular functions: `scrollToSection`, `handleSubmit`
- PascalCase for React components (default exports): `export default function Hero()`
- Event handlers prefixed with `handle`: `handleSubmit`

**Variables:**
- camelCase for local variables and state: `currentWordIndex`, `isMenuOpen`, `isScrolled`
- SCREAMING_SNAKE_CASE for module-level constants derived from environment: `AIRTABLE_PERSONAL_ACCESS_TOKEN`, `AIRTABLE_BASE_ID`
- camelCase for exported constants objects: `colors`, `navigationItems`, `processSteps`

**Types/Interfaces:**
- PascalCase interfaces: `interface EmailFormProps`
- Suffix Props interfaces with `Props`: `EmailFormProps`
- Use `as const` on data objects to preserve literal types: `export const navigationItems = [...] as const`
- Inline union types for state: `"idle" | "loading" | "success" | "error"`

**Animation Variants:**
- camelCase descriptive names: `fadeIn`, `fadeInUp`, `staggerContainer`, `buttonHover`, `floatingOrb`
- State keys use plain strings: `"hidden"`, `"visible"`, `"rest"`, `"hover"`, `"tap"`, `"open"`, `"closed"`

## Code Style

**Formatting:**
- No Prettier config detected; formatting follows ESLint rules
- Double quotes for JSX attribute strings
- Single quotes for JS/TS string literals
- 2-space indentation throughout

**Linting:**
- ESLint with `next/core-web-vitals` and `next/typescript` rule sets
- Config at `eslint.config.mjs` (flat config format)
- Ignores: `node_modules/`, `.next/`, `out/`, `build/`, `next-env.d.ts`
- TypeScript strict mode enabled (`"strict": true` in `tsconfig.json`)

## Import Organization

**Order observed:**
1. React/Next.js framework imports: `import { useState, useEffect } from "react"`
2. Third-party library imports: `import { motion, AnimatePresence } from "framer-motion"`
3. Third-party icon imports: `import { ArrowRight, Play } from "lucide-react"`
4. Next.js component imports: `import Image from "next/image"`
5. Internal lib imports with `@/` alias: `import { textReveal } from "@/lib/animations"`
6. Internal constants imports: `import { heroRotatingWords } from "@/lib/constants"`

**Path Aliases:**
- `@/*` maps to project root `./*`
- Use `@/components/...`, `@/lib/...` for all internal imports
- No relative `../` imports observed

## Client/Server Boundary

**Pattern:**
- Interactive components requiring browser APIs or state use `"use client"` directive on line 1
- `"use client"` is used in: `Hero.tsx`, `Navigation.tsx`, `EmailForm.tsx`, `Services.tsx` (and likely all components with state/effects)
- Server components (no directive): `app/page.tsx`, `app/layout.tsx`
- API routes are server-only: `app/api/submit-email/route.ts`

## Error Handling

**Client-side (components):**
- Try/catch blocks in async handlers with typed error checks:
  ```typescript
  } catch (error) {
    setStatus("error");
    setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
  }
  ```
- HTTP errors checked via `response.ok` before parsing JSON:
  ```typescript
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to submit email');
  }
  ```
- Status resets via `setTimeout` after 5 seconds

**Server-side (API routes):**
- Try/catch wrapping entire handler body
- Validation errors return 400 with `{ error: string }` shape
- Server errors return 500 with `{ error: string }` shape
- Successful responses return `{ success: true, message: string, ...data }`
- `console.error` for server-side error logging: `console.error('Error submitting to Airtable:', error)`

**Environment validation:**
- Critical env vars checked at module level with immediate throw:
  ```typescript
  if (!AIRTABLE_PERSONAL_ACCESS_TOKEN) {
    throw new Error('AIRTABLE_PERSONAL_ACCESS_TOKEN environment variable is required');
  }
  ```

## Logging

**Framework:** `console` (native)

**Patterns:**
- Server errors logged with `console.error` before returning error response
- No client-side logging patterns observed
- No structured logging library in use

## Comments

**When to Comment:**
- Section headers in JSX to label regions: `{/* Animated background orbs */}`, `{/* Desktop Navigation */}`
- Short inline comments on non-obvious logic: `// Rotate words every 1.5 seconds`
- Animation variant definitions commented by type: `// Button animations`, `// Floating orb animations`

**JSDoc/TSDoc:**
- Not used; no function-level documentation comments observed
- TypeScript types serve as self-documentation

## Component Design

**Pattern:** All components are default-exported function components
```typescript
export default function ComponentName() {
  // ...
}
```

**Props:**
- Optional props use `?` and provide defaults in destructuring:
  ```typescript
  export default function EmailForm({ 
    placeholder = "Your work email", 
    buttonText = "Get in Touch",
    subText = "Get a free AI opportunity assessment for your company"
  }: EmailFormProps)
  ```
- Single props interface defined inline above the component

**State management:** Local `useState` only — no global state library

**Side effects:** `useEffect` with proper cleanup (event listener removal, interval clearing):
```typescript
useEffect(() => {
  const interval = setInterval(() => { ... }, 1500);
  return () => clearInterval(interval);
}, []);
```

## Animation Conventions

**Pattern:** All Framer Motion variants exported from `lib/animations.ts` as named `Variants` constants
- Components import named variants: `import { staggerContainer, staggerItem } from "@/lib/animations"`
- Inline variants only for component-specific one-off animations
- Standard variant key pairs: `hidden`/`visible` for scroll/mount animations, `rest`/`hover`/`tap` for interactive animations

**Scroll-triggered animations:**
```typescript
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
>
```

## Data/Content Separation

**Pattern:** All static content (copy, navigation items, service definitions, stats) lives in `lib/constants.ts` as `as const` exported objects/arrays. Components import and render data rather than defining it inline.

## Module Design

**Exports:**
- Components: single default export per file
- Libraries: named exports only (`lib/animations.ts`, `lib/constants.ts`, `lib/utils.ts`)
- API routes: named function exports by HTTP method (`export async function POST(...)`)

**Barrel Files:** Not used; all imports reference specific file paths directly

---

*Convention analysis: 2026-04-05*
