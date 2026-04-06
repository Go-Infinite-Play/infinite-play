# Architecture Research

**Domain:** Claude implementation consulting website (personal brand, lead generation)
**Researched:** 2026-04-05
**Confidence:** MEDIUM-HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                       Navigation (sticky)                        │
│  [Logo/Name]  [Services]  [Process]  [About]  [Book a Call CTA] │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    HOMEPAGE (/)                            │  │
│  │  Hero → Trust Bar → Problem → Services → Process →        │  │
│  │  Results → About → CTA                                    │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │ /services│  │  /about  │  │/work-with│  │ /contact │       │
│  │ (detail) │  │  (story) │  │   -me    │  │ (booking)│       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                    API Layer (minimal)                            │
│  ┌──────────────┐  ┌──────────────┐                             │
│  │ /api/submit  │  │ /api/booking │                             │
│  │   -email     │  │  (future)    │                             │
│  └──────────────┘  └──────────────┘                             │
├─────────────────────────────────────────────────────────────────┤
│                    External Services                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                      │
│  │ Airtable │  │ Calendly │  │Analytics │                      │
│  │ (leads)  │  │(booking) │  │(tracking)│                      │
│  └──────────┘  └──────────┘  └──────────┘                      │
└─────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| Homepage | Primary conversion funnel -- walk visitor from awareness to action | Long-scroll page with ordered sections, each building on the last |
| Services detail | Deep-dive on specific offerings for visitors who need more info | 1-3 dedicated pages (one per service tier or audience) |
| About page | Personal brand story, build trust and relatability | Narrative-driven, photos of Jeremy, background + philosophy |
| Work With Me / Process | Remove friction by explaining exactly what engagement looks like | Step-by-step timeline, expectations, what to prepare |
| Contact / Booking | Convert intent into action | Embedded Calendly or similar, minimal form fields |
| Navigation | Persistent wayfinding + always-visible primary CTA | Sticky nav, 4-5 items max, "Book a Call" button prominent |
| Footer | Secondary navigation, social proof, legal | Links, social, possibly newsletter signup |

## Recommended Site Structure

### Decision: Hybrid Single-Page + Key Detail Pages

**Why not pure single-page:** Dedicated landing pages convert 5-15% vs. 2-3% for full websites (source: industry benchmarks). The current single-page approach works for a marketing site, but a consulting site needs the homepage to function as a conversion funnel AND have detail pages that visitors can land on from search or referrals.

**Why not full multi-page:** Jeremy is a solo consultant, not a firm. There is not enough content depth to justify 10+ pages. Thin pages hurt more than they help -- decision fatigue kicks in and visitors cannot tell what the main expertise is.

**Recommendation:** Homepage as primary conversion funnel (long-scroll, ordered sections) + 3-4 supporting pages for depth.

```
app/
├── layout.tsx              # Root layout: fonts, metadata, analytics
├── page.tsx                # Homepage: primary conversion funnel
├── globals.css             # Tailwind base styles
├── api/
│   └── submit-email/
│       └── route.ts        # Email capture -> Airtable
├── services/
│   └── page.tsx            # Detailed service breakdown (optional v2)
├── about/
│   └── page.tsx            # Full story page (optional v2)
└── contact/
    └── page.tsx            # Booking/contact form (optional v2)

components/
├── layout/                 # Shared layout components
│   ├── Navigation.tsx      # Sticky nav with CTA button
│   └── Footer.tsx          # Site footer
├── sections/               # Homepage section components
│   ├── Hero.tsx            # Hook + primary CTA
│   ├── TrustBar.tsx        # Logos, credentials, proof (NEW)
│   ├── Problem.tsx         # Pain points by audience (NEW)
│   ├── Services.tsx        # Service offerings overview
│   ├── Process.tsx         # How engagement works
│   ├── Results.tsx         # Testimonials / case study previews (NEW)
│   ├── About.tsx           # Jeremy intro + photo
│   └── CTA.tsx             # Final conversion push
├── ui/                     # shadcn/ui primitives
└── shared/                 # Reusable components
    ├── EmailForm.tsx        # Email capture form
    ├── BookingButton.tsx    # Calendly/booking trigger (NEW)
    └── AudienceCard.tsx     # Audience segment card (NEW)

lib/
├── constants.ts            # All static copy and config
├── animations.ts           # Framer Motion variants
└── utils.ts                # Utility functions
```

### Structure Rationale

