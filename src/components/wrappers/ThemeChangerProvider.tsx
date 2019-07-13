import React, { useState } from 'react'

const themes = {
  light: {
    color: '#303030',
    background: '#f2f2f2',
  },
  dark: {
    color: '#f2f2f2',
    background: '#303030',
  },
}

function processTheme(themeName) {
  return themes[themeName]
}

export type Theme = {
  color: string
  background: string
}

export type ThemeChangerContextData = {
  theme: Theme
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
