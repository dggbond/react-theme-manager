export interface ThemeConfig<T = {}> {
  name: string

  colors: T
}

const THEME_STYLE_ID = 'theme-style'
const TRANSITION_STYLE_ID = 'theme-transition-style'

// convert camel-style variable to css variable style
// eg: primaryColor --> --primary-color
const convertCamelToCssVar = (camelName: string) => {
  return '--' + camelName.replace(/([A-Z])/, ($) => '-' + $.toLowerCase())
}

export const v = (colorName: string) => `var(${convertCamelToCssVar(colorName)})`

export const renderTheme = (theme: ThemeConfig) => {
  /// check if there exist theme style or not
  /// if there is, delete first
  const existStyle = document.querySelector(`style#${THEME_STYLE_ID}`)

  if (existStyle) {
    existStyle.remove()
  }

  const style = document.createElement('style')
  style.id = THEME_STYLE_ID

  document.head.appendChild(style)

  style.sheet?.insertRule(`:root {
    ${Object.entries(theme.colors).map(([k, v]) => `${convertCamelToCssVar(k)}:${v};`).join('\n')}
  }`, 0);
}

export const insertTransitionStyle = () => {
  /// check if there exist theme style or not
  /// if there is, return
  const existStyle = document.querySelector(`style#${TRANSITION_STYLE_ID}`)

  if (existStyle) return

  const style = document.createElement('style')
  style.id = TRANSITION_STYLE_ID

  document.head.appendChild(style)

  style.sheet?.insertRule(`* {
    transition-property: color, background-color, border;
    transition-duration: 0.15s;
    transition-timing-function: ease-out;
  }`, 0);
}