- **components/sections/:** Homepage sections are the core of the site. Separating them from layout and shared components makes it clear what belongs to the conversion funnel vs. reusable pieces.
- **components/layout/:** Navigation and Footer appear on every page. They are layout concerns, not content sections.
- **components/shared/:** EmailForm, BookingButton, and AudienceCard are used across multiple sections/pages. They are building blocks, not page sections.
- **Detail pages are optional for v1:** The homepage should be self-sufficient for conversion. Detail pages add SEO surface area and depth for researching visitors, but are not required for launch.

## Architectural Patterns

### Pattern 1: Conversion-Ordered Section Flow

**What:** Homepage sections are ordered to mirror the buyer's decision journey, not the consultant's mental model. Each section answers the visitor's next question in sequence.
**When to use:** Always on a consulting homepage. This is the core pattern.
**Trade-offs:** Requires discipline to not reorder sections based on what the consultant thinks is important vs. what the visitor needs next.

**The flow:**

```
1. Hero         → "What is this? Is it for me?"        (hook + positioning)
2. Trust Bar    → "Should I trust this person?"         (logos, credentials)
3. Problem      → "Do they understand MY situation?"    (pain points by segment)
4. Services     → "What exactly do they offer?"         (clear service tiers)
5. Process      → "What would working together look like?" (remove uncertainty)
6. Results      → "Has this worked for others?"         (social proof)
7. About        → "Who is this person?"                 (personal connection)
8. CTA          → "OK, what's my next step?"            (book a call)
```

**Why this order:** Research from Consulting Success and conversion design experts consistently shows that credibility must come before services, services before process, and social proof before the ask. The visitor needs to believe you understand their problem before they care about your solution.

### Pattern 2: Audience Segment Routing

