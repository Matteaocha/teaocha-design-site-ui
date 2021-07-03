/*
Items for the creations page.
These would ideally come from a database... but given the
scale of this website it makes more sense to just keep them
in the codebase for now.
*/

import cmLogo from '@/apps/teaocha-design/assets/images/logos/CreativeMission-square.png'
import hhLogo from '@/apps/teaocha-design/assets/images/logos/HanaHou-logo-square.png'
import grokLockLogo from '@/apps/teaocha-design/assets/images/logos/GrokLock-logo-square.png'

export const apps = [
  {
    title: 'Creative Mission',
    href: 'https://play.google.com/store/apps/details?id=com.matteaocha.cm',
    image: cmLogo,
    fallbackIconName: 'PreviewLink',
    description: [
      `
        A madlibs-style 'mission generator'. The app uses long lists of carefully
        selected nouns, adjectives, verbs, adverbs and sentence templates to generate
        an almost endless number of creative ideas for you to work on.
      `
    ]
  },
  {
    title: 'Hana Hou',
    href: 'https://play.google.com/store/apps/details?id=com.matteaocha.hanahou',
    image: hhLogo,
    fallbackIconName: 'PreviewLink',
    description: [
      `
        Using the same underlying engine as Creative Mission, this party app takes in
        the names of you and your friends and generates a sequence of (hopefully amusing)
        conversation starters for the group.
      `
    ]
  },
]

export const arts = [
  {
    title: 'Grok Lock',
    href: 'https://www.groklock.com',
    image: grokLockLogo,
    fallbackIconName: 'Brush',
    description: [
      `My art-world alter-ego. I use this site to upload any music I create.`
    ]
  },
]