import { FiSearch } from 'react-icons/fi'
import { Button } from '../core'

export function SearchShowcase() {
  return (
    <section className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5 shadow-ana sm:p-6">
      <form className="grid gap-3 sm:grid-cols-[1fr_auto]" role="search">
        <label htmlFor="component-search" className="ds-label">Search NursingWorld</label>
        <div className="relative sm:col-start-1">
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" aria-hidden="true" />
          <input id="component-search" className="ds-field pl-11" type="search" placeholder="Continuing Education" />
        </div>
        <Button type="submit" className="sm:col-start-2 sm:row-start-2">Search</Button>
      </form>
      <div className="mt-5 flex flex-wrap gap-2" aria-label="Active filters">
        {['Resources', 'Practice & Policy', 'Last 12 months'].map(filter => (
          <button className="rounded-full border border-[var(--color-border-default)] px-3 py-2 text-sm font-semibold" key={filter} type="button">
            {filter} <span aria-hidden="true">×</span>
          </button>
        ))}
      </div>
    </section>
  )
}
