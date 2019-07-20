import styled, { keyframes } from 'styled-components'

const ArticlesListWrapper = styled.ul`
  list-style: none;
  margin-top: 20px;
  padding: 0;
`

const ArticleWrapper = styled.li`
  box-shadow: 3px 3px 8px lightgray;
  height: 300px;
  margin: 20px 0;
  transition: 600ms;

  &:hover {
    box-shadow: 4px 4px 10px gray;
    transition: 600ms;
  }
`

const LoadingHover = styled.div`
  position: absolute;
  height: 100%;
  background: #fffe;
  margin: 20px auto;
  width: 920px;
`

const ellipsis = keyframes`
  to {
    width: 1.25em;
  }
`

const LoadingText = styled.div`
  padding: 285px 0 0 375px;
  font-size: 30px;

  &:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    animation: ${ellipsis} 900ms steps(5, end) 0ms infinite;
    content: '...';
    width: 0px;
  }
`

export { ArticlesListWrapper, ArticleWrapper, LoadingHover, LoadingText }
