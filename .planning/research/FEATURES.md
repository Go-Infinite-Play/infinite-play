# Feature Research

**Domain:** Claude Implementation Consulting Website (Solo Practitioner / Personal Brand)
**Researched:** 2026-04-05
**Confidence:** MEDIUM-HIGH

## Feature Landscape

### Table Stakes (Visitors Expect These)

Missing any of these and the site feels amateur or untrustworthy. Visitors bounce.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Clear value proposition above the fold | 80% of potential clients check your site before engaging. They need to know in 5 seconds: who you help, what you do, why you're credible. | LOW | "I help [audience] get real value from Claude" not "AI transformation solutions" |
| Professional headshot and personal bio | Personal brand = people hire Jeremy. No face = no trust. Every successful solo consultant site (Beyond7, KIBO, JJ Englert) leads with the person. | LOW | Authentic photo, not corporate stock. Short bio proving practitioner credibility. |
| Services section with clear offerings | Visitors need to understand what they're buying. Every competitor (ClaudeImplementation, ClaudeCertified, DataNorth, KIBO, Beyond7) has a structured services grid. | MEDIUM | 3-5 service categories max. Outcome-focused naming, not capability-focused. |
| "How to work with me" / engagement process | Reduces friction and anxiety. ClaudeImplementation uses a 4-step process. KIBO uses Audit > Strategy > Implementation > Optimization. Beyond7 shows clear engagement types. | LOW | 3-4 steps. Keep it simple: Talk > Plan > Execute > Results. |
| Primary CTA: Book a call | Industry standard. Every competitor uses "Book a Free Consultation" or equivalent. This is how consulting leads convert. | LOW | Calendly or Cal.com embed. One clear action per page section. |
| Mobile-responsive design | Non-negotiable in 2026. Most traffic is mobile. | LOW | Already handled by Next.js + Tailwind stack. |
| Contact information / form | Some prospects want to email, not book a call. Must have both paths. | LOW | Email + form + booking link. Remove friction from every path. |
| SEO metadata and social cards | Decision-makers Google you. Being findable and looking polished in search results matters. | LOW | Already exists in current site. Update for new positioning. |
| Social proof / credibility markers | Testimonials, client logos, results numbers. ClaudeImplementation shows "50+ deployments, 4.9/5 satisfaction." Beyond7 shows client logos and speaking engagements. | MEDIUM | Start with whatever social proof exists. Even "helped X teams adopt Claude" works early. |
| Target audience clarity | Visitors need to self-identify. "Is this for me?" Three target audiences (SMB founders, mid-market teams, knowledge workers) need to see themselves. | LOW | Can be implicit in copy or explicit in sections. |

### Differentiators (Competitive Advantage)

These separate Infinite Play from the growing field of generic "Claude consultants."

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Claude product expertise taxonomy | Most competitors are vague about which Claude products they support. Explicitly covering Claude Chat, Teams, Enterprise, Claude Code, API, MCP, and Cowork shows depth that generalists can't match. | LOW | Product-specific pages or sections showing fluency with each Claude product. |
| Practitioner credibility ("show the work") | Beyond7's founder leads with "1,000+ hours hands-on Claude Code" and "3.6M+ automated workflow runs." JJ Englert posts real Claude projects on X. The differentiator is showing you actually use Claude daily, not just consult about it. | MEDIUM | Real examples, screenshots, before/after workflows, short case studies. Content that proves daily usage. |
| Direct, no-hype tone | PROJECT.md explicitly rejects "shady AI influencer vibes." Most competitor sites (ClaudeImplementation, ClaudeCertified) use corporate jargon and urgency tactics. Being plain-spoken and practical is rare and refreshing. | LOW | Tone is a design decision, not a feature to build. But it must be consistent across all copy. |
| Packaged service tiers with transparent scope | DataNorth publishes exact prices ($1,700-$3,300). Beyond7 publishes workshop pricing ($449). Most competitors hide pricing. Publishing "starting from" prices with clear scope pre-qualifies leads and builds trust. | MEDIUM | 3 tiers: Quick-start (assessment/setup), Implementation (workflow redesign), Ongoing (retainer). See Business Model section below. |
| Audience-specific entry points | Most consultant sites have one generic services page. Having distinct messaging for SMB founders vs mid-market teams vs knowledge workers lets each audience see themselves. | MEDIUM | Can be tabs, separate sections, or separate landing pages. Start with sections. |
| Content demonstrating expertise | Regular practical content (not thought leadership fluff). JJ Englert builds his brand through X posts showing real Claude workflows. This is "a free sample of what they'd get by working with you." | HIGH | Blog posts, short guides, or embedded social content. High complexity because it requires ongoing production. Defer heavy content system to v2. |
| Email capture with value exchange | Beyond a basic contact form. Offer something useful (Claude setup checklist, "5 workflows to automate first" guide) in exchange for email. ClaudeImplementation uses an "enterprise implementation checklist" as lead magnet. | MEDIUM | Airtable integration already exists. Need to create the lead magnet content. |
| Speed/availability indicator | Solo consultants are capacity-constrained. Showing current availability ("Currently accepting 2 new clients" or "Next available: May 2026") creates urgency and signals demand. | LOW | Simple text update. No complex system needed. |

