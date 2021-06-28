import {
  Icon,
  Image,
  ImageFit,
  Link,
  Separator,
} from '@teaocha/ui-common'
import { theme } from '@/apps/teaocha-design/src/theme'
import { translate } from '@/apps/teaocha-design/src/i18n'
import classNames from './ProfileItem.scss'

export interface IProfileItemSection {
  title?: string,
  from: string,
  until?: string,
  duration?: string,
  location?: string,
  description?: string[],
}

/*
@description
A section of the timeline of this profile item - for example, a role played
or a specific sub-project etc.
*/
function ProfileItemSection(props: IProfileItemSection): JSX.Element {
  return (
    <div
      className={classNames['item-section']}
      data-testid={'ProfileItemSection'}
    >
      {props.title && <h4>{props.title}</h4>}
      <div
        className={classNames['duration']}
        aria-label={translate('pages.profile.item.durationLabel')}
        style={{
          color: theme.palette.neutralSecondary
        }}
      >
        <span>{props.from}</span>
        <span>{' - '}</span>
        <span>{props.until || translate('pages.profile.item.durationUntilDefault')}</span>
        {props.duration && <span>{props.duration}</span>}
      </div>
      <div
        className={classNames['location']}
        aria-label={translate('pages.profile.item.locationLabel')}
        style={{
          color: theme.palette.neutralSecondary
        }}
      >
        {props.location}
      </div>
      {
        props.description && (
          <div
            className={classNames['description']}
            aria-label={translate('pages.profile.item.descriptionLabel')}
          >
            {
              props.description.map(
                (d, i) => <p key={`description-paragraph-${i}`}>{d}</p>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export interface IProfileItem {
  title: string,
  link?: {
    href: string,
    text?: string,
  },
  image?: string,
  fallbackIconName: string,
  sections: IProfileItemSection[],
  showSeparator?: boolean,
}

/*
@description
LinkedIn style profile experience item, used to detail job history,
or other life events.
*/
export function ProfileItem(props: IProfileItem): JSX.Element {
  return (
    <div
      data-testid={'ProfileItem'}
      className={classNames['profile-item']}
    >
      <div className={classNames['logo-or-icon']} aria-hidden={true} >
        {
          props.image ?
            <Image
              src={props.image}
              className={classNames['logo']}
              imageFit={ImageFit.contain}
              data-testid={'ProfileItem-image'}
            /> :
            <Icon
              className={classNames['icon']}
              iconName={props.fallbackIconName}
              data-testid={'ProfileItem-icon'}
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
        <div className={classNames['sub-header']}>
          {
            props.link && (
              <Link href={props.link.href} target={'blank'}>
                {props.link.text || props.link.href}
              </Link>
            )
          }
        </div>
        <ul>
          {
            props.sections.map(
              (section, index) => (
                <li key={`section-${index}`}>
                  <ProfileItemSection {...section} />
                </li>
              )
            )
          }
        </ul>
        {props.showSeparator && <Separator />}
      </div>
    </div>
  )
}