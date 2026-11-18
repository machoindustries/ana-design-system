import { useState } from 'react'
import { Button, StatementHero } from '../core'
import { statementHeroBackgrounds } from '../core/StatementHero'

const labels = {
  none: 'None',
  soft: 'Soft',
  muted: 'Muted',
  dark: 'Dark',
  'blue-navy': 'Gradient: Blue to Navy',
  'navy-black': 'Gradient: Navy',
  'gray-black': 'Gradient: Gray',
}

export function StatementHeroShowcase() {
  const [background, setBackground] = useState('none')
  const [align, setAlign] = useState('center')
  // Re-keying the hero remounts it, which replays the entrance.
  const [run, setRun] = useState(0)
  const onDark = !['none', 'soft', 'muted'].includes(background)

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
        <label className="flex flex-col gap-1 text-sm font-semibold">
          Background
          <select className="min-h-11 rounded-button border border-[var(--color-border-default)] bg-white px-3" value={background} onChange={e => { setBackground(e.target.value); setRun(r => r + 1) }}>
            {statementHeroBackgrounds.map(key => <option key={key} value={key}>{labels[key]}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold">
          Alignment
          <select className="min-h-11 rounded-button border border-[var(--color-border-default)] bg-white px-3" value={align} onChange={e => { setAlign(e.target.value); setRun(r => r + 1) }}>
            <option value="center">Centered</option>
            <option value="left">Left</option>
          </select>
        </label>
        <Button variant="secondary" onClick={() => setRun(r => r + 1)}>Replay entrance</Button>
      </div>
      <div className={`overflow-hidden rounded-[var(--radius-lg)] ${onDark ? '' : 'border border-[var(--color-border-default)]'}`}>
        <StatementHero
          key={run}
          headingLevel={3}
          background={background}
          align={align}
          eyebrow="Content Hub"
          heading="Practical guidance for every stage of your nursing career"
          actions={
            <>
              <Button href="#statement-hero-start">Explore resources</Button>
              <Button variant="secondary" href="#statement-hero-join">Become a member</Button>
            </>
          }
        >
          <p>Articles, toolkits, courses and research from ANA, in one place and free to members.</p>
        </StatementHero>
      </div>
    </div>
  )
}
