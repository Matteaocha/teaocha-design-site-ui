import '@testing-library/jest-dom'
import {
  render,
  fireEvent,
  screen,
  within,
} from '@testing-library/react'
import { setIconOptions } from '@/packages/ui-common/src/theming'
import { SideMenu, SideMenuNavItem } from '../SideMenu'

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

describe('Before opening the menu', () => {
  it("Does not render a menu toggle if visible=false", () => {
    const navItems = makeNavItems()

    render(
      <SideMenu
        title={'Menu'}
        navItems={navItems}
        visible={false}
      />
    )
  
    expect(screen.queryByTestId('SideMenu-toggle')).toBeNull()
  })
  
  it("Renders a toggle but, until pressed, the menu is closed", () => {
    const navItems = makeNavItems()

    render(
      <SideMenu
        title={'Menu'}
        navItems={navItems}
        visible
      />
    )
  
    const menuToggle = screen.getByTestId('SideMenu-toggle')
  
    expect(menuToggle).toBeInTheDocument()
    expect(screen.queryByTestId('SideMenu-panel')).toBeNull()
  
    fireEvent.click(menuToggle)
  
    expect(screen.getByTestId('SideMenu-panel')).toBeInTheDocument()
  })
})

describe('After opening the menu', () => {
  let panelNav: HTMLElement
  let navItems: SideMenuNavItem[]

  beforeEach(() => {
    navItems = makeNavItems()

    render(
      <SideMenu
        title={'Menu'}
        navItems={navItems}
        visible
      />
    )
  
    fireEvent.click(screen.getByTestId('SideMenu-toggle'))
    panelNav = screen.getByTestId('SideMenu-navigation')
  })

  it("Renders a title in the menu", () => {
    expect(
      within(panelNav).getByRole('heading', { level: 2 })
    ).toHaveTextContent('Menu')
  })

  it("Renders all but hidden nav elements", () => {
    expect(within(panelNav).getAllByTestId('SideMenuNavItem')).toHaveLength(2)
    expect(within(panelNav).queryByText('About')).toBeNull()
  })

  it("Renders clickable nav items when they ARE NOT disabled", () => {
    const activeNavButton = within(panelNav).getByText('Home')
    fireEvent.click(activeNavButton)

    expect(navItems[0].onClick).toHaveBeenCalled()
  })

  it("Renders non-clickable nav items when they ARE disabled", () => {
    const inactiveNavButton = within(panelNav).getByText('Login')
    fireEvent.click(inactiveNavButton)

    expect(navItems[1].onClick).not.toHaveBeenCalled()
  })
})

describe('Menu with footer', () => {
  beforeEach(() => {
    const renderFooter = () => <div>{'FOOTER'}</div>

    render(
      <SideMenu
        title={'Menu'}
        navItems={[
          {
            key: 'home',
            title: 'Home',
            onClick: jest.fn(),
          }
        ]}
        renderFooter={renderFooter}
        visible
      />
    )

    fireEvent.click(screen.getByTestId('SideMenu-toggle'))
  })

  it("Renders the given footer", () => {
    expect(screen.getByText('FOOTER')).toBeInTheDocument()
  })
})