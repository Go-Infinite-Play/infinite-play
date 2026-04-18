# Infinite Play — Relaunch Design Spec

**Date:** 2026-04-17
**Status:** Draft, pending user review
**Owner:** Jeremy Olken

## 1. Overview

Infinite Play is Jeremy Olken's AI transformation consulting firm. The site at `infiniteplay.ai` currently shows a "coming soon" placeholder; underneath it sits a completed but now-deprecated build positioned as Claude-only implementation consulting. This spec defines the relaunch: a two-page, static Next.js site that introduces Infinite Play as a multi-model AI transformation firm, presents three services, showcases five engagements, and routes interest to LinkedIn.

## 2. Core goals

1. In five seconds a visitor understands what Infinite Play does and who runs it.
2. Three services are legible without corporate jargon.
3. Five case studies (including one founder-built product and one current-employer engagement) demonstrate range and depth.
4. A visitor who wants to engage ends up on Jeremy's LinkedIn and sends a DM.
5. The site ships quickly and is boringly easy to maintain — no forms, no backend, no CMS.

## 3. Audience

**Primary:** SMB and mid-market founders (5–500 person companies) who know AI matters and want a practical partner — plus individual knowledge workers and professionals (consultants, execs, operators) who want to personally level up and integrate AI into how they work.

Out of primary frame, but welcome as spillover: marketing / creative agencies, SaaS product teams. Case studies demonstrate range across these.

## 4. Brand positioning

**Firm identity:** Infinite Play is the brand. Jeremy Olken is the founder. The site says "we" when speaking as the firm, "Jeremy" when pointing at the founder.

**Positioning line (direction, not final copy):**
> The AI landscape keeps changing. We help your team stay ahead of it.

This is the "infinite game" metaphor — AI is evolutionary and ongoing; Infinite Play is the partner that stays current so you don't have to. Final wordsmithing TBD; subhead will name the three services plainly.

**Voice & tone rules:**
- Approachable, direct, and warm — never corporate-consulting.
- Do **not** use the word "friendly" in site copy. The vibe should be felt, not labeled.
- No "AI transformation" as a headline noun unless paired with a concrete verb (OK in sub-copy).
- No hype ("revolutionary," "game-changing," "cutting-edge," etc.).
- No urgency tactics ("limited slots," countdown timers).
- Write like a thoughtful operator talking to a peer — not a pitch deck.

**What Infinite Play is not (anti-positioning):**
- Not a management consultancy. No slide decks as deliverables.
- Not a single-model shop. No "Claude consultants" or "GPT experts" framing.
- Not a staffing firm. No bodies-per-hour pricing.
- Not an AI influencer / cohort / community. No Slack, no course, no newsletter as hero product.

## 5. Information architecture

Two pages. Everything else is a section.

```
infiniteplay.ai/
├── /              (Homepage)
│   ├── Hero
│   ├── Services (3 tiered)
│   ├── Recent Work (teaser → /work)
│   ├── About block
│   └── CTA + Footer
└── /work          (Case studies)
    ├── Page intro
    ├── Talent Systems
    ├── Platinum Balloon
    ├── Signal and Cipher
    ├── Hidden Client
    ├── GMR Marketing
    └── CTA + Footer
```

No `/services`, `/about`, `/contact`, or blog pages in v1. Section anchors are fine (e.g., `/#services`). Navigation is the same on both pages: brand lockup, `Services`, `Work`, `About`, and a primary-styled `Connect` action that goes to LinkedIn.

## 6. Homepage sections

### 6.1 Hero

- Brand lockup top-left: small dot accent + "Infinite Play" wordmark.
- Availability pill immediately above headline: "Accepting new engagements." Reuses the existing `availability` constant from `lib/constants.ts`; toggleable.
- Headline: infinite-game tagline, ~52px, Plus Jakarta Sans 700, tight letter-spacing. Orange accent on the second clause.
- Sub-copy (~18px, Inter, 520px max width): plain-English intro to the three services and the type of partner Infinite Play is.
- Primary CTA: rounded-pill button, dark-bg, label "Connect on LinkedIn →" → `https://www.linkedin.com/in/jeremyolken/`.
- No secondary CTA in v1 (conversion path is intentionally singular).
- Optional subtle Framer Motion: fade-up on mount, respect `prefers-reduced-motion`.

### 6.2 Services

Three tiered offerings, card-style, soft-shadow, rounded-xl. Approachable copy ("here's what we do"); no "SKU / timeline / price" grid.

| # | Name (working) | What it is |
|---|---|---|
| 01 | **Team Training** | Hands-on training for individuals or teams. We meet you at your current skill level and get you fluent with the tools that matter. Half-day, full-day, or multi-session. |
| 02 | **AI Opportunity Map** | An audit of your business. We learn how your team works, find the highest-leverage places AI can help, and hand you a prioritized roadmap — what to buy, what to build, which models to use, which prompts and automations to ship. |
| 03 | **Custom AI Systems** | When off-the-shelf isn't enough, we design and build the systems that fit your business — agents, automations, custom web tooling, internal apps. |

