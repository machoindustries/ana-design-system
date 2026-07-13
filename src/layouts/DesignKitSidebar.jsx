import { designKitNavItems } from '../data/designKitNavigation'

export function DesignKitSidebar({ activeId }) {
  return (
    <nav className="ds-rail" aria-label="Design system sections">
      {designKitNavItems.map(item => (
        <div className="ds-rail-group" key={item.id}>
          <a
            href={`#${item.id}`}
            className={`ds-rail-link ${activeId === item.id ? 'is-active' : ''}`}
          >
            {item.label}
          </a>
          {item.children ? (
            <ul className="ds-rail-sublist">
              {item.children.map(child => (
                <li key={child.id}>
                  <a
                    href={`#${child.id}`}
                    className={`ds-rail-sublink ${activeId === child.id ? 'is-active' : ''}`}
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </nav>
  )
}