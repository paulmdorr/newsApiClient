import axios from 'axios'

import LayoutThemeWrapper from '../components/wrappers/LayoutThemeWrapper'
import ArticlesList from '../components/articles/ArticlesList'

function Index({ articles }) {
  return (
    <LayoutThemeWrapper>
      <ArticlesList articles={articles} />
    </LayoutThemeWrapper>
  )
}

Index.getInitialProps = async function() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
    process.env.NEWS_API_KEY
  }`
  const response = await axios.get(url)

  return {
    articles: response ? response.data.articles : [],
  }
}

export default Index
