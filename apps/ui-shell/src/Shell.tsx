import { useHistory } from 'react-router-dom'
import { themeInverted } from './theme'
import { Background } from './components'
import { SideMenu } from '@teaocha/ui-common'

const NAV_ITEMS = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Profile',
    href: '/profile',
  },
  {
    title: 'Creations',
    href: '/creations',
  },
  {
    title: 'Blog',
    href: '/blog',
    disabled: true,
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

function Shell(): JSX.Element {
  const history = useHistory()

  return (
    <div>
      <Background />
      <SideMenu
        title={'Menu'}
        navItems={NAV_ITEMS}
        history={history}
        theme={themeInverted}
        visible
      />
    </div>
  )
}

export default Shell