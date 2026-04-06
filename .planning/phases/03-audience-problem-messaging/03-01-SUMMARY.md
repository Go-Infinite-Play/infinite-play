---
phase: 03-audience-problem-messaging
plan: 01
subsystem: audience-routing
tags: [copy, audience-segments, problem-section, constants]
dependency_graph:
  requires: [01-01, 01-02, 02-01]
  provides: [audience-segment-data, audience-routing-section]
  affects: [lib/constants.ts, components/ProblemSection.tsx]
tech_stack:
  added: []
  patterns: [data-driven-cards, audience-routing]
key_files:
  created: []
  modified:
    - lib/constants.ts
    - components/ProblemSection.tsx
decisions:
  - Kept CTAs data-driven via constants rather than hardcoded in component
  - Changed section id from implicit to explicit "audience" for future nav linking
metrics:
  duration: 80s
  completed: 2026-04-06T04:34:07Z
  tasks_completed: 2
  tasks_total: 2
---

# Phase 03 Plan 01: Audience Problem Messaging Summary

Audience-routing section with three persona cards (SMB founders, mid-market teams, knowledge workers) replacing generic problem points, each with situation-specific copy and CTA to services.

## What Was Done

### Task 1: Define audience segment data in constants
- **Commit:** 2c3ad12
- Replaced `problemPoints` export with `audienceSegments` array containing three segment objects
- Added `audienceSectionIntro` constant with heading and subheading
- Each segment has: id, label, icon, problem, painPoint, cta, ctaHref
- All copy follows tone rules: problem-first, conversational, no banned words

### Task 2: Rewrite ProblemSection as audience-routing cards
- **Commit:** ae888e9
- Rewrote component to render from `audienceSegments` data
- Each card shows: icon, label, problem statement, pain point, CTA with ArrowRight
- Cards use flex layout with footer pushed to bottom via flex-1
- Section id set to "audience" for nav linking
- All old problemPoints references removed

## Deviations from Plan

None - plan executed exactly as written.

## Verification Results

- `npm run build` succeeds without errors
- `grep -r "problemPoints" lib/ components/` returns no matches (fully removed)
- `audienceSegments` present in both lib/constants.ts and components/ProblemSection.tsx
- All three segment ids (smb-founders, mid-market-teams, knowledge-workers) present in constants
- CTA hrefs point to #services (verified in constants data)

## Known Stubs

None - all data is real copy, no placeholders or TODOs.

## Self-Check: PASSED
