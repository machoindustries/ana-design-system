/**
 * designKitNavigation.js
 *
 * Flat items (id + label + description) are standalone nav buttons.
 * Items with a `children` array render as grouped dropdowns in the desktop header
 * and as collapsible sections in the mobile menu.
 *
 * To add a new top-level page:
 *   - Standalone: add a flat item to the array.
 *   - Under a group: add to the relevant children array.
 * The id must match the route path in DesignSystemHome.jsx.
 */

export const designKitNavItems = [
  {
    id: 'home',
    label: 'Home',
    description: 'Design system overview and principles.',
  },
  {
    id: 'foundations',
    label: 'Foundations',
    description: 'Tokens, color, typography, spacing, and accessibility.',
  },
  {
    id: 'components',
    label: 'Components',
    description: 'Component library overview and all component sections.',
    children: [
      {
        id: 'components',
        label: 'Overview',
        description: 'Component library overview and audit matrix.',
      },
      {
        id: 'content-components',
        label: 'Content Components',
        description: 'Page headers, section intros, feeds, and resources.',
      },
      {
        id: 'action-card-components',
        label: 'Actions & Cards',
        description: 'Buttons, cards, heroes, accordions, and search.',
      },
      {
        id: 'forms-data-components',
        label: 'Forms & Data',
        description: 'Forms, links, and tables.',
      },
      {
        id: 'media-components',
        label: 'Media',
        description: 'Image blocks, splits, image cards, and accessibility.',
      },
      {
        id: 'navigation-preview',
        label: 'Navigation',
        description: 'NursingWorld-style header and footer.',
      },
    ],
  },
  {
    id: 'patterns',
    label: 'Patterns & Templates',
    description: 'Reusable patterns and the full template library.',
    children: [
      {
        id: 'patterns',
        label: 'Patterns',
        description: 'Reusable page and flow patterns.',
      },
      {
        id: 'templates',
        label: 'Templates',
        description: 'Template library and hybrid CMS model.',
      },
    ],
  },
  {
    id: 'examples',
    label: 'Examples',
    description: 'Reference implementations using real ANA experiences.',
    children: [
      {
        id: 'examples',
        label: 'All Examples',
        description: 'Reference implementations that assemble components into real ANA experiences.',
      },
        // Add new examples here — each needs a matching route in DesignSystemHome.jsx
      {
        id: 'examples/nurses-week-2026',
        label: 'Nurses Week 2026',
        description: 'Campaign landing page built with kit components.',
      },
    ],
  },
  {
    id: 'platforms',
    label: 'Platforms',
    description: 'Optimizely and HubSpot adapter mapping.',
  },
  {
    id: 'docs',
    label: 'Docs',
    description: 'Setup, project structure, and how to add pages, components, and tokens.',
  },
]

/**
 * Flat list of all navigable page ids — used by the mobile menu and
 * anywhere that needs to iterate every page without the group structure.
 */
export const allNavPages = designKitNavItems.flatMap(item =>
  item.children
    ? item.children.map(child => ({ ...child, group: item.label }))
    : [item]
)