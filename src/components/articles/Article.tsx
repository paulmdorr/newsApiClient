import React from 'react'

import ImageLoader from '../common/ImageLoader'

import {
  ArticleLink,
  ArticleTextWrapper,
  ArticleHeader,
  MetaWrapper,
  ArticleAuthor,
  ArticleDate,
  ArticleContent,
  ArticleImageWrapper,
  ArticleImageHelper,
} from './Article.css'

export type ArticleProps = {
  title: string
  author: string
  publishedAt: string
  description: string
  url: string
  urlToImage: string
}

function Article({
  title,
  author,
  publishedAt,
  description,
  url,
  urlToImage,
}: ArticleProps) {
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
      <ArticleImageWrapper>
        <>
          <ArticleImageHelper />
          <ImageLoader urlToImage={urlToImage} alt={title} />
        </>
      </ArticleImageWrapper>
    </ArticleLink>
  )
}

function processAuthor(author: string) {
  return author ? `Written by: ${author}` : ''
}

function processDate(date: string) {
  return `Published at: ${new Date(date).toLocaleDateString()}`
}

export default Article
