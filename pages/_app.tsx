import React from 'react'
import App, { Container } from 'next/app'

import { AppDataProvider } from '../src/components/wrappers/AppDataProvider'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <AppDataProvider>
          <Component {...pageProps} />
        </AppDataProvider>
      </Container>
    )
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
}

export default MyApp
