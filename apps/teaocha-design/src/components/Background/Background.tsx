import {
  Image,
  ImageFit,
} from '@teaocha/ui-common'
import { theme } from '@/apps/teaocha-design/src/theme'

import classNames from './Background.scss'
import imgBgLeft from '@/apps/teaocha-design/assets/images/background/backgroundLeft.svg'
import imgBgRight from '@/apps/teaocha-design/assets/images/background/backgroundRight.svg'
import imgSteam1 from '@/apps/teaocha-design/assets/images/background/steam1.svg'
import imgSteam2 from '@/apps/teaocha-design/assets/images/background/steam2.svg'
import imgSteam3 from '@/apps/teaocha-design/assets/images/background/steam3.svg'
import imgTable from '@/apps/teaocha-design/assets/images/background/table.svg'
import imgTeacup from '@/apps/teaocha-design/assets/images/teacup.svg'

/*
@background
Deals with background imagery, animations, dynamic loading etc.
*/
export function Background(): JSX.Element {
  return (
    <div
      data-semantic-tag={'Background'}
      className={classNames['root']}
      style={{ backgroundColor: theme.palette.white }}
      aria-hidden
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
        src={imgTable}
        className={classNames['table']}
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