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

  it("Renders nav buttons which respond to clicks", () => {
    const navButtons = within(panelNav).getAllByTestId('SideMenuNavItem')
    expect(navButtons).toHaveLength(2)

    expect(navButtons[0]).toHaveTextContent('Home')
    fireEvent.click(navButtons[0])

    expect(navItems[0].onClick).toHaveBeenCalled()

    expect(navButtons[1]).toHaveTextContent('Login')
    expect(navButtons[1]).toBeDisabled()
    fireEvent.click(navButtons[1])
    expect(navItems[1].onClick).not.toHaveBeenCalled()
  })
})