# Phase 1: Design System & Layout Foundation - Research

**Researched:** 2026-04-05
**Domain:** CSS design tokens, Tailwind CSS v4, Framer Motion animations, Next.js component architecture
**Confidence:** HIGH

## Summary

This phase establishes the visual foundation and section architecture for the Infinite Play marketing site. The existing codebase already has the core stack installed and working (Next.js 15, Tailwind CSS v4, Framer Motion, shadcn/ui configured). The primary work is: (1) restructuring CSS custom properties in `globals.css` to match the new slate-based color palette from the UI spec, (2) rewriting `lib/animations.ts` to remove decorative animations and add the new `sectionFadeIn` variant, (3) restructuring `app/page.tsx` to follow the buyer decision journey section order, (4) creating three new components (TrustBar, ProblemSection, ResultsSection) and rewriting four existing ones (Hero, Services, Process, About), and (5) installing shadcn/ui components that are configured but not yet present on disk.

The existing code uses a dark-mode-first design with custom color names (`bg-darker-bg`, `text-muted-text`). The new design is light-mode-first with standard shadcn/ui semantic tokens (`bg-background`, `text-foreground`, `bg-muted`). The layout.tsx currently sets `className="dark"` on the `<html>` element -- this must be removed to switch to light mode. The current `globals.css` has both dark-mode custom utility classes and custom color variables that need to be replaced with the UI spec's slate-based palette.

**Primary recommendation:** Work in layers -- design tokens first (globals.css), then animation cleanup (animations.ts), then component rewrites/creation, then page assembly (page.tsx). Each layer is independently testable via `npm run build`.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Neutral/slate base with one accent color -- clean, professional, content-first
- Keep Inter + Plus Jakarta Sans (already loaded, professional, clean)
- Use Tailwind defaults (4px base) for spacing scale
- Set up CSS variables for all colors now, dark mode toggle deferred to Phase 9
- New section order: Hero > TrustBar > Problem > Services > Process > Results > About > CTA > Footer
- New components: TrustBar, ProblemSection, ResultsSection
- Rewrite: Hero, Services, Process, About
- Keep: Navigation, Footer, CTA (with updates)
- Descriptive component names matching content purpose
- Placeholder copy that shows structure -- real copy comes in Phases 2-6
- Subtle, content-enhancing animations only -- fade-in on scroll, no floating orbs or decorative animations
- Intersection Observer-triggered fade-in-up per section -- standard, performant
- Keep existing animations.ts patterns, simplify variants -- reuse what works, remove excess
- Simple staggered fade-in for hero elements only on page load

