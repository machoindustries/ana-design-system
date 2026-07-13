import { useNavigate, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { DesignKitHeader } from './DesignKitHeader'
import { DesignKitSidebar } from './DesignKitSidebar'
import { DesignKitFooter } from './DesignKitFooter'
import { ScrollToTop } from '../components/core'

export function SiteLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  // Derive activePage from the current URL path
  const activePage = location.pathname.replace('/', '') || 'home'

  return (
    <>
      <ScrollToTop />
      <DesignKitHeader activePage={activePage} onNavigate={(id) => navigate(id === 'home' ? '/' : `/${id}`)} />
      <div className="ds-page-with-rail">
        <DesignKitSidebar activeId={activePage} />
        <main id="main">
          <Outlet />
        </main>
      </div>
      <DesignKitFooter />
    </>
  )
}