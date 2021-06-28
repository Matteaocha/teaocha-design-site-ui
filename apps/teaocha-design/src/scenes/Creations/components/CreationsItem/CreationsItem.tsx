import {
  Icon,
  Image,
  ImageFit,
  Link,
} from '@teaocha/ui-common'
import { theme } from '@/apps/teaocha-design/src/theme'
import { translate } from '@/apps/teaocha-design/src/i18n'
import classNames from './CreationsItem.scss'

export interface ICreationsItem {
  title: string,
  href: string,
  image?: string,
  fallbackIconName: string,
  description: string[],
}

/*
@description
Item to describe and link to some external portfolio creation.
*/
export function CreationsItem(props: ICreationsItem): JSX.Element {
  return (
    <div
      data-testid={'CreationsItem'}
      className={classNames['creations-item']}
    >
      <div className={classNames['logo-or-icon']} aria-hidden={true} >
        {
          props.image ?
            <Image
              src={props.image}
              className={classNames['logo']}
              imageFit={ImageFit.contain}
              data-testid={'CreationsItem-image'}
            /> :
            <Icon
              className={classNames['icon']}
              iconName={props.fallbackIconName}
              data-testid={'CreationsItem-icon'}
              styles={{
                root: {
                  color: theme.palette.themePrimary,
                }
              }}
            />
        }
      </div>
      <div className={classNames['main-content']}>
        <h3>{props.title}</h3>
        <div className={classNames['description']}>
          {
            props.description.map(
              (d, i) => <p key={`description-paragraph-${i}`}>{d}</p>
            )
          }
        </div>
        <div className={classNames['links']}>
          <Link
            href={props.href}
            data-testid={'CreationsItem-link'}
            target={'blank'}
          >
            {translate('pages.creations.item.linkLabel')}
          </Link>
        </div>
      </div>
    </div>
  )
}