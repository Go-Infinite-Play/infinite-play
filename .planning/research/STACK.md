# Stack Research: Lead Generation Additions

**Domain:** Consulting lead generation site (additions to existing Next.js 15 stack)
**Researched:** 2026-04-05
**Confidence:** MEDIUM-HIGH

> This covers only the NEW additions needed to transform the existing marketing site into a high-converting consulting lead generation site. The existing stack (Next.js 15, React 19, Tailwind CSS v4, shadcn/ui, Framer Motion, Airtable email capture) is not re-evaluated here.

## Recommended Stack

### Form Handling & Validation

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| react-hook-form | ^7.72 | Form state management | Industry standard for React forms. Minimal re-renders, small bundle (~9KB), works with Server Actions. Already compatible with React 19. |
| zod | ^3.25 | Schema validation (client + server) | Same schema validates on both client and server -- write once, validate everywhere. TypeScript-first with excellent type inference. |
| @hookform/resolvers | ^5.1 | Connects RHF to Zod | Bridges react-hook-form and zod seamlessly. Required glue package. |

**Confidence: HIGH** -- This is the consensus stack for Next.js form handling in 2025/2026. Verified across multiple official guides and Next.js documentation.

**Rationale:** The site needs a multi-field contact/inquiry form (name, email, company, service interest, message). Native HTML forms are insufficient for the UX expected from a consulting site. React Hook Form + Zod gives client-side validation, server-side validation, and TypeScript types from a single schema definition.

### Email (Transactional)

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| resend | ^6.10 | Sending transactional emails | Modern email API built for developers. Clean SDK, excellent deliverability, generous free tier (100 emails/day). First-class Next.js support with Server Actions. |
| @react-email/components | ^0.0.31 | Email templates as React components | Build email templates with the same React mental model as the site. Preview in dev, render on server. Maintained by the Resend team. |

**Confidence: HIGH** -- Resend is the standard for developer-first transactional email in the Next.js ecosystem. Official Vercel template exists for this exact stack.

**Rationale:** Replace the Airtable-only email capture with proper transactional email. When a lead submits a form: (1) data goes to CRM/Airtable, (2) lead gets a confirmation email, (3) Jeremy gets a notification email. Resend handles both. The free tier (100 emails/day) is more than sufficient for a consulting site.

### Scheduling

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Calendly (embed script) | N/A (hosted) | Discovery call booking | Calendly is the scheduling tool consultants actually use. No npm package dependency issues -- use their official embed script with `next/script`. Simple, reliable, clients recognize it. |

**Confidence: HIGH** -- Calendly is the dominant scheduling tool in consulting. Clients already know it.

**Why not Cal.com:** The `@calcom/embed-react` package has peer dependencies pinned to React 18.2 and has known compatibility issues with React 19 / Next.js 15. The latest version (1.5.3) was published over a year ago with no React 19 support. Cal.com is technically superior (open source, more customizable, cheaper) but the React 19 incompatibility is a blocker for this project. Re-evaluate when they ship React 19 support.

**Why not react-calendly:** Third-party package not maintained by Calendly. The official embed script approach is more reliable and doesn't add a dependency that could break. Use `next/dynamic` with `ssr: false` or load via `next/script`.

### Analytics

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Plausible Analytics | N/A (hosted/script) | Privacy-first web analytics | Sub-1KB script, no cookies, GDPR compliant without banners, simple dashboard. $9/month for 10K pageviews. Perfect for a consulting site that needs to track traffic sources and conversions without the bloat of GA4. |
| Vercel Analytics | built-in | Performance + Web Vitals | Free on Vercel Pro. Complements Plausible with performance data. Zero config if deploying to Vercel. |

**Confidence: MEDIUM-HIGH** -- Plausible is the consensus privacy-first analytics for marketing sites. Vercel Analytics is free if already on Vercel.

**Why not Google Analytics 4:** GA4 is overkill for a consulting site, has a terrible UX, requires cookie consent banners, and the data granularity is unnecessary. A solo consultant needs to know: where traffic comes from, which pages convert, and whether CTAs work. Plausible does this in a single dashboard.

