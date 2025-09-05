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
    title: "AI Discovery",
    subtitle: "Understand Your Current State",
    description: "We conduct in-depth interviews with department heads and team members to map your existing workflows and identify AI opportunities.",
    deliverables: [
      "Process mapping documentation",
      "AI opportunity assessment", 
      "Readiness evaluation report",
      "Priority matrix for implementation"
    ],
    icon: "Search"
  },
  {
    number: "02", 
    title: "Strategic Recommendations",
    subtitle: "Design Your AI Roadmap",
    description: "We provide a comprehensive strategy for AI integration, including tool selection, build vs. buy decisions, and implementation timeline.",
    deliverables: [
      "Custom AI strategy playbook",
      "Tool recommendations & comparisons",
      "ROI projections",
      "Change management plan"
    ],
    icon: "Target"
  },
  {
    number: "03",
    title: "Implementation & Scale", 
    subtitle: "Build and Deploy Solutions",
    description: "We handle the technical implementation, from integrating AI tools to building custom solutions, while ensuring your team is trained and supported.",
    deliverables: [
      "Custom AI solution development",
      "Tool integration & automation", 
      "Team training programs",
      "Ongoing optimization support"
    ],
    icon: "Rocket"
  }
] as const;

// Services
export const services = [
  {
    title: "AI Readiness Assessment",
    description: "Evaluate your organization's AI maturity and identify quick wins and long-term opportunities",
    icon: "BarChart3"
  },
  {
    title: "Workflow Automation", 
    description: "Streamline repetitive tasks with AI and connect your tools for seamless operations",
    icon: "Workflow"
  },
  {
    title: "Custom AI Development",
    description: "Build bespoke AI solutions for your unique needs, from chatbots to predictive analytics", 
    icon: "Code"
  },
  {
    title: "Tool Selection & Integration",
    description: "Navigate the AI tool landscape and implement the right solutions for your stack",
    icon: "Puzzle"
  },
  {
    title: "Team Training & Enablement", 
    description: "Upskill your workforce on AI tools and create AI champions within your organization",
    icon: "Users"
  },
  {
    title: "AI Governance & Strategy",
    description: "Develop responsible AI policies and ensure compliance and ethical AI use",
    icon: "Shield"
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