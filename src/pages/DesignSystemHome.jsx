import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SiteLayout } from '../layouts/SiteLayout'
import { HomePage } from './HomePage'
import { FoundationsPage } from './FoundationsPage'
import { ComponentOverviewPage } from './ComponentOverviewPage'
import { ContentComponentsPage } from './ContentComponentsPage'
import { ActionCardComponentsPage } from './ActionCardComponentsPage'
import { FormsDataComponentsPage } from './FormsDataComponentsPage'
import { MediaComponentsPage } from './MediaComponentsPage'
import { NavigationPreviewPage } from './NavigationPreviewPage'
import { PatternsPage } from './PatternsPage'
import { TemplatesPage } from './TemplatesPage'
import { ContentHubExamplePage } from './ContentHubExamplePage'
import { PlatformsPage } from './PlatformsPage'

export function DesignSystemHome() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="foundations" element={<FoundationsPage />} />
          <Route path="components" element={<ComponentOverviewPage />} />
          <Route path="content-components" element={<ContentComponentsPage />} />
          <Route path="action-card-components" element={<ActionCardComponentsPage />} />
          <Route path="forms-data-components" element={<FormsDataComponentsPage />} />
          <Route path="media-components" element={<MediaComponentsPage />} />
          <Route path="navigation-preview" element={<NavigationPreviewPage />} />
          <Route path="patterns" element={<PatternsPage />} />
          <Route path="templates" element={<TemplatesPage />} />
          <Route path="examples" element={<ContentHubExamplePage />} />
          <Route path="platforms" element={<PlatformsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}