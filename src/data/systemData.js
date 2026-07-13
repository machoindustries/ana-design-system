export const principles = [
  ['Nurse-Centered', 'Every experience should reinforce the value, impact, expertise, leadership, and humanity of nurses.'],
  ['Accessible by Default', 'Components, patterns, and templates must meet or exceed WCAG 2.2 AA.'],
  ['Content First', 'Design should improve comprehension, discoverability, and action.'],
  ['Platform Independent', 'ANA standards should support Optimizely CMS 12, HubSpot, and future platforms.'],
  ['Modular and Reusable', 'Build composable blocks that can be reused without unnecessary one-off solutions.'],
  ['Consistent Across Experiences', 'Advocacy, certification, commerce, events, and member experiences should feel connected.'],
  ['Flexible and Scalable', 'The system should support today’s NursingWorld needs and future initiatives.'],
  ['Brand Aligned', 'The system should feel transformative, aspirational, progressive, empowering, modern, and authentic.'],
  ['Data-Informed', 'Analytics, usability findings, accessibility reviews, and stakeholder feedback should guide iteration.'],
  ['Governed and Sustainable', 'The design system is a product with ownership, review, versioning, and deprecation rules.'],
]

export const colors = [
  ['Nurses Red', 'ana-red-500', '#CB3727', 'Flame, protected brand accent'],
  ['Nurses Green', 'ana-green-500', '#009685', 'Primary supporting brand color and primary action'],
  ['Nurses Navy', 'ana-navy-500', '#193E4B', 'Dark backgrounds, headers, footer'],
  ['Nurses Blue', 'ana-blue-500', '#0480A4', 'Links, secondary actions, informational UI'],
  ['Nurses Orange', 'ana-orange-500', '#F79348', 'Warm accent'],
  ['Nurses Yellow', 'ana-yellow-500', '#FFCE34', 'Highlight accent'],
  ['Nurses Gray', 'ana-gray-900', '#2F3638', 'Primary text'],
  ['White', 'ana-white', '#FFFFFF', 'Backgrounds and inverse text'],
]

export const semanticColors = [
  ['Text primary', 'color-text-primary', 'Primary readable text across page content'],
  ['Text secondary', 'color-text-secondary', 'Supporting copy, metadata, and helper text'],
  ['Text inverse', 'color-text-inverse', 'Text placed on dark or brand surfaces'],
  ['Link default', 'color-link-default', 'Inline links and navigational links'],
  ['Action primary', 'color-action-primary', 'Primary buttons and high-value next steps'],
  ['Action accent', 'color-action-accent', 'Protected emphasis actions such as donate moments'],
  ['Background muted', 'color-background-muted', 'Soft page sections and panels'],
  ['Background info', 'color-background-info', 'Informational surfaces and callouts'],
  ['Background success', 'color-background-success', 'Positive confirmation surfaces'],
  ['Background warning', 'color-background-warning', 'Cautionary surfaces'],
  ['Background error', 'color-background-error', 'Validation and error surfaces'],
  ['Border default', 'color-border-default', 'Standard component boundaries'],
  ['Focus ring', 'color-focus-ring', 'Keyboard-visible focus outline'],
]

export const typography = [
  ['Hero XXL', '4.5rem / 72px', 'Source Sans Pro Bold (700)', 'Marketing and campaign hero display. Use sparingly.'],
  ['H1', '3.5rem / 56px', 'Source Sans Pro Bold (700)', 'Primary page title. Default desktop H1 starts at 56px.'],
  ['H2', '2.25rem / 36px', 'Source Sans Pro Bold (700)', 'Major section heading.'],
  ['H3', '1.875rem / 30px', 'Source Sans Pro Bold (700)', 'Subsection heading.'],
  ['H4', '1.5rem / 24px', 'Source Sans Pro Semibold (600)', 'Small heading or card heading.'],
  ['Body', '1rem / 16px', 'Source Sans Pro Regular (400)', 'Minimum body copy size.'],
  ['Button', '0.875rem / 14px uppercase', 'Source Sans Pro Semibold (600)', 'Action labels, all caps.'],
]

/**
 * Category is now one of 9 rigid, single-home groups (Carbon/Shopify-style
 * taxonomy — see ana-design-system-audit-reorg-plan.md, Section 3):
 * Navigation, Layout & Structure, Media, Cards & Content Display,
 * Data Display, Forms, Actions, Feedback & Status, Foundations.
 * Every component has exactly one category. Do not reintroduce ad-hoc tags.
 */
