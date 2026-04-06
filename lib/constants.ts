// Color palette
export const colors = {
  primary: "#FB5B3D",
  darkBg: "#1A1A1A",
  darkerBg: "#0D0D0D",
  lightText: "#FAFAFA",
  mutedText: "#A3A3A3",
  accentLight: "#FFF7F5",
  borderDivider: "#2A2A2A",
  successGreen: "#10B981",
  cardBg: "#1F1F1F",
} as const;

// Navigation items
export const navigationItems = [
  { href: "#how-we-work", label: "How We Work" },
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
] as const;

// Hero content
export const heroContent = {
  headline: "Your Team Has Claude.\nNow Make It Actually Work.",
  subhead: "I help teams move past the experimentation phase and build real Claude workflows that save hours every week.",
  primaryCta: "Book a Discovery Call",
  secondaryCta: "See How It Works",
  secondaryCtaHref: "#how-we-work",
} as const;

// Audience segments (COPY-02)
export const audienceSectionIntro = {
  heading: "Sound Familiar?",
  subheading: "Most teams hit the same wall with Claude. Here is how I help.",
} as const;

export const audienceSegments = [
  {
    id: "leaders",
    icon: "Building2",
    label: "Business Leaders",
    problem: "You bought Claude licenses but adoption stalled after the first week.",
    painPoint: "You know AI should be saving your team time, but nobody is using it consistently and you can not measure the ROI.",
    cta: "See services",
    ctaHref: "#services",
  },
  {
    id: "ops",
    icon: "Users",
    label: "Operations & Team Leads",
    problem: "Your team is drowning in repetitive work that Claude could handle.",
    painPoint: "Reports, status updates, research synthesis — you know Claude can help but you do not have time to figure out how.",
    cta: "See results",
    ctaHref: "#results",
  },
  {
    id: "technical",
    icon: "Briefcase",
    label: "Technical Teams",
    problem: "You have tried Claude Code or the API but can not get it to work with your stack.",
    painPoint: "MCP servers, custom instructions, API integrations — you need someone who has done this before.",
    cta: "See expertise",
    ctaHref: "#expertise",
  },
] as const;

// Hero rotating words
export const heroRotatingWords = [
  "Transformation",
  "Strategy", 
  "Implementation",
  "Automation",
  "Innovation"
] as const;

// Company stats
export const stats = [
  { label: "Discovery Sessions Completed", value: "50+", suffix: "" },
  { label: "Processes Optimized", value: "200+", suffix: "" },
  { label: "ROI Average", value: "3.5", suffix: "x" },
  { label: "Implementation Time", value: "<90", suffix: " days" },
] as const;

// Process steps
export const processSteps = [
  {
    number: "01",
    title: "Talk",
    description: "Book a free 30-minute discovery call. I'll learn about your team, your tools, and where Claude fits.",
    icon: "MessageSquare"
  },
  {
    number: "02",
    title: "Plan",
    description: "I'll put together a custom implementation roadmap — specific Claude workflows mapped to your actual use cases.",
    icon: "Map"
  },
  {
    number: "03",
    title: "Execute",
    description: "Hands-on setup, training, and workflow integration. I work alongside your team, not from the sidelines.",
    icon: "Rocket"
  },
  {
    number: "04",
    title: "Results",
    description: "Faster workflows, better output, and a team that's confident using Claude every day.",
    icon: "CheckCircle"
  }
] as const;

// Services
export const services = [
  {
    title: "Team Workshop",
    subtitle: "Get your whole team using Claude effectively in one day",
    description: "Half-day or full-day hands-on training tailored to your team's actual workflows. Everyone leaves with prompts, templates, and confidence.",
    deliverable: "Custom prompt library + workflow templates for your team",
    audience: "Teams that bought Claude but haven't seen adoption stick",
    startingFrom: "$2,000",
    icon: "GraduationCap",
    duration: "Half-day or full-day"
  },
  {
    title: "Claude Quick-Start",
    subtitle: "From zero to productive with Claude in one week",
    description: "A focused 2-4 hour assessment of your workflows, followed by workspace setup, prompt libraries, and hands-on training so your team is productive immediately.",
    deliverable: "Action plan + configured workspace + prompt library",
    audience: "Small teams and founders ready to start using Claude now",
    startingFrom: "$1,500",
    icon: "Zap",
    duration: "2-4 hours + follow-up"
  },
  {
    title: "Implementation Sprint",
    subtitle: "Rebuild your core workflows around Claude",
    description: "A 1-2 week deep engagement where I embed with your team, redesign key processes around Claude, set up the environment, and train everyone on the new workflows.",
    deliverable: "Configured environment + redesigned workflows + trained team",
    audience: "Growing companies ready to make Claude a real part of how they work",
    startingFrom: "$5,000",
    icon: "Code",
    duration: "1-2 weeks"
  },
  {
    title: "Ongoing Advisory",
    subtitle: "A Claude expert in your corner, month after month",
    description: "Monthly check-ins, async support, and continuous optimization as your team's Claude usage matures. New workflows, troubleshooting, and strategy as Anthropic ships new features.",
    deliverable: "Monthly strategy sessions + async support + new workflow builds",
    audience: "Teams scaling Claude usage who want a dedicated expert on call",
    startingFrom: "$2,000/mo",
    icon: "RefreshCw",
    duration: "Monthly"
  }
] as const;

