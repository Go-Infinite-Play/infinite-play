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
  { href: "#about", label: "About" },
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