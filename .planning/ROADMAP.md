# Roadmap: Infinite Play

## Overview

Transform the existing generic AI transformation marketing site into a focused Claude implementation consulting site that generates inbound leads. The build follows the visitor's decision journey: establish the visual foundation, then layer positioning, services, trust, and conversion infrastructure in the order a visitor experiences them. Content and positioning come before infrastructure because copy drives design, not the other way around.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Design System & Layout Foundation** - Clean minimal redesign with section architecture and refined animations
- [ ] **Phase 2: Hero & Value Proposition** - Above-the-fold repositioning so visitors know what Jeremy does in 5 seconds
- [ ] **Phase 3: Audience & Problem Messaging** - Target audience segments can self-identify and see their pain reflected
- [ ] **Phase 4: Services & Engagement Process** - Clear service offerings with pricing and a visible path to working together
- [ ] **Phase 5: Claude Expertise & Content** - Demonstrate deep Claude product knowledge that generalists cannot match
- [ ] **Phase 6: Trust & Social Proof** - Personal brand presence, testimonials, and case studies that build credibility
- [ ] **Phase 7: Booking & Contact Infrastructure** - Working conversion path from interest to booked discovery call
- [ ] **Phase 8: Email & Lead Capture** - Secondary conversion path with lead magnet and automated email notifications
- [ ] **Phase 9: Mobile & Responsive Polish** - Every section works on mobile devices with dark mode support
- [ ] **Phase 10: SEO & Analytics** - Discoverability, measurement, and availability signaling

## Phase Details

### Phase 1: Design System & Layout Foundation
**Goal**: Visitors experience a clean, minimal, content-first site with purposeful section flow matching the buyer decision journey
**Depends on**: Nothing (first phase)
**Requirements**: DSGN-01, DSGN-04, DSGN-07
**Success Criteria** (what must be TRUE):
  1. Site has a clean, minimal aesthetic with personal brand feel -- no clutter, no stock-photo vibes
  2. Sections follow buyer decision journey order: Hero > Trust > Problem > Services > Process > Results > About > CTA
  3. Framer Motion animations enhance content comprehension without distracting from the message
  4. Design tokens (colors, typography, spacing) are consistent across all sections
**Plans**: 2 plans
Plans:
- [ ] 01-01-PLAN.md — Design tokens, animations, constants, shadcn install
- [ ] 01-02-PLAN.md — Component rewrites/creation and page assembly
**UI hint**: yes

### Phase 2: Hero & Value Proposition
**Goal**: A visitor landing on the site understands who Jeremy helps and what he does within 5 seconds
**Depends on**: Phase 1
**Requirements**: COPY-01, COPY-03
**Success Criteria** (what must be TRUE):
  1. Above-the-fold content clearly communicates "Claude implementation consulting" -- not generic AI
  2. Headline and subhead pass the 5-second test: a stranger can articulate what Jeremy does after a glance
  3. Tone is direct and practical throughout -- zero corporate jargon, zero AI buzzwords, zero urgency tactics
**Plans**: TBD
**UI hint**: yes

### Phase 3: Audience & Problem Messaging
**Goal**: Each target audience (SMB founders, mid-market teams, knowledge workers) sees themselves on the site and recognizes their specific problem
**Depends on**: Phase 2
**Requirements**: COPY-02, SERV-05
**Success Criteria** (what must be TRUE):
  1. SMB founders, mid-market teams, and knowledge workers each encounter copy that speaks to their situation
  2. Audience segment cards or sections use language each persona would use to describe their own problem
  3. Each audience segment has a distinct entry point that routes them toward relevant services
**Plans**: TBD
**UI hint**: yes

### Phase 4: Services & Engagement Process
**Goal**: Visitors understand exactly what Jeremy offers, what it costs, and how to start working with him
**Depends on**: Phase 3
**Requirements**: SERV-01, SERV-02, SERV-04
**Success Criteria** (what must be TRUE):
  1. Services section shows 3-4 offerings with outcome-focused names (not capability-focused)
  2. Each service tier displays "starting from" pricing that pre-qualifies leads
  3. "How to work with me" section presents a clear 3-4 step engagement process (Talk > Plan > Execute > Results)
  4. A visitor can determine which service fits their situation without needing to ask
**Plans**: TBD
**UI hint**: yes

