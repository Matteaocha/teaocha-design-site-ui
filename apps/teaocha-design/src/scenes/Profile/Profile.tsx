import { MainContent } from '@/apps/teaocha-design/src/components/MainContent'
import { translate } from '@/apps/teaocha-design/src/i18n'

/*
@description
Portfolio page, detailing work-history etc.
*/
export function Profile(): JSX.Element {
  return (
    <MainContent>
      <div data-testid={'Scene-Profile'}>
        <h1>{translate('pages.profile.pageTitle')}</h1>
      </div>
    </MainContent>
  )
}