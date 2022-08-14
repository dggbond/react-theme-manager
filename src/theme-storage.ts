import { ThemeConfig } from "./theme-render"

const THEME_STORAGE_KEY = 'theme'

export const load = (): ThemeConfig['name'] | null => {
  return localStorage.getItem(THEME_STORAGE_KEY)
}

export const save = (themeName: ThemeConfig['name']) => localStorage.setItem(THEME_STORAGE_KEY, themeName)
