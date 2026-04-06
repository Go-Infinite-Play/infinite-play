# Phase 8: Email & Lead Capture - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Build email capture with lead magnet value exchange, plus Resend integration for confirmation and notification emails. Visitors not ready to book can exchange their email for something useful.

</domain>

<decisions>
## Implementation Decisions

### Lead Magnet
- Offer a "Claude Setup Checklist" or similar practical resource in exchange for email
- Simple inline email capture form (not a separate page)
- Clear value proposition: "Get my free Claude Setup Checklist"

### Resend Integration
- Install and configure Resend for transactional email
- Confirmation email sent to lead after signup
- Notification email sent to Jeremy on every form submission
- Use Resend + React Email for template rendering

### Email Capture UX
- Inline form with email field + submit button
- Success state shows confirmation message
- Error handling for invalid emails and API failures

### Claude's Discretion
- Exact lead magnet name and description
- Email template design
- Where to place the email capture section (likely near CTA or as standalone)
- Whether to use React Email for templates or plain HTML

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `lib/schemas.ts` — zod schemas from Phase 7 (can extend for email)
- `components/ContactForm.tsx` — form patterns from Phase 7
- `app/api/contact/route.ts` — API route pattern from Phase 7

### Integration Points
- Install resend package
- Create email API route
- Add email capture component to page
- Configure RESEND_API_KEY in .env.local

</code_context>

<specifics>
## Specific Ideas

- The lead magnet should feel genuinely useful, not just bait
- Keep the email capture lightweight — one field (email), one button

</specifics>

<deferred>
## Deferred Ideas

None

</deferred>