**Pricing direction:** tiered ranges allowed, but not presented as a corporate price table. Soft phrasing (e.g., "starts around $X" or "most engagements fall in $X–$Y") if used at all. Deferred decision — Jeremy to choose whether to show numbers or route to DM for scope.

**Multi-model mention:** one short line inside or below the services block, not as a positioning pillar. Example: "We work across Claude, GPT, Gemini, and Google Workspace — and pick the right tool for the job." Deliberately understated.

### 6.3 Recent Work (teaser)

Five compact tiles (one per case study) linking to `/work#<slug>`. Each tile shows: company name, one-line outcome, single headline metric if available, arrow. Grid: 2×3 desktop, 1-col mobile. Serves as the anchor target from the homepage nav "Work" link.

### 6.4 About block

Short block, ~150 words, positioned after Recent Work.

- Intro to Infinite Play as a small, operator-led firm.
- Jeremy's bio: one paragraph. Per positioning research, state the day job plainly — "Jeremy is currently VP of AI Products at GMR Marketing, where he leads the AI practice building tooling for one of the world's leading experiential agencies." Frame Infinite Play as the selective consulting vehicle.
- Quick credentials list: prior roles (Head of Product Strategy, Signal and Cipher; builder of Hidden Client), and a few capabilities.
- Optional headshot — Jeremy to decide.

No standalone `/about` page in v1.

### 6.5 CTA + Footer

- CTA block: restates the LinkedIn action with a conversational lead-in ("Got something we could help with? Connect on LinkedIn and send a DM.").
- Footer: brand lockup, nav repeats (Services · Work · About), LinkedIn link, fallback email (`jeremy@infiniteplay.ai`), copyright.

## 7. `/work` page

Separate page. Same nav shell, same visual system. Purpose: long-form proof.

### 7.1 Page intro

Short header — "Recent engagements. Here's what we did and how." — plus a one-line note about engagement types (training, audits, custom systems).

### 7.2 Case study blocks

Five blocks, inline, anchored by slug (`#talent-systems`, `#platinum-balloon`, `#signal-and-cipher`, `#hidden-client`, `#gmr-marketing`). Each targets ~200 words (150–250 range per research).

