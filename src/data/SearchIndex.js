/**
 * searchIndex.js
 *
 * The flat list of every searchable page in the design kit, enriched with
 * keyword tags beyond what the nav description already covers.
 *
 * To add a new page to search:
 *   - If it's already in designKitNavigation.js it's automatically searchable
 *     via the base label + description fields.
 *   - Add it here only if you want it to surface on additional keyword queries
 *     (e.g. "hex" finding Foundations, "accordion" finding Actions & Cards).
 *
 * Fields:
 *   id          — route path, must match DesignSystemHome.jsx
 *   label       — display name shown in results
 *   description — secondary line shown in results
 *   group       — section label shown as a category badge
 *   keywords    — additional terms that should surface this result
 */

export const searchIndex = [
  {
    id: 'home',
    label: 'Home',
    description: 'Design system overview and principles.',
    group: 'Get started',
    keywords: ['overview', 'intro', 'start', 'welcome', 'principles'],
  },
  {
    id: 'foundations',
    label: 'Foundations',
    description: 'Tokens, color, typography, spacing, and accessibility.',
    group: 'Get started',
    keywords: [
      'color', 'colour', 'token', 'tokens', 'hex', 'palette', 'brand',
      'typography', 'font', 'typeface', 'source sans', 'type scale',
      'spacing', 'radius', 'border', 'shadow', 'focus', 'accessibility',
      'wcag', 'contrast', 'navy', 'green', 'red', 'blue', 'teal',
    ],
  },
  {
    id: 'components',
    label: 'Component Overview',
    description: 'Component library overview and audit matrix.',
    group: 'Components',
    keywords: ['audit', 'matrix', 'library', 'all components', 'component list'],
  },
  {
    id: 'content-components',
    label: 'Content Components',
    description: 'Page headers, section intros, feeds, and resources.',
    group: 'Components',
    keywords: [
      'page header', 'section heading', 'intro', 'eyebrow', 'feed',
      'resource', 'quick links', 'related', 'download', 'person card',
      'logo grid', 'metadata', 'tag', 'pill',
    ],
  },
  {
    id: 'action-card-components',
    label: 'Actions & Cards',
    description: 'Buttons, cards, heroes, accordions, search, alerts, banners, and modals.',
    group: 'Components',
    keywords: [
      'button', 'cta', 'call to action', 'card', 'hero', 'accordion',
      'collapse', 'expand', 'search', 'alert', 'alertbar', 'alert bar',
      'banner', 'promo', 'modal', 'dialog', 'overlay', 'notification',
      'maintenance', 'outage', 'status', 'warning', 'error', 'success',
    ],
  },
  {
    id: 'forms-data-components',
    label: 'Forms & Data',
    description: 'Forms, inputs, links, and data tables.',
    group: 'Components',
    keywords: [
      'form', 'input', 'field', 'label', 'select', 'checkbox', 'radio',
      'textarea', 'table', 'data table', 'link', 'inline link',
    ],
  },
  {
    id: 'media-components',
    label: 'Media Components',
    description: 'Image blocks, image splits, media cards, and image accessibility.',
    group: 'Components',
    keywords: [
      'image', 'photo', 'picture', 'split', 'media', 'video', 'alt text',
      'focal point', 'responsive image',
    ],
  },
  {
    id: 'navigation-preview',
    label: 'Navigation',
    description: 'NursingWorld-style header and footer.',
    group: 'Components',
    keywords: ['header', 'footer', 'nav', 'menu', 'site header', 'site footer'],
  },
  {
    id: 'patterns',
    label: 'Patterns',
    description: 'Reusable page and flow patterns.',
    group: 'Patterns & Templates',
    keywords: ['pattern', 'layout', 'page layout', 'flow', 'structure'],
  },
  {
    id: 'templates',
    label: 'Templates',
    description: 'Template library and hybrid CMS model.',
    group: 'Patterns & Templates',
    keywords: ['template', 'page type', 'cms', 'optimizely', 'landing page'],
  },
  {
    id: 'examples',
    label: 'All Examples',
    description: 'Reference implementations assembling components into real ANA experiences.',
    group: 'Examples',
    keywords: ['example', 'reference', 'demo', 'implementation', 'real world'],
  },
  {
    id: 'examples/nurses-week-2026',
    label: 'Nurses Week 2026',
    description: 'Campaign landing page built with kit components.',
    group: 'Examples',
    keywords: [
      'nurses week', 'nnw', 'campaign', 'landing page', 'microsite',
      'nurses week 2026', 'power of nurses',
    ],
  },
  {
    id: 'platforms',
    label: 'Platforms',
    description: 'Optimizely and HubSpot adapter mapping, microsite brand minimums.',
    group: 'Reference',
    keywords: [
      'optimizely', 'hubspot', 'cms', 'platform', 'adapter', 'block',
      'module', 'microsite', 'brand minimums', 'vendor', 'conference',
    ],
  },
  {
    id: 'docs',
    label: 'Docs',
    description: 'Setup, project structure, and how to add pages and components.',
    group: 'Reference',
    keywords: [
      'contributing', 'setup', 'install', 'npm', 'getting started',
      'add a page', 'add a component', 'token', 'conventions', 'lint',
    ],
  },
]

/**
 * search(query)
 *
 * Returns items from searchIndex where the query matches label, description,
 * group, or any keyword — case-insensitive, partial word match.
 * Returns an empty array for queries under 2 characters.
 */
export function search(query) {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []

  return searchIndex.filter(item => {
    const corpus = [
      item.label,
      item.description,
      item.group,
      ...(item.keywords ?? []),
    ].join(' ').toLowerCase()
    return corpus.includes(q)
  })
}