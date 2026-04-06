// Hero content -- above-the-fold positioning copy
export const heroContent = {
  headline: "I help teams get real value from Claude",
  subhead: "Setup, workflow redesign, and hands-on training for teams that want to actually use Claude — not just talk about it.",
  primaryCta: "Book a Discovery Call",
  secondaryCta: "See What I Offer",
  secondaryCtaHref: "#services",
} as const

// Navigation items -- updated for new section order
export const navigationItems = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
] as const

// TrustBar placeholder items
export const trustBarItems = [
  { label: "Teams Helped", value: "20+" },
  { label: "Claude Implementations", value: "50+" },
  { label: "Client Satisfaction", value: "100%" },
] as const

// Problem section pain points
export const problemPoints = [
  {
    title: "Bought Claude, Now What?",
    description: "Your team has access to Claude but nobody knows how to use it beyond basic chat.",
    icon: "HelpCircle",
  },
  {
    title: "AI Pilot Graveyard",
    description: "You have tried AI tools before but nothing stuck past the first week.",
    icon: "Archive",
  },
  {
    title: "Falling Behind",
    description: "Competitors are shipping faster with AI while your team is still copy-pasting into ChatGPT.",
    icon: "TrendingDown",
  },
] as const

// Process steps -- simplified for Claude consulting
export const processSteps = [
  {
    number: "01",
    title: "Talk",
    description: "30-minute discovery call to understand your team, tools, and goals.",
    icon: "MessageSquare",
  },
  {
    number: "02",
    title: "Plan",
    description: "Custom implementation roadmap with specific Claude workflows for your use cases.",
    icon: "Map",
  },
  {
    number: "03",
    title: "Execute",
    description: "Hands-on setup, training, and workflow integration with your team.",
    icon: "Rocket",
  },
  {
    number: "04",
    title: "Results",
    description: "Measurable outcomes: faster workflows, better output, confident team.",
    icon: "CheckCircle",
  },
] as const

// Services -- placeholder for Phase 4 detail
export const services = [
  {
    title: "Quick-Start Setup",
    description: "Get your team productive with Claude in one week. Workspace setup, prompt libraries, and hands-on training.",
    icon: "Zap",
  },
  {
    title: "Implementation Sprint",
    description: "Deep workflow redesign over 2-4 weeks. We rebuild your core processes around Claude.",
    icon: "Code",
  },
  {
    title: "Ongoing Retainer",
    description: "Monthly partnership for teams scaling Claude usage. New workflows, training, and optimization.",
    icon: "RefreshCw",
  },
] as const

// Results section placeholder items
export const resultsItems = [
  {
    before: "4 hours drafting proposals",
    after: "45 minutes with Claude-assisted workflow",
    metric: "82% faster",
  },
  {
    before: "Manual data analysis in spreadsheets",
    after: "Automated analysis pipeline with Claude",
    metric: "10x throughput",
  },
  {
    before: "Inconsistent customer responses",
    after: "Brand-consistent replies in seconds",
    metric: "3x response speed",
  },
] as const

// Footer links
export const footerLinks = {
  company: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "About", href: "#about" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const

// Contact information
export const contactInfo = {
  email: "jeremy@infiniteplay.ai",
  linkedin: "https://www.linkedin.com/in/jeremyolken/",
  location: "Denver, CO",
} as const

// Site config
export const siteConfig = {
  name: "Infinite Play",
  description: "Claude implementation consulting -- helping teams get real value from Claude.",
  tagline: "Claude Implementation Consulting",
} as const
