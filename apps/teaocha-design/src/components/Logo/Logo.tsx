import {
  Image,
  ImageFit,
} from '@teaocha/ui-common'
import { translate } from '@/apps/teaocha-design/src/i18n'
import classNames from './Logo.scss'

import logo4x from '@/apps/teaocha-design/assets/images/logos/TeaochaDesign/logo-1000px.png'
import logo3x from '@/apps/teaocha-design/assets/images/logos/TeaochaDesign/logo-750px.png'
import logo2x from '@/apps/teaocha-design/assets/images/logos/TeaochaDesign/logo-500px.png'
import logo1x from '@/apps/teaocha-design/assets/images/logos/TeaochaDesign/logo-250px.png'
import logoWhite4x from '@/apps/teaocha-design/assets/images/logos/TeaochaDesign/logo-white-1000px.png'
import logoWhite3x from '@/apps/teaocha-design/assets/images/logos/TeaochaDesign/logo-white-750px.png'
import logoWhite2x from '@/apps/teaocha-design/assets/images/logos/TeaochaDesign/logo-white-500px.png'
import logoWhite1x from '@/apps/teaocha-design/assets/images/logos/TeaochaDesign/logo-white-250px.png'
import teacup from '@/apps/teaocha-design/assets/images/teacup.svg'

const SOURCES = {
  regular: {
    '1x': {
      width: 250,
      src: logo1x,
    },
    '2x': {
      width: 500,
      src: logo2x,
    },
    '3x': {
      width: 750,
      src: logo3x,
    },
    '4x': {
      width: 1000,
      src: logo4x,
    },
  },
  inverted: {
    '1x': {
      width: 250,
      src: logoWhite1x,
    },
    '2x': {
      width: 500,
      src: logoWhite2x,
    },
    '3x': {
      width: 750,
      src: logoWhite3x,
    },
    '4x': {
      width: 1000,
      src: logoWhite4x,
    },
  },
}

export interface ILogo {
  className?: string,
  showTeaCup?: boolean,
  isInverted?: boolean,
}

export function Logo(props: ILogo) {
  let rootClassName = classNames['root']
  if (props.className) {
    rootClassName = `${rootClassName} ${props.className}`
  }

  const sources = props.isInverted ? SOURCES.inverted : SOURCES.regular

  return (
    <div
      data-testid={'Logo'}
      className={rootClassName}
    >
      {
        props.showTeaCup && (
          <Image
            src={teacup}
            className={classNames['teacup']}
            imageFit={ImageFit.contain}
            aria-hidden
          />
        )
      }
      <Image
        className={classNames['logo']}
        src={sources['4x'].src}
        srcSet={
          Object.values(sources)
            .map(source => `${source.src} ${source.width}w`)
            .join(', ')
        }
        sizes={'80vw'}
        imageFit={ImageFit.contain}
        alt={translate('header.images.logo')}
      />
    </div>
  )
}