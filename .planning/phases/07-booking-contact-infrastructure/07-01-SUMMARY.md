---
phase: 07-booking-contact-infrastructure
plan: 01
subsystem: booking-cta
tags: [calendly, booking, cta, conversion]
dependency_graph:
  requires: []
  provides: [calendly-button-component, booking-cta-integration]
  affects: [Hero, CTA, Services, ResultsSection, constants]
tech_stack:
  added: [calendly-popup-widget]
  patterns: [lazy-script-injection, global-window-type-declaration]
key_files:
  created:
    - components/CalendlyButton.tsx
  modified:
    - lib/constants.ts
    - components/Hero.tsx
    - components/CTA.tsx
    - components/Services.tsx
    - components/ResultsSection.tsx
decisions:
  - Used lazy script/CSS injection pattern for Calendly assets to avoid page-load overhead
  - Used module-level ref flag for single injection across multiple CalendlyButton instances
  - Added direct email link in CTA section as alternative contact path (partial SERV-03)
metrics:
  duration: ~2 minutes
  completed: 2026-04-05
---

# Phase 07 Plan 01: Calendly Booking Integration Summary

Reusable CalendlyButton component with lazy Calendly popup widget loading, wired into Hero, Services, Results, and CTA sections with direct email fallback in CTA.

## Tasks Completed

### Task 1: Create CalendlyButton component and add Calendly URL constant
- **Commit:** 03c6992
- Added `calendly` field to `contactInfo` in `lib/constants.ts`
- Created `components/CalendlyButton.tsx` as a "use client" component
- Lazily injects Calendly CSS and JS assets on mount (once across all instances)
- Opens Calendly popup widget on click via `window.Calendly.initPopupWidget`
- Supports `variant`, `className`, and `children` props
- Includes TypeScript global declaration for `window.Calendly`

### Task 2: Wire CalendlyButton into Hero, CTA, Services, and Results sections
- **Commit:** 759f648
- **Hero.tsx:** Replaced primary CTA (scroll-to-section) with CalendlyButton, kept secondary "See How It Works" button
- **CTA.tsx:** Replaced button with CalendlyButton, added "Or reach out directly" with mailto link to jeremy@infiniteplay.ai
- **Services.tsx:** Replaced bottom "Let's Talk" button with "Not sure which service fits?" text + CalendlyButton
- **ResultsSection.tsx:** Added "Ready to see results like these?" text + CalendlyButton after results cards

## Verification Results

- `npx tsc --noEmit` - passed (no errors)
- `npm run lint` - passed (no warnings)
- `npm run build` - passed (static build successful)

## Deviations from Plan

None - plan executed exactly as written.

## Known Stubs

**1. Calendly URL placeholder** - `lib/constants.ts` line 212 - `calendly: "https://calendly.com/jeremy-infiniteplay/discovery"` is a placeholder URL. Jeremy needs to configure his actual Calendly account and update this URL. This is documented as a known blocker in STATE.md and does not prevent the component from functioning once the real URL is set.
