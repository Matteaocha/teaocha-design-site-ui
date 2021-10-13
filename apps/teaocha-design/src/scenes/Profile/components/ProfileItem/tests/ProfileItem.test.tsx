import '@testing-library/jest-dom'
import {
  render,
  screen,
  within,
} from '@testing-library/react'
import { setIconOptions } from '@teaocha/ui-common'
import { ProfileItem } from '../ProfileItem'

setIconOptions({ disableWarnings: true })

function makeMinimumProfileItem() {
  return {
    title: 'TITLE',
    from: 'FROM',
    fallbackIconName: 'ICON',
    sections: [{
      description: ['SECTION_DESCRIPTION'],
    }],
  }
}

it("Renders a minimum profile item", () => {
  render(<ProfileItem {...makeMinimumProfileItem()}/>)
  const rendered = screen.getByTestId('ProfileItem')

  expect(within(rendered).getByText('TITLE')).toBeInTheDocument()
  expect(within(rendered).getByText('FROM')).toBeInTheDocument()
  expect(within(rendered).getByText('SECTION_DESCRIPTION')).toBeInTheDocument()
  expect(within(rendered).getByTestId('ProfileItem-icon')).toBeInTheDocument()
})

it("Renders a profile item with an image", () => {
  const mockProfileItemMin = {
    ...makeMinimumProfileItem(),
    image: 'image.png',
  }

  render(<ProfileItem {...mockProfileItemMin}/>)
  const rendered = screen.getByTestId('ProfileItem')
  expect(within(rendered).getByTestId('ProfileItem-image')).toBeInTheDocument()
})

it("Renders a profile item with a link - no display text", () => {
  const mockProfileItemMin = {
    ...makeMinimumProfileItem(),
    link: {
      href: 'www.example.com',
    },
  }

  render(<ProfileItem {...mockProfileItemMin}/>)
  const rendered = screen.getByTestId('ProfileItem')
  expect(within(rendered).getByText('www.example.com')).toBeInTheDocument()
})

it("Renders a profile item with a link - specifying display text", () => {
  const mockProfileItemMin = {
    ...makeMinimumProfileItem(),
    link: {
      href: 'www.example.com',
      text: 'LINK TEXT',
    },
  }

  render(<ProfileItem {...mockProfileItemMin}/>)
  const rendered = screen.getByTestId('ProfileItem')
  expect(within(rendered).getByText('LINK TEXT')).toBeInTheDocument()
})

it("Renders a profile item from-until-duration text", () => {
  const mockProfileItemMin = {
    ...makeMinimumProfileItem(),
    from: 'FROM',
    until: 'UNTIL',
    duration: 'DURATION',
  }

  render(<ProfileItem {...mockProfileItemMin}/>)
  const rendered = screen.getByTestId('ProfileItem')
  expect(within(rendered).getByText('FROM')).toBeInTheDocument()
  expect(within(rendered).getByText('UNTIL')).toBeInTheDocument()
  expect(within(rendered).getByText('DURATION')).toBeInTheDocument()
})

it("Renders a profile item with multiple sections", () => {
  const mockProfileItemMin = {
    ...makeMinimumProfileItem(),
    sections: [
      {
        title: 'SECTION 0 TITLE',
        location: 'SECTION 0 LOCATION',
        description: ['SECTION 0 DESCRIPTION'],
      },
      {
        duration: 'SECTION 1 DURATION',
        description: [
          'SECTION 1 DESCRIPTION 1',
          'SECTION 1 DESCRIPTION 2'
        ],
      }
    ]
  }

  render(<ProfileItem {...mockProfileItemMin}/>)

  const sections = screen.getAllByTestId('ProfileItemSection')
  expect(sections).toHaveLength(2)

  expect(within(sections[0]).getByText('SECTION 0 TITLE')).toBeInTheDocument()
  expect(within(sections[0]).getByText('SECTION 0 LOCATION')).toBeInTheDocument()
  expect(within(sections[0]).getByText('SECTION 0 DESCRIPTION')).toBeInTheDocument()

  expect(within(sections[1]).getByText('SECTION 1 DURATION')).toBeInTheDocument()
  expect(within(sections[1]).getByText('SECTION 1 DESCRIPTION 1')).toBeInTheDocument()
  expect(within(sections[1]).getByText('SECTION 1 DESCRIPTION 2')).toBeInTheDocument()
})