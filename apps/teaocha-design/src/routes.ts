import {
  Contact,
  Creations,
  Home,
  Profile,
} from './scenes'

export type AppRoute = {
  key: string,
  title: string,
  href: string,
  icon?: string,
  exact?: boolean,
  hidden?: boolean,
  disabled?: boolean,
  component?: React.ComponentType<any>,
}

export type AppRedirect = {
  key: string,
  from: string,
  to: string,
  exact?: boolean,
}

export const routes: { [name: string]: AppRoute } = {
  home: {
    key: 'home',
    title: 'Home',
    href: '/',
    exact: true,
    component: Home,
  },
  profile: {
    key: 'profile',
    title: 'Profile',
    href: '/profile',
    component: Profile,
  },
  creations: {
    key: 'creations',
    title: 'Creations',
    href: '/creations',
    component: Creations,
  },
  blog: {
    key: 'blog',
    title: 'Blog',
    href: '/blog',
    disabled: true,
    hidden: true,
  },
  contact: {
    key: 'contact',
    title: 'Contact',
    href: '/contact',
    component: Contact,
  }
}

export const redirects: { [name: string]: AppRedirect } = {
  home: {
    key: 'home-redirect',
    from: '/home',
    to: '/',
  }
}