import {
  Image,
  ImageFit,
  Link,
  Separator,
} from '@teaocha/ui-common'
import { MainContent } from '@/apps/teaocha-design/src/components/MainContent'
import { translate } from '@/apps/teaocha-design/src/i18n'
import classNames from './Profile.scss'
import { ProfileItem } from './components/ProfileItem'

import meImg from '@/apps/teaocha-design/assets/images/Matt-Profile.jpeg'
import { externalProfileLinks } from '@/apps/teaocha-design/src/externalProfiles'
import {
  education,
  experience,
  projects,
} from './profileItems'

/*
@description
Links to other pages with a profile on it
*/
function ExternalProfileLinks(): JSX.Element {
  return (
    <ul
      data-testid={'ExternalProfileLinks'}
      className={classNames['external-profile-links']}
      aria-label={translate('externalProfileLinksLabel')}
    >
      {
        externalProfileLinks.map(
          extLink => (
            <li key={extLink.key}>
              <Link href={extLink.href} target={'blank'}>
                {extLink.title}
              </Link>
            </li>
          )
        )
      }
    </ul>
  )
}

/*
@description
Portfolio page, detailing work-history etc.
*/
export function Profile(): JSX.Element {
  return (
    <MainContent>
      <div
        data-testid={'Scene-Profile'}
        role={'document'}
        tab-index={0}
        className={classNames['root']}
      >
        <h1>{translate('pages.profile.pageTitle')}</h1>
        <Image
          src={meImg}
          className={classNames['profile-picture']}
          imageFit={ImageFit.contain}
          alt={translate('pages.profile.images.me')}
        />
        <section
          aria-label={translate('pages.profile.introduction.title')}
          className={classNames['introduction']}
        >
          <p>{translate('pages.profile.introduction.p1')}</p>
          <p>{translate('pages.profile.introduction.p2')}</p>
          <ExternalProfileLinks />
        </section>
        <Separator />
        <section aria-labelledby={'profile_section_experience'}>
          <h2 id={'profile_section_experience'}>
            {translate('pages.profile.experience.title')}
          </h2>
          <ul>
            {
              experience.map(
                (item, index) => (
                  <li key={item.title} >
                    <ProfileItem
                      {...item}
                      showSeparator={index < (experience.length - 1)}
                    />
                  </li>
                )
              )
            }
          </ul>
        </section>
        <Separator />
        <section aria-labelledby={'profile_section_education'}>
          <h2 id={'profile_section_education'}>
            {translate('pages.profile.education.title')}
          </h2>
          <ul>
            {
              education.map(
                (item, index) => (
                  <li key={item.title} >
                    <ProfileItem
                      {...item}
                      showSeparator={index < (education.length - 1)}
                    />
                  </li>
                )
              )
            }
          </ul>
        </section>
        <Separator />
        <section aria-labelledby={'profile_section_projects'}>
          <h2 id={'profile_section_projects'}>
            {translate('pages.profile.projects.title')}
          </h2>
          <ul>
            {
              projects.map(
                (item, index) => (
                  <li key={item.title} >
                    <ProfileItem
                      {...item}
                      showSeparator={index < (projects.length - 1)}
                    />
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