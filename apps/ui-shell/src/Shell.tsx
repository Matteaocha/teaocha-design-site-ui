import { PrimaryButton } from '@teaocha/ui-common'
import { Background } from './components'

export default function Shell(): JSX.Element {
  return (
    <div>
      <Background />
      <PrimaryButton>Hello</PrimaryButton>
    </div>
  )
}