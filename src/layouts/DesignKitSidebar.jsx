import { designKitNavItems } from '../data/designKitNavigation'

export function DesignKitSidebar({ activeId, onNavigate }) {
  return (
    <nav className="ds-rail hidden lg:block" aria-label="Design system sections">
      {designKitNavItems.map(item => (
        <div className="ds-rail-group" key={item.id}>
          <button
            type="button"
            onClick={() => onNavigate(item.id)}
            className={`ds-rail-link ${activeId === item.id ? 'is-active' : ''}`}
          >
            {item.label}
          </button>
          {item.children ? (
            <ul className="ds-rail-sublist">
              {item.children.map(child => (
                <li key={child.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(child.id)}
                    className={`ds-rail-sublink ${activeId === child.id ? 'is-active' : ''}`}
                  >
                    {child.label}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </nav>
  )
}