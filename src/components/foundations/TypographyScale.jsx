const typeSamples = [
  ['Hero XXL', 'type-hero', 'Source Sans Pro Bold 700 / 72px', 'Transformative care starts with nurses.'],
  ['H1', 'type-h1', 'Source Sans Pro Bold 700 / 56px', 'Lead the profession forward.'],
  ['H2', 'type-h2', 'Source Sans Pro Bold 700 / 36px', 'Advance standards of excellence.'],
  ['H3', 'type-h3', 'Source Sans Pro Bold 700 / 30px', 'Support every nurse, every setting.'],
  ['H4', 'type-h4', 'Source Sans Pro Semibold 600 / 24px', 'Helpful guidance for teams.'],
]

export function TypographyScale() {
  return (
    <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-6 shadow-ana">
      <div className="mb-6">
        <p className="ds-eyebrow">Typography foundation</p>
        <h3 className="mt-2">Source Sans Pro heading system</h3>
        <p className="mt-2 text-slate-700">Headings use Source Sans Pro Bold by default. H1 starts at 3.5rem / 56px on desktop and scales down for mobile.</p>
      </div>
      <div className="space-y-7">
        {typeSamples.map(([label, className, meta, text]) => (
          <div className="border-t border-[var(--color-border-default)] pt-5" key={label}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-ana-blue">
              {label} <span className="normal-case tracking-normal text-slate-500">{meta}</span>
            </p>
            <p className={className}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
