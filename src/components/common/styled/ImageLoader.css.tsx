import styled, { keyframes, css } from 'styled-components'

const fadeInImg = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

const Image: any = styled.img`
  ${loaded =>
    loaded
      ? css`
          animation: ${fadeInImg} 1.5s cubic-bezier(0.23, 1, 0.32, 1) 0.1s 1;
        `
      : css`
          opacity: 0;
        `}
  height: auto;
  vertical-align: middle;
  width: 100%;
`

export { Image }
