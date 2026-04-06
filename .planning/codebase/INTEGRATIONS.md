# External Integrations

**Analysis Date:** 2026-04-05

## APIs & External Services

**Data Collection:**
- Airtable - Email capture from marketing CTA forms
  - SDK/Client: `airtable` npm package (^0.12.2)
  - Auth: `AIRTABLE_PERSONAL_ACCESS_TOKEN` env var
  - Base ID: `AIRTABLE_BASE_ID` env var (default: `app1cZoJ2TlJFYjTr`)
  - Table: `AIRTABLE_TABLE_NAME` env var (default: `Email Capture`)
  - Usage: `app/api/submit-email/route.ts` - POST endpoint creates records with `Email` field

## Data Storage

**Databases:**
- None - No relational or NoSQL database in use

**File Storage:**
- Local filesystem only - Static assets in `public/`

**Caching:**
- None detected

## Authentication & Identity

**Auth Provider:**
- None - No user authentication; site is a public marketing page

## Monitoring & Observability

**Error Tracking:**
- None detected

**Logs:**
- `console.error` only, in `app/api/submit-email/route.ts` on Airtable failures

## CI/CD & Deployment

**Hosting:**
- Target domain: `infiniteplay.ai` (configured as `metadataBase` in `app/layout.tsx`)
- Platform not specified in codebase (no Vercel/Netlify/etc. config files detected)

**CI Pipeline:**
- None detected

## Environment Configuration

**Required env vars:**
- `AIRTABLE_PERSONAL_ACCESS_TOKEN` - Personal access token for Airtable API (throws startup error if missing)

**Optional env vars with defaults:**
- `AIRTABLE_BASE_ID` - Airtable base ID (defaults to `app1cZoJ2TlJFYjTr`)
- `AIRTABLE_TABLE_NAME` - Airtable table name (defaults to `Email Capture`)

**Secrets location:**
- `.env.local` file (present, not committed to version control)

## Webhooks & Callbacks

**Incoming:**
- `POST /api/submit-email` - Accepts `{ email: string }` JSON body, validates format, writes to Airtable
  - Implementation: `app/api/submit-email/route.ts`
  - Success response: `{ success: true, message: string, recordId: string }`
  - Error responses: 400 for invalid email, 500 for Airtable failures

**Outgoing:**
- None

## Font & Asset CDN

**Google Fonts:**
- Inter and Plus Jakarta Sans loaded via `next/font/google` in `app/layout.tsx`
- Requests made at build time or runtime to Google's font CDN

---

*Integration audit: 2026-04-05*
