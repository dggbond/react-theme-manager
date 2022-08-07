import { ThemeConfig } from '@tilemoon/react-theme-manager'

export interface MyThemeConfig extends ThemeConfig {
  name: string;
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

export const themes: Record<string, MyThemeConfig> = {
  light: ThemeLight,
  dark: ThemeDark,
}
