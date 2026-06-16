import { useState } from 'react'
import { AlertBar, Modal, PromoBanner } from '../core'

function ShowcaseBlock({ eyebrow, title, description, children }) {
  return (
    <div className="ds-card">
      <p className="ds-eyebrow">{eyebrow}</p>
      <h3 className="mt-2 text-2xl">{title}</h3>
      <p className="mt-2 max-w-content text-[var(--color-text-secondary)]">{description}</p>
      <div className="mt-5 overflow-hidden rounded-card border border-[var(--color-border-default)]">
        {children}
      </div>
    </div>
  )
}

function ModalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-start gap-4 bg-white p-6">
      <button type="button" className="ds-button ds-button-accent" onClick={() => setOpen(true)}>
        Cancel Membership
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm cancellation"
        closeOnBackdropClick={false}
        footer={
          <>
            <button type="button" className="ds-button ds-button-secondary" onClick={() => setOpen(false)}>
              Keep membership
            </button>
            <button type="button" className="ds-button ds-button-accent" onClick={() => setOpen(false)}>
              Cancel membership
            </button>
          </>
        }
      >
        This will end your ANA membership at the end of the current billing period. You&apos;ll lose
        access to member pricing, CNE credits, and discounted certification renewal.
      </Modal>
    </div>
  )
}

export function AlertModalShowcase() {
  return (
    <div className="space-y-8">
      <ShowcaseBlock
        eyebrow="Status messaging"
        title="AlertBar"
        description="Persistent, non-blocking banner for operational and status messaging — scheduled maintenance, outages, and policy notices. Uses the kit's existing info/success/warning/error tokens."
      >
        <div className="flex flex-col">
          <AlertBar variant="warning" title="Scheduled maintenance" dismissible={false}>
            nursingworld.org will be unavailable Saturday, June 20 from 11 PM–2 AM ET for scheduled maintenance.
          </AlertBar>
          <AlertBar
            variant="error"
            title="Service disruption"
            action={{ label: 'View status page', href: '#' }}
          >
            Some members may experience errors when renewing membership online.
          </AlertBar>
          <AlertBar variant="success" title="Resolved" dismissible={false}>
            Membership renewal is back online. We apologize for the inconvenience.
          </AlertBar>
          <AlertBar variant="info" action={{ label: 'Learn more', href: '#' }}>
            ANA&apos;s new Code of Ethics took effect June 1, 2026.
          </AlertBar>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock
        eyebrow="Marketing & editorial"
        title="PromoBanner"
        description="Dismissible banner for product launches, member benefits, and campaign pushes. Uses ANA brand action tokens rather than status tokens — kept visually distinct from AlertBar so customers can tell status from marketing at a glance."
      >
        <div className="flex flex-col">
          <PromoBanner
            eyebrow="New"
            title="The Economic Value of Nursing"
            action={{ label: 'Watch now', href: '#' }}
          >
            A free on-demand session on articulating the value of the nursing profession.
          </PromoBanner>
          <PromoBanner
            variant="highlight"
            eyebrow="May 6–12"
            title="National Nurses Week 2026"
            action={{ label: 'Get the toolkit', href: '#' }}
          >
            Download the digital toolkit to celebrate nurses in your state.
          </PromoBanner>
          <PromoBanner
            variant="accent"
            eyebrow="Through May 12"
            title="Help us light up the sky"
            action={{ label: 'Donate now', href: '#' }}
            dismissible={false}
          />
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock
        eyebrow="Required decisions"
        title="Modal"
        description="Blocking overlay reserved for interactions that must be acknowledged or decided before the customer can continue. Traps focus, closes on Escape, and returns focus to the trigger on close."
      >
        <ModalDemo />
      </ShowcaseBlock>
    </div>
  )
}
