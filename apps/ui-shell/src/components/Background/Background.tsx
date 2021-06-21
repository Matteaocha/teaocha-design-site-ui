import {
  Image,
  ImageFit,
} from '@teaocha/ui-common'
import { theme } from '@/ui-shell/theme'

import styles from './Background.scss'
import imgBgLeft from '@/ui-shell/assets/background/backgroundLeft.svg'
import imgBgRight from '@/ui-shell/assets/background/backgroundRight.svg'
import imgLeaf from '@/ui-shell/assets/background/leaf.svg'
import imgSteam1 from '@/ui-shell/assets/background/steam1.svg'
import imgSteam2 from '@/ui-shell/assets/background/steam2.svg'
import imgSteam3 from '@/ui-shell/assets/background/steam3.svg'
import imgTable from '@/ui-shell/assets/background/table.svg'
import imgTeacup from '@/ui-shell/assets/teacup.svg'
import imgTree from '@/ui-shell/assets/background/tree.svg'

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
    <div style={rootStyles}>
      <Image
        src={imgBgLeft}
        className={styles.bgLeft}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgBgRight}
        className={styles.bgRight}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgLeaf}
        className={styles.leaf}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgTable}
        className={styles.table}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgTree}
        className={styles.tree}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgTeacup}
        className={styles.teacup}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgSteam1}
        className={styles.steam1}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgSteam2}
        className={styles.steam2}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
      <Image 
        src={imgSteam3}
        className={styles.steam3}
        imageFit={ImageFit.contain}
        aria-hidden={true}
      />
    </div>
  )
}

export default Background