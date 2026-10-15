import { NavLink } from 'react-router-dom'
import { designKitNavItems } from '../data/designKitNavigation'

function pathFor(id) {
  return id === 'home' ? '/' : `/${id}`
}

// NavLink renders a real <a> (so open-in-new-tab and copy-link work) and sets
// aria-current="page" on the active link. `end` stops a parent path such as
// /examples from also matching /examples/nurses-week-2026.
export function DesignKitSidebar() {
  return (
    <nav className="ds-rail hidden lg:block" aria-label="Design system sections">
      {designKitNavItems.map(item => (
        <div className="ds-rail-group" key={item.id}>
          <NavLink
            to={pathFor(item.id)}
            end
            className={({ isActive }) => `ds-rail-link ${isActive ? 'is-active' : ''}`}
          >
            {item.label}
          </NavLink>
          {item.children ? (
            <ul className="ds-rail-sublist">
              {item.children.map(child => (
                <li key={child.id}>
                  <NavLink
                    to={pathFor(child.id)}
                    end
                    className={({ isActive }) => `ds-rail-sublink ${isActive ? 'is-active' : ''}`}
                  >
                    {child.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </nav>
  )
}
