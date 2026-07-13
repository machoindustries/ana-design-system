// Directional rhythm primitive — replaces one-off `mt-4`/`mt-8` utility
// sprinkling with a single, auditable spacing decision.
export function Stack({ direction = 'vertical', gap = 4, children }) {
  const gapVar = `var(--density-space-${gap})`
  const style = direction === 'horizontal'
    ? { display: 'flex', flexDirection: 'row', gap: gapVar, alignItems: 'center' }
    : { display: 'flex', flexDirection: 'column', gap: gapVar }
  return <div style={style}>{children}</div>
}