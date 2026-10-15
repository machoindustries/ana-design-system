// Directional rhythm primitive — replaces one-off `mt-4`/`mt-8` utility
// sprinkling with a single, auditable spacing decision.
//
// `gap` is a step on the density scale (1–7, see tokens.css). The class
// strings are written out in full so Tailwind can find them; building them
// from `gap` at runtime would leave them out of the stylesheet.
const gapClasses = {
  1: 'gap-[var(--density-space-1)]',
  2: 'gap-[var(--density-space-2)]',
  3: 'gap-[var(--density-space-3)]',
  4: 'gap-[var(--density-space-4)]',
  5: 'gap-[var(--density-space-5)]',
  6: 'gap-[var(--density-space-6)]',
  7: 'gap-[var(--density-space-7)]',
}

const directionClasses = {
  vertical: 'flex flex-col',
  horizontal: 'flex flex-row items-center',
}

export function Stack({ direction = 'vertical', gap = 4, children }) {
  const classes = `${directionClasses[direction] ?? directionClasses.vertical} ${gapClasses[gap] ?? gapClasses[4]}`
  return <div className={classes}>{children}</div>
}
