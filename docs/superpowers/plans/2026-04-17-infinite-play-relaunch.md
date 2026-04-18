# Infinite Play Relaunch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the `app/page.tsx` "coming soon" placeholder with a two-page static Next.js site (homepage + `/work`) that positions Infinite Play as a multi-model AI transformation firm with three services and five case studies, routing all conversion to LinkedIn.

**Architecture:** Existing Next.js 15 App Router project is repurposed. Out-of-scope integrations (Airtable, Resend, Calendly, next-themes, forms, lead magnet) are removed. Content lives in `lib/constants.ts`. New section components replace the current section files. New `/work` route renders five inline case study blocks. Option B visual direction: Plus Jakarta Sans display, Inter body, orange `#FB5B3D` accent, light surface only, rounded shape language.

**Tech Stack:** Next.js 15.5 App Router + Turbopack, React 19, Tailwind CSS v4, shadcn/ui (existing Button/Badge/Card primitives retained), Framer Motion 12, Inter + Plus Jakarta Sans via `next/font/google`. TypeScript strict mode.

**Spec:** `docs/superpowers/specs/2026-04-17-infinite-play-relaunch-design.md`.

**Verification approach:** No new unit/integration test infrastructure. Each task verifies via (1) `npx tsc --noEmit` for type safety, (2) `npm run lint` for ESLint, (3) `npm run build` at key checkpoints, and (4) manual browser check against the dev server for visual/interaction correctness. This is a marketing site — compile + render + eyeball is the pragmatic bar.

**Commit cadence:** One commit per task minimum. Commits in the imperative tense with a short body when relevant. No `git push` unless the user requests it.

---

## Task 1: Remove out-of-scope integrations

**Files:**
- Delete: `app/api/submit-email/`, `app/api/contact/`, `app/api/lead-magnet/`
- Delete: `components/EmailForm.tsx`, `components/LeadMagnet.tsx`, `components/ContactForm.tsx`, `components/CalendlyButton.tsx`, `components/ThemeProvider.tsx`, `components/ThemeToggle.tsx`
- Delete: `lib/schemas.ts`, `lib/analytics.ts`
- Modify: `package.json` (remove unused deps)

- [ ] **Step 1: Delete API routes no longer needed**

```bash
rm -rf app/api/submit-email app/api/contact app/api/lead-magnet
```

- [ ] **Step 2: Delete deprecated components**

```bash
rm components/EmailForm.tsx components/LeadMagnet.tsx components/ContactForm.tsx components/CalendlyButton.tsx components/ThemeProvider.tsx components/ThemeToggle.tsx
```

- [ ] **Step 3: Delete deprecated lib files**

```bash
rm lib/schemas.ts lib/analytics.ts
```

- [ ] **Step 4: Remove dropped dependencies from package.json**

Edit `package.json`, remove from `dependencies`: `airtable`, `resend`, `next-themes`, `@hookform/resolvers`, `react-hook-form`, `zod`.

Final `dependencies` block should be:

```json
"dependencies": {
  "@radix-ui/react-slot": "^1.2.4",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "framer-motion": "^12.23.12",
  "lucide-react": "^0.542.0",
  "next": "^15.5.14",
  "radix-ui": "^1.4.3",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "tailwind-merge": "^3.3.1"
}
```

- [ ] **Step 5: Reinstall to prune lockfile**

Run: `npm install`
Expected: package-lock.json updated, no errors. Leftover folders for removed packages are pruned from `node_modules/`.

- [ ] **Step 6: Remove .env.local Airtable variable**

Edit `.env.local`. Remove `AIRTABLE_PERSONAL_ACCESS_TOKEN`. Leave the file present (empty) so deploy pipelines don't break on missing file.

Contents after edit (single line plus trailing newline):

```
# No server-side env vars needed in v1.
```

- [ ] **Step 7: Typecheck + build to confirm clean removal**

Run: `npx tsc --noEmit`
Expected: PASS.

The project won't build yet because `app/layout.tsx` still imports `ThemeProvider` and `@/lib/analytics` will be referenced indirectly. Typecheck will flag this. Do not fix those errors here — Task 5 handles layout. Flag any unexpected errors and continue only if they are in files the subsequent tasks own.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "chore: remove out-of-scope integrations for relaunch

- Delete Airtable/Resend/Calendly/lead-magnet API routes and components
- Drop next-themes, react-hook-form, zod, @hookform/resolvers from deps
- Empty .env.local; no server-side env vars needed in v1

Layout still references removed modules; Task 5 rewrites layout.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Rewrite `lib/constants.ts` as the single source of truth

**Files:**
- Modify: `lib/constants.ts` (replace entire contents)

- [ ] **Step 1: Replace file with new content**

Overwrite `lib/constants.ts` with:

