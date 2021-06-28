import '@testing-library/jest-dom'
import {
  render,
  screen,
  within,
} from '@testing-library/react'
import { setIconOptions } from '@teaocha/ui-common'
import { CreationsItem } from '../CreationsItem'

setIconOptions({ disableWarnings: true })

function makeMinimumCreationsItem() {
  return {
    title: 'TITLE',
    href: 'HREF.com',
    fallbackIconName: 'ICON',
    description: ['DESCRIPTION']
  }
}

it("Renders a minimum creations item", () => {
  render(<CreationsItem {...makeMinimumCreationsItem()}/>)
  const rendered = screen.getByTestId('CreationsItem')

  expect(within(rendered).getByText('TITLE')).toBeInTheDocument()
  expect(within(rendered).getByTestId('CreationsItem-link')).toBeInTheDocument()
  expect(within(rendered).getByText('DESCRIPTION')).toBeInTheDocument()
  expect(within(rendered).getByTestId('CreationsItem-icon')).toBeInTheDocument()
})

it("Renders a creations item with an image", () => {
  const mockCreationsItemMin = {
    ...makeMinimumCreationsItem(),
    image: 'image.png',
  }

  render(<CreationsItem {...mockCreationsItemMin}/>)
  const rendered = screen.getByTestId('CreationsItem')
  expect(within(rendered).getByTestId('CreationsItem-image')).toBeInTheDocument()
})