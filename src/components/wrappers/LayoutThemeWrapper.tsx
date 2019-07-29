import React from 'react'

import { ThemeChangerProvider } from './ThemeChangerProvider'
import Layout from '../common/Layout'

const LayoutThemeWrapper = props => {
  return (
    <ThemeChangerProvider>
      <Layout>{props.children}</Layout>
    </ThemeChangerProvider>
  )
}

export default LayoutThemeWrapper
