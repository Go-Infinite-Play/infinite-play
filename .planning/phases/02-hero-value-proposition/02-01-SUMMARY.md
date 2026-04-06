---
phase: 02-hero-value-proposition
plan: 01
subsystem: hero
tags: [hero, copy, positioning, headshot]
dependency_graph:
  requires: []
  provides: [heroContent, hero-component]
  affects: [above-the-fold, first-impression]
tech_stack:
  added: []
  patterns: [constants-driven-copy, next-image-optimization]
key_files:
  created: []
  modified:
    - lib/constants.ts
    - components/Hero.tsx
    - components/ui/button.tsx
    - components/ui/badge.tsx
    - components/ui/separator.tsx
    - app/api/submit-email/route.ts
decisions:
  - Headline uses first-person direct address targeting teams
  - All copy sourced from heroContent constant, no hardcoded strings in component
metrics:
  duration: 3m 16s
  completed: 2026-04-05
---

# Phase 02 Plan 01: Hero Section Rewrite Summary

Hero rewritten with real Claude-specific positioning copy, Jeremy's headshot in two-column layout, and two CTAs sourced from centralized heroContent constant.

## What Was Done

### Task 1: Add heroContent to constants and rewrite Hero component
**Commit:** e8b019a

- Added `heroContent` object to `lib/constants.ts` with headline ("I help teams get real value from Claude"), subhead, primary CTA ("Book a Discovery Call"), and secondary CTA ("See What I Offer")
- Rewrote `components/Hero.tsx` with two-column grid layout: text left, headshot right on desktop; stacked on mobile
- All marketing copy sourced from `heroContent` -- no hardcoded strings in the component
- Headshot rendered via `next/image` with `priority` flag for above-the-fold LCP optimization
- Both CTAs use smooth scroll: primary to `#contact`, secondary to `#services`
- Kept existing animation pattern: `staggerContainer`/`staggerItem` on text, fade-in on photo

### Task 2: Visual verification (auto-approved)
Build passed cleanly. Auto-approved per checkpoint handling directive.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Fixed radix-ui import resolution for Turbopack**
- **Found during:** Task 1 build verification
- **Issue:** `components/ui/button.tsx`, `badge.tsx`, and `separator.tsx` imported from `"radix-ui"` (unified package) which Turbopack could not resolve
- **Fix:** Changed imports to scoped packages (`@radix-ui/react-slot`, `@radix-ui/react-separator`) and fixed `Slot.Root` to `Slot` for compatibility
- **Files modified:** components/ui/button.tsx, components/ui/badge.tsx, components/ui/separator.tsx
- **Commit:** e8b019a

**2. [Rule 3 - Blocking] Deferred Airtable env var check to request time**
- **Found during:** Task 1 build verification
- **Issue:** `app/api/submit-email/route.ts` threw at module load when `AIRTABLE_PERSONAL_ACCESS_TOKEN` was missing, failing the build in environments without secrets
- **Fix:** Moved token check into a `getAirtableBase()` function called at request time instead of module initialization
- **Files modified:** app/api/submit-email/route.ts
- **Commit:** e8b019a

## Verification Results

- heroContent exported from lib/constants.ts: PASS
- Headline is Claude-specific, first person: PASS
- Headshot referenced via next/image: PASS
- Component imports copy from constants: PASS
- Primary CTA "Book a Discovery Call": PASS
- Secondary CTA "See What I Offer": PASS
- `npm run build` exits 0: PASS

## Known Stubs

None -- all copy is real positioning content, headshot is real image, CTAs scroll to real sections.

## Self-Check: PASSED
