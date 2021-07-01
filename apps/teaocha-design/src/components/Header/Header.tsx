import {
  Link,
  memoizeFunction,
  SideMenu,
  SideMenuToggleShape,
} from '@teaocha/ui-common'
import { Logo } from '@/apps/teaocha-design/src/components/Logo'
import { theme, themeInverted } from '@/apps/teaocha-design/src/theme'
import { translate } from '@/apps/teaocha-design/src/i18n'
import { externalProfileLinks } from '@/apps/teaocha-design/src/externalProfiles'
import _classNames from './Header.scss'

/*
@description
Footer for the SideMenu.
Primarily just renders a couple of external links.
*/
function SideMenuFooter(): JSX.Element {
  return (
    <div
      data-testid={'SideMenuFooter'}
      className={_classNames['side-menu-footer']}
    >
      <ul
        data-testid={'SideMenuFooter-external-links'}
        className={_classNames['external-profile-links']}
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
    </div>
  )
}

export type HeaderNavItem = {
  key: string,
  title: string,
  onClick: (e: React.SyntheticEvent) => void,
  hidden?: boolean,
  disabled?: boolean,
}

export enum HeaderMode {
  Top,
  Central
}

export interface HeaderProps {
  navItems: HeaderNavItem[],
  mode: HeaderMode,
}

const makeClassNames = memoizeFunction(
  (mode: HeaderMode) => {
    let classNames = { ..._classNames }

    if (mode === HeaderMode.Central) {
      classNames['root'] = `${classNames['root']} ${classNames['mode-central']}`
    }

    if (mode === HeaderMode.Top) {
      classNames['root'] = `${classNames['root']} ${classNames['mode-top']}`
    }

    return classNames
  }
)

/* 
@ description
Main header for the shell app.

This component is pretty coupled to the layout philosophy of the app
so I haven't made an effort to decouple the interface (which is why
there are no props related to theme etc.)
*/
export function Header(props: HeaderProps): JSX.Element {
  const classNames = makeClassNames(props.mode)
  const navItems = props.navItems.filter(x => !x.hidden)

  return (
    <header data-testid={'Header'}>
      <div className={classNames['root']}>
        <div className={classNames['inner-wrapper']}>
          <div
            className={classNames['background']}
            style={{ backgroundColor: theme.palette.white }}
          />
          <SideMenu
            title={translate('sideMenu.title')}
            navItems={navItems}
            theme={themeInverted}
            visible={props.mode === HeaderMode.Top}
            toggleShape={SideMenuToggleShape.Bubble}
            renderFooter={SideMenuFooter}
          />
          <Logo
            className={classNames['logo']}
            showTeaCup={props.mode === HeaderMode.Top}
          />
          <nav
            className={classNames['navigation']}
            aria-label={translate('header.navigation')}
            data-testid={'Header-navigation'}
          >
            <ul>
              {
                navItems.map(
                  navItem => (
                    <li key={`sidemenuitem-${navItem.key}`}>
                      <Link
                        className={classNames['nav-item']}
                        onClick={navItem.onClick}
                        role='menuitem'
                        disabled={navItem.disabled}
                        data-testid={'Header-navItem'}
                      >
                        {navItem.title}
                      </Link>
                    </li>
                  )
                )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}