**Why not PostHog:** PostHog is a product analytics tool (session replay, A/B testing, feature flags). This is a marketing site, not a SaaS product. PostHog's free tier is generous but it's solving the wrong problem. If the site later evolves into a product, reconsider.

### SEO

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Next.js Metadata API | built-in | Meta tags, Open Graph, Twitter cards | Already partially implemented. Extend with per-page metadata for service pages. No additional package needed. |
| JSON-LD (native script tags) | N/A | Structured data for rich search results | Next.js 15 supports JSON-LD natively via `<script type="application/ld+json">` in server components. Use Person, Organization, and ProfessionalService schemas. No library needed. |
| Next.js sitemap.ts | built-in | Sitemap generation | Next.js App Router has built-in `sitemap.ts` file convention. No need for `next-sitemap` package for a site this size. Export a function returning URL array. |

**Confidence: HIGH** -- All built into Next.js 15. No additional packages needed.

**Why not next-seo:** Deprecated in favor of Next.js built-in Metadata API since Next.js 13.2+. The built-in API does everything next-seo did.

**Why not next-sitemap:** Overkill for a site with fewer than 20 pages. The built-in `sitemap.ts` convention handles this natively.

### CRM / Lead Management

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Airtable (existing) | 0.12.2 | Lead data storage | Already integrated. Extend the existing base with a proper leads table (name, email, company, service interest, status, notes). Good enough for a solo consultant with <100 leads/month. |

**Confidence: MEDIUM** -- Airtable works for now but has CRM limitations.

**Rationale:** Keep Airtable for v1. Jeremy already has it integrated. A solo consultant managing <100 leads/month doesn't need HubSpot, Pipedrive, or a real CRM yet. Airtable can track lead status, add notes, and filter by service interest. When the pipeline grows past ~50 active leads, migrate to HubSpot Free CRM (which has proper email tracking, deal stages, and contact enrichment).

**Why not HubSpot Free immediately:** Adds integration complexity for minimal gain at current scale. HubSpot's embed forms would also fight with the custom React form approach. Keep it simple.

### Performance & Monitoring

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| @vercel/speed-insights | ^1.1 | Real user performance monitoring | Drop-in component, zero config on Vercel. Tracks Core Web Vitals from real users. Free on hobby/pro plans. |

**Confidence: HIGH** -- Built for Next.js on Vercel. One-line setup.

## Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| schema-dts | ^1.1 | TypeScript types for Schema.org JSON-LD | When building structured data objects. Provides autocomplete and type safety for JSON-LD schemas. Optional but nice DX. |
| next-themes | ^0.4 | Dark mode support | Only if adding dark mode to the site. Not required for v1 but commonly expected in 2025/2026. |

## Installation

```bash
# Form handling
npm install react-hook-form zod @hookform/resolvers

# Transactional email
npm install resend @react-email/components

# Performance monitoring (if on Vercel)
npm install @vercel/speed-insights

# Optional: Typed JSON-LD schemas
npm install schema-dts
```

