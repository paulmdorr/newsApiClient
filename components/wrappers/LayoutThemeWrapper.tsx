import React from 'react'

import { ThemeChangerProvider } from './ThemeChangerProvider'
import Layout from '../Layout'

const LayoutThemeWrapper = props => {
  return (
    <ThemeChangerProvider>
      <Layout>{props.children}</Layout>
    </ThemeChangerProvider>
  )
}

export default LayoutThemeWrapper
