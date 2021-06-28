import { Separator } from '@teaocha/ui-common'
import { MainContent } from '@/apps/teaocha-design/src/components/MainContent'
import { translate } from '@/apps/teaocha-design/src/i18n'
import classNames from './Creations.scss'

import { CreationsItem } from './components/CreationsItem'
import { apps, arts } from './creationsItems'

/*
@description
Area with links to embedded/external apps that we want
to showcase.
*/
export function Creations(): JSX.Element {
  return (
    <MainContent>
      <div
        data-testid={'Scene-Creations'}
        role={'document'}
        tab-index={0}
        className={classNames['root']}
      >
        <h1>{translate('pages.creations.pageTitle')}</h1>
        <p className={classNames['pageDescription']}>
          {translate('pages.creations.pageDescription')}
        </p>
        <Separator />
        <section aria-labelledby={'creations_section_apps'}>
          <h2 id={'creations_section_apps'}>
            {translate('pages.creations.apps.title')}
          </h2>
          <ul>
            {
              apps.map(
                item => (
                  <li key={item.title} >
                    <CreationsItem {...item} />
                  </li>
                )
              )
            }
          </ul>
        </section>
        <Separator />
        <section aria-labelledby={'creations_section_arts'}>
          <h2 id={'creations_section_arts'}>
            {translate('pages.creations.arts.title')}
          </h2>
          <ul>
            {
              arts.map(
                item => (
                  <li key={item.title} >
                    <CreationsItem {...item} />
                  </li>
                )
              )
            }
          </ul>
        </section>
      </div>
    </MainContent>
  )
}