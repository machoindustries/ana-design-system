# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org).

## [v0.4.2] - 2026-10-15

Brand gradient and color-combination tokens from the Brand Playbook

### Added

- Gradient tokens and `.ds-gradient-*` classes, per the American Nurses Brand Playbook (updated October 12, 2026), Section 4, "Background Gradients" (p. 54):
  - analogous pairs: green → navy, blue → navy, yellow → orange
  - every palette color, including Nurses Red and Nurses Gray, with up to 25% black
  - all run left to right, as the playbook draws them
- Duo tokens and `.ds-duo-*` classes for the 14 recommended pairs in "Color Combinations" (p. 53), plus `--on-ana-*` text colors matching the playbook's chips
- The playbook's "NO" pairs are listed in comments next to each block

### Accessibility

- White on Nurses Green is 3.68:1. AA needs large text, so duos that include green set their text at h4 size (24px). The other on-colors pass at any size: red 5.10, blue 4.54, navy 11.46, gray 12.31, orange 5.41, yellow 8.28

## [v0.4.1] - 2026-10-15

One page wrapper and a clean heading outline on every page

### Changed

- Every documentation page uses `Page` (the Foundations and Docs pattern): one `<h1>` title, then `Section` + `SectionHeading` (`<h2>`) per topic. Previously most pages had no `<h1>`
- Heading outline: every route now reads h1 → h2 → h3 with no skipped levels, including inside showcases. Visual sizes are kept with the `.type-h*` classes
- Home keeps its hero; the principles block is now a `Section`
- Actions & Cards: the first hero example has its own "Hero" section heading
- CONTRIBUTING.md: the "Adding a new documentation page" example uses `Page`, and explains the heading rule

### Fixed

- Home: the "Explore foundations" and "View components" buttons did nothing (they called a navigation prop the route never passed). They are now links

### Removed

- `PageShell`, replaced by `Page`

## [v0.4.0] - 2026-10-15

Side navigation for the design kit, and the layout primitives behind it

### Added

- Design kit sidebar: a desktop rail of grouped page links (from lg up), with `aria-current` on the current page
- `Page`, `Section` and `Stack` layout components, used by the Foundations and Docs pages
- Layout tokens: `--density-space-1` to `-7` (aliases of the `--space-*` scale), `--layout-section-padding-y`, `--layout-sidebar-width`, `--elevation-border`, `--elevation-tint-panel`

### Changed

- Header: the desktop dropdown nav moved to the sidebar. The nav row now has navigation on the left (menu toggle, Docs) and search on the right
- Header logo, Docs button, sidebar and mobile menu use real links (React Router `Link`/`NavLink`) instead of buttons
- Component categories regrouped into nine single-home groups (Navigation, Layout & Structure, Media, Cards & Content Display, Data Display, Forms, Actions, Feedback & Status, Foundations)

### Fixed

- Phone layout: the page is a single column below 1024px instead of sitting in the hidden sidebar's column
- Mobile menu scrolls on its own when taller than the screen, and the page behind it is locked while it's open
- Nurses Week hero: the secondary CTA was white text on a white button

### Removed

- `my_changes.patch`, committed by mistake (it duplicated an earlier commit)

## [v0.3.0] - 2026-10-15

Survey and ARNI assessment patterns from NursingWorld, rebuilt the kit's way

### Added

- `StepProgress`: "Step 2 of 5" text with a native `<progress>` bar (aria-hidden) that respects reduced motion (Forms & Data)
- `LikertScale`: a numbered radio scale with end labels. Rows stack below md and sit in one row of columns from md up. Every point is a 48px target (Forms & Data)
- `ErrorSummary`: a focusable, linked list of form errors (Forms & Data)
- `ConsentStep`: a legal notice with a required "I agree" checkbox, or the message alone (Forms & Data)
- `ReadinessResult`: score card, dimensions with bars, recommendations, scoring label and the withheld state (Content components)
- `HeroChecklist` and `ChecklistPanel`: the "text with a checklist panel" hero variant (Actions & Cards)
- `.ds-data-bar` and `.ds-notice` component classes in `index.css`
- Semantic tokens: `--color-link-on-tint`, `--color-accent-on-dark`, `--color-data-fill`, `--color-data-track`

### Changed

- Search keywords for Forms & Data, Content components and Actions & Cards

## [v0.2.9] - 2026-07-12

Subtle changes to the mobile tokens

## [v0.2.8] - 2026-06-17

Wired up search for the kit

### Changed

- Took the placeholder search icon and added simple search

## [v0.2.7] - 2026-06-17

Wired up documentation in the kit

### Added

- Dedicated page for documentation

### Changed

- Updates to header and the navigation for the new doc page

## [v0.2.6] - 2026-06-17

Hosting on Vercel to provide stakeholders a way to view the kit.

### Added

- File for vercel routing

### Changed

- Adjustments to the kit navigation to display the logo.

## [v0.2.5] - 2026-06-16

New round of components

### Added

- Alerts, Modals, and a Promo Bar added to the core components

## [v0.2.4] - 2026-06-16

Navigation enhancements to starter kit

### Added

- National Nurses Week leveraging current design kit

### Changed

- Grouping navigation

## [v0.2.3] - 2026-06-14

Code cleanup and more documentation updates

### Added

- CONTRIBUTING.md is now available in the repository

### Changed

- Barrel exports to keep code just a little tidier

## [v0.2.2] - 2026-06-14

Adjusting documentation format

### Added

- Adding CHANGELOG.md to repo

### Changed

- Adjusted `Button.jsx` to have an actual disabled attribute

## [v0.2.1] - 2026-06-14

Extracted the routing logic from the initial development file into something much more maintainable.

### Added

- Routing now follows a pattern of file per page + `react-router-dom`
- Adding CHANGELOG.md to repo

### Changed

- Moved all functions out of `DesignSystemHome.jsx` into `src/pages/`. Updated supporting files to enable routing from the navigation

## [v0.2.0] update

Adds first-class image support:

- Media navigation section
- Image Block example
- Image/Text Split example
- Image Card examples
- Image accessibility and cropping guidance
- Content Hub example now references image-enabled featured resource treatment

Images should be implemented with required alt text, controlled aspect ratios, mobile-first cropping rules, and ANA-approved authentic nursing photography.

## [v0.1.9] update

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

## [v0.1.8] Documentation shell reorganization

This release separates the design-kit documentation shell from NursingWorld production navigation examples.

- New design-kit header and footer for the public documentation site.
- Navigation now follows: Home, Foundations, Components, Content Components, Actions & Cards, Forms & Data, Navigation Preview, Patterns, Templates, and Platform Guides.
- NursingWorld-style header and footer moved into the Component Library Preview under Navigation Preview.
- Component examples are split onto separate pages by family instead of appearing on a single long homepage.
- The project remains mobile-first and uses only public npm packages.

## [v0.1.7] Design-kit expansion

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
