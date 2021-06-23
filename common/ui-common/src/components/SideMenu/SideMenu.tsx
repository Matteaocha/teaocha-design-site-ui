import { PrimaryButton } from '@/ui-common/components/PrimaryButton'
import { Link } from '@/ui-common/components/Link'
import {
  Panel as Panel,
  PanelType as PanelType,
} from '@/ui-common/components/Panel'
import {
  ITheme as ITheme,
  ThemeProvider as ThemeProvider,
} from '@/ui-common/components/ThemeProvider'
import { History } from 'history'
import { useState } from 'react'
import classNames from './SideMenu.scss'

export type SideMenuNavItem = {
  title: string,
  href: string,
  disabled?: boolean,
}

export interface ISideMenuNavItemProps {
  children: string | JSX.Element,
  onClick: () => void,
  disabled?: boolean,
}

function SideMenuNavItem(props: ISideMenuNavItemProps): JSX.Element {
  return (
    <Link
      onClick={props.onClick}
      role='menuitem'
      disabled={props.disabled}
      data-semantic-tag={'SideMenuNavItem'}
    >
      {props.children}
    </Link>
  )
}

//--------------------------------------------------------------------------------

export interface ISideMenuProps {
  title: string,
  navItems: SideMenuNavItem[],
  history: History,
  visible: boolean,
  theme: ITheme,
}

export function SideMenu(props: ISideMenuProps): JSX.Element {
  const [ isOpen, setMenuOpen ] = useState(false)
  const toggleMenu = () => setMenuOpen(!isOpen)

  let rootClassName = classNames['root']
  if (props.visible) {
    rootClassName = `${rootClassName} ${classNames['visible']}`
  }

  return (
    <div
      data-semantic-tag={'SideMenu'}
      className={rootClassName}
    >
      <PrimaryButton
        className={classNames['toggle']}
        iconProps={{ iconName: 'GlobalNavButton' }}
        onClick={toggleMenu}
        data-semantic-tag={'SideMenu-toggle'}
      />
      <ThemeProvider theme={props.theme}>
        <Panel
          onDismiss={toggleMenu}
          type={PanelType.customNear}
          customWidth={'400px'}
          className={classNames['panel']}
          isOpen={isOpen}
          isBlocking
          isLightDismiss
          hasCloseButton
        >
          <div className={classNames['content']} >
            <nav
              aria-labelledby='sidemenu'
              data-semantic-tag={'SideMenu-navigation'}
            >
              <h2 id='sidemenu' >{props.title}</h2>
              <ul>
                {
                  props.navItems.map(
                    navItem => (
                      <li key={`sidemenuitem-${navItem.title}`}>
                        <SideMenuNavItem
                          onClick={
                            () => {
                              toggleMenu()
                              props.history.push(navItem.href)
                            }
                          }
                          disabled={navItem.disabled}
                        >
                          {navItem.title}
                        </SideMenuNavItem>
                      </li>
                    )
                  )
                }
              </ul>
            </nav>
          </div>
        </Panel>
      </ThemeProvider>
    </div>
  )
}

export default SideMenu