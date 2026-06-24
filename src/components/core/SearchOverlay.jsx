import { useEffect, useId, useRef, useState } from 'react'
import { FiArrowRight, FiSearch, FiX } from 'react-icons/fi'
import { search } from '../../data/searchIndex.js'

/**
 * SearchOverlay
 *
 * Full-screen overlay search panel for the design kit. Triggered by the
 * search icon in DesignKitHeader. Filters the searchIndex on each keystroke
 * — no network calls, no dependencies beyond react-icons.
 *
 * Keyboard behavior:
 *   Escape       — close the overlay
 *   ↑ / ↓        — move between results
 *   Enter        — navigate to the focused result
 *
 * Props:
 *   open         — boolean, controlled by DesignKitHeader
 *   onClose      — called when the overlay should close
 *   onNavigate   — (id: string) => void, routes to the selected page
 */
export function SearchOverlay({ open, onClose, onNavigate }) {
  const onCloseRef = useRef(onClose)
  const onNavigateRef = useRef(onNavigate)

  useEffect(() => { onCloseRef.current = onClose }, [onClose])
  useEffect(() => { onNavigateRef.current = onNavigate }, [onNavigate])

  if (!open) return null

  return (
    <SearchPanel
      onClose={onCloseRef}
      onNavigate={onNavigateRef}
    />
  )
}

// Inner component — remounts fresh each time the overlay opens,
// so query and focusedIndex reset naturally without setState in an effect.
function SearchPanel({ onClose, onNavigate }) {
  const [query, setQuery] = useState('')
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const inputId = useId()

  const results = search(query)

  // Auto-focus the input on mount (i.e. when the overlay opens)
  useEffect(() => {
    requestAnimationFrame(() => inputRef.current?.focus())
  }, [])

  // Close on Escape, handle arrow key navigation
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') {
        onClose.current()
        return
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setFocusedIndex(i => Math.min(i + 1, results.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setFocusedIndex(i => Math.max(i - 1, -1))
      }
      if (e.key === 'Enter') {
        setFocusedIndex(i => {
          if (i >= 0 && results[i]) {
            onNavigate.current(results[i].id)
            onClose.current()
          }
          return i
        })
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [results, onClose, onNavigate])

  // Scroll focused result into view
  useEffect(() => {
    if (focusedIndex < 0 || !listRef.current) return
    const item = listRef.current.querySelectorAll('[data-result]')[focusedIndex]
    item?.scrollIntoView({ block: 'nearest' })
  }, [focusedIndex])

  function handleSelect(id) {
    onNavigate.current(id)
    onClose.current()
  }

  // Group results by their group label for display
  const grouped = results.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = []
    acc[item.group].push(item)
    return acc
  }, {})

  const flatResults = results

  return (
    <div className="fixed inset-0 z-[200] flex flex-col">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
        onClick={() => onClose.current()}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the design kit"
        className="relative z-10 mx-auto mt-16 w-full max-w-2xl rounded-2xl bg-white shadow-ana-lg"
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-[var(--color-border-default)] px-4 py-3">
          <FiSearch
            aria-hidden="true"
            size={20}
            className="shrink-0 text-[var(--color-text-secondary)]"
          />
          <label htmlFor={inputId} className="sr-only">Search pages, components, and tokens</label>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            onChange={e => { setQuery(e.target.value); setFocusedIndex(-1) }}
            placeholder="Search pages, components, tokens…"
            className="min-w-0 flex-1 bg-transparent text-base text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:outline-none"
          />
          <button
            type="button"
            onClick={() => onClose.current()}
            aria-label="Close search"
            className="shrink-0 rounded-button p-1.5 text-[var(--color-text-secondary)] hover:bg-surface-muted"
          >
            <FiX aria-hidden="true" size={18} />
          </button>
        </div>

        {/* Results */}
        <div
          ref={listRef}
          className="max-h-[60vh] overflow-y-auto overscroll-contain py-2"
        >
          {query.length < 2 && (
            <p className="px-4 py-8 text-center text-sm text-[var(--color-text-secondary)]">
              Type at least 2 characters to search.
            </p>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="px-4 py-8 text-center">
              <p className="font-semibold text-[var(--color-text-primary)]">
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                Try a component name, token, or page section.
              </p>
            </div>
          )}

          {query.length >= 2 && results.length > 0 && (
            <ul aria-label="Search results">
              {Object.entries(grouped).map(([group, items]) => (
                <li key={group}>
                  <p className="px-4 pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
                    {group}
                  </p>
                  <ul>
                    {items.map(item => {
                      const globalIndex = flatResults.indexOf(item)
                      const isFocused = globalIndex === focusedIndex
                      return (
                        <li key={item.id} data-result>
                          <button
                            type="button"
                            onClick={() => handleSelect(item.id)}
                            onMouseEnter={() => setFocusedIndex(globalIndex)}
                            className={`flex w-full items-center gap-3 px-4 py-3 text-left transition
                              ${isFocused ? 'bg-surface-info' : 'hover:bg-surface-muted'}`}
                          >
                            <div className="min-w-0 flex-1">
                              <p className="truncate font-semibold text-[var(--color-text-primary)]">
                                {item.label}
                              </p>
                              <p className="mt-0.5 truncate text-sm text-[var(--color-text-secondary)]">
                                {item.description}
                              </p>
                            </div>
                            <FiArrowRight
                              aria-hidden="true"
                              size={16}
                              className={`shrink-0 transition ${isFocused ? 'text-ana-blue' : 'text-[var(--color-text-secondary)]'}`}
                            />
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer hint */}
        <div className="flex items-center gap-4 border-t border-[var(--color-border-default)] px-4 py-2.5 text-xs text-[var(--color-text-secondary)]">
          <span><kbd className="ds-code">↑↓</kbd> navigate</span>
          <span><kbd className="ds-code">↵</kbd> go to page</span>
          <span><kbd className="ds-code">Esc</kbd> close</span>
        </div>
      </div>
    </div>
  )
}