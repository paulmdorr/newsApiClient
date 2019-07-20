import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

type ArticleLinkProps = {
  href?: string
  children?: any[] | any
  theme?: DefaultTheme
}

const ArticleLink = styled.a`
  display: grid;
  grid-template-columns: 20px 470px 30px 380px 20px;
  color: ${({ theme }: ArticleLinkProps) => theme.colors.text};
  text-decoration: none;
`

const ArticleTextWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  max-height: 260px;
  margin: 20px 0;
  overflow: hidden;
`

const ArticleHeader = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`

const MetaWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

const ArticleAuthor = styled.span`
  font-size: 14px;
`

const ArticleDate = styled.span`
  font-size: 14px;
  text-align: right;
`

const ArticleContent = styled.article`
  font-size: 18px;
  grid-column-start: 2;
  grid-column-end: 3;
  margin-top: 15px;
`

const ArticleImage = styled.img`
  grid-column-start: 4;
  grid-column-end: 5;
  height: 260px;
  margin: 20px 0;
  width: 380px;
`

export {
  ArticleLink,
  ArticleTextWrapper,
  ArticleHeader,
  MetaWrapper,
  ArticleAuthor,
  ArticleDate,
  ArticleContent,
  ArticleImage,
}
