import * as React from 'react'
import { renderTheme, ThemeConfig } from './theme-render'

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
  const [theme, setTheme] = React.useState(props.defaultTheme)

  React.useEffect(() => {
    renderTheme(theme)
  }, [theme])

  return <ctx.Provider value={{
    theme,
    setTheme,
  }}>
    {props.children}
  </ctx.Provider>
}

export default ctx
