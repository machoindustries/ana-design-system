import { useNavigate, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { DesignKitHeader } from './DesignKitHeader'
import { DesignKitFooter } from './DesignKitFooter'
import { ScrollToTop } from '../components/core/ScrollToTop'

export function SiteLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  // Derive activePage from the current URL path
  const activePage = location.pathname.replace('/', '') || 'home'

  return (
    <>
      <ScrollToTop />
      <DesignKitHeader activePage={activePage} onNavigate={(id) => navigate(id === 'home' ? '/' : `/${id}`)} />
      <main id="main">
        <Outlet />
      </main>
      <DesignKitFooter />
    </>
  )
}