# Phase 7: Booking & Contact Infrastructure - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the conversion path: Calendly booking integration (CTA in hero and after major sections), validated contact form with react-hook-form + zod, and multiple contact paths (booking, form, email).

</domain>

<decisions>
## Implementation Decisions

### Calendly Integration
- Embed Calendly for "Book a Discovery Call" CTA
- Calendly link appears in Hero and after each major section
- Use Calendly popup widget (not full embed) — lighter, less intrusive
- Placeholder Calendly URL for now (Jeremy will configure his account)

### Contact Form
- react-hook-form + zod for client and server validation
- Fields: name, email, company (optional), message, service interest (dropdown)
- Same zod schema validates on both client and server via Next.js Server Actions
- Replace existing Airtable-only form with validated form that still writes to Airtable

### Multiple Contact Paths
- Booking link (Calendly)
- Contact form
- Direct email link
- All three visible in CTA section and footer

### Claude's Discretion
- Exact form field order and layout
- How to integrate Calendly popup (script tag vs npm package)
- Whether to keep existing EmailForm or replace entirely
- Error message copy for form validation

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/CTA.tsx` — exists with placeholder
- `components/Footer.tsx` — exists with placeholder
- `app/api/submit-email/route.ts` — existing Airtable integration
- `components/EmailForm.tsx` — legacy form (may be replaced)

### Integration Points
- Install react-hook-form, zod, @hookform/resolvers
- Update CTA section with Calendly + contact form
- Update Footer with contact info
- Update or replace API route for form handling

</code_context>

<specifics>
## Specific Ideas

- The contact form should feel effortless, not like a job application
- Calendly popup is preferred over inline embed for cleaner UX

</specifics>

<deferred>
## Deferred Ideas

None

</deferred>
