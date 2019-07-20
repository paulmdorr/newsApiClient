import React, { useContext, useState } from 'react'

import LayoutThemeWrapper from '../src/components/wrappers/LayoutThemeWrapper'
import ArticlesList from '../src/components/articles/ArticlesList'
import CategorySelect from '../src/components/categories/CategorySelect'
import { AppDataContext } from '../src/components/wrappers/AppDataProvider'
import { categories } from '../src/services/constants'
import { getNews } from '../src/services/apiClient'
import { LOAD_ARTICLES_BY_CATEGORY } from '../src/services/appDataReducer'

function Index({ articles }) {
  const [appData, dispatch] = useContext<any>(AppDataContext)
  const [loading, setLoading] = useState(false)
  const selectedCategory = appData.category || 'general'

  function onChange(event) {
    setLoading(true)
    dispatch({
      type: LOAD_ARTICLES_BY_CATEGORY,
      data: { category: event.target.value },
    }).then(() => setLoading(false))
  }

  const currentArticles = appData.category ? appData.articles : articles

  return (
    <LayoutThemeWrapper>
      <CategorySelect
        options={categories}
        selected={selectedCategory}
        onChange={onChange}
      />
      <ArticlesList articles={currentArticles} loading={loading} />
    </LayoutThemeWrapper>
  )
}

Index.getInitialProps = async function() {
  return getNews()
}

export default Index