// Value propositions
export const valueProps = [
  {
    title: "Practical, Not Theoretical",
    description: "We focus on implementable solutions that work in the real world",
    icon: "CheckCircle"
  },
  {
    title: "Size-Appropriate Solutions", 
    description: "Tailored for small to mid-market companies, not enterprise complexity",
    icon: "Target"
  },
  {
    title: "End-to-End Partnership",
    description: "From strategy through implementation and beyond",
    icon: "ArrowRight"
  },
  {
    title: "ROI-Focused Approach",
    description: "Every recommendation tied to measurable business outcomes", 
    icon: "TrendingUp"
  }
] as const;

// Founder credentials
export const credentials = [
  "Strategic Leadership",
  "Process Optimization Expert",
  "EOS Implementer", 
  "AI Integration Specialist"
] as const;

// Footer links
export const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#how-we-work" },
    { label: "Contact", href: "#contact" }
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "AI Readiness Quiz", href: "#" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" }
  ]
} as const;

// Contact information
export const contactInfo = {
  email: "jeremy@infiniteplay.ai",
  linkedin: "https://www.linkedin.com/in/jeremyolken/",
  location: "Denver, CO"
} as const;

// Claude product taxonomy (COPY-04)
export const claudeProducts = [
  {
    id: "chat",
    name: "Claude Chat",
    icon: "MessageSquare",
    category: "individual",
    description: "The conversational interface millions use daily for writing, analysis, and problem-solving.",
    howJeremyHelps: "I teach teams to move beyond basic prompting — custom instructions, Projects for context management, and workflows that replace hours of manual work."
  },
  {
    id: "teams",
    name: "Claude for Teams",
    icon: "Users",
    category: "team",
    description: "Shared workspace with team-wide conversations, centralized billing, and admin controls.",
    howJeremyHelps: "I set up team workspaces with shared prompt libraries, onboard every team member, and build adoption habits that stick past week one."
  },
  {
    id: "enterprise",
    name: "Claude Enterprise",
    icon: "Building2",
    category: "team",
    description: "SSO, SCIM provisioning, expanded context windows, and enterprise-grade security for large organizations.",
    howJeremyHelps: "I design the rollout strategy, configure workspaces by department, and create training programs scaled to hundreds of users."
  },
  {
    id: "code",
    name: "Claude Code",
    icon: "Terminal",
    category: "developer",
    description: "An agentic coding tool that lives in your terminal — reads your codebase, runs commands, and writes code alongside you.",
    howJeremyHelps: "I configure Claude Code for your repo with custom CLAUDE.md instructions, slash commands, and MCP integrations that make it a real team member."
  },
  {
    id: "api",
    name: "Claude API",
    icon: "Code",
    category: "developer",
    description: "Direct access to Claude models for building custom applications, automations, and integrations.",
    howJeremyHelps: "I architect API-powered workflows — from automated document processing to custom internal tools — so Claude works even when nobody is prompting."
  },
  {
    id: "mcp",
    name: "MCP (Model Context Protocol)",
    icon: "Plug",
    category: "developer",
    description: "An open standard that connects Claude to your tools, databases, and internal systems.",
    howJeremyHelps: "I build custom MCP servers that give Claude access to your Notion, Slack, databases, and internal APIs — turning it from a chatbot into an integrated team member."
  }
] as const;

