import { MainContent } from '@/apps/teaocha-design/src/components/MainContent'
import { translate } from '@/apps/teaocha-design/src/i18n'

/*
@description
Area with links to embedded/external apps that we want
to showcase.
*/
export function Creations(): JSX.Element {
  return (
    <MainContent>
      <div data-testid={'Scene-Creations'}>
        <h1>{translate('pages.creations.pageTitle')}</h1>
      </div>
    </MainContent>
  )
}