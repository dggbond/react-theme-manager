import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { themes } from './theme'
import { ThemeManagerProvider } from '@tilemoon/react-theme-manager'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeManagerProvider
      onThemeInit={(themeName) => {
        return themes[themeName as keyof typeof themes] ?? themes.light
      }}
    >
      <App />
    </ThemeManagerProvider>
  </React.StrictMode>
)
