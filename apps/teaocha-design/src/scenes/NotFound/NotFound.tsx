import { MainContent } from '@/apps/teaocha-design/src/components/MainContent'

/*
@description
Default page to show when the route doesn't exist.
*/
export function NotFound(): JSX.Element {
  return (
    <MainContent>
      <div data-testid={'Scene-NotFound'}>
        <h1>Page Not Found</h1>
      </div>
    </MainContent>
  )
}