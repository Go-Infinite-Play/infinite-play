# Phase 2: Hero & Value Proposition - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Write the hero section copy and refine the Hero component to communicate "Claude implementation consulting" within 5 seconds. This phase delivers the above-the-fold experience — headline, subhead, CTA, and personal photo placement. All copy must be direct, practical, and free of AI hype.

</domain>

<decisions>
## Implementation Decisions

### Hero Headline & Subhead
- Headline approach: "I help [audience] get real value from Claude" — direct, specific, passes 5-second test
- Subhead: One sentence explaining the 3 services — "Setup, workflow redesign, and hands-on training for teams that want to actually use Claude, not just talk about it."
- Primary CTA label: "Book a Discovery Call" — clear, low-friction, matches engagement ladder
- Hero visual: Jeremy's headshot alongside text — personal brand, authentic

### Tone & Voice
- First person ("I help...") — personal brand, authentic, direct
- Conversational professional — like talking to a smart colleague, not a sales pitch
- AI hype words BANNED: "revolutionize", "transform", "unlock", "leverage", "empower", "cutting-edge", "game-changing"
- Secondary CTA: "See what I offer" scroll link — for visitors not ready to book

### Claude's Discretion
- Exact headline wording (within the "I help [audience] get real value from Claude" direction)
- Exact subhead wording
- Photo placement (left vs right of text)
- Animation timing for hero entrance

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/Hero.tsx` — already rewritten in Phase 1 with placeholder content
- `lib/constants.ts` — has `heroContent` object ready for real copy
- `lib/animations.ts` — has `staggerContainer`, `fadeInUp` for hero entrance
- `public/founder-photo.jpg` — existing photo asset

### Established Patterns
- Hero uses `animate` (not `whileInView`) since it's above the fold
- Staggered fade-in for hero elements on page load
- Content sourced from `lib/constants.ts`

### Integration Points
- `lib/constants.ts` — update `heroContent` with real copy
- `components/Hero.tsx` — refine layout for headline + photo composition

</code_context>

<specifics>
## Specific Ideas

- The headline should make Claude the specific product, not generic AI
- Consider mentioning all three audience segments subtly in the subhead
- The "Book a Discovery Call" CTA should be prominent but not pushy

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>
