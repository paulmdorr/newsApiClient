import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import {
  ThemeChangerContext,
  ThemeChangerContextData,
} from '../wrappers/ThemeChangerProvider'
import Header from './Header'

function Layout({ children }) {
  const MainWrapper = styled.main`
    margin: 0 auto;
    max-width: 960px;
  `

  const { theme } = useContext<ThemeChangerContextData>(ThemeChangerContext)

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Sahitya');

          body {
            color: ${theme.color};
            background: ${theme.background};
            font-family: Sahitya;
          }
        `}
      />
      <Header siteTitle="News API Client" />
      <div>
        <MainWrapper>{children}</MainWrapper>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
