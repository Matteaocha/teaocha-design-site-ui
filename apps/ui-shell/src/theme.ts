import { createTheme } from '@teaocha/ui-common'

const palette = {
  themePrimary: '#bf1717',
  themeLighterAlt: '#fcf4f4',
  themeLighter: '#f5d2d2',
  themeLight: '#ecaeae',
  themeTertiary: '#d96666',
  themeSecondary: '#c72d2d',
  themeDarkAlt: '#ac1515',
  themeDark: '#911111',
  themeDarker: '#6b0d0d',
  neutralLighterAlt: '#dff0f8',
  neutralLighter: '#dcecf4',
  neutralLight: '#d3e2ea',
  neutralQuaternaryAlt: '#c4d3da',
  neutralQuaternary: '#bbc9d0',
  neutralTertiaryAlt: '#b4c1c8',
  neutralTertiary: '#a19f9d',
  neutralSecondary: '#605e5c',
  neutralPrimaryAlt: '#3b3a39',
  neutralPrimary: '#323130',
  neutralDark: '#201f1e',
  black: '#000000',
  white: '#e6f7ff',
}

const theme = createTheme({ palette })

const paletteInverted = {
  themePrimary: '#ffffff',
  themeLighterAlt: '#767676',
  themeLighter: '#a6a6a6',
  themeLight: '#c8c8c8',
  themeTertiary: '#d0d0d0',
  themeSecondary: '#dadada',
  themeDarkAlt: '#eaeaea',
  themeDark: '#f4f4f4',
  themeDarker: '#f8f8f8',
  neutralLighterAlt: '#ba1616',
  neutralLighter: '#b71616',
  neutralLight: '#b01515',
  neutralQuaternaryAlt: '#a41414',
  neutralQuaternary: '#9c1313',
  neutralTertiaryAlt: '#961212',
  neutralTertiary: '#c8c8c8',
  neutralSecondary: '#d0d0d0',
  neutralPrimaryAlt: '#dadada',
  neutralPrimary: '#ffffff',
  neutralDark: '#f4f4f4',
  black: '#f8f8f8',
  white: '#bf1717',
}

const themeInverted = createTheme({ palette: paletteInverted })

export {
  palette,
  theme,
  paletteInverted,
  themeInverted,
}