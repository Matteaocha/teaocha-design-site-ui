import ReactDOM from 'react-dom'
import {
  initializeIcons,
  loadTheme,
} from '@teaocha/ui-common'
import { theme } from './theme'
import Shell from './Shell'

loadTheme(theme)
initializeIcons()

ReactDOM.render(<Shell/>, document.getElementById('root'))