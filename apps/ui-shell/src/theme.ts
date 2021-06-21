import { createTheme } from '@teaocha/ui-common'

const palette = {
  themePrimary: '#d9181b',
  themeLighterAlt: '#fdf4f5',
  themeLighter: '#f9d5d6',
  themeLight: '#f4b3b4',
  themeTertiary: '#e86c6e',
  themeSecondary: '#dd3033',
  themeDarkAlt: '#c31518',
  themeDark: '#a51215',
  themeDarker: '#790d0f',
  neutralLighterAlt: '#e7f2f8',
  neutralLighter: '#e3eef4',
  neutralLight: '#dae5ea',
  neutralQuaternaryAlt: '#cbd5da',
  neutralQuaternary: '#c2cbd0',
  neutralTertiaryAlt: '#bac3c8',
  neutralTertiary: '#a19f9d',
  neutralSecondary: '#605e5c',
  neutralPrimaryAlt: '#3b3a39',
  neutralPrimary: '#323130',
  neutralDark: '#201f1e',
  black: '#000000',
  white: '#e6f7ff' //OLD '#edf9ff',
}

const theme = createTheme({ palette })

export {
  palette,
  theme,
}