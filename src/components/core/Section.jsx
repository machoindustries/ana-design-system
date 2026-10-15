// Tight, density-scale section. Optional tint for structural grouping
// (Carbon "layer" pattern) instead of a shadowed card for every block.
export function Section({ title, tinted = false, children }) {
  return (
    <section className={`ds-section-tight ${tinted ? 'ds-section-tinted' : ''}`}>
      {title ? <h2 className="ds-section-title">{title}</h2> : null}
      {children}
    </section>
  )
}