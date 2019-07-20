import React, { useState } from 'react'
import { DefaultTheme } from 'styled-components'

const themes = {
  light: {
    colors: {
      text: '#303030',
      background: '#f2f2f2',
    },
  },
  dark: {
    colors: {
      text: '#f2f2f2',
      background: '#303030',
    },
  },
}

function processTheme(themeName) {
  return themes[themeName]
}

export type ThemeChangerContextData = {
  theme: DefaultTheme
  themeName: string
}

const ThemeChangerContext = React.createContext<ThemeChangerContextData>({
  theme: themes.light,
  themeName: 'light',
})

type ThemeChangerProviderProps = {
  children: any
}

const ThemeChangerProvider = (props: ThemeChangerProviderProps) => {
  const [themeState, setThemeState] = useState({
    theme: themes.light,
    themeName: 'light',
  })

  const contextValue = {
    setTheme: themeName => {
      setThemeState({
        themeName,
        theme: processTheme(themeName),
      })
    },
    ...themeState,
  }

  return (
    <ThemeChangerContext.Provider value={contextValue}>
      {props.children}
    </ThemeChangerContext.Provider>
  )
}

export { ThemeChangerContext, ThemeChangerProvider }
