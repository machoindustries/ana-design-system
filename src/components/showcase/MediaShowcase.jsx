import { FiArrowRight, FiImage } from 'react-icons/fi'
import { SectionHeading } from '../core/SectionHeading'

const imageGuidance = [
  ['Alt text', 'Required for meaningful images. Decorative images should use empty alt text and be hidden from assistive technology.'],
  ['Cropping', 'Use object-fit and focal point settings so faces and key details are not obscured on mobile.'],
  ['Aspect ratio', 'Support square, landscape, portrait, and wide hero ratios through controlled variants.'],
  ['Brand fit', 'Images should feel authentic, nurse-centered, diverse, and not overly staged or stylized.'],
]

const sampleCards = [
  {
    title: 'Creating healthier work environments',
    type: 'Article',
    image: 'linear-gradient(135deg, var(--ana-green-500), var(--ana-blue-500))',
    description: 'Use image cards when the visual helps users understand the content before clicking.',
  },
  {
    title: 'Nurses leading change',
    type: 'Story',
    image: 'linear-gradient(135deg, var(--ana-navy-500), var(--ana-green-500))',
    description: 'Story cards should preserve faces, expressions, and authentic nursing contexts.',
  },
  {
    title: 'Professional development resources',
    type: 'Resource',
    image: 'linear-gradient(135deg, var(--ana-orange-500), var(--ana-red-500))',
    description: 'Resource cards can include images, icons, or text-only layouts depending on content type.',
  },
]

function PlaceholderImage({ label = 'Image area', className = '' }) {
  return (
    <div className={`flex min-h-56 items-center justify-center bg-[linear-gradient(135deg,var(--ana-green-500),var(--ana-blue-500))] text-white ${className}`}>
      <div className="rounded-xl border border-white/40 bg-black/10 p-5 text-center backdrop-blur-sm">
        <FiImage className="mx-auto text-3xl" aria-hidden="true" />
        <p className="mt-2 font-bold">{label}</p>
        <p className="mt-1 text-sm text-white/85">Replace with approved ANA imagery</p>
      </div>
    </div>
  )
}

export function MediaShowcase() {
  return (
    <div className="grid gap-10">
      <section>
        <SectionHeading eyebrow="Media component" title="Image block">
          A standalone image component with caption support, alt text guidance, and controlled aspect-ratio variants.
        </SectionHeading>
        <figure className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-border-default)] bg-white shadow-ana">
          <PlaceholderImage label="Image block" className="aspect-[16/9] min-h-64" />
          <figcaption className="p-4 text-sm text-[var(--color-text-secondary)]">
            Caption example: Use captions to provide context, attribution, or clarification when the image adds meaning.
          </figcaption>
        </figure>
      </section>

      <section>
        <SectionHeading eyebrow="Composite component" title="Image / text split">
          Use this for landing pages, campaigns, Foundation stories, advocacy content, and resource promotion.
        </SectionHeading>
        <article className="mt-6 overflow-hidden rounded-2xl bg-white shadow-ana lg:grid lg:grid-cols-2">
          <PlaceholderImage label="Image / text split" className="min-h-72" />
          <div className="p-6 sm:p-8">
            <p className="ds-eyebrow">Nurse-centered storytelling</p>
            <h3 className="mt-2 text-3xl">Use imagery to reinforce trust, humanity, and impact.</h3>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              Image/text split sections should pair authentic nursing imagery with concise copy and a clear action.
            </p>
            <a href="/" className="ds-button ds-button-primary mt-6">Learn more</a>
          </div>
        </article>
      </section>

      <section>
        <SectionHeading eyebrow="Card variant" title="Image cards">
          Cards should support optional images while preserving a strong text-only fallback.
        </SectionHeading>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {sampleCards.map(card => (
            <article className="overflow-hidden rounded-card border border-[var(--color-border-default)] bg-white shadow-ana" key={card.title}>
              <div className="aspect-[4/3]" style={{ background: card.image }} aria-hidden="true" />
              <div className="p-5">
                <span className="ds-tag">{card.type}</span>
                <h3 className="mt-4 text-2xl">{card.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{card.description}</p>
                <a href="/" className="mt-5 inline-flex items-center gap-2 font-bold no-underline">
                  View example <FiArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Implementation guidance" title="Image rules">
          These rules should be applied in React, Optimizely CMS 12 image fields, and HubSpot modules.
        </SectionHeading>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-border-default)] bg-white shadow-ana">
          <table className="w-full min-w-[720px] text-left">
            <thead className="bg-surface-muted">
              <tr>
                <th className="px-4 py-3 text-sm font-bold">Rule</th>
                <th className="px-4 py-3 text-sm font-bold">Guidance</th>
              </tr>
            </thead>
            <tbody>
              {imageGuidance.map(([rule, guidance]) => (
                <tr className="border-t border-[var(--color-border-default)]" key={rule}>
                  <th className="px-4 py-3 align-top text-sm font-bold">{rule}</th>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">{guidance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
