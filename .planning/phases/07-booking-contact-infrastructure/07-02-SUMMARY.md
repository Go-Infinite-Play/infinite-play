---
phase: 07-booking-contact-infrastructure
plan: 02
subsystem: contact-form
tags: [contact-form, zod, react-hook-form, validation, airtable]
dependency_graph:
  requires: []
  provides: [contactFormSchema, ContactFormData, ContactForm, /api/contact]
  affects: [CTA, Footer]
tech_stack:
  added: [zod, react-hook-form, "@hookform/resolvers"]
  patterns: [shared-schema-validation, zodResolver, react-hook-form]
key_files:
  created:
    - lib/schemas.ts
    - app/api/contact/route.ts
    - components/ContactForm.tsx
  modified:
    - components/CTA.tsx
    - components/Footer.tsx
    - package.json
decisions:
  - "Used zod v4 `error` param instead of `required_error` for enum validation (zod v4 API change)"
  - "Kept existing EmailForm untouched - ContactForm is additive, not a replacement"
  - "Contact form placed below Calendly and email in CTA to maintain booking as primary CTA"
metrics:
  duration: "2m 36s"
  completed: "2026-04-06T05:13:02Z"
---

# Phase 07 Plan 02: Contact Form with Shared Validation Summary

Validated contact form with react-hook-form + zod sharing client/server schema, Airtable persistence, and all three contact paths visible in CTA and Footer.

## What Was Built

### Shared Zod Schema (lib/schemas.ts)
- `contactFormSchema` validates name, email, company (optional), serviceInterest (enum), and message
- `ContactFormData` type exported for use in both client and server
- `serviceOptions` array for dropdown rendering

### Contact API Route (app/api/contact/route.ts)
- Server-side validation using `contactFormSchema.safeParse()`
- Returns structured field errors on validation failure (400)
- Writes to Airtable "Contact Submissions" table on success
- Follows same Airtable pattern as existing submit-email route

### ContactForm Component (components/ContactForm.tsx)
- Uses `useForm<ContactFormData>` with `zodResolver(contactFormSchema)`
- Five fields: name, email, company (optional), service interest dropdown, message textarea
- Inline validation errors below each field
- Loading spinner, success message, and error states
- Styled consistently with existing EmailForm input patterns

### CTA Section Update (components/CTA.tsx)
- Added ContactForm below existing Calendly button and email link
- Three contact paths visible: booking widget, direct email, contact form

### Footer Update (components/Footer.tsx)
- Added "Book a Discovery Call" link with Calendar icon (scrolls to #contact)
- Added "Send a message" link with MessageSquare icon (scrolls to #contact)
- All three contact paths now visible: email, booking, contact form

## Commits

| Task | Commit  | Description                                      |
| ---- | ------- | ------------------------------------------------ |
| 1    | 5016865 | Shared zod schema + contact API route + deps     |
| 2    | fbc6f29 | ContactForm component + CTA/Footer integration   |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Zod v4 API change for enum error messages**
- **Found during:** Task 1
- **Issue:** Plan specified `required_error` param for `z.enum()` but zod v4 uses `error` instead
- **Fix:** Changed `{ required_error: "..." }` to `{ error: "..." }`
- **Files modified:** lib/schemas.ts
- **Commit:** 5016865

## Verification

- `npx tsc --noEmit` -- PASS (no errors)
- `npm run lint` -- PASS (no warnings)
- `npm run build` -- PASS (all routes compiled)
- lib/schemas.ts exports contactFormSchema and ContactFormData
- app/api/contact/route.ts imports and uses contactFormSchema.safeParse
- ContactForm uses useForm with zodResolver(contactFormSchema)
- CTA section contains ContactForm + email link + CalendlyButton
- Footer shows booking link, email link, and contact form link

## Known Stubs

None. All data flows are wired to real endpoints (Airtable via /api/contact).

## Self-Check: PASSED

All files exist. All commits verified.
