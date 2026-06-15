import { SectionHeading } from "./SectionHeading"

export function PageShell({ eyebrow, title, children, intro }) {
  return (
    <section className="ds-section">
      <div className="ds-container">
        <SectionHeading eyebrow={eyebrow} title={title}>{intro}</SectionHeading>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}