```ts
// lib/constants.ts
// Single source of truth for all site copy, links, and structured content.

export const siteConfig = {
  name: "Infinite Play",
  description:
    "Infinite Play is a small AI transformation firm. We train teams, map the highest-leverage AI opportunities inside your business, and build the custom systems that make AI real in your day-to-day work.",
  url: "https://infiniteplay.ai",
  tagline: "The AI landscape keeps changing. We help your team stay ahead of it.",
  keywords: [
    "AI consulting",
    "AI transformation",
    "AI training",
    "AI opportunity audit",
    "custom AI systems",
    "AI agents",
    "AI automation",
    "Claude consulting",
    "GPT consulting",
    "Gemini consulting",
    "Google Workspace AI",
    "fractional AI",
  ],
} as const;

export const contactInfo = {
  email: "jeremy@infiniteplay.ai",
  linkedin: "https://www.linkedin.com/in/jeremyolken/",
  linkedinLabel: "Connect on LinkedIn",
  location: "Denver, CO",
} as const;

export const availability = {
  accepting: true,
  text: "Accepting new engagements",
} as const;

export const navigationItems = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#about", label: "About" },
] as const;

export const heroContent = {
  headlineLead: "The AI landscape keeps changing.",
  headlineAccent: "We help your team stay ahead.",
  subhead:
    "Infinite Play is a small AI transformation firm. We train teams, find the highest-leverage places AI can help, and build the custom systems that turn it into real work.",
  primaryCta: "Connect on LinkedIn",
  primaryCtaHref: "https://www.linkedin.com/in/jeremyolken/",
} as const;

export const services = [
  {
    number: "01",
    id: "training",
    title: "Team Training",
    outcome: "Your team, fluent with the tools that matter.",
    body:
      "Hands-on training for individuals or teams. We meet you at your current skill level and get you confident with the tools you already use plus the ones you should. Half-day, full-day, or a series — shaped to your workflows, not a generic curriculum.",
    bullets: [
      "Skill assessment and tailored session plan",
      "Live, workflow-based exercises",
      "A working prompt and template library you keep",
    ],
  },
  {
    number: "02",
    id: "opportunity-map",
    title: "AI Opportunity Map",
    outcome: "A prioritized plan for where AI moves the needle.",
    body:
      "We sit in on how your team actually works, interview across departments, and come back with a ranked list of AI opportunities. For each one you get a recommendation — buy, build, prompt, or automate — so you know exactly what to do next and in what order.",
    bullets: [
      "Cross-functional interviews and workflow review",
      "Opportunity map ranked by impact and effort",
      "Tool, model, and build recommendations with next steps",
    ],
  },
  {
    number: "03",
    id: "custom-systems",
    title: "Custom AI Systems",
    outcome: "Systems built for how your business actually runs.",
    body:
      "When off-the-shelf doesn't quite fit, we design and build the systems that do — agents, automations, internal tools, custom web apps. Multi-model by default. We choose the right model for each part of the job.",
    bullets: [
      "Scoped builds, shipped in weeks not quarters",
      "Claude, GPT, Gemini, and open-source — picked per task",
      "Handover that your team can own and extend",
    ],
  },
] as const;

export const multiModelNote =
  "We work across Claude, GPT, Gemini, and Google Workspace — and pick the right tool for the job.";

export const caseStudyTeasers = [
  {
    slug: "talent-systems",
    company: "Talent Systems",
    kind: "AI Opportunity Map + Custom Systems",
    headline: "34 AI opportunities mapped across the business",
    oneLiner:
      "A full-company AI audit for the casting-software leader, followed by custom agents for customer support and casting verification.",
  },
  {
    slug: "platinum-balloon",
    company: "Platinum Balloon",
    kind: "Custom AI System",
    headline: "RFP to creative brief, without the grind",
    oneLiner:
      "An AI system that expands the problem space of a brief — surfacing sharper, non-obvious insights for agency strategists.",
  },
  {
    slug: "signal-and-cipher",
    company: "Signal and Cipher",
    kind: "AI Education Platform",
    headline: "A generative AI education platform for enterprise upskilling",
    oneLiner:
      "As Head of Product Strategy, built a platform combining static learning, interactive workshops, and hands-on training for tailored client upskilling.",
  },
  {
    slug: "hidden-client",
    company: "Hidden Client",
    kind: "Founder-built AI Product",
    headline: "Turning job postings into your best leads",
    oneLiner:
      "An AI agent that monitors LinkedIn, Indeed, and ZipRecruiter daily and delivers matched leads, contacts, and outreach drafts to fractional services firms every morning.",
  },
  {
    slug: "gmr-marketing",
    company: "GMR Marketing",
    kind: "In-house AI Products Practice",
    headline: "AI tooling for one of the world's leading experiential agencies",
    oneLiner:
      "As VP of AI Products, building AI across strategy, operations, and client-facing work for brands like Visa, NFL, NBA, Google, Mercedes-Benz, Microsoft, and more.",
  },
] as const;

export type CaseStudy = {
  slug: string;
  company: string;
  kind: string;
  headline: string;
  metric?: string;
  metricLabel?: string;
  problem: string;
  approach: string;
  built: string;
  outcome: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "talent-systems",
    company: "Talent Systems",
    kind: "AI Opportunity Map + Custom Systems",
    headline: "34 opportunities mapped, two systems shipped",
    metric: "34",
    metricLabel: "AI opportunities identified",
    problem:
      "Talent Systems owns seven of the leading casting platforms — Casting Networks, Casting Frontier, Spotlight, Tagmin, Staff Me Up, and the Cast It products. Across 2M+ talent profiles and 15M+ auditions, manual work was piling up in places nobody had time to map: support tickets, role verification, casting workflows, internal operations. Leadership knew AI should help. They didn't know where first.",
    approach:
      "We ran a full-company AI opportunity audit. Cross-functional interviews across every department, workflow mapping, and ranked impact-vs-effort scoring on each candidate. The output was a prioritized list of 34 opportunities with a clear recommendation for each — buy, build, prompt, or automate.",
    built:
      "Two systems moved straight into production from the audit. The first: a support agent that triages, drafts, and resolves customer tickets at scale. The second: a casting-role verification agent that validates new roles from casting directors and pushes them through approval faster, shortening time-to-live for every posting.",
    outcome:
      "Manual review time on casting verification dropped significantly, and the support agent took over the long tail of repetitive tickets. Beyond the two shipped systems, the opportunity map became a multi-quarter AI roadmap that the leadership team is still working through.",
  },
  {
    slug: "platinum-balloon",
    company: "Platinum Balloon",
    kind: "Custom AI System",
    headline: "A strategy engine for agencies",
    metric: "RFP → brief",
    metricLabel: "Shortened by days",
    problem:
      "Platinum Balloon is an AI product studio for creative agencies, known for Hydrogen AI. Their strategists were spending the best part of a week turning an RFP into a creative brief — and too much of that week on formatting and scaffolding rather than uncovering insights.",
    approach:
      "We designed an AI system that does the scaffolding for them: ingesting the RFP, expanding the problem space, and surfacing candidate angles across human insight and unmet needs. Strategists move from blank page to sharp brief with the interesting work still in their hands.",
    built:
      "A multi-model workflow that combines retrieval across prior work, structured prompts tuned to the agency's strategy framework, and a review loop that keeps a human in the decisioning seat at every step.",
    outcome:
      "Strategists come out of a first pass with a fuller, more defensible brief in a fraction of the time. Pitch win-rates improved on briefs the system touched, and the team has capacity to chase ideas they would have cut for time.",
  },
  {
    slug: "signal-and-cipher",
    company: "Signal and Cipher",
    kind: "AI Education Platform",
    metric: "Enterprise",
    metricLabel: "AI upskilling at scale",
    headline: "Tailored AI upskilling that actually lands",
    problem:
      "Signal and Cipher, founded by Ian Beacraft, works with enterprises like Samsung, Intel, Coca-Cola, Google, Microsoft, Nike, and Universal to help teams adapt to generative AI. Generic training didn't move the needle. Clients wanted upskilling that met each function where it worked.",
    approach:
      "As Head of Product Strategy, I led the design of a generative AI education platform built around three reinforcing layers: static learning for foundations, interactive workshops for context, and hands-on training against real client workflows. Curriculum maps changed per client — the platform made that economical.",
    built:
      "A product that combines structured lesson flows, workshop facilitation tooling, prompt libraries, and client-specific practice environments. Instructors configure a program per engagement in hours, not weeks.",
    outcome:
      "Clients went from one-off AI workshops to sustained uplift. Signal and Cipher could take bigger engagements with tighter turnarounds, and the platform became the reusable spine of their enterprise work.",
  },
  {
    slug: "hidden-client",
    company: "Hidden Client",
    kind: "Founder-built AI Product",
    metric: "7am",
    metricLabel: "Leads in your inbox, daily",
    headline: "An AI agent that turns job postings into leads",
    problem:
      "Fractional and outsourced services firms — fractional CFOs, outsourced sales, specialized consultancies — depend on new client flow but have no reliable top-of-funnel. A company posting a full-time role for the work they already do is a high-intent signal, but nobody was surfacing it cleanly.",
    approach:
      "I built Hidden Client (hiddenclient.com) around a simple premise: every morning at 7am, deliver a short email of matched leads pulled from that day's job postings, complete with the decision-maker's contact and a personalized outreach draft in the user's voice. No dashboard, no login, no workflow to learn.",
    built:
      "A multi-source monitor across LinkedIn, Indeed, ZipRecruiter, Glassdoor, and company career pages, feeding a fit-scoring model and an outreach drafter tuned per subscriber. Monthly fit-feedback loops keep the matches sharpening over time.",
    outcome:
      "Hidden Client is a live product at $497/month with a 60-day guarantee. Founders pricing subscribers have converted postings into multi-month retainers, and the product now serves a growing set of fractional firms who get their pipeline in the first email of the day.",
  },
  {
    slug: "gmr-marketing",
    company: "GMR Marketing",
    kind: "In-house AI Products Practice",
    metric: "Omnicom",
    metricLabel: "experiential agency",
    headline: "AI across one of the world's leading experiential agencies",
    problem:
      "GMR Marketing (Omnicom's experiential agency, 1,300+ people across 12 countries) runs campaigns for Visa, NFL, NBA, WNBA, Google, Nissan, Cisco, Xfinity, Humana, Microsoft, Intel, Mercedes-Benz, Hershey, and more. The AI surface area spans strategy, creative, client services, and operations — and the right AI answer is different in each.",
    approach:
      "As VP of AI Products, I lead the practice. We scope, prioritize, and ship AI tooling alongside the teams that use it — strategy accelerators, operational automations, client-facing tools that plug into experiential campaigns. Multi-model by default, with the architecture and evals to pick the right tool per job.",
    built:
      "A growing portfolio of internal AI products and tools used across the agency, plus the governance, evaluation, and adoption practices that make them stick. The practice itself — how we identify opportunities, ship, and measure — is as much the work as any single system.",
    outcome:
      "GMR's teams have AI leverage in the places it matters most, without the hype tax. The practice is now a standing capability the agency sells into its most ambitious engagements.",
  },
] as const;

export const workIntro = {
  eyebrow: "Recent engagements",
  headline: "Here's what we did and how.",
  subhead:
    "A mix of company-wide audits, shipped systems, education platforms, and founder builds. Each is a real engagement with a real outcome.",
} as const;

export const aboutContent = {
  eyebrow: "About",
  headline: "Small on purpose. Operator-led.",
  firmParagraph:
    "Infinite Play is a small AI transformation firm. We work with a handful of teams at a time — training them, mapping where AI moves the needle, and building the custom systems that turn potential into production. The shape of the engagement follows what you need, not a fixed template.",
  jeremyParagraph:
    "Jeremy Olken is the founder. He's currently VP of AI Products at GMR Marketing, where he leads the AI Products practice for one of the world's leading experiential marketing agencies (Visa, NFL, NBA, Google, Mercedes-Benz, Microsoft, and others). Previously Head of Product Strategy at Signal and Cipher, and the builder behind Hidden Client.",
  capabilities: [
    "AI training and enablement",
    "AI opportunity mapping",
    "Custom agent and system builds",
    "Multi-model evaluation and selection",
    "Product strategy and operations",
  ],
} as const;

export const ctaContent = {
  eyebrow: "Let's play",
  headline: "Got a project? Let's talk.",
  body:
    "The best way to reach us is a LinkedIn DM. Connect with Jeremy and tell us what you're trying to do.",
  cta: "Connect on LinkedIn",
  ctaHref: "https://www.linkedin.com/in/jeremyolken/",
  emailFallback: "jeremy@infiniteplay.ai",
} as const;

export const footerContent = {
  brand: "Infinite Play",
  tagline: "A small AI transformation firm.",
  columns: [
    {
      title: "Site",
      links: [
        { href: "/#services", label: "Services" },
        { href: "/work", label: "Work" },
        { href: "/#about", label: "About" },
      ],
    },
    {
      title: "Connect",
      links: [
        { href: "https://www.linkedin.com/in/jeremyolken/", label: "LinkedIn", external: true },
        { href: "mailto:jeremy@infiniteplay.ai", label: "Email", external: true },
      ],
    },
  ],
} as const;
```

