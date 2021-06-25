import '@testing-library/jest-dom'
import {
  render,
  fireEvent,
  screen,
  within,
} from '@testing-library/react'
import { setIconOptions } from '@teaocha/ui-common'
import { Header, HeaderMode, HeaderNavItem } from '../Header'

setIconOptions({ disableWarnings: true })

const makeNavItems = () => [
  {
    key: 'home',
    title: 'Home',
    onClick: jest.fn(),
  },
  {
    key: 'login',
    title: 'Login',
    onClick: jest.fn(),
    disabled: true,
  },
  {
    key: 'about',
    title: 'About',
    onClick: jest.fn(),
    hidden: true,
  },
]

describe('Header in Central mode', () => {
  let header: HTMLElement
  let navItems: HeaderNavItem[]

  beforeEach(() => {
    navItems = makeNavItems()

    render(
      <Header
        navItems={navItems}
        mode={HeaderMode.Central}
      />
    )

    header = screen.getByTestId('Header')
  })

  it("Does not render a side-menu toggle", () => {
    expect(within(header).queryByTestId('SideMenu-toggle')).toBeNull()
  })

  it("Renders all but hidden nav elements", () => {
    expect(within(header).getAllByTestId('Header-navItem')).toHaveLength(2)
    expect(within(header).queryByText('About')).toBeNull()
  })

  it("Renders clickable nav items when they ARE NOT disabled", () => {
    const activeNavButton = within(header).getByText('Home')
    fireEvent.click(activeNavButton)

    expect(navItems[0].onClick).toHaveBeenCalled()
  })

  it("Renders non-clickable nav items when they ARE disabled", () => {
    const inactiveNavButton = within(header).getByText('Login')
    fireEvent.click(inactiveNavButton)

    expect(navItems[1].onClick).not.toHaveBeenCalled()
  })
})

describe('Header in Top mode', () => {
  let header: HTMLElement
  let navItems: HeaderNavItem[]

  beforeEach(() => {
    navItems = makeNavItems()
    
    render(
      <Header
        navItems={navItems}
        mode={HeaderMode.Top}
      />
    )

    header = screen.getByTestId('Header')
  })

  it("Renders a side-menu toggle", () => {
    expect(within(header).queryByTestId('SideMenu-toggle')).toBeInTheDocument()
  })
})