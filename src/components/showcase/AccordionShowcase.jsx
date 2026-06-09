import { useState } from 'react'

const accordionItems = [
  ['When should ANA use a structured template?', 'Use structured templates for repeatable content types such as news, certification details, products, events, and account pages.'],
  ['When should ANA use a container zone?', 'Use governed container zones when editors need flexible top or bottom content without breaking template consistency.'],
  ['How should accessibility be handled?', 'Accessibility should be built into each component from the beginning, including keyboard behavior, labels, contrast, and focus states.'],
]

export function AccordionShowcase() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-[var(--color-border-default)] rounded-card border border-[var(--color-border-default)] bg-white">
      {accordionItems.map(([title, body], index) => {
        const isOpen = openIndex === index
        const buttonId = `accordion-button-${index}`
        const panelId = `accordion-panel-${index}`

        return (
          <div key={title}>
            <h4>
              <button
                id={buttonId}
                className="flex w-full items-center justify-between px-5 py-4 text-left font-bold text-ana-navy"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {title}
                <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
            </h4>
            {isOpen ? (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-5 text-slate-700">
                {body}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
