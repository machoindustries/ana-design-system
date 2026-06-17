# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org).

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
