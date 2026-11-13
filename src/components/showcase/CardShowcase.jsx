import { FiAward, FiBookOpen, FiUsers } from 'react-icons/fi'
import { Card } from '../core'

const cards = [
  ['Resource Card', 'Support advocacy, policy, and education content with clear titles, excerpts, and CTAs.'],
  ['News Card', 'Display date, category, title, summary, and link for news listing experiences.'],
  ['Product Card', 'Support Optimizely Commerce 14 product discovery and purchase journeys.'],
]

const iconCards = [
  [FiUsers, 'For organizations', 'Group memberships and training for nursing teams of any size.', 'Explore group options'],
  [FiBookOpen, 'Continuing education', 'Accredited courses and webinars that count toward your contact hours.', 'Browse courses'],
  [FiAward, 'Certification', 'ANCC certification to recognize your specialty expertise.', 'Find a certification'],
]

export function CardShowcase() {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(([title, body]) => (
          <Card eyebrow="Component" title={title} key={title}>{body}</Card>
        ))}
      </div>
      <div>
        <h3 className="type-h4">With an icon</h3>
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">Use an icon for feature or audience cards that have no image. The icon is decorative; the title carries the meaning. Use one icon set (Feather, from react-icons) across a page.</p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {iconCards.map(([icon, title, body, linkText]) => (
            <Card icon={icon} title={title} linkText={linkText} key={title}>{body}</Card>
          ))}
        </div>
      </div>
    </div>
  )
}