- [ ] **Step 2: Typecheck the new constants file only**

Run: `npx tsc --noEmit`
Expected: Errors for files *other than* `lib/constants.ts` (consumers that reference deleted constants). Zero errors from `lib/constants.ts` itself. This is expected — consumers are rewritten in later tasks.

- [ ] **Step 3: Commit**

```bash
git add lib/constants.ts
git commit -m "feat: rewrite constants for relaunch IA

Single source of truth for hero, services, case study teasers and
full case studies, about content, CTA, footer, nav. Drops all prior
Claude-only constants in favor of the multi-model firm positioning.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Simplify animations and keep only the variants we need

**Files:**
- Modify: `lib/animations.ts` (simplify)

- [ ] **Step 1: Replace file contents**

Overwrite `lib/animations.ts` with a focused set of variants:

```ts
import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const cardHover: Variants = {
  rest: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  hover: { y: -4, transition: { duration: 0.2, ease: "easeOut" } },
};

export const buttonHover: Variants = {
  rest: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
  hover: { scale: 1.03, transition: { duration: 0.2, ease: "easeOut" } },
  tap: { scale: 0.97, transition: { duration: 0.1, ease: "easeOut" } },
};

export const drawerAnimation: Variants = {
  closed: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  open: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};
```

- [ ] **Step 2: Typecheck animations file**

Run: `npx tsc --noEmit lib/animations.ts --skipLibCheck --target es2017 --jsx preserve --moduleResolution bundler` (skip-validate, just confirm syntax).

Quicker alternative: just run `npx tsc --noEmit` — expect unrelated errors from consumers but none originating in `lib/animations.ts`.

- [ ] **Step 3: Commit**

```bash
git add lib/animations.ts
git commit -m "refactor: simplify animation variants

