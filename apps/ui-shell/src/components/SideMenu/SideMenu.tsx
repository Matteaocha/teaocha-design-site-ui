import {
  IconButton,
  ITheme,
  Link,
  Overlay,
  ThemeProvider,
} from '@teaocha/ui-common'
import { History } from 'history'
import { useState } from 'react'
import styles from './SideMenu.scss'

type SideMenuNavItem = {
  title: string,
  href: string,
  disabled?: boolean,
}

interface ISideMenuNavItemProps {
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
    >
      {props.children}
    </Link>
  )
}

//--------------------------------------------------------------------------------

interface ISideMenuProps {
  title: string,
  navItems: SideMenuNavItem[],
  history: History,
  visible: boolean,
  theme: ITheme,
}

function SideMenu(props: ISideMenuProps): JSX.Element {
  const [ isExpanded, setMenuExpanded ] = useState(false)
  const toggleMenu = () => setMenuExpanded(!isExpanded)

  let rootClassName = styles.sideMenu
  if (isExpanded) {
    rootClassName = `${rootClassName} ${styles.expanded}`
  }

  if (props.visible) {
    rootClassName = `${rootClassName} ${styles.visible}`
  }

  const sideMenuBackgroundStyle = {
    backgroundColor: props.theme.palette.white,
  }

  return (
    <div>
      { isExpanded && <Overlay onClick={toggleMenu} aria-hidden={true} /> }
      <ThemeProvider theme={props.theme} >
        <div
          className={rootClassName}
          style={sideMenuBackgroundStyle}
        >
          <IconButton
            className={styles.sideMenuButton}
            iconProps={{ iconName: 'GlobalNavButton' }}
            onClick={toggleMenu}
          />
          <div className={styles.sideMenuContent} >
            <IconButton
              className={styles.sideMenuCloseButton}
              iconProps={{ iconName: 'Cancel' }}
              onClick={toggleMenu}
            />
            <nav aria-labelledby='sidemenu'>
              <h2 id='sidemenu' >{props.title}</h2>
              <ul>
                {
                  props.navItems.map(
                    navItem => (
                      <li
                        className={styles.sideMenuNavItem}
                        key={`sidemenuitem-${navItem.title}`}
                      >
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
        </div>
      </ThemeProvider>
    </div>
  )
}

export default SideMenu