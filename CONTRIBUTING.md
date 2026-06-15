# Contributing to the ANA Design System

Welcome! This guide explains how to run the project locally and how to add new pages, components, and tokens. The patterns here are intentionally repetitive — once you learn one, you know them all.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (included with Node.js)

---

## Getting started

```bash
# 1. Clone the repo
git clone https://github.com/machoindustries/ana-design-system.git
cd ana-design-system

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`. Changes to any file hot-reload automatically.

### Other useful commands

```bash
npm run build    # Production build (outputs to /dist)
npm run preview  # Preview the production build locally
npm run lint     # Check for code issues — run this before every commit
```

---

## Project structure

```
src/
├── components/
│   ├── core/         # Reusable UI primitives (Button, Card, DataTable...)
│   └── showcase/     # Live examples used inside documentation pages
├── data/             # Static content: navigation items, color tables, principles
├── layouts/          # SiteLayout, DesignKitHeader, DesignKitFooter
├── pages/            # One file per documentation section
├── tokens.css        # ANA design tokens — the source of truth for all styling
└── index.css         # Tailwind entry point and shared component classes
```

---

## Adding a new documentation page

Every new section follows the same three steps.

### Step 1 — Create the page file

Create `src/pages/YourNewPage.jsx`. Use `PageShell` to keep the layout consistent with all other pages:

```jsx
import { PageShell } from '../components/core/PageShell'

export function YourNewPage() {
  return (
    <PageShell
      eyebrow="Category"
      title="Your New Section"
      intro="A short description of what this section covers."
    >
      {/* Your content here */}
    </PageShell>
  )
}
```

### Step 2 — Register the route

Open `src/pages/DesignSystemHome.jsx` and add two lines:

```jsx
// At the top with the other imports:
import { YourNewPage } from './YourNewPage'

// Inside the <Routes> block:
<Route path="your-new-page" element={<YourNewPage />} />
```

### Step 3 — Add it to the navigation

Open `src/data/designKitNavigation.js` and add an entry to the `designKitNavItems` array:

```js
{ id: 'your-new-page', label: 'Your New Section', description: 'Short description shown in nav tooltips.' },
```

The `id` must exactly match the route path from Step 2.

That's it. Reload the dev server and your page will appear in the nav.

---

## Adding a new core component

Core components live in `src/components/core/` and are small, focused UI primitives. A good core component does one thing and accepts props to control its appearance.

### Step 1 — Create the component file

```jsx
// src/components/core/Alert.jsx

export function Alert({ variant = 'info', children }) {
  const variantClasses = {
    info: 'bg-[var(--color-background-info)] border-[var(--color-border-info)]',
    success: 'bg-[var(--color-background-success)] border-[var(--color-border-success)]',
    error: 'bg-[var(--color-background-error)] border-[var(--color-border-error)]',
  }

  return (
    <div role="alert" className={`rounded-md border p-4 text-sm ${variantClasses[variant]}`}>
      {children}
    </div>
  )
}
```

A few rules to follow:
- **Use semantic tokens, not primitives.** Prefer `var(--color-background-info)` over `var(--ana-blue-100)`. Semantic tokens are what components should consume.
- **Use Tailwind utility classes for layout and spacing.** Reserve CSS variables for color, typography, and radius values that come from the token system.
- **Keep props simple.** If a component needs more than 5–6 props, consider splitting it.

### Step 2 — Create a showcase

Showcases are live examples shown inside documentation pages. Create a matching file in `src/components/showcase/`:

```jsx
// src/components/showcase/AlertShowcase.jsx
import { Alert } from '../core/Alert'

export function AlertShowcase() {
  return (
    <div className="grid gap-4">
      <Alert variant="info">Membership renewal opens in 30 days.</Alert>
      <Alert variant="success">Your certification has been submitted.</Alert>
      <Alert variant="error">Please correct the errors below before continuing.</Alert>
    </div>
  )
}
```

### Step 3 — Add it to the relevant documentation page

Import and use the showcase inside whichever page covers this component type:

```jsx
import { AlertShowcase } from '../components/showcase/AlertShowcase'

// Inside the page JSX:
<section>
  <SectionHeading eyebrow="Components" title="Alerts" />
  <AlertShowcase />
</section>
```

---

## Adding or changing design tokens

All design tokens live in `src/tokens.css`. The file is organized in layers — follow this order when adding new values:

1. **Primitive tokens** — raw brand values (`--ana-teal-500: #007A6E`)
2. **Tints** — computed lighter versions via `color-mix()` (`--ana-teal-100: color-mix(in srgb, var(--ana-teal-500) 20%, white)`)
3. **Semantic tokens** — purpose-driven aliases components should use (`--color-background-teal: var(--ana-teal-100)`)
4. **Component tokens** — component-specific overrides if needed (`--component-alert-background: var(--color-background-info)`)

**Components should always reference semantic tokens, not primitive tokens.** This means changing a brand color in one place automatically updates every component that uses it.

```css
/* ✅ Correct — uses the semantic layer */
background-color: var(--color-background-info);

/* ❌ Avoid — bypasses the semantic layer */
background-color: var(--ana-blue-100);
```

---

## Code conventions

- **Semantic HTML first.** Use `<button>` for actions, `<a>` for navigation, `<article>` for cards, `<nav>` for navigation, and so on.
- **Mobile-first.** Write base styles for small screens and add `sm:`, `md:`, `lg:` modifiers for larger screens.
- **No inline styles.** If something needs a value from `tokens.css`, reference it via a Tailwind class or a CSS variable. If a Tailwind class doesn't exist for it, add a component class to `index.css`.
- **Run the linter before committing.** `npm run lint` will catch unused imports, missing keys, and accessibility issues. Fix everything it flags.
- **No hard-coded hex values in component files.** Colors belong in `tokens.css`.

---

## Accessibility expectations

Every component and page must meet WCAG 2.2 AA. Practically, this means:

- All interactive elements are reachable by keyboard
- Focus states are visible (the kit's `:focus-visible` rule in `index.css` handles this globally)
- Images have descriptive `alt` text, or `alt=""` if decorative
- Form inputs have associated `<label>` elements
- Color is never the only way information is conveyed

The `eslint-plugin-jsx-a11y` rules in the lint config will flag many common issues automatically.

---

## Asking for help

If you're unsure where something belongs or how to extend a pattern, check `docs/architecture.md` for an overview of the folder strategy and code principles. For anything beyond that, open a GitHub issue describing what you're trying to build.