Keep only fadeUp, stagger, cardHover, buttonHover, drawer. Drop
floatingOrb, textReveal, sectionFadeIn — unused in the relaunch IA.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Simplify `app/globals.css` for single-surface Option B

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace file contents**

Overwrite `app/globals.css` with:

```css
@import "tailwindcss";
@import "tw-animate-css";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-ring: var(--ring);
  --font-sans: var(--font-inter);
  --font-heading: var(--font-plus-jakarta-sans);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --radius: 0.75rem;
  --background: #FAFAFA;
  --foreground: #0F172A;
  --card: #FFFFFF;
  --card-foreground: #0F172A;
  --primary: #FB5B3D;
  --primary-foreground: #FFFFFF;
  --secondary: #F1F5F9;
  --secondary-foreground: #0F172A;
  --muted: #F1F5F9;
  --muted-foreground: #64748B;
  --accent: #FFF1EC;
  --accent-foreground: #B84A30;
  --border: #E2E8F0;
  --ring: #FB5B3D;
}

@layer base {
  * {
    border-color: var(--border);
    outline-color: color-mix(in srgb, var(--ring) 50%, transparent);
  }
  body {
    background: var(--background);
    color: var(--foreground);
    font-feature-settings: "cv11", "ss01";
  }
  html {
    scroll-behavior: smooth;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css
git commit -m "style: single-surface tokens for Option B relaunch

Drop dark mode block. Introduce warm accent surface (#FFF1EC) for
pill/badge treatments. Increase default radius to 0.75rem for the
playful-modern shape language.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Rewrite `app/layout.tsx` (remove ThemeProvider + analytics)

**Files:**
- Modify: `app/layout.tsx`
- Modify: `lib/structured-data.ts`

- [ ] **Step 1: Rewrite `lib/structured-data.ts`**

Overwrite with:

```ts
import { contactInfo, siteConfig } from "./constants";

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        founder: {
          "@type": "Person",
          "@id": `${siteConfig.url}/#person`,
        },
        areaServed: "US",
        serviceType: "AI consulting, training, and custom systems",
        priceRange: "$$-$$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Denver",
          addressRegion: "CO",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: contactInfo.email,
          contactType: "sales",
        },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: "Jeremy Olken",
        jobTitle: "Founder, Infinite Play",
        url: siteConfig.url,
        sameAs: [contactInfo.linkedin],
        worksFor: {
          "@type": "ProfessionalService",
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };
}
```

- [ ] **Step 2: Rewrite `app/layout.tsx`**

Overwrite with:

```tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { generateStructuredData } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — AI transformation firm`,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: "Jeremy Olken" }],
  creator: "Jeremy Olken",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — AI transformation firm`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/infinite-play-logo.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — AI transformation firm`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — AI transformation firm`,
    description: siteConfig.description,
    images: ["/infinite-play-logo.png"],
  },
  icons: {
    icon: "/infinite-play-logo.png",
    apple: "/infinite-play-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: Errors only from consumer components yet to be rewritten (Hero, Navigation, CTA, Services, About, etc.). Layout itself passes.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx lib/structured-data.ts
git commit -m "refactor(layout): strip theme + analytics, align metadata

Remove ThemeProvider wrapper, remove Plausible script, update
structured data and metadata to match the new multi-model firm
positioning. Sitemap and robots unchanged.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Rewrite `components/Navigation.tsx`

**Files:**
- Modify: `components/Navigation.tsx`

- [ ] **Step 1: Replace the component**

Overwrite `components/Navigation.tsx` with:

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigationItems, contactInfo } from "@/lib/constants";
import { drawerAnimation } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled
            ? "bg-background/80 backdrop-blur border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Infinite Play home"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary" aria-hidden />
            <span className="font-heading font-semibold text-[15px] tracking-tight text-foreground group-hover:text-primary transition-colors">
              Infinite Play
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-5"
            >
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2 -mr-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-foreground/30 z-40 md:hidden"
            />
            <motion.div
              variants={drawerAnimation}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-72 bg-background border-l border-border z-50 md:hidden"
            >
              <div className="p-6 pt-20 flex flex-col gap-5">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90 mt-4"
                >
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navigation.tsx
git commit -m "feat(nav): rewrite for relaunch — brand dot, LinkedIn primary

