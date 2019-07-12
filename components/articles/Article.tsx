import React from 'react'

import {
  ArticleLink,
  ArticleTextWrapper,
  ArticleHeader,
  MetaWrapper,
  ArticleAuthor,
  ArticleDate,
  ArticleContent,
  ArticleImage,
} from './Article.css'

export type ArticleProps = {
  title: string
  author: string
  publishedAt: string
  description: string
  url: string
  urlToImage: string
}

function processAuthor(author: string) {
  return author ? `Written by: ${author}` : ''
}

function processDate(date: string) {
  return `Published at: ${new Date(date).toLocaleDateString()}`
}

const Article = ({
  title,
  author,
  publishedAt,
  description,
  url,
  urlToImage,
}: ArticleProps) => {
  return (
    <ArticleLink href={url}>
      <ArticleTextWrapper>
        <ArticleHeader>{title}</ArticleHeader>
        <MetaWrapper>
          <ArticleAuthor>{processAuthor(author)}</ArticleAuthor>
          <ArticleDate>{processDate(publishedAt)}</ArticleDate>
        </MetaWrapper>
        <ArticleContent>{description}</ArticleContent>
      </ArticleTextWrapper>
      <ArticleImage src={urlToImage} alt={title} />
    </ArticleLink>
  )
}

export default Article
