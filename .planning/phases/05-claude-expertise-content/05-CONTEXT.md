# Phase 5: Claude Expertise & Content - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the Claude product expertise taxonomy section and practitioner credibility content. Show deep knowledge of Claude Chat, Teams, Enterprise, Claude Code, API, and MCP that generalists can't match. Include real before/after workflow examples.

</domain>

<decisions>
## Implementation Decisions

### Claude Product Taxonomy
- Explicit coverage of: Claude Chat, Claude Teams, Claude Enterprise, Claude Code, Claude API, MCP (Model Context Protocol)
- Each product gets a brief description of what it is and how Jeremy helps teams use it
- Organized as a visual grid or list showing breadth of expertise

### Practitioner Credibility
- Real before/after workflow examples showing specific outcomes
- "Show the work" — concrete examples of Claude usage, not abstract claims
- Content depth that a generalist could not produce
- Static content (not a blog system)

### Tone
- Technical but accessible — show expertise without being intimidating
- First person, conversational professional
- No AI hype words

### Claude's Discretion
- Exact before/after examples (should feel realistic and specific)
- Visual layout of the taxonomy (grid, cards, list)
- How to integrate expertise content with the existing section flow
- Whether to use icons for each Claude product

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- Section created in Phase 1 needs content (may need a new component or repurpose existing)
- `lib/constants.ts` — add Claude product data
- `components/ui/card.tsx`, `components/ui/badge.tsx` — for product cards

### Integration Points
- `lib/constants.ts` — add claudeProducts and expertiseContent
- May need a new `components/ExpertiseSection.tsx` or update existing section
- Sections between Services and Trust in the page order

</code_context>

<specifics>
## Specific Ideas

- Show the range from "help your team use Claude Chat effectively" to "build custom MCP servers and Claude Code workflows"
- Before/after examples should be relatable: "Before: team spent 3 hours writing reports. After: 20 minutes with Claude."

</specifics>

<deferred>
## Deferred Ideas

None

</deferred>
