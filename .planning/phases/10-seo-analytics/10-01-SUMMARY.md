---
phase: 10-seo-analytics
plan: 01
subsystem: seo-analytics
tags: [seo, analytics, plausible, json-ld, availability]
dependency_graph:
  requires: []
  provides: [seo-metadata, plausible-analytics, structured-data, sitemap, robots-txt, availability-badge]
  affects: [app/layout.tsx, lib/constants.ts, components/Hero.tsx, components/CTA.tsx]
tech_stack:
  added: [plausible-analytics, json-ld-structured-data]
  patterns: [next-script-component, metadata-route-api]
key_files:
  created:
    - lib/structured-data.ts
    - app/sitemap.ts
    - app/robots.ts
    - lib/analytics.ts
    - components/AvailabilityBadge.tsx
  modified:
    - app/layout.tsx
    - lib/constants.ts
    - components/Hero.tsx
    - components/CTA.tsx
    - components/EmailForm.tsx
decisions:
  - Used Next.js MetadataRoute API for sitemap and robots.txt generation
  - Used raw script tag for JSON-LD instead of next/script (simpler, no strategy needed)
  - Tracked EmailForm instead of non-existent CalendlyButton/ContactForm/LeadMagnet
  - AvailabilityBadge kept as server component (animate-pulse is pure CSS)
metrics:
  duration: 218s
  completed: "2026-04-06T06:05:03Z"
  tasks_completed: 3
  tasks_total: 3
---

# Phase 10 Plan 01: SEO, Analytics, and Availability Summary

Claude consulting SEO positioning with Plausible Analytics integration, JSON-LD structured data, and client availability badge.

## Task Results

| Task | Name | Commit | Key Files |
|------|------|--------|-----------|
| 1 | Update SEO metadata, add sitemap, robots.txt, and JSON-LD | 224c33f | app/layout.tsx, lib/constants.ts, lib/structured-data.ts, app/sitemap.ts, app/robots.ts |
| 2 | Integrate Plausible Analytics with conversion event tracking | 31ee44a | app/layout.tsx, lib/analytics.ts, components/EmailForm.tsx |
| 3 | Add availability indicator badge to Hero and CTA | 0cbe056 | lib/constants.ts, components/AvailabilityBadge.tsx, components/Hero.tsx, components/CTA.tsx |

## What Was Done

### Task 1: SEO Metadata and Structured Data
- Updated all metadata from generic "AI transformation" to "Claude Implementation Consulting" positioning
- Added JSON-LD structured data with ProfessionalService and Person schemas in a @graph array
- Created sitemap.ts using Next.js MetadataRoute API (serves /sitemap.xml)
- Created robots.ts using Next.js MetadataRoute API (serves /robots.txt with sitemap reference)
- Added canonical URL, updated keywords, authors, OG and Twitter metadata

### Task 2: Plausible Analytics
- Added Plausible script tag via next/script with afterInteractive strategy and data-domain="infiniteplay.ai"
- Created lib/analytics.ts with trackEvent helper and global Window type declaration
- Added "Contact Form Submit" event tracking to EmailForm on successful submission

### Task 3: Availability Badge
- Added availability constant to lib/constants.ts with accepting/text fields for easy toggling
- Created AvailabilityBadge server component with pulsing green dot (animate-pulse CSS)
- Placed badge in Hero section above the logo
- Placed badge in CTA section between heading and description paragraph

## Deviations from Plan

### Adapted to Actual Codebase

**1. [Rule 3 - Blocking] CalendlyButton, ContactForm, LeadMagnet components do not exist**
- **Found during:** Task 2
- **Issue:** Plan referenced CalendlyButton.tsx, ContactForm.tsx, and LeadMagnet.tsx for event tracking, but these components do not exist in the codebase
- **Fix:** Added trackEvent to EmailForm.tsx instead (the actual contact form component)
- **Files modified:** components/EmailForm.tsx
- **Impact:** Only one conversion event wired (Contact Form Submit) instead of three. Calendly Click and Lead Magnet Submit events can be added when those components are created.

### Pre-existing Issue (Out of Scope)

**Build fails due to missing AIRTABLE_PERSONAL_ACCESS_TOKEN environment variable** in the /api/submit-email route. This is a pre-existing issue unrelated to this plan's changes. The TypeScript compilation and linting pass; only the page data collection step fails due to the missing env var.

## Known Stubs

None. All functionality is fully wired. The trackEvent calls for Calendly Click and Lead Magnet Submit are not stubs -- those components simply do not exist yet.

## Self-Check: PASSED

- All 5 created files verified present on disk
- All 3 task commits verified in git history
