import reactLogo from './assets/react.svg'
import { useTheme, v } from '@tilemoon/react-theme-manager'
import { themes, MyThemeConfig } from './theme'

import './App.css'

function App() {
  const { theme, setTheme } = useTheme<MyThemeConfig>()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          style={{
            color: v(theme.colors.fontColor),
            backgroundColor: v(theme.colors.backgroundColor),
          }}
          onClick={() => setTheme((theme) => theme.name == 'light' ? themes.dark : themes.light)}>
          theme is {theme.name}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
