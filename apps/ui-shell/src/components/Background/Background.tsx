import {
  Image,
  ImageFit,
} from '@teaocha/ui-common'
import { theme } from '@/apps/ui-shell/src/theme'

import classNames from './Background.scss'
import imgBgLeft from '@/apps/ui-shell/assets/background/backgroundLeft.svg'
import imgBgRight from '@/apps/ui-shell/assets/background/backgroundRight.svg'
import imgLeaf from '@/apps/ui-shell/assets/background/leaf.svg'
import imgSteam1 from '@/apps/ui-shell/assets/background/steam1.svg'
import imgSteam2 from '@/apps/ui-shell/assets/background/steam2.svg'
import imgSteam3 from '@/apps/ui-shell/assets/background/steam3.svg'
import imgTable from '@/apps/ui-shell/assets/background/table.svg'
import imgTeacup from '@/apps/ui-shell/assets/teacup.svg'
import imgTree from '@/apps/ui-shell/assets/background/tree.svg'

const rootStyles = {
  backgroundColor: theme.palette.white,
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: 'hidden',
} as React.CSSProperties

// Deals with background imagery, animations, dynamic loading etc.
function Background(): JSX.Element {
  return (
    <div
      style={rootStyles}
      data-semantic-tag={'Background'}
    >
      <Image
        src={imgBgLeft}
        className={classNames['bg-left']}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgBgRight}
        className={classNames['bg-right']}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgLeaf}
        className={classNames['leaf']}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgTable}
        className={classNames['table']}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgTree}
        className={classNames['tree']}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgTeacup}
        className={classNames['teacup']}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgSteam1}
        className={classNames['steam-1']}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgSteam2}
        className={classNames['steam-2']}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgSteam3}
        className={classNames['steam-3']}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
    </div>
  )
}

export default Background