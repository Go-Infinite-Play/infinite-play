# Infinite Play

## What This Is

A Claude implementation consulting business and website. Infinite Play helps SMBs, mid-market teams, and knowledge workers get real value from Claude — through setup, workflow redesign, and hands-on training. The website (infiniteplay.ai) is the primary lead generation tool: a clean, minimal, personal-brand site that clearly communicates services, builds trust, and converts visitors into clients.

## Core Value

A site that makes it immediately obvious what Jeremy does (Claude implementation consulting), feels authentic and direct, and generates inbound leads from people who need help getting the most out of Claude.

## Requirements

### Validated

- ✓ Next.js 15 App Router with Turbopack — existing
- ✓ Tailwind CSS v4 with shadcn/ui — existing
- ✓ Framer Motion animations — existing
- ✓ Email capture form with Airtable integration — existing
- ✓ SEO metadata with Open Graph and Twitter cards — existing

### Active

- [ ] Reposition site around Claude implementation consulting (not generic AI transformation)
- [ ] Define clear service offerings: Claude setup & config, workflow redesign, training
- [ ] Product tiers covering Claude Chat, Teams, Enterprise, Claude Code
- [ ] Research competitive landscape (JJ Englert, other Claude/AI consultants)
- [ ] Develop business strategy: pricing, pipeline, ideal client profiles
- [ ] Clean, minimal website redesign with personal brand (Jeremy's voice and face)
- [ ] Direct, practical tone — no hype, no buzzwords, show the work
- [ ] Lead generation optimization — clear CTAs, easy path to engagement
- [ ] Content that demonstrates expertise (real examples, before/after, practical insights)
- [ ] "How to work with me" section — clear engagement process
- [ ] Target audience messaging for SMB founders, mid-market teams, and knowledge workers

### Out of Scope

- Shady AI influencer vibes — explicitly rejected; authenticity is core to the brand
- Generic AI consulting positioning — this is specifically Claude, not "AI" broadly
- Complex web app features (auth, dashboards, user accounts) — this is a marketing site
- Mobile app — web only
- Blog/CMS system — v1 is static content, can revisit later

## Context

**Existing codebase:** Next.js 15 single-page marketing site with section components (Hero, Navigation, Process, Services, About, CTA, Footer). Currently positioned as generic AI transformation consulting. All content centralized in `lib/constants.ts`. Framer Motion animations throughout. Email capture → Airtable integration exists.

**Business direction:** Jeremy wants to specialize in Claude implementation — helping businesses adopt Claude products (Chat, Teams, Enterprise, Claude Code). The differentiation is being practical and authentic vs. the typical AI consultant hype. Personal brand is key — people hire Jeremy, not a company.

**Design inspiration:** JJ Englert's approach to talking about Claude/AI consulting. Research needed into what works in this space — both for positioning and visual design.

**Target clients:**
- SMB founders (5-50 people) who know AI matters but don't know where to start
- Mid-market teams (50-500) with departments that need Claude
- Knowledge workers (lawyers, consultants, agencies) who should be using Claude but aren't

## Constraints

- **Tech stack**: Keep Next.js 15, Tailwind, shadcn/ui, Framer Motion — already validated
- **Domain**: infiniteplay.ai — keep the brand name, reposition what it means
- **Tone**: Direct, practical, personal — no corporate speak, no AI hype
- **Design**: Clean and minimal — content speaks, not decoration

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Keep Infinite Play brand | Already have domain, recognition; rebrand is unnecessary | — Pending |
| Specialize in Claude (not generic AI) | Differentiation — most consultants are generic; Claude expertise is specific and defensible | — Pending |
| Personal brand over company brand | Clients hire people, not logos; authenticity is the differentiator | — Pending |
| Research-first approach | Need to understand competitive landscape, successful patterns, and business strategy before redesigning | — Pending |
| Clean & minimal design | Matches authentic, direct tone; lets content do the work | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-05 after initialization*
