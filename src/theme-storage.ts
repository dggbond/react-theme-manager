import { ThemeConfig } from "./theme-render"

const THEME_STORAGE_KEY = 'theme'

export const load = (): ThemeConfig | null => {
  const themeJson = localStorage.getItem(THEME_STORAGE_KEY)

  if (themeJson) {
    return JSON.parse(themeJson) as ThemeConfig
  }

  return null
}

export const save = (theme: ThemeConfig) => localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme))