**Per-block structure:**
1. Company / industry / engagement type (one line, small-caps)
2. Headline metric or outcome (display-size number or phrase)
3. **The problem** (2–3 sentences)
4. **What we did** (3–4 sentences on approach)
5. **What we built** (specific systems, agents, deliverables)
6. **Outcome** (measurable result; can be qualitative if quantitative isn't shareable)
7. Optional pull-quote if available

**Content guidance per block:**

- **Talent Systems** — enterprise AI audit across departments → 34 opportunities mapped; custom agents for customer support and casting role verification; reduced manual review time significantly. Note Talent Systems owns seven casting brands (Casting Networks, Casting Frontier, Spotlight, Tagmin, Staff Me Up, Cast It Talent, Cast It Systems); pick one for specificity where relevant.

- **Platinum Balloon** — AI system for agency strategy work. RFP → creative brief pipeline that expands the problem space for strategists, surfacing non-obvious insights. Reference Platinum Balloon's Hydrogen AI (HAI) where it clarifies without confusing attribution.

- **Signal and Cipher** — Jeremy was Head of Product Strategy. Built a generative AI education platform that combined static content, interactive workshops, and hands-on training for tailored upskilling. Ian Beacraft is the founder / Chief Futurist; clients included Samsung, Intel, Coca-Cola, Google, Microsoft, Nike, Universal.

- **Hidden Client** — Jeremy-built product (`hiddenclient.com`). AI agent that turns job postings into daily leads for fractional services firms — monitors LinkedIn/Indeed/ZipRecruiter/Glassdoor, delivers a 7am email with matched leads, decision-maker contact, and personalized outreach drafts. Treat as a founder build rather than a client engagement; transparently labeled.

- **GMR Marketing** — Jeremy's current role as VP of AI Products. AI tooling across strategy, operations, and client-facing work for the experiential agency. Full client roster available: Visa, NFL, NBA/WNBA, Google, Nissan, Cisco, Xfinity, Humana, Microsoft, Intel, Mercedes-Benz, Hershey, HPE, McCain, 23XI Racing. **Open item:** user mentioned Airbnb and Omega; neither confirmed on public GMR properties — verify with Jeremy before including.

## 8. Design system

**Direction:** Option B — "Playful Modern" (Hero Directions mockup, selected 2026-04-17).

### 8.1 Palette

Reuse tokens already in `app/globals.css`. Light mode is the default surface.

| Token | Value | Role |
|---|---|---|
| `--background` | `#FAFAFA` | Page bg |
| `--foreground` | `#0F172A` | Body text |
| `--primary` | `#FB5B3D` | Orange accent, brand dot, link color |
| `--muted-foreground` | `#64748B` | Sub-copy |
| `--border` | `#E2E8F0` | Dividers, card borders |
| `--card` | `#FFFFFF` | Card surface |

Dark mode is dropped from v1 (single-surface simplifies polish). Tokens remain in the stylesheet for later.

### 8.2 Type

- `Plus Jakarta Sans` (already loaded via `next/font/google`) — display headlines, 600–700 weight, tight letter-spacing (−0.03em at large sizes).
- `Inter` — body, UI, labels.
- Base body 17–18px. Hero headline ~52px desktop / ~36px mobile.

### 8.3 Shape language

- Generous rounded corners: 14–16px on cards, 999px (pill) on primary buttons and availability pill.
- Orange accent dot in the brand lockup.
- Soft shadows on elevated cards (e.g., services grid).
- Framer Motion: restrained — fade-up on scroll for major sections, micro-hover on cards and the primary CTA. Must honor `prefers-reduced-motion`.

## 9. Tech approach

**Reused from existing build:**
- Next.js 15 App Router with Turbopack
- Tailwind CSS v4 + shadcn/ui (New York style)
- Framer Motion 12 animation variants in `lib/animations.ts`
- Inter + Plus Jakarta Sans font pipeline
- SEO infrastructure: `app/layout.tsx` metadata, `app/sitemap.ts`, `app/robots.ts`, `lib/structured-data.ts`
- `lib/utils.ts` `cn()` helper
- `lib/constants.ts` as the single source of truth for copy and link data (rewritten wholesale to match new IA)
- Existing component folder as a starting point — some can be renamed/rewritten, others deleted

**Dropped from existing build:**
- `app/api/submit-email/route.ts` and Airtable integration
- `app/api/contact/route.ts` and Resend integration
- `app/api/lead-magnet/route.ts` and the lead-magnet section
- Calendly widget / booking integration
- Plausible analytics (defer — add back only if Jeremy wants measurement)
- Dark mode toggle and `next-themes` dependency
- Lead magnet, email form, newsletter, any contact form
- Supabase — never added; spec confirms no backend in v1

**Deleted components (or renamed):**
- `EmailForm.tsx`, `LeadMagnet.tsx`, `ContactForm.tsx`, `CalendlyButton.tsx`, `ThemeProvider.tsx`, `ThemeToggle.tsx`
- `AvailabilityBadge.tsx` — keep and reuse (light polish), drives the hero pill
- All other section components get rewritten, not migrated wholesale

**New routes:**
- `/` — rebuild to match new IA (replacing the coming-soon page)
- `/work` — new, holds the five case study blocks

**Dependencies to remove** from `package.json`:
- `airtable`, `resend`, `next-themes`, `@hookform/resolvers`, `react-hook-form`, `zod`

(Confirm removal during execution — `zod` may be worth keeping for future utility; drop by default.)

## 10. Copy direction

All copy lives in `lib/constants.ts`. One draft pass in this spec is intentionally indicative, not final. Wordsmithing happens in execution.

**Voice samples (direction, not final):**

> "We're a small AI transformation firm. We train your team, map where AI can help, and build the systems that make it real."

> "Most teams don't need more AI tools. They need a partner who knows which tools matter, how to use them, and what to build when nothing off-the-shelf quite fits."

> "Jeremy leads the AI Products practice at GMR Marketing — one of the world's top experiential agencies — while running Infinite Play on a small handful of selective engagements."

## 11. Deferred decisions

Listed here so they don't block shipping; each can be resolved during execution or in a v1.1 pass.

1. **Pricing visibility** — show "starts around" numbers on services, or route everything through DM? Recommendation: soft ranges on 1–2 services, DM-only on Custom Systems.
2. **GMR client list** — verify Airbnb and Omega with Jeremy before including in GMR case study copy.
3. **Headshot** — Jeremy's call. About block works with or without.
4. **Analytics** — Plausible or nothing? Adding it back is ~15 min of work.
5. **Copy tone — final wordsmith** — this spec sets direction; final line-edits happen in the implementation plan.
6. **Favicon / icon update** — current favicon is fine; rebrand asset refresh is out of scope for v1.

## 12. Out of scope

- Backend / database (Supabase, Airtable, etc.)
- Forms of any kind (contact, newsletter, lead magnet)
- Calendly embed or booking flow
- Dark mode toggle
- Blog / notes / writing section
- CMS (case studies live in `lib/constants.ts`)
- Separate `/about`, `/services`, `/contact`, or `/privacy` pages
- Multi-language
- A/B testing infrastructure
- CRM or email tool integration
- Logo / identity redesign beyond reusing existing wordmark

## 13. Success criteria

A visitor landing on the site can, within 30 seconds:
1. Say what Infinite Play does (AI transformation via training, audits, and custom systems).
2. Name the three services.
3. See five real engagements with named clients.
4. Find the single conversion action (Connect on LinkedIn).
5. Understand that Jeremy runs this alongside his role at GMR Marketing.

A maintainer can:
1. Update all copy by editing `lib/constants.ts`.
2. Toggle availability by flipping one boolean.
3. Ship to Vercel with zero env vars.

## 14. References

- Positioning research: `.planning/research/2026-04-17-consultant-positioning.md`
- Case study facts: `.planning/research/2026-04-17-case-study-subjects.md`
- Existing implementation (deprecated positioning) — see components under `components/`, constants in `lib/constants.ts`, and `app/page.tsx` prior to the coming-soon replacement (commit `70a3431`).