### Claude's Discretion
- Exact accent color choice (within the neutral/slate + one accent direction)
- Specific spacing values between sections
- Animation easing curves and durations
- How to structure CSS custom properties in globals.css

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| DSGN-01 | Clean, minimal website redesign -- content-first, no clutter, personal brand aesthetic | UI spec defines complete color palette (slate base + #FB5B3D accent), typography scale, spacing tokens, 60/30/10 color application rule. Remove floating orbs, rotating words, dark gradients. |
| DSGN-04 | Section architecture following buyer decision journey -- Hero > Trust > Problem > Services > Process > Results > About > CTA | UI spec defines 10-component section order with New/Rewrite/Keep status for each. Layout rules specify 1200px max-width, alternating backgrounds, section padding. |
| DSGN-07 | Framer Motion animations refined -- purposeful animations that enhance content, not distract | Animation contract specifies 6 retained variants, 9 removed variants, 1 new variant (sectionFadeIn). Rules: trigger once, no above-fold animation, no decorative motion, prefers-reduced-motion support. |
</phase_requirements>

## Project Constraints (from CLAUDE.md)

- **Framework:** Next.js 15 with App Router -- no changes
- **Build tool:** Turbopack -- use `npm run build` and `npm run dev` for verification
- **Styling:** Tailwind CSS v4 with shadcn/ui (New York style, neutral base, CSS variables)
- **Animations:** Framer Motion -- already installed (v12.23.12)
- **Fonts:** Inter + Plus Jakarta Sans via `next/font/google`
- **Icons:** Lucide React
- **TypeScript:** Strict mode, `@/*` path alias
- **Components:** `"use client"` for interactive components, server components for page/layout
- **Content separation:** Static content in `lib/constants.ts`, animation variants in `lib/animations.ts`
- **Naming:** PascalCase components, camelCase utils, kebab-case directories
- **Import style:** Always use `@/` alias, no relative `../` imports

## Standard Stack

### Core (already installed -- no changes)
| Library | Installed Version | Latest | Purpose | Why Standard |
|---------|-------------------|--------|---------|--------------|
| next | 15.5.2 | 16.2.2 | Framework | Locked -- do not upgrade mid-project |
| react | 19.1.0 | 19.1.0 | UI rendering | Current |
| tailwindcss | 4.x | 4.2.2 | Utility CSS | Locked |
| framer-motion | 12.23.12 | 12.38.0 | Animations | Locked -- minor version difference only |
| lucide-react | 0.542.0 | latest | Icons | Current enough |
| class-variance-authority | 0.7.1 | 0.7.1 | Component variants | shadcn dependency |
| clsx | 2.1.1 | 2.1.1 | Class composition | shadcn dependency |
| tailwind-merge | 3.3.1 | 3.3.1 | Class dedup | shadcn dependency |

### Supporting (install via shadcn CLI)
| Component | Status | Install Command |
|-----------|--------|-----------------|
| button | Not on disk | `npx shadcn@latest add button` |
| card | Not on disk | `npx shadcn@latest add card` |
| badge | Not on disk | `npx shadcn@latest add badge` |
| separator | Not on disk | `npx shadcn@latest add separator` |
| input | Not on disk | `npx shadcn@latest add input` |
| textarea | Not on disk | `npx shadcn@latest add textarea` |

**Note:** The `components/ui/` directory does not exist yet despite `components.json` being configured. All shadcn components must be installed fresh.

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| framer-motion `whileInView` | react-intersection-observer + CSS | Extra dependency; framer-motion already handles this well with built-in `whileInView` prop |
| CSS custom properties | Tailwind theme extension | CSS vars are the shadcn/ui standard and already configured in globals.css |

**Installation:**
```bash
npx shadcn@latest add button card badge separator input textarea
```

## Architecture Patterns

### Current vs Target Project Structure
```
components/
  Navigation.tsx      # Keep (update nav items + CTA button styling)
  Hero.tsx            # REWRITE (remove orbs, rotating words, dark theme)
  Introduction.tsx    # DELETE (absorbed into ProblemSection)
  TrustBar.tsx        # NEW (lightweight credibility strip)
  ProblemSection.tsx  # NEW (target audience pain points)
  Services.tsx        # REWRITE (simplified, placeholder content)
  Process.tsx         # REWRITE (simplified steps)
  ResultsSection.tsx  # NEW (before/after outcomes placeholder)
  About.tsx           # REWRITE (personal credibility)
  CTA.tsx             # Keep (update styling)
  Footer.tsx          # Keep (update styling)
  EmailForm.tsx       # Keep (reusable, no changes this phase)
  ui/                 # NEW directory (shadcn components installed here)
    button.tsx
    card.tsx
    badge.tsx
    separator.tsx
    input.tsx
    textarea.tsx

lib/
  animations.ts       # REWRITE (remove 9 variants, add sectionFadeIn)
  constants.ts        # UPDATE (add new section placeholder data, update nav items)
  utils.ts            # Keep (cn() helper unchanged)

app/
  globals.css         # REWRITE (new color palette, remove custom utility classes)
  layout.tsx          # UPDATE (remove dark class from html element)
  page.tsx            # REWRITE (new section order, new imports)
```

### Pattern 1: Section Component with Scroll Animation
**What:** Standard pattern for every section component in this project
**When to use:** Every full-width page section
**Example:**
```typescript
// Source: existing codebase pattern + UI spec animation contract
"use client"

import { motion } from "framer-motion"
import { sectionFadeIn, fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

export default function SectionName() {
  return (
    <motion.section
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-16 md:py-24" // 64px desktop, 32px mobile per UI spec
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        {/* Section content */}
      </div>
    </motion.section>
  )
}
```

### Pattern 2: Alternating Section Backgrounds
**What:** Even/odd section background pattern for visual rhythm
**When to use:** Applied in page.tsx section composition
**Example:**
```typescript
// Odd sections: bg-background (#FAFAFA)
// Even sections: bg-muted (#F1F5F9)
// Per UI spec layout rules
```

### Pattern 3: Design Token Usage
**What:** Use semantic CSS variable names through Tailwind, never raw hex values
**When to use:** All color references in components
**Example:**
```typescript
// CORRECT: semantic tokens
className="bg-background text-foreground"
className="bg-muted text-muted-foreground"
className="bg-primary text-primary-foreground"
className="border-border"

// WRONG: raw values or old custom classes
className="bg-darker-bg text-light-text"
className="bg-[#FAFAFA]"
```

### Pattern 4: Typography Mapping
**What:** Font family and size classes per UI spec
**When to use:** All text elements
**Example:**
```typescript
// Display (hero headline): Plus Jakarta Sans, 48px/32px mobile, bold
className="font-heading text-[2rem] md:text-[3rem] font-bold leading-[1.1]"

// Heading (section h2): Plus Jakarta Sans, 20px mobile/24px desktop, semibold
className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold leading-[1.3]"

// Body: Inter (default font-sans), 16px, regular
className="text-base font-normal leading-[1.6]"

// Label: Inter, 14px, medium
className="text-sm font-medium leading-[1.5]"
```

### Anti-Patterns to Avoid
- **Dark-mode-first styling:** The existing code applies `className="dark"` to `<html>` and uses dark color variables. Remove this -- light mode is the default. Dark mode deferred to Phase 9.
- **Custom utility classes for colors:** The existing `globals.css` has `.text-primary`, `.bg-dark-bg`, etc. in a `@layer utilities` block. Remove these -- use Tailwind's built-in semantic color classes (`text-primary`, `bg-muted`, etc.) which map to CSS variables through the `@theme inline` block.
- **Decorative animations:** No floating orbs, no rotating text, no continuous motion. Every animation triggers once and enhances content comprehension.
- **Raw color values in components:** Never use hex codes directly in className. Always use semantic token classes.
- **Importing removed animation variants:** After cleaning animations.ts, update all component imports. The build will catch missing imports.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Scroll-triggered animations | Custom Intersection Observer hooks | Framer Motion `whileInView` prop | Already in use, handles threshold, once, and amount options natively |
| Component variants (button sizes, etc.) | Custom conditional class logic | shadcn/ui components with CVA | Consistent API, accessible defaults, themeable via CSS vars |
| Class name merging | String concatenation | `cn()` from `@/lib/utils` (clsx + tailwind-merge) | Handles Tailwind class conflicts correctly |
| Color system | Hardcoded hex values | CSS custom properties + Tailwind semantic classes | Single source of truth, dark mode ready for Phase 9 |
| Responsive typography | Media query CSS | Tailwind responsive prefixes (`md:text-[3rem]`) | Consistent with project patterns, co-located with markup |

**Key insight:** This project's stack is already well-chosen. The phase is about refining what exists, not adding new libraries. The risk is over-engineering, not under-engineering.

## Common Pitfalls

### Pitfall 1: Tailwind v4 CSS Variable Syntax
**What goes wrong:** Tailwind v4 uses `@theme inline` to map CSS variables to Tailwind utilities. The existing `globals.css` already has this block. If you add new CSS variables in `:root` but forget to map them in `@theme inline`, Tailwind classes won't work.
**Why it happens:** Tailwind v4 changed how custom properties integrate compared to v3.
**How to avoid:** Every CSS variable added to `:root` that needs a Tailwind utility class must have a corresponding `--color-*: var(--*)` entry in the `@theme inline` block.
**Warning signs:** Tailwind classes like `bg-muted` produce no color despite the CSS variable being defined.

### Pitfall 2: shadcn/ui Component Installation Order
**What goes wrong:** Running `npx shadcn@latest add` may fail or produce unexpected output if `components/ui/` directory doesn't exist.
**Why it happens:** The directory is created automatically by the CLI, but if there are permission or path issues, it can fail silently.
**How to avoid:** Install one component first (e.g., button), verify the `components/ui/` directory was created and the file looks correct, then install the rest.
**Warning signs:** Missing `components/ui/` directory after install command.

### Pitfall 3: Removing Dark Class Breaks Existing Components
**What goes wrong:** Removing `className="dark"` from `<html>` in layout.tsx flips to light mode, but existing components use dark-theme-specific classes like `bg-darker-bg`, `text-light-text`, `border-border-divider`. These custom utility classes reference dark color values and will look wrong on a light background.
**Why it happens:** The codebase was built dark-first with custom utility classes that bypass the semantic token system.
**How to avoid:** Update `globals.css` (new color palette) AND all component files in the same logical unit of work. Don't remove the dark class until components are rewritten.
**Warning signs:** White text on white background, invisible elements, broken contrast.

### Pitfall 4: Framer Motion `whileInView` with `viewport.once`
**What goes wrong:** Forgetting `viewport={{ once: true }}` causes animations to replay every time an element scrolls in and out of view. The UI spec requires all animations to trigger exactly once.
**Why it happens:** `once` defaults to `false` in Framer Motion.
**How to avoid:** Every `whileInView` usage MUST include `viewport={{ once: true }}`. The `amount` (threshold) should be 0.1 for sections per the UI spec.
**Warning signs:** Animations replaying on scroll-back.

### Pitfall 5: Hero Content Appearing Above Fold Without Animation
**What goes wrong:** The UI spec says "No animation on elements above the fold" -- hero text appears immediately. But this conflicts with the "simple staggered fade-in for hero elements" decision.
**How to avoid:** The stagger applies to sub-elements only (subhead, CTA buttons), not the main headline. The headline renders immediately (no `initial="hidden"`). Stagger container wraps only the elements below the headline.
**Warning signs:** Hero headline fading in from invisible state.

### Pitfall 6: Constants File Gets Stale Imports
**What goes wrong:** `lib/constants.ts` has data structures (heroRotatingWords, stats, etc.) that current components import. Removing or renaming these without updating imports causes build failures.
**Why it happens:** Constants are tightly coupled to component implementations.
**How to avoid:** When rewriting components, update constants.ts in the same task. Run `npm run build` after each component change to catch stale imports early.
**Warning signs:** TypeScript errors about missing exports.

## Code Examples

### globals.css Color Palette (from UI Spec)
```css
/* Source: 01-UI-SPEC.md Color section */
:root {
  --radius: 0.625rem;

  --background: #FAFAFA;
  --foreground: #0F172A;
  --card: #FFFFFF;
  --card-foreground: #0F172A;
  --popover: #FFFFFF;
  --popover-foreground: #0F172A;
  --primary: #FB5B3D;
  --primary-foreground: #FFFFFF;
  --secondary: #F1F5F9;
  --secondary-foreground: #0F172A;
  --muted: #F1F5F9;
  --muted-foreground: #64748B;
  --accent: #F1F5F9;
  --accent-foreground: #0F172A;
  --destructive: #EF4444;
  --border: #E2E8F0;
  --input: #E2E8F0;
  --ring: #FB5B3D;
}
```

### Updated animations.ts (from UI Spec Animation Contract)
```typescript
// Source: 01-UI-SPEC.md Animation Contract
import { Variants } from "framer-motion"

// Section entrance -- Intersection Observer with threshold 0.1, triggerOnce
export const sectionFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export const buttonHover: Variants = {
  rest: { scale: 1, transition: { duration: 0.2, ease: "easeInOut" } },
  hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } },
  tap: { scale: 0.95, transition: { duration: 0.1, ease: "easeInOut" } }
}

export const drawerAnimation: Variants = {
  closed: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  open: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } }
}
```

### Section Component Template
```typescript
// Source: project conventions + UI spec
"use client"

import { motion } from "framer-motion"
import { sectionFadeIn, staggerContainer, staggerItem } from "@/lib/animations"

export default function ExampleSection() {
  return (
    <motion.section
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-8 md:py-16" // 32px mobile, 64px desktop
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={staggerItem} className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold leading-[1.3] text-foreground">
            Section Title
          </motion.h2>
          <motion.p variants={staggerItem} className="text-base text-muted-foreground leading-[1.6] mt-4">
            Section description placeholder.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}
```

### prefers-reduced-motion Support
```css
/* Add to globals.css */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

```typescript
// In components, Framer Motion respects this automatically when using
// the useReducedMotion() hook, but for this project the CSS approach
// is simpler. Framer Motion also has a global MotionConfig component:
import { MotionConfig } from "framer-motion"
// Wrap in layout: <MotionConfig reducedMotion="user"> (respects OS setting)
```

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None detected -- no test framework installed |
| Config file | None |
| Quick run command | `npm run build` (TypeScript + build errors catch most issues) |
| Full suite command | `npm run build && npm run lint` |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| DSGN-01 | Clean minimal aesthetic, correct colors/tokens | manual + build | `npm run build` | N/A |
| DSGN-04 | Section order matches buyer journey | manual | Visual inspection of page | N/A |
| DSGN-07 | Animations trigger once, no decorative motion | manual | Visual inspection + `npm run build` (catches import errors) | N/A |

### Sampling Rate
- **Per task commit:** `npm run build` (catches TypeScript errors, missing imports, CSS issues)
- **Per wave merge:** `npm run build && npm run lint`
- **Phase gate:** Full build green + visual inspection of all sections

### Wave 0 Gaps
- No test framework installed (and none needed for Phase 1 -- this is a visual/structural phase)
- Build verification (`npm run build`) is the primary automated check
- Manual visual inspection required for design quality, animation behavior, and section order

## State of the Art

| Old Approach (current codebase) | Current Approach (target) | Impact |
|--------------------------------|---------------------------|--------|
| Dark-mode-first with custom utility classes | Light-mode-first with semantic CSS variable tokens | Cleaner, themeable, dark mode ready for Phase 9 |
| 12+ animation variants including decorative | 7 purposeful animation variants | Simpler mental model, better performance |
| Generic section names (Introduction) | Purpose-driven names (ProblemSection, ResultsSection) | Matches buyer journey, self-documenting |
| Custom color classes in @layer utilities | Standard shadcn/ui token classes via @theme inline | No custom CSS needed for basic colors |

**Deprecated/outdated in current codebase:**
- `floatingOrb`, `scaleOnHover`, `cardHover`, `counterAnimation`, `slideInFromLeft`, `slideInFromRight`, `letterReveal`, `textReveal`, `progressLine` animation variants -- all being removed
- `heroRotatingWords` constant -- hero will use static text
- Custom utility classes in `globals.css` (`@layer utilities` block) -- replaced by semantic tokens
- Dark class on `<html>` element -- removed for light-mode default

## Open Questions

1. **shadcn/ui component versions with Tailwind v4**
   - What we know: `components.json` is configured for shadcn/ui with CSS variables. Tailwind v4 is installed.
   - What's unclear: Whether the latest shadcn CLI generates components compatible with Tailwind v4's `@theme inline` syntax out of the box.
   - Recommendation: Install button first as a smoke test. If the generated component uses Tailwind v3 syntax, minor adjustments may be needed. LOW risk -- shadcn has supported Tailwind v4 since early 2025.

2. **Existing dark mode CSS variables**
   - What we know: `globals.css` has a `.dark` block with full variable overrides.
   - What's unclear: Whether to keep, update, or remove the `.dark` block in this phase.
   - Recommendation: Keep the `.dark` block but update its values to match the new slate palette. It costs nothing and makes Phase 9 easier. Do NOT spend time perfecting dark mode colors -- just ensure the block doesn't break anything.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Runtime | Yes | (installed via npm) | -- |
| npm | Package management | Yes | (lockfile present) | -- |
| npx | shadcn CLI | Yes | (comes with npm) | -- |
| Next.js | Build/dev | Yes | 15.5.2 | -- |

No missing dependencies. All tools needed for this phase are already installed.

## Sources

### Primary (HIGH confidence)
- Existing codebase files: `globals.css`, `animations.ts`, `constants.ts`, `page.tsx`, `layout.tsx`, all component files -- direct inspection
- `01-UI-SPEC.md` -- authoritative design contract for this phase
- `01-CONTEXT.md` -- locked user decisions
- `components.json` -- shadcn/ui configuration
- `package.json` -- dependency versions

### Secondary (MEDIUM confidence)
- npm registry version checks for framer-motion (12.38.0), next (16.2.2), tailwindcss (4.2.2) -- confirmed via `npm view`
- Framer Motion `whileInView` API -- verified present in codebase usage across 6 component files

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - all packages already installed, versions verified against npm registry
- Architecture: HIGH - UI spec provides exact component list, layout rules, and section order; existing codebase patterns are clear
- Pitfalls: HIGH - identified from direct codebase inspection (dark-mode-first pattern, custom utility classes, missing ui/ directory)

**Research date:** 2026-04-05
**Valid until:** 2026-05-05 (stable -- no fast-moving dependencies)
