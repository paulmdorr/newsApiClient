import React, { useContext } from 'react'

import LayoutThemeWrapper from '../src/components/wrappers/LayoutThemeWrapper'
import ArticlesList from '../src/components/articles/ArticlesList'
import FilterSelect from '../src/components/common/FilterSelect'
import { AppDataContext } from '../src/components/wrappers/AppDataProvider'
import { categories } from '../src/services/constants'
import { getNews } from '../src/services/apiClient'
import { LOAD_ARTICLES_BY_CATEGORY } from '../src/services/appDataReducer'

function Index({ articles }) {
  const [appData, dispatch] = useContext<any>(AppDataContext)
  const selectedCategory = appData.category || 'general'

  function onChange(event) {
    dispatch({
      type: LOAD_ARTICLES_BY_CATEGORY,
      data: { category: event.target.value },
    })
  }

  const currentArticles = appData.category ? appData.articles : articles

  return (
    <LayoutThemeWrapper>
      <FilterSelect
        options={categories}
        selected={selectedCategory}
        onChange={onChange}
      />
      <ArticlesList articles={currentArticles} />
    </LayoutThemeWrapper>
  )
}

Index.getInitialProps = async function() {
  return getNews()
}

export default Index
