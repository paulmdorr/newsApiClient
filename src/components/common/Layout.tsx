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
    @font-face {
      font-family: Sahitya;
      src: local('Sahitya Regular'),
        local('Sahitya-Regular'),
        url(/static/fonts/Sahitya-Regular.ttf) format('truetype'),
        url(/static/fonts/Sahitya-Regular.WOFF) format('woff');
      font-weight: 400;
    }

    @font-face {
      font-family: Sahitya;
      src: local('Sahitya Bold'),
        local('Sahitya-Bold'),
        url(/static/fonts/Sahitya-Bold.ttf) format('truetype'),
        url(/static/fonts/Sahitya-Bold.WOFF) format('woff');
      font-weight: 700;
    }

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
