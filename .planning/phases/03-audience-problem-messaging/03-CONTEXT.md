# Phase 3: Audience & Problem Messaging - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Write the Problem/Audience section copy so each of three target audiences (SMB founders, mid-market teams, knowledge workers) sees themselves and recognizes their specific pain point. This section sits between Trust Bar and Services in the buyer journey.

</domain>

<decisions>
## Implementation Decisions

### Audience Segments
- Three distinct segments: SMB founders (5-50 people), mid-market teams (50-500), knowledge workers (lawyers, consultants, agencies)
- Card-based audience routing — visitors self-identify via cards, each with segment-specific language
- Each card should state the problem in the audience's own words, not consultant jargon

### Content Approach
- Problem-first framing: "You know Claude exists, but..." — acknowledge the gap between awareness and adoption
- Use language each persona would use themselves (founders talk ROI, teams talk workflow, professionals talk competitive edge)
- Each segment has a distinct entry point toward relevant services
- First person from Jeremy's perspective where appropriate

### Tone (consistent with Phase 2)
- Conversational professional, direct, no AI hype
- Banned words: "revolutionize", "transform", "unlock", "leverage", "empower", "cutting-edge", "game-changing"

### Claude's Discretion
- Exact copy for each audience card
- Visual layout of the three cards (grid, columns, tabs)
- Whether to include a brief intro paragraph above the cards
- Icon or visual for each segment

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/ProblemSection.tsx` — created in Phase 1 with placeholder content
- `lib/constants.ts` — has `problemContent` object ready for real copy
- `components/ui/card.tsx` — shadcn card component available

### Integration Points
- `lib/constants.ts` — update `problemContent` with real audience segment copy
- `components/ProblemSection.tsx` — refine with audience cards

</code_context>

<specifics>
## Specific Ideas

- The problem should feel relatable, not accusatory — "You've heard about Claude but aren't sure where to start" not "You're falling behind"
- Consider showing how each audience's problem is slightly different but the solution (working with Jeremy) is the same

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>
