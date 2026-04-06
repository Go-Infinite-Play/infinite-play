# Phase 1: Design System & Layout Foundation - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish a clean, minimal design system and restructure the page layout to follow the buyer decision journey. This phase delivers the visual foundation (design tokens, typography, spacing) and section architecture that all subsequent phases build on. Placeholder content is acceptable — real copy arrives in Phases 2-6.

</domain>

<decisions>
## Implementation Decisions

### Color Palette & Design Tokens
- Neutral/slate base with one accent color — clean, professional, content-first
- Keep Inter + Plus Jakarta Sans (already loaded, professional, clean)
- Use Tailwind defaults (4px base) for spacing scale
- Set up CSS variables for all colors now, dark mode toggle deferred to Phase 9

### Section Architecture & Order
- New section order: Hero > TrustBar > Problem > Services > Process > Results > About > CTA > Footer
- New components: TrustBar, ProblemSection, ResultsSection
- Rewrite: Hero, Services, Process, About
- Keep: Navigation, Footer, CTA (with updates)
- Descriptive component names matching content purpose
- Placeholder copy that shows structure — real copy comes in Phases 2-6

### Animation Strategy
- Subtle, content-enhancing animations only — fade-in on scroll, no floating orbs or decorative animations
- Intersection Observer-triggered fade-in-up per section — standard, performant
- Keep existing animations.ts patterns, simplify variants — reuse what works, remove excess
- Simple staggered fade-in for hero elements only on page load

### Claude's Discretion
- Exact accent color choice (within the neutral/slate + one accent direction)
- Specific spacing values between sections
- Animation easing curves and durations
- How to structure CSS custom properties in globals.css

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `lib/animations.ts` — Framer Motion variants (fadeIn, fadeInUp, staggerContainer, buttonHover, floatingOrb)
- `lib/constants.ts` — All static copy centralized (colors, navigation, process steps, services)
- `lib/utils.ts` — cn() Tailwind class merge helper
- `components/ui/` — shadcn/ui component library (button, input, textarea, card, badge, separator)
- `components/EmailForm.tsx` — Reusable email capture form

### Established Patterns
- All interactive components use `"use client"` directive
- Animation variants imported from centralized `lib/animations.ts`
- Static content imported from `lib/constants.ts`
- Tailwind CSS v4 with CSS custom properties in globals.css
- shadcn/ui New York style with neutral base color

### Integration Points
- `app/page.tsx` — Section composition (add new sections, reorder existing)
- `app/globals.css` — Design token definitions (CSS custom properties)
- `lib/constants.ts` — Add new section content data
- `lib/animations.ts` — Simplify/update animation variants

</code_context>

<specifics>
## Specific Ideas

- Remove floating orbs and decorative animations — they conflict with the "clean, minimal" directive
- The current site has Introduction as a separate section — merge its purpose into the new Problem section
- TrustBar is a lightweight credibility strip (logos, stats, or brief trust markers) positioned right after Hero

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>
