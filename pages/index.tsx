import React, { useContext } from 'react'
import axios from 'axios'

import LayoutThemeWrapper from '../src/components/wrappers/LayoutThemeWrapper'
import ArticlesList from '../src/components/articles/ArticlesList'
import FilterSelect from '../src/components/common/FilterSelect'
import { AppDataContext } from '../src/components/wrappers/AppDataProvider'
import { categories } from '../src/services/constants'

function Index({ articles }) {
  const [appData, dispatch] = useContext<any>(AppDataContext)
  const categoriesWithDefault = appData.category
    ? categories
    : ['Pick a category...', ...categories]
  const selectedCategory = appData.category || categoriesWithDefault[0]

  function onChange(event) {
    dispatch({
      type: 'LOAD_ARTICLES_BY_CATEGORY',
      data: { category: event.target.value },
    })
  }

  console.log(appData)
  return (
    <LayoutThemeWrapper>
      <FilterSelect
        options={categoriesWithDefault}
        selected={selectedCategory}
        onChange={onChange}
      />
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