No npm install needed for:
- Plausible Analytics (external script tag)
- Calendly (embed script via next/script)
- Vercel Analytics (enable in Vercel dashboard)
- JSON-LD (native Next.js)
- Sitemap (native Next.js)

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Plausible ($9/mo) | Fathom Analytics ($14/mo) | If you prefer a slightly simpler UI and don't mind paying more. Fathom is EU-based, arguably better GDPR story. |
| Plausible | PostHog (free tier) | If the site evolves into a SaaS product needing session replay, A/B testing, feature flags. |
| Calendly (embed) | Cal.com embed | When `@calcom/embed-react` ships React 19 support. Cal.com is cheaper and more customizable. |
| Airtable (existing) | HubSpot Free CRM | When lead volume exceeds ~50 active leads and you need proper deal pipeline, email tracking, contact enrichment. |
| Resend | SendGrid | If you need higher volume (Resend free tier is 100/day vs SendGrid 100/day). SendGrid's API is older but battle-tested at scale. |
| react-hook-form + zod | Conform | If you want progressive enhancement (forms work without JS). Conform is built for Next.js Server Actions but has a steeper learning curve. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| next-seo | Deprecated; redundant with Next.js Metadata API since 13.2 | Next.js built-in `metadata` export and `generateMetadata` |
| next-sitemap | Unnecessary complexity for a small site | Built-in `sitemap.ts` file convention |
| Formik | Larger bundle, slower, less maintained than RHF | react-hook-form |
| nodemailer | Low-level, requires SMTP config, poor deliverability | Resend |
| Google Analytics 4 | Requires cookie consent banners, complex UI, overkill for consulting site | Plausible |
| @calcom/embed-react | Pinned to React 18.2, no React 19 support, last updated 1+ year ago | Calendly embed script |
| Mailchimp/ConvertKit | Newsletter tools, not transactional email. Wrong tool for form submission notifications. | Resend for transactional; keep Airtable for lead storage |
| Intercom/Drift | Live chat widgets add bloat and distraction to a consulting site. Jeremy should be reachable via form + scheduling, not real-time chat. | Contact form + Calendly embed |

## Integration Architecture

```
Lead submits form
  |
  v
React Hook Form (client validation via Zod)
  |
  v
Next.js Server Action (server validation via same Zod schema)
  |
  +--> Airtable API (store lead data)
  |
  +--> Resend API (send confirmation to lead)
  |
  +--> Resend API (send notification to Jeremy)
  |
  v
Success response -> show Calendly inline embed or link
```

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| react-hook-form@7.72 | React 19, Next.js 15 | Full compatibility confirmed |
| zod@3.25 | Any (no React dependency) | Pure validation library |
| resend@6.10 | Node.js 18+ | Server-side only, works with Next.js Server Actions |
| @react-email/components@0.0.31 | React 19 | Server-side rendering for email templates |
| @calcom/embed-react@1.5.3 | React 18 ONLY | **Incompatible with React 19** -- do not use |

## Cost Summary

| Service | Free Tier | Paid Tier | When to Upgrade |
|---------|-----------|-----------|-----------------|
| Plausible | None | $9/month (10K pageviews) | Day 1 -- worth it |
| Resend | 100 emails/day | $20/month (50K emails) | Unlikely to need for consulting site |
| Calendly | 1 event type | $10/month (unlimited types) | When offering multiple meeting types (discovery, follow-up, etc.) |
| Airtable | 1,000 records | $20/month/user | When exceeding 1K leads (good problem to have) |
| Vercel Analytics | 50K events/month | Included in Pro ($20/month) | If not already on Vercel Pro |
| Vercel Speed Insights | 10K events/month | Included in Pro | Same as above |

**Total incremental cost: ~$9-19/month** (Plausible + possibly Calendly paid)

## Sources

- [Next.js Forms Guide](https://nextjs.org/docs/app/guides/forms) -- Server Actions + form handling patterns
- [Next.js JSON-LD Guide](https://nextjs.org/docs/app/guides/json-ld) -- Structured data implementation
- [Next.js Sitemap Docs](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) -- Built-in sitemap generation
- [Resend Next.js Docs](https://resend.com/docs/send-with-nextjs) -- Email integration guide
- [react-hook-form npm](https://www.npmjs.com/package/react-hook-form) -- Version 7.72.1 confirmed
- [resend npm](https://www.npmjs.com/package/resend) -- Version 6.10.0 confirmed
- [@calcom/embed-react Issues](https://github.com/calcom/cal.com/issues/20814) -- React 19 incompatibility confirmed
- [Plausible vs PostHog comparison](https://vemetric.com/blog/posthog-vs-plausible) -- Analytics tool selection
- [Cal.com vs Calendly 2026](https://youcanbook.me/blog/calendly-vs-cal-dot-com) -- Scheduling tool comparison
- [Airtable vs HubSpot for SMBs](https://www.folk.app/articles/airtable-vs-hubspot) -- CRM selection rationale

---
*Stack research for: Consulting lead generation site additions*
*Researched: 2026-04-05*