export const components = [
  ['Global Header', 'Navigation', 'Utility links, primary nav, search, cart, account, mobile menu', 'Mobile-first, keyboard accessible, uses ANA logo assets and React Icons.'],
  ['Global Footer', 'Navigation', 'Grouped links, social links, legal links, back-to-top', 'Uses ANA lockup asset and accessible social icon labels.'],
  ['Quick Links', 'Navigation', 'Curated link list, optional icons', 'Use to help users reach high-value tasks quickly.'],
  ['Page Header', 'Layout & Structure', 'Eyebrow, title, intro, metadata, breadcrumbs', 'Separates content-page headers from marketing heroes.'],
  ['Hero', 'Layout & Structure', 'Image, live text area, CTA, overlay', 'Use for high-priority landing pages and campaigns.'],
  ['Section Intro', 'Layout & Structure', 'Eyebrow, heading, description, optional CTA', 'Creates a reusable opening pattern for sections.'],
  ['Image Block', 'Media', 'Image, alt text, caption, aspect ratio', 'Use for standalone editorial and campaign images with controlled cropping.'],
  ['Image / Text Split', 'Media', 'Image, eyebrow, heading, copy, CTA', 'Use for storytelling sections and landing page promos.'],
  ['Logo Grid', 'Media', 'Sponsors, partners, affiliates, entities', 'Use for Foundation partners, conference sponsors, and affiliations.'],
  ['Image Card', 'Cards & Content Display', 'Image, metadata, title, description, CTA', 'Use when imagery improves recognition or emotional connection.'],
  ['Download Card', 'Cards & Content Display', 'File type, title, description, file size, action', 'Use for PDFs, toolkits, forms, and whitepapers.'],
  ['Search Result Card', 'Cards & Content Display', 'Type, title, excerpt, URL, metadata', 'Use with Optimizely Search & Navigation result sets.'],
  ['Related Content', 'Cards & Content Display', 'Manual or dynamic related cards', 'Use in bottom containers and detail page next steps.'],
  ['Content Feed', 'Cards & Content Display', 'News, events, resources, products, mixed content', 'Generalizes Latest News into a reusable feed pattern.'],
  ['Credential Badge', 'Cards & Content Display', 'Badge mark, credential, description, status', 'Use for certification and recognition experiences.'],
  ['Membership Status Card', 'Cards & Content Display', 'Status, renewal date, next action', 'Use in My Account and member portal experiences.'],
  ['Person / Speaker Card', 'Cards & Content Display', 'Image, name, role, bio', 'Use for speakers, authors, experts, leaders, and nurse stories.'],
  ['Card', 'Cards & Content Display', 'Resource, news, product, event, certification', 'Use one flexible card framework with variants.'],
  ['Metadata Group', 'Data Display', 'Date, category, author, organization, content type', 'Use definition-list semantics for structured metadata.'],
  ['Timeline', 'Data Display', 'Steps, milestones, agendas, process details', 'Use for certification, event, and funnel steps.'],
  ['Event Schedule', 'Data Display', 'Time, session, location, speaker', 'Use for events, conferences, webinars, and sessions.'],
  ['HTML Table', 'Data Display', 'Native table with caption and mobile scroll', 'Use for tabular data only.'],
  ['Form Controls', 'Forms', 'Inputs, selects, radios, checkboxes, validation', 'Use semantic labels, helper text, and clear errors.'],
  ['Cart / Checkout', 'Forms', 'Cart item, order summary, forms, confirmation', 'Powered by Optimizely Commerce 14. Page-level assembly also documented under Patterns & Templates.'],
  ['Button', 'Actions', 'Primary, secondary, accent, disabled', 'Use action-specific labels and preserve 10px radius.'],
  ['Alert Bar', 'Feedback & Status', 'Message, severity, dismiss action', 'Use for sitewide or page-level system messages. Previously undocumented in the component matrix.'],
  ['Modal', 'Feedback & Status', 'Title, body, actions, dismiss, focus trap', 'Use for confirmations and blocking interactions. Previously undocumented in the component matrix.'],
  ['Rich Text', 'Foundations', 'Editorial content, lists, links, tables', 'Documented as typography/formatting guidance rather than a standalone component.'],
]


export const templates = [
  ['Landing Page', 'Marketing', 'Hero, container zones, card grids, CTA blocks'],
  ['Standard Page', 'Content', 'Structured content fields plus top/bottom containers'],
  ['News Article', 'News', 'Article header, rich text, media contact, related news'],
  ['Search Results', 'Search', 'Search input, facets, result cards, pagination'],
  ['Certification Detail', 'ANCC', 'Summary, eligibility, pricing, FAQs, apply CTA'],
  ['Product Detail', 'Commerce', 'Commerce data, product content, add-to-cart CTA'],
  ['Cart', 'Commerce', 'Cart items, quantity controls, order summary'],
  ['Checkout', 'Commerce', 'Stepper, forms, payment, validation, order summary'],
  ['Donation Funnel', 'Foundation', 'Gift amount, donor form, payment, confirmation'],
  ['Event Detail', 'Events', 'Metadata, agenda, speakers, registration CTA'],
  ['Conference Microsite', 'Events', 'Microsite navigation, agenda, sessions, sponsors'],
  ['My Account', 'Membership', 'Dashboard, status, orders, certifications, notifications'],
]

export const platformMap = [
  ['Global Header', 'Shared layout/header', 'Global partial/header module'],
  ['Global Footer', 'Shared layout/footer', 'Global partial/footer module'],
  ['Hero', 'Hero Block', 'Hero Module'],
  ['Rich Text', 'Editorial Block', 'Rich Text Module'],
  ['CTA', 'CTA Block', 'CTA Module'],
  ['Promo', 'Promo Block', 'Promo Module'],
  ['Alert', 'Alert Block', 'Alert Module'],
  ['Person', 'Person Block', 'Person Card Module'],
  ['Video', 'Video Block', 'Video Module'],
  ['Latest Content', 'Latest News Block', 'Related Content Module'],
]