**What:** A single homepage addresses multiple audience segments without creating separate pages. Use a "Problem" section with 2-3 cards that speak directly to each persona, linking to relevant service details.
**When to use:** When you have 2-3 distinct audiences with different pain points but overlapping services (exactly Jeremy's situation).
**Trade-offs:** Requires writing segment-specific copy. Can feel crowded if poorly designed.

**Implementation:**

```typescript
// Problem section with audience-specific cards
const audiences = [
  {
    title: "SMB Founders",
    subtitle: "5-50 people",
    pain: "You know AI matters but don't know where to start",
    outcome: "A working Claude setup your whole team actually uses",
  },
  {
    title: "Mid-Market Teams",
    subtitle: "50-500 people",
    pain: "One department is ready for Claude but you need a plan",
    outcome: "Phased rollout with training that sticks",
  },
  {
    title: "Knowledge Workers",
    subtitle: "Lawyers, consultants, agencies",
    pain: "You should be using Claude daily but aren't",
    outcome: "Personal workflows that save hours per week",
  },
];
```

**Why not separate landing pages per segment:** Jeremy is a solo consultant. The audiences overlap significantly in services. Separate pages would create content maintenance burden and thin pages. The card-based approach lets each visitor self-identify without fragmenting the site.

### Pattern 3: Progressive CTA Escalation

**What:** Multiple CTAs throughout the page, escalating in commitment level. Early CTAs are low-commitment (learn more, download guide), later CTAs are high-commitment (book a call).
**When to use:** Any lead generation site. Do not wait until the bottom of the page for a single CTA.
**Trade-offs:** Too many CTAs create noise. Limit to 3-4 strategically placed: hero, mid-page, and final section.

**Placement strategy:**

```
Hero section:     "Book a Free Consultation"   (high-intent visitors)
                  "See How It Works"           (scroll anchor for curious visitors)
Mid-page:         "Book a Call"                (after services/process build intent)
Final CTA:        "Ready to Get Started?"      (full commitment after all proof)
```

### Pattern 4: Constants-Driven Content

**What:** All copy, service descriptions, testimonials, and configuration live in `lib/constants.ts`. Components are pure rendering logic.
**When to use:** This already exists in the codebase. Keep it.
**Trade-offs:** Harder to add rich content (markdown, embedded media) vs. CMS. Perfect for a site this size.

**Why keep it:** The current architecture of centralizing content in constants is actually ideal for a solo consultant site. It makes copy updates trivial, keeps components focused on presentation, and avoids the complexity of a CMS that would be overkill for ~5 pages of static content. This is a feature, not a limitation.

## Data Flow

### Primary Conversion Flow (User Journey)

```
[Visitor lands on /]
    ↓
[Hero] → First impression: "Claude implementation consulting"
    ↓ (scroll or CTA click)
[Trust Bar] → Credibility established
    ↓
[Problem Section] → Visitor self-identifies with audience segment
    ↓
[Services] → Understands what they'd get
    ↓
[Process] → Understands what engagement looks like
    ↓
[Results] → Sees proof it works
    ↓
[About] → Connects with Jeremy personally
    ↓
[CTA] → Books a call or submits email
    ↓
[/api/submit-email] → Lead captured to Airtable
    OR
[Calendly embed/link] → Discovery call booked
```

### Email Capture Flow (existing, keep as-is)

```
[EmailForm component]
    ↓ (submit)
[POST /api/submit-email] → validates email
    ↓
[Airtable SDK] → creates record
    ↓
[Success response] → UI feedback to user
```

### Navigation Flow (enhanced)

```
[Sticky Navigation]
    ├── Logo/Name → scrolls to top
    ├── Services → scrolls to #services (or /services page)
    ├── Process → scrolls to #process
    ├── About → scrolls to #about
    └── [Book a Call] → opens booking widget or scrolls to #contact
```

### Key Data Flows

1. **Content rendering:** `lib/constants.ts` → imported by section components → rendered as static content. No runtime data fetching for page content.
2. **Lead capture:** User input → EmailForm state → API route → Airtable. Only server-side operation.
3. **Booking (future):** CTA click → external Calendly widget or embed. No server-side operation needed.
4. **Analytics (future):** Page load + section visibility → analytics service. Scroll depth tracking is valuable for understanding where visitors drop off.

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-100 visitors/day | Current architecture is perfect. Static rendering, minimal API. No changes needed. |
| 100-1k visitors/day | Add analytics to understand conversion funnel. Consider adding 2-3 detail pages for SEO. Add testimonials/case studies as they accumulate. |
| 1k+ visitors/day | Consider a headless CMS (Contentlayer or MDX) for case studies/blog content. Add structured data for SEO. This is a good problem to have. |

### Scaling Priorities

1. **First bottleneck:** Content, not infrastructure. The site is statically rendered by Next.js -- it can handle massive traffic. The real bottleneck is having enough testimonials, case studies, and proof to convert visitors. Build the proof pipeline before the tech pipeline.
2. **Second bottleneck:** SEO surface area. A single-page site has limited search presence. Adding service-specific pages and eventually a blog/insights section creates more entry points. But only after core conversion is working.

## Anti-Patterns

### Anti-Pattern 1: Feature-First Instead of Problem-First

**What people do:** Lead with "We offer Claude setup, training, and workflow design" -- listing features and capabilities.
**Why it's wrong:** Visitors do not care what you do. They care what problem you solve for them. Feature-first copy converts poorly because it forces the visitor to do the mental work of mapping your services to their needs.
**Do this instead:** Lead with the problem ("Your team should be using Claude but isn't") and let services be the answer. The Problem section must come before Services in the page flow.

### Anti-Pattern 2: Generic Messaging That Targets Everyone

**What people do:** Use broad language like "We help businesses leverage AI" to appeal to the widest audience.
**Why it's wrong:** Generic messaging that tries to appeal to everyone appeals to no one. Specific messaging that calls out your exact audience ("SMB founders who know AI matters but don't know where to start") converts dramatically better because visitors feel seen.
**Do this instead:** Use the audience segment cards to speak directly to each persona. It is better to strongly resonate with 3 specific groups than weakly appeal to everyone.

### Anti-Pattern 3: Single CTA at the Bottom

**What people do:** Put one "Contact Us" button at the very bottom of the page.
**Why it's wrong:** Most visitors never scroll to the bottom. High-intent visitors who arrive ready to buy have to scroll past everything to find the action. You lose both the ready-to-buy visitors (friction) and the still-learning visitors (they leave before reaching the CTA).
**Do this instead:** CTA in the hero (for high-intent), CTA in or after the services section (for building-intent), and a final CTA section (for convinced visitors). The sticky nav should always have a "Book a Call" button visible.

### Anti-Pattern 4: Over-Engineering the Tech

**What people do:** Add a CMS, authentication, client dashboards, blog system, and analytics platform before having any clients.
**Why it's wrong:** This is a marketing site for a solo consultant. Every hour spent on infrastructure is an hour not spent on copy, positioning, and outreach. The current architecture (constants file + static rendering) is not a limitation -- it is the right tool for the job.
**Do this instead:** Ship the homepage first. Add complexity only when content volume demands it (e.g., when you have 10+ case studies that need a CMS, not before).

### Anti-Pattern 5: Hiding the Person Behind the Brand

**What people do:** Use "we" language, stock photos, and corporate design to appear bigger than they are.
**Why it's wrong:** For personal brand consulting, the person IS the product. Hiding behind corporate language undermines the authenticity that is Jeremy's core differentiator. Visitors want to know who they are hiring.
**Do this instead:** Use "I" language. Feature Jeremy's photo prominently. Write in first person. Let the About section be genuinely personal, not a corporate bio.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Airtable | REST API via Next.js API route | Already integrated. Captures email leads. Keep as-is. |
| Calendly (recommended) | Embed widget or external link | Lowest-friction booking. No backend needed. Embed in CTA section or open as popup. |
| Google Analytics / Plausible | Script tag in layout.tsx | Track page views, scroll depth, CTA clicks. Plausible is privacy-friendly alternative. |
| Open Graph / Social | Meta tags in layout.tsx | Already configured. Update images and descriptions for new positioning. |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Section components <-> lib/constants | Direct import | Content centralized, components are pure renderers |
| EmailForm <-> API route | fetch POST | Existing pattern, keep as-is |
| Navigation <-> Sections | DOM scroll with anchor IDs | Existing pattern, keep as-is. Add smooth scroll if not present. |
| Layout components <-> Page | React composition | Navigation and Footer wrap all pages via layout.tsx |

## Build Order Implications

Based on the conversion-ordered architecture, the recommended build sequence:

### Phase 1: Core Conversion Funnel (Homepage)

Build the homepage sections in the order visitors experience them. This is the minimum viable site.

1. **Navigation** -- update copy and CTA button (existing component, modify)
2. **Hero** -- new positioning, new headline, Jeremy's photo, primary CTA (existing, rewrite)
3. **Problem/Audience** -- NEW section with audience segment cards
4. **Services** -- rewrite with Claude-specific offerings (existing, rewrite)
5. **Process** -- rewrite with actual engagement steps (existing, rewrite)
6. **About** -- rewrite with personal story (existing, rewrite)
7. **CTA** -- update with booking integration (existing, modify)
8. **Footer** -- update links and content (existing, modify)

**Why this order:** Each section depends on the positioning established in the hero. You cannot write the services section until you have locked the hero messaging. Building top-down ensures consistency.

### Phase 2: Trust and Proof

Add credibility elements once the core funnel exists.

1. **Trust Bar** -- logos, credentials, "as seen in" (NEW, insert after Hero)
2. **Results/Testimonials** -- client quotes and outcomes (NEW, insert after Process)
3. **Booking integration** -- Calendly embed or link (NEW, replaces or augments email CTA)

**Why this order:** Trust elements require real content (logos, quotes). They can be stubbed initially and filled as Jeremy accumulates proof.

### Phase 3: Depth and SEO (Optional)

Add detail pages only after core conversion is validated.

1. **/about** -- full story page
2. **/services** -- detailed service breakdown
3. **/contact** -- dedicated booking page
4. Case studies (when available)

**Why this order:** These pages add SEO surface area and depth for researching visitors, but are not required for the site to generate leads. The homepage should be self-sufficient.

## Sources

- [Consulting Success -- 10 Steps to Building a Client-Generating Consulting Website](https://www.consultingsuccess.com/consulting-website) -- MEDIUM confidence, industry-specific advice
- [The Conversion Designer -- Personal Brand Website Layout](https://theconversiondesigner.com/the-perfect-landing-personal-brand-website-layout-2/) -- MEDIUM confidence, conversion-focused
- [Jammy Digital -- B.R.A.N.D. Framework](https://jammydigital.com/personal-brand-website-framework/) -- MEDIUM confidence, personal brand specific
- [Pie Heart Studio -- High-Converting Service Pages](https://pieheartstudio.co.uk/resources/creating-high-converting-website-service-pages/) -- MEDIUM confidence, service page conversion data
- [Claude Consulting AI](https://claudeconsulting.ai/) -- competitor reference
- [Claude Implementation](http://www.claudeimplementation.com/) -- competitor reference
- [DataNorth Claude Consulting](https://datanorth.ai/service/consultancy/claude) -- competitor reference
- [WP Minds -- Best Consulting Websites](https://wpminds.com/best-consultant-websites/) -- LOW confidence, general patterns
- [Website Builder Expert -- Build Consulting Website](https://www.websitebuilderexpert.com/building-websites/build-consulting-website/) -- LOW confidence, general guide

---
*Architecture research for: Claude implementation consulting website*
*Researched: 2026-04-05*
