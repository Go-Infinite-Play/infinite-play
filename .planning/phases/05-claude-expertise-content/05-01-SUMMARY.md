---
phase: 05-claude-expertise-content
plan: 01
subsystem: content-sections
tags: [claude-expertise, product-taxonomy, workflow-examples, credibility]
dependency_graph:
  requires: []
  provides: [ExpertiseSection, WorkflowShowcase, claudeProducts, workflowExamples]
  affects: [page-layout, navigation]
tech_stack:
  added: []
  patterns: [product-taxonomy-grid, before-after-workflow-cards]
key_files:
  created:
    - components/ExpertiseSection.tsx
    - components/WorkflowShowcase.tsx
  modified:
    - lib/constants.ts
    - app/page.tsx
decisions:
  - Placed ExpertiseSection and WorkflowShowcase between Process and ResultsSection for natural buyer journey flow
  - Used 3-column grid for products (6 items) and 2-column grid for workflows (4 items)
  - Matched existing component patterns exactly (motion wrappers, staggerContainer, shadcn Card, icon maps)
metrics:
  duration: 2m 27s
  completed: 2026-04-06T04:50:45Z
  tasks_completed: 3
  tasks_total: 3
  files_changed: 4
requirements:
  - COPY-04
  - COPY-05
  - TRUST-04
---

# Phase 05 Plan 01: Claude Expertise Content Summary

Claude product taxonomy grid and before/after workflow showcase demonstrating practitioner-level Claude knowledge across Chat, Teams, Enterprise, Code, API, and MCP.

## What Was Done

### Task 1: Add Claude product taxonomy and workflow data to constants
- Added `claudeProducts` array with 6 entries covering all Claude products (Chat, Teams, Enterprise, Claude Code, API, MCP)
- Each entry includes id, name, icon, category (individual/team/developer), description, and howJeremyHelps
- Added `workflowExamples` array with 4 before/after scenarios (weekly reports, code review, customer research, onboarding)
- Each workflow includes concrete timeSaved metrics and specific claudeProduct attribution
- **Commit:** 35b4a30

### Task 2: Create ExpertiseSection and WorkflowShowcase components
- ExpertiseSection: 3-column responsive grid rendering all 6 Claude products with icon, name, category badge, description, and "How I help" text
- WorkflowShowcase: 2-column responsive grid with before (strikethrough) / after (bold) pattern, arrow divider, timeSaved badge, and product attribution
- Both follow established patterns: "use client", motion wrappers with sectionFadeIn and staggerContainer/staggerItem, shadcn Card/Badge, lucide icons
- **Commit:** 7a61ee1

### Task 3: Integrate into page and update navigation
- Added ExpertiseSection and WorkflowShowcase imports to app/page.tsx
- Positioned between Process and ResultsSection (after "how we work", before social proof)
- Added "Expertise" navigation item between "Services" and "About"
- **Commit:** ac58349

## Deviations from Plan

### Pre-existing Issues (Not Fixed - Out of Scope)

Build fails due to 5 missing exports in lib/constants.ts that components import but were never added in previous phases: `trustBarItems`, `resultsItems`, `heroContent`, `audienceSegments`, `audienceSectionIntro`. These are not caused by this plan's changes. The new ExpertiseSection and WorkflowShowcase components have zero build errors.

## Known Stubs

None. All data arrays are fully populated with specific, practitioner-level content. No placeholder text or TODO markers.

## Decisions Made

1. **Section placement:** ExpertiseSection and WorkflowShowcase placed between Process and ResultsSection -- natural buyer journey position (you've seen what I offer, now see that I actually know this stuff, then see results)
2. **Grid layouts:** 3-column for 6 products (fills evenly), 2-column for 4 workflows (allows more horizontal space for before/after text)

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| 1 | 35b4a30 | Add Claude product taxonomy and workflow data to constants |
| 2 | 7a61ee1 | Create ExpertiseSection and WorkflowShowcase components |
| 3 | ac58349 | Integrate expertise sections into page and update navigation |
