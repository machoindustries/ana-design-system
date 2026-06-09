# ANA Digital Design System Starter Kit

A public-facing reference implementation for the ANA Digital Design System using React, Vite, Tailwind CSS v4, and React Icons.

## Goals

- Keep code readable for designers, vendors, and developers.
- Use ANA design tokens as the source of truth.
- Build mobile-first, accessible components.
- Support platform adapters for Optimizely CMS 12, Optimizely Commerce 14, Optimizely Search & Navigation, and HubSpot.
- Use only public npm registry packages.

## Project structure

```text
src/
├── assets/              # Future local design assets
├── components/
│   ├── core/            # Small reusable components: Button, Card, DataTable
│   ├── foundations/     # Token and foundation displays
│   └── showcase/        # Example component previews
├── data/                # Static design-system content and navigation data
├── layouts/             # SiteHeader and SiteFooter
├── pages/               # Full documentation pages
├── utils/               # Shared helpers as the project grows
├── index.css            # Tailwind entry and component classes
└── tokens.css           # ANA design tokens
```

## Available scripts

```bash
npm install --no-audit --no-fund --package-lock=false
npm run dev
npm run build
npm run lint
```

## ESLint

ESLint is configured with:

- JavaScript recommended rules
- React recommended rules
- React Hooks recommended rules
- JSX accessibility recommended rules

The config is in `eslint.config.js` using ESLint flat config.

## Typography

The starter kit loads Source Sans Pro and defines:

- H1: Source Sans Pro Bold, 3.5rem / 56px desktop
- H2-H3: Source Sans Pro Bold
- H4-H6: Source Sans Pro Semibold
- Body: Source Sans Pro Regular
- Buttons: Source Sans Pro Semibold, uppercase

## Mobile-first approach

Components are designed for small screens first, then enhanced with Tailwind responsive prefixes such as `sm:`, `md:`, and `lg:`.

## Package policy

This zip intentionally excludes:

- `node_modules`
- `dist`
- `.tgz` package artifacts
- `package-lock.json`

The `.npmrc` file points to the public npm registry.

## v0.1.7 Design-kit expansion

This release adds enterprise component examples recommended from the expanded component audit matrix:

- Page Header
- Section Intro
- Metadata Group
- Download Card
- Quick Links
- Timeline
- Logo Grid
- Search Result Card
- Related Content
- Content Feed
- Credential Badge
- Membership Status Card
- Event Schedule
- Person / Speaker Card

Each example is mobile-first and includes purpose, when-to-use guidance, anatomy, and a lightweight code-reference label for vendors and designers.

## v0.1.8 Documentation shell reorganization

This release separates the design-kit documentation shell from NursingWorld production navigation examples.

- New design-kit header and footer for the public documentation site.
- Navigation now follows: Home, Foundations, Components, Content Components, Actions & Cards, Forms & Data, Navigation Preview, Patterns, Templates, and Platform Guides.
- NursingWorld-style header and footer moved into the Component Library Preview under Navigation Preview.
- Component examples are split onto separate pages by family instead of appearing on a single long homepage.
- The project remains mobile-first and uses only public npm packages.


## v0.1.9 update

Adds the first reference implementation under **Examples**:

- Redesigned Content Hub example
- Resource Hub template composition
- Search-first page header
- Topic card grid
- Featured resource pattern
- Latest resource cards
- Membership CTA
- Newsletter signup
- Related ANA resources

This example demonstrates how foundations, components, patterns, and templates assemble into a mobile-first ANA web experience.


## v0.2.0 update

Adds first-class image support:

- Media navigation section
- Image Block example
- Image/Text Split example
- Image Card examples
- Image accessibility and cropping guidance
- Content Hub example now references image-enabled featured resource treatment

Images should be implemented with required alt text, controlled aspect ratios, mobile-first cropping rules, and ANA-approved authentic nursing photography.
