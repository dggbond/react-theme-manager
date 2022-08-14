import * as React from 'react'
import { insertTransitionStyle, renderTheme, ThemeConfig } from './theme-render'
import { save, load } from './theme-storage'

export interface ThemeManagerProps<T extends ThemeConfig> {
  theme: T
  setTheme: React.Dispatch<React.SetStateAction<T>>
}

const ctx = React.createContext<ThemeManagerProps<any>>({} as ThemeManagerProps<any>)

interface ThemeManagerProviderProps {
  onThemeInit: (themeName: string | null) => ThemeConfig
  children: React.ReactNode | React.ReactNode[]
}

export const ThemeManagerProvider: React.FC<ThemeManagerProviderProps> = (props: ThemeManagerProviderProps) => {
  const cacheTheme = props.onThemeInit(load())
  const [theme, setTheme] = React.useState<ThemeConfig>(cacheTheme)

  React.useEffect(() => {
    save(theme.name)
    renderTheme(theme)
  }, [theme])

  React.useEffect(() => {
    insertTransitionStyle()
  }, [])

  return <ctx.Provider value={{
    theme,
    setTheme,
  }}>
    {props.children}
  </ctx.Provider>
}

export default ctx