Client-component nav, same-shell on both pages, hamburger drawer on
mobile, Connect pill routes to LinkedIn. Drops ThemeToggle.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Rewrite `components/AvailabilityBadge.tsx`

**Files:**
- Modify: `components/AvailabilityBadge.tsx`

- [ ] **Step 1: Replace component**

Overwrite `components/AvailabilityBadge.tsx` with:

```tsx
import { availability } from "@/lib/constants";

export default function AvailabilityBadge() {
  if (!availability.accepting) return null;
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      {availability.text}
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/AvailabilityBadge.tsx
git commit -m "feat(badge): availability pill reads from constants

Renders only when availability.accepting is true. Pulsing emerald
dot + subtle card pill matches Option B shape language.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 8: Rewrite `components/Hero.tsx`

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Replace component**

Overwrite `components/Hero.tsx` with:

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import AvailabilityBadge from "./AvailabilityBadge";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={staggerItem} className="mb-8">
            <AvailabilityBadge />
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.02] tracking-tight text-foreground"
          >
            {heroContent.headlineLead}{" "}
            <span className="text-primary">{heroContent.headlineAccent}</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {heroContent.subhead}
          </motion.p>

          <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={heroContent.primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              {heroContent.primaryCta}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat(hero): rebuild for Option B relaunch

Left-aligned, big sans headline with orange accent on second clause,
availability pill above, one LinkedIn CTA. Framer Motion restrained
to stagger fade-up; respects prefers-reduced-motion via globals.css.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 9: Rewrite `components/Services.tsx`

**Files:**
- Modify: `components/Services.tsx`

- [ ] **Step 1: Replace component**

Overwrite `components/Services.tsx` with:

```tsx
"use client";

