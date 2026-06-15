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
