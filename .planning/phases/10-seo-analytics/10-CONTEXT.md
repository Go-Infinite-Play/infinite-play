# Phase 10: SEO & Analytics - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Add Plausible analytics, update SEO metadata and social cards for Claude consulting positioning, implement JSON-LD structured data, generate sitemap, and add availability indicator.

</domain>

<decisions>
## Implementation Decisions

### Plausible Analytics
- Add Plausible Analytics script ($9/month, privacy-friendly, no cookie banners)
- Track page views and conversions (Calendly clicks, form submissions)
- Use Plausible's custom events for conversion tracking

### SEO Updates
- Update all metadata for "Claude implementation consulting" positioning
- Open Graph and Twitter card images updated
- JSON-LD structured data (LocalBusiness or ProfessionalService schema)
- Generate sitemap.ts using Next.js convention

### Availability Indicator
- Simple text: "Currently accepting new clients" or similar
- Visible in hero or CTA section
- Easy to update (stored in constants.ts)

### Claude's Discretion
- Exact meta description copy
- JSON-LD schema details
- Where to place availability indicator
- Plausible custom event names
- Whether to add canonical URL tags

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `app/layout.tsx` — already has metadata export
- `lib/constants.ts` — can add availability text
- Next.js 15 Metadata API already in use

### Integration Points
- `app/layout.tsx` — Plausible script, updated metadata
- `app/sitemap.ts` — new file for sitemap generation
- `lib/constants.ts` — availability indicator text

</code_context>

<specifics>
## Specific Ideas

- Target keywords: "Claude implementation consultant", "Claude consulting", "Claude for business"
- Availability indicator should be honest and easy to toggle

</specifics>

<deferred>
## Deferred Ideas

None

</deferred>