import { motion } from "framer-motion";
import { services, multiModelNote } from "@/lib/constants";
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mb-14"
        >
          <motion.span
            variants={staggerItem}
            className="text-xs font-mono uppercase tracking-[0.18em] text-primary"
          >
            What we do
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground"
          >
            Three ways we work with teams.
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Pick the one that fits where you are — or start with a conversation and we&apos;ll sort the shape together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative rounded-2xl border border-border bg-card p-7 md:p-8 flex flex-col"
            >
              <motion.div variants={cardHover} className="flex flex-col h-full">
                <span className="text-xs font-mono text-muted-foreground">
                  {service.number}
                </span>
                <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-primary font-medium">
                  {service.outcome}
                </p>
                <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
                  {service.body}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <span
                        className="mt-[7px] inline-block h-1 w-1 rounded-full bg-primary shrink-0"
                        aria-hidden
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-10 text-sm text-muted-foreground max-w-2xl">
          {multiModelNote}
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Services.tsx
git commit -m "feat(services): three-card approachable layout

Numbered cards, outcome line in orange, plain-language body, bulleted
inclusions. Multi-model note below the grid as soft proof, not a
positioning pillar (per research).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 10: Create `components/RecentWork.tsx`

**Files:**
- Create: `components/RecentWork.tsx`

- [ ] **Step 1: Create file**

