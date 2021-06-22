import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {
  initializeIcons,
  loadTheme,
} from '@teaocha/ui-common'
import { theme } from './theme'
import Shell from './Shell'

loadTheme(theme)
initializeIcons()

ReactDOM.render(
  <BrowserRouter>
    <Shell/>
  </BrowserRouter>
  ,document.getElementById('root')
)