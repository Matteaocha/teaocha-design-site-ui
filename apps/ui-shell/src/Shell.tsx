import { useHistory } from 'react-router-dom'
import { themeInverted } from './theme'
import { Background } from './components'
import { SideMenu } from '@teaocha/ui-common'

const NAV_ITEMS = [
  {
    key: 'home',
    title: 'Home',
    href: '/',
  },
  {
    key: 'profile',
    title: 'Profile',
    href: '/profile',
  },
  {
    key: 'creations',
    title: 'Creations',
    href: '/creations',
  },
  {
    key: 'blog',
    title: 'Blog',
    href: '/blog',
    disabled: true,
  },
  {
    key: 'contact',
    title: 'Contact',
    href: '/contact',
  },
]

function Shell(): JSX.Element {
  const history = useHistory()

  const navItems = NAV_ITEMS.map(navItem => ({
    ...navItem,
    onClick: () => {
      history.push(navItem.href)
    }
  }))

  return (
    <div>
      <Background />
      <SideMenu
        title={'Menu'}
        navItems={navItems}
        theme={themeInverted}
        visible
      />
    </div>
  )
}

export default Shell