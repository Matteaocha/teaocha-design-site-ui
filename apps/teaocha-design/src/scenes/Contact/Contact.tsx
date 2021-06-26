import { MainContent } from '@/apps/teaocha-design/src/components/MainContent'
import { translate } from '@/apps/teaocha-design/src/i18n'

/*
@description
Simple page with some contact info.
*/
export function Contact(): JSX.Element {
  return (
    <MainContent>
      <div data-testid={'Scene-Contact'}>
        <h1>{translate('pages.contact.pageTitle')}</h1>
      </div>
    </MainContent>
  )
}