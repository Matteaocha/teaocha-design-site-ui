import { MainContent } from '@/apps/teaocha-design/src/components/MainContent'

/*
@description
Simple page with some contact info.
*/
export function Contact(): JSX.Element {
  return (
    <MainContent>
      <div data-testid={'Scene-Contact'}>
        <h1>Contact</h1>
      </div>
    </MainContent>
  )
}