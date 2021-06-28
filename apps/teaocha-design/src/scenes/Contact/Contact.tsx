import { Link } from '@teaocha/ui-common'
import { MainContent } from '@/apps/teaocha-design/src/components/MainContent'
import { translate } from '@/apps/teaocha-design/src/i18n'
import classNames from './Contact.scss'

/*
@description
Simple page with some contact info.
*/
export function Contact(): JSX.Element {
  return (
    <MainContent>
      <div data-testid={'Scene-Contact'}>
        <h1>{translate('pages.contact.pageTitle')}</h1>
        <p className={classNames['message']}>
          {translate('pages.contact.message')}
        </p>
        <div className={classNames['links']}>
          <Link
            href={'https://www.linkedin.com/in/matthew-bilton-463111122'}
            target={'blank'}
          >
            {'LinkedIn'}
          </Link>
        </div>
      </div>
    </MainContent>
  )
}