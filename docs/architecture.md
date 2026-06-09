# ANA Starter Kit Architecture

The starter kit is organized for readability and extension by designers, vendors, and developers.

## Folder strategy

- `components/core`: small reusable UI primitives.
- `components/foundations`: displays for tokens, type, and other foundations.
- `components/showcase`: documentation examples that demonstrate how core components compose together.
- `layouts`: site-level header and footer.
- `pages`: documentation pages assembled from layouts and components.
- `data`: structured design-system content used to render tables and navigation.
- `tokens.css`: ANA design tokens and semantic variables.

## Code principles

- Start with semantic HTML.
- Build mobile-first and enhance with responsive modifiers.
- Keep component responsibilities narrow.
- Use tokens and shared classes instead of hard-coded styling.
- Prefer readable composition over abstraction that hides intent.
- Lint every change before packaging.

## v0.1.8 Documentation IA

The design system site now uses its own documentation shell. This prevents the NursingWorld production header/footer from being confused with the design kit navigation.

Documentation sections:

1. Home
2. Foundations
3. Components
4. Content Components
5. Actions & Cards
6. Forms & Data
7. Navigation Preview
8. Patterns
9. Templates
10. Platform Guides

The NursingWorld-style header and footer are retained as component examples under Navigation Preview.
