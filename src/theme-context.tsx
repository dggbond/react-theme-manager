import * as React from 'react'
import { insertTransitionStyle, renderTheme, ThemeConfig } from './theme-render'
import { save, load } from './theme-storage'

export interface ThemeManagerProps<T extends ThemeConfig> {
  theme: T
  setTheme: React.Dispatch<React.SetStateAction<T>>
}

const ctx = React.createContext<ThemeManagerProps<any>>({} as ThemeManagerProps<any>)

interface ThemeManagerProviderProps {
  defaultTheme: ThemeConfig
  children: React.ReactNode | React.ReactNode[]
}

export const ThemeManagerProvider: React.FC<ThemeManagerProviderProps> = (props: ThemeManagerProviderProps) => {
  const [theme, setTheme] = React.useState(load() ?? props.defaultTheme)

  React.useEffect(() => {
    save(theme)
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