### Phase 5: Claude Expertise & Content
**Goal**: The site demonstrates deep, specific Claude product knowledge that proves Jeremy is a practitioner, not just a consultant
**Depends on**: Phase 2
**Requirements**: COPY-04, COPY-05, TRUST-04
**Success Criteria** (what must be TRUE):
  1. Claude product taxonomy is explicitly visible -- Chat, Teams, Enterprise, Claude Code, API, MCP each named and contextualized
  2. Real before/after workflow examples demonstrate daily Claude usage with specific outcomes
  3. Static practical content shows Claude knowledge depth that a generalist AI consultant could not produce
**Plans**: TBD
**UI hint**: yes

### Phase 6: Trust & Social Proof
**Goal**: Visitors trust Jeremy enough to consider a high-consideration consulting purchase based on authentic personal credibility
**Depends on**: Phase 5
**Requirements**: TRUST-01, TRUST-02, TRUST-03
**Success Criteria** (what must be TRUE):
  1. Professional headshot and authentic personal bio are visible, establishing Jeremy as a real person
  2. Social proof section displays testimonials or credibility markers (with name, role, company where possible)
  3. 2-3 inline case study snippets show before/after results with specific outcomes (stubs acceptable for launch)
**Plans**: TBD
**UI hint**: yes

### Phase 7: Booking & Contact Infrastructure
**Goal**: Interested visitors can book a discovery call or submit an inquiry without friction
**Depends on**: Phase 4
**Requirements**: CONV-01, SERV-03, DSGN-05
**Success Criteria** (what must be TRUE):
  1. "Book a discovery call" CTA with Calendly integration appears in hero and after each major section
  2. Contact form with proper validation (react-hook-form + zod) provides an alternative path to reach Jeremy
  3. Multiple contact paths exist: booking widget, contact form, and direct email
  4. Form submissions are validated on both client and server using the same schema
**Plans**: TBD

### Phase 8: Email & Lead Capture
**Goal**: Visitors who are not ready to book can exchange their email for value, and all form submissions trigger proper notifications
**Depends on**: Phase 7
**Requirements**: CONV-04, DSGN-06
**Success Criteria** (what must be TRUE):
  1. Email capture form offers a real lead magnet (Claude setup checklist or similar) gated behind email
  2. Form submissions trigger a confirmation email to the lead via Resend
  3. Jeremy receives a notification email for every form submission with lead details
**Plans**: TBD

### Phase 9: Mobile & Responsive Polish
**Goal**: The site delivers a complete experience on any device with light and dark mode support
**Depends on**: Phase 6, Phase 7
**Requirements**: CONV-02, DSGN-03
**Success Criteria** (what must be TRUE):
  1. All sections, forms, and CTAs are fully functional on mobile devices (phone and tablet)
  2. Navigation works on small screens (hamburger menu or equivalent)
  3. Dark mode toggle exists and all components render correctly in both light and dark themes
**Plans**: TBD
**UI hint**: yes

### Phase 10: SEO & Analytics
**Goal**: The site is discoverable for Claude-specific search queries and Jeremy can measure what is working
**Depends on**: Phase 8
**Requirements**: CONV-03, DSGN-02, CONV-05
**Success Criteria** (what must be TRUE):
  1. SEO metadata and social cards reflect the new Claude implementation consulting positioning
  2. Plausible Analytics is integrated and tracking page views and conversion events
  3. Availability indicator ("Currently accepting new clients" or similar) is visible on the site
  4. JSON-LD structured data (Person, ProfessionalService) is present for rich search results
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 > 2 > 3 > 4 > 5 > 6 > 7 > 8 > 9 > 10

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Design System & Layout Foundation | 0/2 | Planning complete | - |
| 2. Hero & Value Proposition | 0/TBD | Not started | - |
| 3. Audience & Problem Messaging | 0/TBD | Not started | - |
| 4. Services & Engagement Process | 0/TBD | Not started | - |
| 5. Claude Expertise & Content | 0/TBD | Not started | - |
| 6. Trust & Social Proof | 0/TBD | Not started | - |
| 7. Booking & Contact Infrastructure | 0/TBD | Not started | - |
| 8. Email & Lead Capture | 0/TBD | Not started | - |
| 9. Mobile & Responsive Polish | 0/TBD | Not started | - |
| 10. SEO & Analytics | 0/TBD | Not started | - |
