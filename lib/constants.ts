// lib/constants.ts
// Single source of truth for all site copy, links, and structured content.

export const siteConfig = {
  name: "Infinite Play",
  description:
    "Infinite Play is a small AI transformation firm. We train teams, figure out where AI actually helps your business, and build the custom systems that make it real.",
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
    "We're a small AI transformation firm. We train teams, figure out where AI actually helps your business, and build the custom systems that make it real.",
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
      "Hands-on training for individuals or teams. We start wherever you are and get you comfortable with the tools you already use plus a few new ones worth knowing. Half-day, full-day, or a series. Built around your actual workflows, not a generic curriculum.",
    bullets: [
      "Skill assessment and a session plan tailored to your team",
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
      "We sit in on how your team actually works, talk to people across departments, and come back with a ranked list of AI opportunities. For each one you get a clear recommendation (buy, build, prompt, or automate), so you know what to do next and in what order.",
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
      "When off-the-shelf doesn't quite fit, we design and build the systems that do. Agents, automations, internal tools, custom web apps. Multi-model by default. We pick the right model for each part of the job.",
    bullets: [
      "Scoped builds, shipped in weeks not quarters",
      "Claude, GPT, Gemini, and open-source, picked per task",
      "Handover that your team can own and extend",
    ],
  },
] as const;

export const multiModelNote =
  "We work across Claude, GPT, Gemini, and Google Workspace, and we pick the right tool for the job.";

export const caseStudyTeasers = [
  {
    slug: "hidden-client",
    company: "Hidden Client",
    kind: "Founder-built AI Product",
    headline: "Turning job postings into your best leads",
    oneLiner:
      "An AI agent that monitors LinkedIn, Indeed, and ZipRecruiter every day and delivers matched leads, decision-maker contacts, and personalized outreach drafts to fractional services firms every morning.",
  },
  {
    slug: "talent-systems",
    company: "Talent Systems",
    kind: "AI Opportunity Map + Custom Systems",
    headline: "34 AI opportunities mapped across the business",
    oneLiner:
      "A full-company AI audit for the casting-software leader, followed by custom agents for customer support and casting verification.",
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
  metric2?: string;
  metricLabel2?: string;
  problem: string;
  approach: string;
  built: string;
  outcome: string;
  visitUrl?: string;
  visitLabel?: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "hidden-client",
    company: "Hidden Client",
    kind: "Founder-built AI Product",
    metric: "7am",
    metricLabel: "Leads in your inbox, daily",
    headline: "An AI agent that turns job postings into leads",
    visitUrl: "https://www.hiddenclient.com",
    visitLabel: "Visit hiddenclient.com",
    problem:
      "Fractional and outsourced services firms (fractional CFOs, outsourced sales, specialized consultancies) depend on new client flow, and none of them have a reliable top-of-funnel. A company posting a full-time role for the work you already do is a high-intent signal, but nobody was surfacing those cleanly.",
    approach:
      "I built and run Hidden Client as a product of my own. The premise is simple: every morning at 7am, deliver a short email of matched leads from that day's job postings, with the decision-maker's contact and a personalized outreach draft in the user's voice. No dashboard, no login, no workflow to learn.",
    built:
      "A multi-source monitor across LinkedIn, Indeed, ZipRecruiter, Glassdoor, and company career pages. It feeds a fit-scoring model and an outreach drafter tuned per subscriber. Monthly fit-feedback loops keep the matches sharpening over time.",
    outcome:
      "Hidden Client is a live product at $497/month with a 60-day guarantee. Founders-pricing subscribers have converted postings into multi-month retainers, and the product now serves a growing set of fractional firms who get their pipeline in the first email of the day.",
  },
  {
    slug: "talent-systems",
    company: "Talent Systems",
    kind: "AI Opportunity Map + Custom Systems",
    headline: "34 opportunities mapped, two systems shipped",
    metric: "34",
    metricLabel: "AI opportunities identified",
    metric2: "2",
    metricLabel2: "Agents shipped to production",
    problem:
      "Talent Systems runs seven of the leading casting platforms: Casting Networks, Casting Frontier, Spotlight, Tagmin, Staff Me Up, and the Cast It products. Across 2M+ talent profiles and 15M+ auditions, manual work was piling up in places nobody had time to map. Support tickets, role verification, casting workflows, internal operations. Leadership knew AI should help. They didn't know where to start.",
    approach:
      "We ran a full-company AI opportunity audit. Cross-functional interviews across every department, workflow mapping, and ranked impact-vs-effort scoring on each candidate. The output was a prioritized list of 34 opportunities, each with a clear recommendation (buy, build, prompt, or automate).",
    built:
      "Two systems moved straight into production from the audit. The first: a support agent that triages, drafts, and resolves customer tickets at scale. The second: a casting-role verification agent that validates new roles from casting directors and pushes them through approval faster, shortening time-to-live for every posting.",
    outcome:
      "Manual review time on casting verification dropped significantly, and the support agent took over the long tail of repetitive tickets. Beyond the two shipped systems, the opportunity map became a multi-quarter AI roadmap the leadership team is still working through.",
  },
  {
    slug: "gmr-marketing",
    company: "GMR Marketing",
    kind: "In-house AI Products Practice",
    metric: "Omnicom",
    metricLabel: "experiential agency",
    headline: "AI across one of the world's leading experiential agencies",
    problem:
      "GMR Marketing (Omnicom's experiential agency, 1,300+ people across 12 countries) runs campaigns for Visa, NFL, NBA, WNBA, Google, Nissan, Cisco, Xfinity, Humana, Microsoft, Intel, Mercedes-Benz, Hershey, and more. The AI surface area spans strategy, creative, client services, and operations. The right AI answer is different in each.",
    approach:
      "As VP of AI Products, I lead the practice. We scope, prioritize, and ship AI tooling alongside the teams that use it. Strategy accelerators, operational automations, client-facing tools that plug into experiential campaigns. Multi-model by default, with the architecture and evals to pick the right tool per job.",
    built:
      "A growing portfolio of internal AI products and tools used across the agency, plus the governance, evaluation, and adoption practices that make them stick. The practice itself (how we identify opportunities, how we ship, and how we measure) is as much the work as any single system.",
    outcome:
      "GMR's teams have AI leverage in the places it matters most, without the hype tax. The practice is now a standing capability the agency sells into its most ambitious engagements.",
  },
] as const;

export const workIntro = {
  eyebrow: "Recent engagements",
  headline: "Here's what we did and how.",
  subhead:
    "A mix of company-wide audits, shipped systems, founder builds, and in-house AI practices. Each one is real work with a real outcome.",
} as const;

export const aboutContent = {
  eyebrow: "About",
  headline: "Small on purpose. Operator-led.",
  firmParagraph:
    "Infinite Play is a small AI transformation firm. We work with a handful of teams at a time. Training them, mapping where AI actually moves the needle, and building the custom systems that turn potential into production. The shape of the work follows what you need, not a fixed template.",
  jeremyParagraph:
    "Jeremy Olken is the founder. He's also currently VP of AI Products at GMR Marketing, where he leads the AI Products practice for one of the world's leading experiential marketing agencies (Visa, NFL, NBA, Google, Mercedes-Benz, Microsoft, and more). Before that, he was Head of Product Strategy at Signal and Cipher. He's also the builder behind Hidden Client.",
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
    "The best way to reach us is a LinkedIn DM. Connect with Jeremy and tell us what you're working on.",
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
