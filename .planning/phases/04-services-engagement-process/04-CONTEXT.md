# Phase 4: Services & Engagement Process - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Write the Services section with 3-4 tiered offerings and the "How to Work With Me" engagement process. Visitors should understand exactly what Jeremy offers, what it costs ("starting from" ranges), and how to start.

</domain>

<decisions>
## Implementation Decisions

### Service Tiers (from research)
- Tier 1: Claude Quick-Start — 2-4 hour assessment + setup, "Starting from $1,500", deliverable: action plan + initial setup
- Tier 2: Claude Implementation Sprint — 1-2 week engagement, "Starting from $5,000", deliverable: configured environment + redesigned workflows + trained team
- Tier 3: Ongoing Advisory Retainer — monthly check-ins + async support, "Starting from $2,000/month"
- Optional Tier 0: Team Workshop — half-day or full-day training, "Starting from $2,000"

### Pricing Display
- "Starting from" ranges published on site — pre-qualifies leads, builds trust
- Outcome-focused naming, not capability-focused
- Each tier shows: what you get, what it costs, who it's for

### Engagement Process
- 4-step visual: Talk → Plan → Execute → Results
- Simple, reduces anxiety, sets expectations
- Each step has a brief description

### Tone
- Direct, practical — no corporate jargon
- First person where appropriate
- Conversational professional

### Claude's Discretion
- Exact service tier names and descriptions
- Visual layout of service cards
- Process step descriptions
- Whether to include icons for each step

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/Services.tsx` — rewritten in Phase 1 with placeholder
- `components/Process.tsx` — rewritten in Phase 1 with placeholder
- `lib/constants.ts` — has `services` and `processSteps` objects
- `components/ui/card.tsx` — shadcn card for service tiers

### Integration Points
- `lib/constants.ts` — update services and process data with real content
- `components/Services.tsx` — service tier cards with pricing
- `components/Process.tsx` — 4-step engagement visual

</code_context>

<specifics>
## Specific Ideas

- Service cards should show the outcome, not just the process
- The engagement process should feel like a natural progression, not a sales funnel

</specifics>

<deferred>
## Deferred Ideas

None

</deferred>
