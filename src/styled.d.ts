import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string
      background: string
      shadow: string
      shadowHighlight: string
    }
    sizes: {
      maxMobileSize: string
    }
    images: {
      chevronDown: string
    }
  }
}