### Anti-Features (Deliberately NOT Building)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Blog/CMS system (v1) | "Content marketing is important" | Adds build complexity, creates content debt pressure, distracts from core site launch. Most solo consultants never maintain their blog. | Static content pages for v1. Link to X/social posts for ongoing content. Revisit CMS in v2 after validating content cadence. |
| Client portal / dashboard | "Professional firms have client portals" | Way too much scope for a marketing site. Auth, sessions, project tracking = weeks of engineering. Zero lead-gen value. | Use Notion, Google Docs, or existing project tools for client work. Website is for lead gen only. |
| AI chatbot on the site | "Meta to have AI on an AI consulting site" | Gimmicky. Bad chatbots hurt credibility more than help. Visitors want to talk to Jeremy, not a bot. | Clear, fast path to book a call or send an email. |
| Pricing calculator | "Let prospects self-serve pricing" | Custom consulting doesn't calculate well. Creates anchoring problems. Pricing depends on scope discovery. | "Starting from" pricing ranges on service tiers. Detailed pricing in discovery calls. |
| Case study database | "Need extensive portfolio" | Requires multiple completed engagements to populate. Empty databases look worse than no database. | 2-3 inline case study snippets on the homepage. Expand as engagements complete. |
| Multi-page service microsites | "Each service needs its own page" | Fragments the user journey. Solo consultant sites work best as focused single-page or minimal-page experiences. | Single page with service sections, or max 3-4 pages total. |
| Certification badges / partner logos (unless real) | "ClaudeCertified and ClaudeImplementation prominently display Anthropic partnership" | Fake or inflated credibility markers backfire. If you're not a certified Anthropic partner, don't imply it. | Lead with practitioner credibility and real results instead. Apply for actual partnerships when ready. |
| Exit-intent popups | ClaudeImplementation uses them | Annoying, feels desperate, contradicts the direct/authentic brand. | Inline email capture with genuine value exchange. |
| Urgency/scarcity tactics | "Launch price!" "Only 3 spots left!" | Contradicts authentic brand positioning. ClaudeCertified uses dynamic pricing games ("$11 launch offer, regular $49"). This is the "shady AI influencer" vibe Jeremy wants to avoid. | Honest availability indicators. Real scarcity only (actual calendar availability). |

## Business Model Findings

### Service Tier Structure (Recommended)

Based on research across DataNorth, Beyond7, KIBO, ClaudeImplementation, and pricing guides from Stack Expert and Digital Applied.

**Tier 1: Claude Quick-Start (Assessment + Setup)**
- Scope: 2-4 hour engagement. Audit current workflows, identify top 3 Claude opportunities, basic setup and configuration.
- Deliverable: Written action plan + initial Claude setup
- Price range: $1,500 - $3,000
- Purpose: Low-friction entry point. Pre-qualifies for deeper engagement.

**Tier 2: Claude Implementation Sprint (1-2 weeks)**
- Scope: Workflow redesign for specific team or function. Hands-on Claude configuration (Teams, Enterprise, or Code). Training sessions for the team.
- Deliverable: Configured Claude environment, redesigned workflows, team trained
- Price range: $5,000 - $15,000 depending on team size
- Purpose: Core revenue driver. Where most clients land.

**Tier 3: Ongoing Advisory Retainer**
- Scope: Monthly check-ins, new workflow identification, team coaching, staying current with Claude updates.
- Deliverable: Monthly advisory sessions + async support
- Price range: $2,000 - $5,000/month
- Purpose: Recurring revenue. Clients who completed Tier 2 and want ongoing support.

