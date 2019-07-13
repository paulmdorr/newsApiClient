import React from 'react'
import styled from '@emotion/styled'

import Article, { ArticleProps } from './Article'

const ArticlesListWrapper = styled.ul`
  list-style: none;
`

const ArticleWrapper = styled.li`
  box-shadow: 3px 3px 8px lightgray;
  height: 300px;
  margin: 20px 0;
  transition: 600ms;
  width: 920px;

  &:hover {
    box-shadow: 4px 4px 10px gray;
    transition: 600ms;
  }
`

function ArticlesList({ articles = [] }) {
  return (
    <ArticlesListWrapper>
      {articles ? articles.map(processArticle) : ''}
    </ArticlesListWrapper>
  )
}

function processArticle(data: ArticleProps) {
  return (
    <ArticleWrapper key={data.title}>
      <Article {...data} />
    </ArticleWrapper>
  )
}

export default ArticlesList