// Workflow before/after examples (COPY-05, TRUST-04)
export const workflowExamples = [
  {
    id: "weekly-reports",
    title: "Weekly Status Reports",
    context: "Operations team at a 50-person company",
    before: "Manager spends 3 hours every Monday compiling updates from Slack, email, and project tools into a status report",
    after: "Claude with MCP pulls from Slack and Linear, drafts the report in 10 minutes. Manager reviews and sends in 20 minutes total.",
    timeSaved: "2.5 hours/week",
    claudeProduct: "MCP + Claude Chat"
  },
  {
    id: "code-review",
    title: "Code Review and Documentation",
    context: "Engineering team adopting AI-assisted development",
    before: "Senior devs spend 6+ hours per week reviewing PRs and writing documentation nobody reads",
    after: "Claude Code reviews PRs against team standards, suggests fixes, and generates documentation that stays in sync with the code.",
    timeSaved: "4 hours/week per senior dev",
    claudeProduct: "Claude Code"
  },
  {
    id: "customer-research",
    title: "Customer Research Synthesis",
    context: "Product team at a growing SaaS company",
    before: "PM manually reads 200+ support tickets and NPS responses, writes a quarterly insights deck over 2 days",
    after: "Claude analyzes all tickets via API, identifies patterns, and produces a structured insights report with citations. PM refines in 2 hours.",
    timeSaved: "1.5 days/quarter",
    claudeProduct: "Claude API"
  },
  {
    id: "onboarding-docs",
    title: "New Hire Onboarding",
    context: "HR team struggling with outdated documentation",
    before: "New hires get a stale Notion wiki and figure things out by asking teammates, slowing everyone down for 2-3 weeks",
    after: "Claude-powered onboarding assistant (via MCP) answers questions from live company docs, Slack history, and process wikis. New hires are productive in days.",
    timeSaved: "1-2 weeks ramp time",
    claudeProduct: "MCP + Claude Teams"
  }
] as const;

// Trust bar credibility markers (TRUST-02)
export const trustBarItems = [
  { label: "Teams Helped with Claude", value: "20+" },
  { label: "Claude Implementations", value: "50+" },
  { label: "Hours Saved for Clients", value: "1,000+" },
] as const;

// Results case study snippets (TRUST-03)
export const resultsItems = [
  {
    title: "Operations Team Unburied",
    context: "50-person professional services firm",
    before: "Team leads spent 4+ hours every Monday compiling status reports from Slack, email, and project tools",
    after: "Claude with MCP integrations drafts weekly reports automatically — manager reviews and sends in 20 minutes",
    result: "3.5 hours saved per week per manager",
    metric: "Weekly Reports",
  },
  {
    title: "Engineering Velocity Unlocked",
    context: "Growing SaaS engineering team",
    before: "Senior developers spent 6+ hours weekly reviewing PRs and writing documentation nobody maintained",
    after: "Claude Code reviews against team standards, generates documentation that stays in sync with the codebase",
    result: "4 hours reclaimed per senior dev per week",
    metric: "Code Review & Docs",
  },
  {
    title: "Customer Insights on Demand",
    context: "Product team at a B2B SaaS company",
    before: "PM manually read 200+ support tickets quarterly, spent 2 full days producing an insights deck",
    after: "Claude API analyzes all tickets, identifies patterns, and produces a structured report with citations",
    result: "2-day process reduced to 2 hours",
    metric: "Research Synthesis",
  },
] as const;

// About bio content (TRUST-01)
export const aboutBio = {
  name: "Jeremy Olken",
  location: "Denver, CO",
  headline: "I help teams stop experimenting with Claude and start getting real results.",
  paragraphs: [
    "I use Claude every single day — not as a novelty, but as a core part of how I work. Claude Code is my pair programmer. Claude Projects manages my research. MCP servers connect Claude to my tools. I don't just consult on Claude implementation — I live it.",
    "Before focusing on Claude, I spent years in operations and process optimization helping companies figure out how to actually get things done. That background means I don't start with the technology — I start with your workflows, your bottlenecks, and your team's real problems.",
    "I started Infinite Play because I kept seeing the same pattern: companies excited about AI but stuck in the experimentation phase. They'd buy Claude licenses, run a few demos, and then... nothing changed. I help teams get past that wall.",
  ],
  skills: [
    "Claude Chat & Projects",
    "Claude for Teams & Enterprise",
    "Claude Code & MCP",
    "API Integrations",
    "Workflow Design",
    "Team Training",
  ],
} as const;

// Meta information
export const siteConfig = {
  name: "Infinite Play",
  description: "Transform your business with AI. We help small to mid-market companies discover, implement, and scale AI solutions through our proven three-step process.",
  tagline: "Transforming businesses, one AI solution at a time.",
  keywords: [
    "AI consulting",
    "AI transformation", 
    "business automation",
    "AI implementation",
    "small business AI",
    "AI strategy"
  ]
} as const;