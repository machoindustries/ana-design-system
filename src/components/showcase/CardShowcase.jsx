import { Card } from '../core'

const cards = [
  ['Resource Card', 'Support advocacy, policy, and education content with clear titles, excerpts, and CTAs.'],
  ['News Card', 'Display date, category, title, summary, and link for news listing experiences.'],
  ['Product Card', 'Support Optimizely Commerce 14 product discovery and purchase journeys.'],
]

export function CardShowcase() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map(([title, body]) => (
        <Card eyebrow="Component" title={title} key={title}>{body}</Card>
      ))}
    </div>
  )
}
