import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import styled, { createGlobalStyle } from 'styled-components'

import {
  ThemeChangerContext,
  ThemeChangerContextData,
} from '../wrappers/ThemeChangerProvider'
import Header from './Header'

function Layout({ children }) {
  const MainWrapper = styled.main`
    margin: 0 auto;
    max-width: 920px;
  `

  const { theme } = useContext<ThemeChangerContextData>(ThemeChangerContext)

  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Sahitya');

    body {
      color: ${theme.colors.text};
      background: ${theme.colors.background};
      font-family: Sahitya;
    }
  `

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header siteTitle="News API Client" />
        <div>
          <MainWrapper>{children}</MainWrapper>
        </div>
      </>
    </ThemeProvider>
  )
}

export default Layout
