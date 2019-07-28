import React from 'react'

import Article, { ArticleProps } from './Article'
import {
  ArticlesListWrapper,
  ArticleWrapper,
  LoadingHover,
  LoadingText,
} from './ArticlesList.css'

function ArticlesList({ articles = [], loading = false }) {
  return (
    <>
      {loading && (
        <LoadingHover>
          <LoadingText>Loading articles</LoadingText>
        </LoadingHover>
      )}
      <ArticlesListWrapper>
        {articles ? articles.map(processArticle) : ''}
      </ArticlesListWrapper>
    </>
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