import { ButtonShowcase } from './ButtonShowcase'

export function HeroShowcase() {
  return (
    <section className="overflow-hidden rounded-2xl bg-ana-navy text-white shadow-ana-lg">
      <div className="grid md:grid-cols-2">
        <div className="p-6 sm:p-8 md:p-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--ana-green-100)]">The Power of Nurses™</p>
          <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">Build consistent digital experiences for every ANA audience.</h3>
          <p className="mb-6 text-lg text-white/90">A platform-independent system for NursingWorld, Optimizely CMS 12, HubSpot, commerce, events, and member experiences.</p>
          <ButtonShowcase />
        </div>
        <div className="min-h-72 bg-gradient-to-br from-ana-green via-ana-blue to-ana-navy p-6 sm:p-8" aria-label="Abstract ANA brand gradient preview">
          <div className="h-full rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur-sm">
            <p className="max-w-sm text-xl font-semibold text-white">Hero imagery should leave meaningful space for live text, calls to action, and accessible content.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