**Tier 0 (Optional): Workshop / Training Session**
- Scope: Half-day or full-day Claude training for teams (like Beyond7's $449 Masterclass model)
- Deliverable: Hands-on training session
- Price range: $2,000 - $5,000 for private team sessions
- Purpose: Lead generation and brand building. Can convert to Tier 1/2.

### Pricing Display Strategy

Research is split on publishing exact prices vs. "contact us":
- **Publish "starting from" ranges** on the website. This pre-qualifies leads (filtering out budget mismatches) while leaving room for custom scoping.
- DataNorth publishes exact package prices and it works well for their market.
- Most enterprise-focused firms (KIBO, ClaudeImplementation) hide pricing entirely.
- For Jeremy's target market (SMBs, mid-market teams, knowledge workers), transparency builds trust and aligns with the direct/authentic brand.

### Engagement Structure

Successful pattern observed across competitors:
1. **Free discovery call** (15-30 min) - Qualify the lead, understand the problem
2. **Paid assessment** (Tier 1) - Delivers immediate value, builds relationship
3. **Implementation project** (Tier 2) - Core engagement
4. **Retainer** (Tier 3) - Ongoing relationship

This ladder reduces buyer risk at each step. Nobody commits $15K upfront. They commit to a call, then a $1,500 assessment, then expand.

## Feature Dependencies

```
[Clear Value Proposition]
    └──requires──> [Defined Service Offerings]
                       └──requires──> [Target Audience Clarity]

[Packaged Service Tiers]
    └──requires──> [Defined Service Offerings]
    └──requires──> [Engagement Process]

[Email Capture with Value Exchange]
    └──requires──> [Lead Magnet Content]
    └──enhances──> [Contact Form] (existing Airtable integration)

[Social Proof / Credibility]
    └──enhances──> [Practitioner Credibility]
    └──enhances──> [Service Tiers] (validates pricing)

[Claude Product Expertise Taxonomy]
    └──enhances──> [Service Offerings]
    └──enhances──> [Practitioner Credibility]

[Content Demonstrating Expertise]
    └──requires──> [Practitioner Credibility]
    └──conflicts──> [Blog/CMS System] (in v1 — don't build CMS, use static or social)
```

### Dependency Notes

- **Service Offerings require Target Audience Clarity:** Can't describe services compellingly without knowing who you're talking to. Define audiences first, then frame services in their language.
- **Service Tiers require Engagement Process:** The "how to work with me" flow determines what tiers make sense and how they ladder.
- **Email Capture requires Lead Magnet Content:** The value exchange only works if there's something genuinely useful to offer. A "Claude Setup Checklist" or "5 Workflows to Automate First" guide.
- **Content conflicts with CMS in v1:** Don't build a blog system before validating that you'll produce content consistently. Static pages or embedded social posts first.

## MVP Definition

### Launch With (v1)

Minimum viable site that generates leads and communicates the repositioned brand.

- [ ] **Repositioned hero section** — "I help [audience] get real value from Claude" with Jeremy's photo. The single most important element.
- [ ] **Services section (3-4 offerings)** — Quick-Start, Implementation Sprint, Advisory Retainer. Outcome-focused descriptions with "starting from" pricing.
- [ ] **How to work with me section** — 3-4 step process visual. Reduces anxiety, sets expectations.
- [ ] **About / credibility section** — Jeremy's background, why Claude specifically, practitioner proof points. Authentic and direct.
- [ ] **Primary CTA: Book a discovery call** — Calendly/Cal.com integration. Appears in hero and after each major section.
- [ ] **Secondary CTA: Email capture** — For visitors not ready to book. Requires a simple lead magnet (even a one-page checklist).
- [ ] **Target audience signals** — Copy that speaks to SMB founders, mid-market teams, and knowledge workers. They need to see themselves.
- [ ] **Claude product coverage** — Brief section or service details showing expertise across Chat, Teams, Enterprise, Code, API.
- [ ] **Updated SEO and social cards** — Reflect new positioning for infiniteplay.ai.

### Add After Validation (v1.x)

Features to add once the site is live and generating some leads.

- [ ] **Inline case studies / results** — Add as real client engagements complete. 2-3 short before/after stories.
- [ ] **Audience-specific entry points** — Tabs or sections tailored to each audience segment once messaging is validated.
- [ ] **Richer lead magnet** — A proper guide or checklist PDF, gated behind email capture.
- [ ] **Testimonial section** — Add as testimonials are collected from real clients.
- [ ] **Availability indicator** — "Currently accepting new clients" or "Next available: [month]."
- [ ] **Speaking / media section** — If Jeremy starts doing talks, podcasts, or workshops.

### Future Consideration (v2+)

Features to defer until product-market fit and steady client flow established.

- [ ] **Blog / content system** — Only after proving consistent content production cadence (3+ months of regular posting elsewhere).
- [ ] **Workshop / training landing pages** — If workshops become a significant revenue stream.
- [ ] **Resource library** — Guides, templates, checklists as a lead generation engine.
- [ ] **Client referral system** — Formalized referral incentives once client base is established.

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Repositioned hero with photo | HIGH | LOW | P1 |
| Services section with tiers | HIGH | MEDIUM | P1 |
| How to work with me process | HIGH | LOW | P1 |
| Book a call CTA (Calendly) | HIGH | LOW | P1 |
| About / credibility section | HIGH | LOW | P1 |
| Updated SEO metadata | MEDIUM | LOW | P1 |
| Email capture + lead magnet | MEDIUM | MEDIUM | P1 |
| Claude product expertise display | MEDIUM | LOW | P1 |
| Target audience clarity in copy | HIGH | LOW | P1 |
| Inline case studies | HIGH | LOW | P2 |
| Audience-specific sections | MEDIUM | MEDIUM | P2 |
| Testimonials section | MEDIUM | LOW | P2 |
| Availability indicator | LOW | LOW | P2 |
| Blog / content system | MEDIUM | HIGH | P3 |
| Workshop landing pages | LOW | MEDIUM | P3 |
| Resource library | MEDIUM | HIGH | P3 |

## Competitor Feature Analysis

| Feature | ClaudeImplementation | ClaudeCertified | Beyond7 | DataNorth | KIBO | Our Approach |
|---------|---------------------|-----------------|---------|-----------|------|--------------|
| Positioning | Enterprise Claude at scale | Certified Anthropic partner | Practitioner + educator | Broad AI consultancy | Enterprise dev teams | Solo practitioner, Claude specialist, authentic |
| Service count | 12 services | 6 services | 4 offerings | 4 packages | 6 services | 3-4 tiers (keep it simple) |
| Pricing display | Hidden | Exam prep only ($11-49) | Workshop only ($449) | All published ($1.7K-3.3K) | Hidden | "Starting from" ranges published |
| Primary CTA | Free strategy call | Free consultation | Contact | Callback form | WhatsApp chat | Book a discovery call |
| Social proof | "50+ deployments" stats | Certification badge | Client logos + speaking | ISO certs + testimonials | None visible | Practitioner proof (real usage, results) |
| Personal brand | Team-based | Solo + cert authority | Strong personal (founder-led) | Company brand | Company brand | Strong personal (Jeremy) |
| Content | Blog | Blog + exam prep | LinkedIn feed embedded | Blog | Minimal | Social posts + static content (v1) |
| Tone | Corporate/enterprise | Authority/certification | Practitioner/educator | Professional/European | Technical/enterprise | Direct/practical/authentic |
| Target audience | Enterprise | Certification seekers + enterprise | Teams + leaders | EU businesses | CTOs + dev teams | SMB founders, mid-market teams, knowledge workers |
| Engagement model | Custom | Custom + products | Workshops + advisory | Packages | Custom | Tiered packages with clear ladder |

## Key Insights from Research

1. **Beyond7 is the closest comparable** to what Jeremy wants to build. Founder-led, practitioner-credibility-first, workshop + advisory model, direct tone. Key differences: Beyond7 is Hamburg-based, targets larger orgs, and has established speaking circuit.

2. **JJ Englert builds brand through content, not a services website.** His X presence is his lead generation engine. He shows real Claude projects, shares tips, and builds community. The lesson: the website is necessary but content/social presence drives traffic to it.

3. **The market is splitting into two camps:** Enterprise players (ClaudeImplementation, KIBO) with hidden pricing and complex service menus, and accessible practitioners (Beyond7, DataNorth) with transparent pricing and focused offerings. Jeremy should be firmly in camp two.

4. **"Starting from" pricing is the sweet spot** for this market. SMB founders and knowledge workers need to know if they can afford you before booking a call. Enterprise clients expect custom quotes. Showing ranges serves both.

5. **The engagement ladder is critical.** Every successful consultant structures: free call > paid assessment > implementation > retainer. Don't try to close $15K on the first interaction.

## Sources

- [ClaudeCertified.com](https://claudecertified.com/) - Anthropic certified consulting partner site
- [ClaudeImplementation.com](https://www.claudeimplementation.com/) - Enterprise Claude implementation consulting
- [Beyond7.ai](https://beyond7.ai/en/) - Agentic work workshops and Claude Code training
- [KIBO Studios Claude Code Consulting](https://www.kibostudios.com/en/claude-code) - Enterprise Claude Code services
- [DataNorth Claude Consulting](https://datanorth.ai/service/consultancy/claude) - Claude consultancy with published pricing
- [JJ Englert on X](https://x.com/JJEnglert) - Claude/AI community builder and content creator
- [Stack Expert: How to Structure & Price AI Consulting](https://stack.expert/blog/ai-consulting-proposals-that-close) - Pricing tiers and packaging guide
- [Digital Applied: AI Micro-Consulting Guide](https://www.digitalapplied.com/blog/ai-micro-consulting-premium-rates-solo-guide) - Solo practitioner pricing and engagement models
- [Consulting Success: Best Consulting Websites](https://www.consultingsuccess.com/best-consulting-websites) - Website conversion best practices
- [Nicola Lazzari: AI Consultant Pricing US 2025](https://nicolalazzari.ai/guides/ai-consultant-pricing-us) - Rate benchmarks
- [Anthropic Service Partners](https://claude.com/partners/services) - Official Claude partner directory

---
*Feature research for: Claude Implementation Consulting Website*
*Researched: 2026-04-05*