Write `components/RecentWork.tsx`:

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { caseStudyTeasers } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function RecentWork() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap items-end justify-between gap-4 mb-12"
        >
          <div className="max-w-2xl">
            <motion.span
              variants={staggerItem}
              className="text-xs font-mono uppercase tracking-[0.18em] text-primary"
            >
              Recent work
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            >
              A few engagements we&apos;ve shipped.
            </motion.h2>
          </div>
          <motion.div variants={staggerItem}>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              See all work
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {caseStudyTeasers.map((teaser) => (
            <motion.div key={teaser.slug} variants={staggerItem}>
              <Link
                href={`/work#${teaser.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 md:p-7 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground">
                    {teaser.kind}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-foreground">
                  {teaser.company}
                </h3>
                <p className="mt-1 text-[15px] font-medium text-primary">
                  {teaser.headline}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {teaser.oneLiner}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/RecentWork.tsx
git commit -m "feat(recent-work): homepage teaser grid

Five tiles linking to /work#<slug>. Eyebrow (engagement kind),
company name, headline outcome, one-liner. Hover raises border
and slides arrow — matches Option B shape language.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 11: Rewrite `components/About.tsx`

**Files:**
- Modify: `components/About.tsx`

- [ ] **Step 1: Replace component**

Overwrite `components/About.tsx` with:

```tsx
"use client";

import { motion } from "framer-motion";
import { aboutContent, contactInfo } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="md:col-span-5"
        >
          <motion.span
            variants={staggerItem}
            className="text-xs font-mono uppercase tracking-[0.18em] text-primary"
          >
            {aboutContent.eyebrow}
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground"
          >
            {aboutContent.headline}
          </motion.h2>
          <motion.ul variants={staggerItem} className="mt-8 flex flex-wrap gap-2">
            {aboutContent.capabilities.map((cap) => (
              <li
                key={cap}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
              >
                {cap}
              </li>
            ))}
          </motion.ul>
          <motion.p variants={staggerItem} className="mt-8 text-sm text-muted-foreground">
            Based in {contactInfo.location}. Working globally.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="md:col-span-7 space-y-5 text-[17px] text-foreground/90 leading-relaxed"
        >
          <motion.p variants={staggerItem}>
            {aboutContent.firmParagraph}
          </motion.p>
          <motion.p variants={staggerItem}>
            {aboutContent.jeremyParagraph}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/About.tsx
git commit -m "feat(about): firm + founder block with GMR stated plainly

Two-column on desktop, collapses to one on mobile. Capabilities as
chips. GMR role stated upfront in Jeremy's bio (per research:
transparency over concealment).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 12: Rewrite `components/CTA.tsx`

**Files:**
- Modify: `components/CTA.tsx`

- [ ] **Step 1: Replace component**

Overwrite `components/CTA.tsx` with:

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ctaContent } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl bg-foreground text-background p-10 md:p-16"
        >
          <motion.span
            variants={staggerItem}
            className="text-xs font-mono uppercase tracking-[0.18em] text-primary"
          >
            {ctaContent.eyebrow}
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="mt-3 font-heading text-3xl md:text-5xl font-bold tracking-tight max-w-3xl"
          >
            {ctaContent.headline}
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-5 max-w-2xl text-base md:text-lg text-background/70 leading-relaxed"
          >
            {ctaContent.body}
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href={ctaContent.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {ctaContent.cta}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={`mailto:${ctaContent.emailFallback}`}
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              or email {ctaContent.emailFallback}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/CTA.tsx
git commit -m "feat(cta): single LinkedIn call-to-action block

Dark-surface rounded card with orange pill CTA, email fallback as
soft secondary. No forms, no Calendly. Links to Jeremy's LinkedIn.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 13: Rewrite `components/Footer.tsx`

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Replace component**

Overwrite `components/Footer.tsx` with:

```tsx
import Link from "next/link";
import { footerContent, siteConfig } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" aria-hidden />
            <span className="font-heading font-semibold text-[15px] tracking-tight text-foreground">
              {footerContent.brand}
            </span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            {footerContent.tagline}
          </p>
        </div>
        {footerContent.columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => {
                const external = "external" in link && link.external;
                return (
                  <li key={link.href}>
                    {external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </span>
        <span className="text-xs text-muted-foreground">
          Based in Denver, CO
        </span>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat(footer): minimal footer with brand, nav, legal line

Two nav columns (Site + Connect) plus brand block + copyright row.
External links use <a target=_blank>; internal use next/link.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 14: Rewrite `app/page.tsx` to assemble the homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace page**

Overwrite `app/page.tsx` with:

```tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentWork from "@/components/RecentWork";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <RecentWork />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Delete unused legacy section components**

Remove section components that the new IA doesn't use:

```bash
rm components/Process.tsx components/TrustBar.tsx components/ProblemSection.tsx components/ResultsSection.tsx components/ExpertiseSection.tsx components/WhyClaude.tsx components/WorkflowShowcase.tsx
```

- [ ] **Step 3: Typecheck + lint**

Run: `npx tsc --noEmit`
Expected: PASS.

Run: `npm run lint`
Expected: PASS (zero errors). Warnings are acceptable.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git add -u components/
git commit -m "feat(home): assemble relaunch homepage

Compose Navigation + Hero + Services + RecentWork + About + CTA
+ Footer in app/page.tsx. Delete legacy section components no
longer referenced by the IA.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 15: Create `app/work/page.tsx` with five inline case studies

**Files:**
- Create: `app/work/page.tsx`
- Create: `components/CaseStudy.tsx`

- [ ] **Step 1: Create `components/CaseStudy.tsx`**

Write:

```tsx
"use client";

import { motion } from "framer-motion";
import type { CaseStudy as CaseStudyData } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  return (
    <motion.article
      id={data.slug}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="scroll-mt-28 border-t border-border py-16 md:py-20 first:border-t-0"
    >
      <motion.span
        variants={staggerItem}
        className="text-xs font-mono uppercase tracking-[0.18em] text-primary"
      >
        {data.kind}
      </motion.span>
      <motion.h2
        variants={staggerItem}
        className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl"
      >
        {data.company} — {data.headline}
      </motion.h2>

      {data.metric && (
        <motion.div
          variants={staggerItem}
          className="mt-6 inline-flex items-baseline gap-3 rounded-2xl bg-accent px-5 py-3"
        >
          <span className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground">
            {data.metric}
          </span>
          {data.metricLabel && (
            <span className="text-sm text-accent-foreground/80">
              {data.metricLabel}
            </span>
          )}
        </motion.div>
      )}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <motion.div variants={staggerItem} className="md:col-span-4">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            The problem
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-foreground/90">
            {data.problem}
          </p>
        </motion.div>
        <motion.div variants={staggerItem} className="md:col-span-4">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            What we did
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-foreground/90">
            {data.approach}
          </p>
        </motion.div>
        <motion.div variants={staggerItem} className="md:col-span-4">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            What we built
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-foreground/90">
            {data.built}
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={staggerItem}
        className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8"
      >
        <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-primary">
          Outcome
        </h3>
        <p className="mt-3 text-[17px] leading-relaxed text-foreground">
          {data.outcome}
        </p>
      </motion.div>
    </motion.article>
  );
}
```

- [ ] **Step 2: Create `app/work/page.tsx`**

Write:

```tsx
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import CaseStudy from "@/components/CaseStudy";
import { caseStudies, workIntro, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Work — ${siteConfig.name}`,
  description:
    "Recent engagements across AI audits, custom systems, education platforms, and founder builds.",
  alternates: { canonical: `${siteConfig.url}/work` },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-36 md:pt-44 pb-12 md:pb-20">
        <section className="max-w-6xl mx-auto px-6">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
            {workIntro.eyebrow}
          </span>
          <h1 className="mt-3 font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            {workIntro.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {workIntro.subhead}
          </p>
        </section>
        <section className="max-w-6xl mx-auto px-6 mt-16 md:mt-20">
          {caseStudies.map((study) => (
            <CaseStudy key={study.slug} data={study} />
          ))}
        </section>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add app/work/ components/CaseStudy.tsx
git commit -m "feat(work): new /work page with five inline case studies

Shared CaseStudy component renders headline + metric chip, problem,
approach, built, and outcome. Page composes page intro, the five
case studies, shared CTA block, and footer.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 16: Update sitemap to include `/work`

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Replace file**

Overwrite `app/sitemap.ts` with:

```ts
import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
```

- [ ] **Step 2: Commit**

```bash
git add app/sitemap.ts
git commit -m "chore: sitemap includes /work

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 17: Full build, lint, and manual verification

**Files:** None (verification only)

- [ ] **Step 1: Run typecheck**

Run: `npx tsc --noEmit`
Expected: Zero errors.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: Zero errors.

- [ ] **Step 3: Run production build**

Run: `npm run build`
Expected: Build succeeds. Output lists two routes: `/` and `/work`, plus `/sitemap.xml` and `/robots.txt`. No warnings about unused imports or missing types.

- [ ] **Step 4: Start the dev server and visually verify**

Run: `npm run dev` in the background, then open `http://localhost:3000` in a browser.

Manual checklist (check each):

- [ ] Hero: availability pill visible with pulsing dot, headline wraps correctly, orange accent on second clause, single CTA links to `https://www.linkedin.com/in/jeremyolken/` with `target="_blank"`.
- [ ] Nav: brand dot + wordmark, three links (Services, Work, About), Connect pill on desktop. Scrolling adds blurred border. Hamburger drawer opens on mobile viewport (resize to ~375px).
- [ ] Services: three cards, numbered 01/02/03, orange outcome line, bullets render, multi-model note appears below grid.
- [ ] Recent Work: five tiles in a 2-col grid (or 1-col on mobile), each links to `/work#<slug>`, "See all work" link appears top-right.
- [ ] About: two-column layout on desktop, capability chips wrap, firm paragraph and Jeremy paragraph both render, GMR line visible.
- [ ] CTA: dark rounded card, orange pill button links to LinkedIn, email fallback is clickable mailto.
- [ ] Footer: brand lockup, tagline, two nav columns, copyright row at bottom.
- [ ] `/work` page: nav still present, page intro, five case studies rendered in order, metric chips visible, each section has problem/approach/built/outcome, same CTA + footer at the bottom. Anchor links from homepage Recent Work tiles jump to the right case study (with scroll-margin offset for fixed nav).
- [ ] Reduced motion: macOS → System Settings → Accessibility → Display → "Reduce motion" ON. Reload. Confirm transitions are near-instant.
- [ ] No console errors on either page.

If any check fails, note which and loop back to the owning task to fix. Do **not** commit a partial fix mid-verification — fix, re-run the full checklist.

- [ ] **Step 5: Commit verification notes (optional)**

If you made tweaks in Step 4, stage and commit them as task-owner commits. If no tweaks were needed, skip this step.

- [ ] **Step 6: Stop the dev server**

Stop the background `npm run dev` process.

---

## Task 18: Clean up brainstorm artifacts

**Files:**
- Delete: `.superpowers/brainstorm/` contents for this session (optional but tidy)

- [ ] **Step 1: Stop the companion server and archive session**

```bash
bash /Users/olken/.claude/plugins/cache/claude-plugins-official/superpowers/5.0.7/skills/brainstorming/scripts/stop-server.sh /Users/olken/Projects/PERSONAL/infinite-play/.superpowers/brainstorm/53796-1776469976 || true
```

The `.superpowers/` directory is already `.gitignore`d. No commit needed.

---

## Self-review notes

**Spec coverage check** (mapped spec sections to tasks):
- §5 IA (two pages) → Tasks 14 + 15
- §6.1 Hero → Task 8
- §6.2 Services → Task 9
- §6.3 Recent Work → Task 10
- §6.4 About → Task 11
- §6.5 CTA + Footer → Tasks 12 + 13
- §7 `/work` → Task 15 (+ component in same task)
- §8 Design system → Task 4 (CSS tokens) + component-level styling throughout
- §9 Tech approach — reused/dropped → Tasks 1 + 5
- §10 Copy direction → Task 2 (all copy lives in constants)
- §11 Deferred decisions — flagged in comments during execution, not solved in plan
- §12 Out of scope — nothing in plan implements anything listed there

**Placeholders** — none. Every step has executable commands or complete file contents.

**Type consistency** — `CaseStudy` type is defined in Task 2 (`lib/constants.ts`) and consumed by Task 15 (`components/CaseStudy.tsx`). `caseStudies` array is the runtime data; `caseStudyTeasers` is the homepage teaser array. Both are used via `readonly` for `as const` inference plus an explicit `readonly CaseStudy[]` typing.

**Ambiguity check** — copy in Task 2 is first-pass. Jeremy is expected to line-edit during or after Task 17 verification; the plan doesn't block on final wordsmithing.

**Scope check** — One plan, one engineer, single testable output: a built site on `localhost:3000`. Appropriate for a single execution session.

---

## Deferred / open items (do not block execution)

These are called out in the spec as deferred. Not implemented in this plan. Surface them as post-execution follow-ups:

1. **Airbnb and Omega** in the GMR case study: currently **omitted** from the client list in Task 2's copy (Visa, NFL, NBA, Google, Mercedes-Benz, Microsoft, and more). Verify with Jeremy; re-add if confirmed.
2. **Pricing on services:** current copy shows no numbers. Jeremy can decide to add soft "starts around $X" lines in `services[].body` or `services[].bullets` in `lib/constants.ts`.
3. **Plausible analytics:** removed from `app/layout.tsx`. Restoration is ~5 min if wanted (`<Script>` block back in with `data-domain="infiniteplay.ai"`).
4. **Dark mode:** tokens removed; add back by restoring the `.dark` selector block in `globals.css` + a toggle component. Not in this plan.
5. **Headshot:** no image ships. If wanted, add to `components/About.tsx` as a `next/image` in the left column.

All are small, additive changes that a follow-up session can handle if Jeremy wants them.
