# Testing Patterns

**Analysis Date:** 2026-04-05

## Test Framework

**Runner:** None installed

No test framework is present in the project. `package.json` contains no testing dependencies (`jest`, `vitest`, `@testing-library/*`, `cypress`, `playwright`, etc.) and no test scripts are defined. No configuration files for any test runner exist in the project root.

**Coverage:** None enforced

## Test File Organization

**Test files:** None exist in the codebase.

No `*.test.ts`, `*.test.tsx`, `*.spec.ts`, or `*.spec.tsx` files are present anywhere in the project.

## What Should Be Tested

When tests are added, the following areas have the highest value:

**API Route (`app/api/submit-email/route.ts`):**
- Valid email submission creates Airtable record and returns 200 with `{ success: true }`
- Missing email returns 400 with `{ error: ... }`
- Invalid email (no `@`) returns 400 with `{ error: ... }`
- Airtable SDK failure returns 500 with `{ error: ... }`
- Missing `AIRTABLE_PERSONAL_ACCESS_TOKEN` env var throws at module initialization

**`EmailForm` component (`components/EmailForm.tsx`):**
- Renders with default prop values
- Submit with invalid email shows error state without calling fetch
- Submit with valid email shows loading state, then success state
- Submit failure shows error state with message
- Status resets to idle after 5 seconds

**`lib/utils.ts`:**
- `cn()` correctly merges Tailwind class strings

## Recommended Test Setup

If adding tests, the most compatible stack for this Next.js 15 / React 19 project:

```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/user-event
```

**Vitest config** (`vitest.config.ts`):
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: { '@': '.' },
  },
})
```

**Test scripts** to add in `package.json`:
```json
"test": "vitest",
"test:ui": "vitest --ui",
"test:coverage": "vitest run --coverage"
```

## Mocking Approach (Recommended)

**For API route tests:** Use `vi.mock()` to mock the `airtable` module
```typescript
vi.mock('airtable', () => ({
  default: vi.fn(() => ({
    base: vi.fn(() => ({
      create: vi.fn().mockResolvedValue([{ id: 'rec123' }])
    }))
  }))
}))
```

**For component tests:** Use `vi.stubGlobal` or `msw` to intercept `fetch` calls

**Environment variables:** Set in `vitest.config.ts` under `test.env` or use `vi.stubEnv()`

## E2E Tests

**Framework:** Not configured. No Playwright or Cypress installation detected.

## Test Coverage Gaps

**All application code is currently untested.** Priority areas by risk:

**High priority:**
- `app/api/submit-email/route.ts` — external integration with Airtable, only runtime path for email capture
- `components/EmailForm.tsx` — client-side validation logic and fetch error handling

**Medium priority:**
- Animation variants in `lib/animations.ts` — low business logic, primarily type correctness
- Constants in `lib/constants.ts` — static data, low change risk

**Low priority:**
- Pure presentational components (`Hero.tsx`, `Services.tsx`, `Process.tsx`, etc.) — no business logic

---

*Testing analysis: 2026-04-05*
