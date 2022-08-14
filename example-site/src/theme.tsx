import { ThemeConfig } from '@tilemoon/react-theme-manager'

interface ThemeColors {
  fontColor: string,
  backgroundColor: string,
}

export interface MyThemeConfig extends ThemeConfig<ThemeColors> {
}

const ThemeLight: MyThemeConfig = {
  name: 'light',
  colors: {
    fontColor: 'black',
    backgroundColor: 'white',
  },
}

const ThemeDark: MyThemeConfig = {
  name: 'dark',
  colors: {
    fontColor: 'white',
    backgroundColor: 'black',
  },
}

export const themes = {
  light: ThemeLight,
  dark: ThemeDark,
} as const
