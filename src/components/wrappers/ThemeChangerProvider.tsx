import React, { useState } from 'react'
import { DefaultTheme } from 'styled-components'

const THEME_LIGHT = 'light'
const THEME_DARK = 'dark'

const themes = {
  [THEME_LIGHT]: {
    colors: {
      text: '#303030',
      background: '#f2f2f2',
      shadow: 'lightgray',
      shadowHighlight: 'gray',
    },
    sizes: {
      maxMobileSize: '930px',
    },
  },
  [THEME_DARK]: {
    colors: {
      text: '#d5d5d5',
      background: '#1c1c1c',
      shadow: '#515151',
      shadowHighlight: 'gray',
    },
    sizes: {
      maxMobileSize: '930px',
    },
  },
}

function processTheme(themeName) {
  return themes[themeName]
}

export type ThemeChangerContextData = {
  setTheme?: Function
  theme: DefaultTheme
  themeName: string
}

const ThemeChangerContext = React.createContext<ThemeChangerContextData>({
  theme: themes[THEME_LIGHT],
  themeName: THEME_LIGHT,
})

type ThemeChangerProviderProps = {
  children: any
}

const ThemeChangerProvider = (props: ThemeChangerProviderProps) => {
  const [themeState, setThemeState] = useState<ThemeChangerContextData>({
    setTheme: themeName => {
      setThemeState(prevState => ({
        ...prevState,
        themeName,
        theme: processTheme(themeName),
      }))
    },
    theme: themes[THEME_LIGHT],
    themeName: THEME_LIGHT,
  })

  return (
    <ThemeChangerContext.Provider value={themeState}>
      {props.children}
    </ThemeChangerContext.Provider>
  )
}

export { ThemeChangerContext, ThemeChangerProvider, THEME_LIGHT, THEME_DARK }
