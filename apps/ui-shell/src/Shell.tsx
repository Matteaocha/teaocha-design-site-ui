import { useHistory, useRouteMatch } from 'react-router-dom'
import {
  Background,
  Header,
  HeaderMode,
} from './components'

function Shell(): JSX.Element {
  const history = useHistory()
  const isHome = !!useRouteMatch({ path: '/', exact: true })

  const navItems = [
    {
      key: 'home',
      title: 'Home',
      href: '/',
      hidden: isHome,
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
  ].map(navItem => ({
    ...navItem,
    onClick: () => {
      history.push(navItem.href)
    },
  }))

  return (
    <div data-testid={'Shell-root'}>
      <Background />
      <Header
        navItems={navItems}
        mode={isHome ? HeaderMode.Central : HeaderMode.Top}
      />
    </div>
  )
}

export default Shell