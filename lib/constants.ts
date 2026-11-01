// lib/constants.ts
// Single source of truth for all site copy, links, and structured content.

export const siteConfig = {
  name: "Infinite Play",
  title: "Infinite Play | Jeremy Olken",
  description:
    "I'm Jeremy Olken. I help small businesses figure out what's slowing them down, then build the software and automations that fix it.",
  url: "https://infiniteplay.ai",
  keywords: [
    "small business consulting",
    "custom software",
    "business automation",
    "AI automation",
    "internal tools",
    "Denver consultant",
    "Jeremy Olken",
  ],
} as const;

export const contactInfo = {
  email: "jeremy@infiniteplay.ai",
  mailto: "mailto:jeremy@infiniteplay.ai?subject=Hi%20Jeremy",
  linkedin: "https://www.linkedin.com/in/jeremyolken/",
  location: "Denver, CO",
} as const;

export const availability = {
  accepting: true,
  text: "Taking on new projects",
} as const;

export const heroContent = {
  headlineLead: "I make computers do your",
  headlineAccent: "boring stuff.",
  subhead:
    "I'm Jeremy. I build custom software and automations for small businesses, so you can get back to the parts of the job you actually like.",
  cta: "Email me",
} as const;

export const whyContent = {
  label: "Why now",
  headlineLead: "Small businesses can finally",
  headlineAccent: "act like big ones.",
  paragraphs: [
    "Big companies have always had software built around exactly how they work. Everyone else rented the same generic tools and bent their business to fit them.",
    "AI changed the math. Stuff that used to take a dev team and a six-figure budget, I can now build for a fraction of that. Custom software, made for how you run things. That's new, and it's what I do.",
  ],
} as const;

export const services = [
  {
    number: "1",
    title: "Small business consulting",
    body:
      "Walk me through how your business actually runs. I'll find the parts that eat your week and tell you straight which ones are worth fixing and which aren't.",
  },
  {
    number: "2",
    title: "Custom software",
    body:
      "When off-the-shelf tools don't fit, I build the one that does. Internal tools, customer portals, web apps. You own it when we're done.",
  },
  {
    number: "3",
    title: "Automation",
    body:
      "The copy and paste, the follow-ups, the Monday report. I connect the tools you already use so that work happens on its own.",
  },
] as const;

export const workItems = [
  {
    name: "Hidden Client",
    tag: "Agentic lead engine",
    status: "Retired",
    who: "Lead generation for Behm Consulting Group.",
    body:
      "I built an engine that crawled thousands of websites every day looking for job listings: full-time roles Behm could cover instead. The best matches landed in their inbox each morning with outreach already drafted. I've since shut it down, but it did its job.",
  },
  {
    name: "Talent Systems",
    tag: "AI audit + 2 agents",
    status: "In production",
    who: "The company behind Casting Networks and Spotlight, the casting platforms used across film, TV, theater, and commercials.",
    body:
      "I ran an AI audit across the whole company to find where it would actually help. Then I built two agents off that list: one handles customer support, the other checks new casting roles before they go live. Both run in production today.",
  },
  {
    name: "5280 Community Waste Solutions",
    tag: "Custom portal",
    who: "Valet trash and recycling for apartment communities around Denver.",
    body:
      "They could have bought white-label software and spent years working around it. Instead I built them a portal shaped around how they actually run the business. It does what they need and nothing they don't.",
  },
] as const;

export const aboutContent = {
  label: "Who I am",
  headline: "One guy. No handoffs.",
  paragraphs: [
    "By day I'm at GMR Marketing, leading AI implementation and building software products for global hospitality events. Big-company problems at big-company scale.",
    "Infinite Play is where I bring that same stuff to small businesses. You talk to me, I build it, and you never get passed off to an account manager. I keep it to a few projects at a time so each one gets real attention.",
  ],
} as const;

export const contactContent = {
  headline: "Tell me what's driving you nuts.",
  body: "A few lines about your business is plenty. I read every email myself.",
} as const;
