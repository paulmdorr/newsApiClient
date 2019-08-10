import styled, { keyframes } from 'styled-components'

const ArticlesListWrapper = styled.ul`
  list-style: none;
  margin-top: 20px;
  padding: 0;
`

const ArticleWrapper = styled.li`
  box-shadow: 3px 3px 8px ${({ theme }) => theme.colors.shadow};
  height: 300px;
  margin: 20px 0;
  transition: 600ms;

  &:hover {
    box-shadow: 4px 4px 10px ${({ theme }) => theme.colors.shadowHighlight};
    transition: 600ms;
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.maxMobileSize}) {
    height: auto;
  }
`

const LoadingHover = styled.div`
  position: absolute;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  margin: 20px auto;
  opacity: 0.9;
  width: 920px;
  z-index: 99;

  @media screen and (max-width: ${({ theme }) => theme.sizes.maxMobileSize}) {
    width: 98%;
  }
`

const ellipsis = keyframes`
  to {
    width: 28px;
  }
`

const LoadingText = styled.div`
  font-size: 30px;
  padding-top: 285px;
  text-align: center;

  &:after {
    animation: ${ellipsis} 900ms steps(4, end) 0ms infinite;
    content: '...';
    display: inline-block;
    overflow: hidden;
    position: absolute;
    vertical-align: bottom;
    width: 0px;
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.maxMobileSize}) {
    padding-top: 185px;
  }
`

export { ArticlesListWrapper, ArticleWrapper, LoadingHover, LoadingText }
