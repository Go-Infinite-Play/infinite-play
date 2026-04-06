# Phase 6: Trust & Social Proof - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the About section with professional headshot and authentic bio, plus social proof/credibility markers and inline case study stubs. Visitors should trust Jeremy enough to consider a consulting purchase.

</domain>

<decisions>
## Implementation Decisions

### About Section
- Professional headshot (founder-photo.jpg exists) prominently displayed
- Authentic bio proving practitioner credibility — not corporate bio
- First person, conversational — why Claude specifically, background, what drives the work
- Bio should demonstrate daily Claude usage, not just consulting about it

### Social Proof
- Credibility markers: "helped X teams adopt Claude" or similar honest stat
- Testimonial stubs — placeholder structure ready for real testimonials
- No fake badges or inflated claims — authentic only
- TrustBar already exists from Phase 1 — this phase focuses on deeper proof

### Case Studies
- 2-3 before/after case study snippets (stubs acceptable for launch)
- Structure: Problem → Solution → Result format
- ResultsSection component already created in Phase 1

### Claude's Discretion
- Exact bio copy
- How to structure testimonial placeholders
- Case study stub content
- Layout of the About section

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/About.tsx` — rewritten in Phase 1 with placeholder
- `components/TrustBar.tsx` — already exists with placeholder
- `components/ResultsSection.tsx` — already exists with placeholder
- `lib/constants.ts` — has aboutContent, trustBarItems, resultsItems
- `public/founder-photo.jpg` — existing photo

### Integration Points
- `lib/constants.ts` — update about, trust, and results data
- `components/About.tsx`, `components/TrustBar.tsx`, `components/ResultsSection.tsx` — update with real content

</code_context>

<specifics>
## Specific Ideas

- The About section should feel like meeting Jeremy, not reading a resume
- Case study stubs should feel real even if the specifics are placeholder

</specifics>

<deferred>
## Deferred Ideas

None

</deferred>
