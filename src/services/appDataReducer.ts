import { ActionType } from './appCommonTypes'
import { getNews } from '../services/apiClient'

/* Action types */
export const LOAD_ARTICLES_BY_CATEGORY = 'LOAD_ARTICLES_BY_CATEGORY'

export default async function reducer(
  action: ActionType,
  setAppDataState: Function
) {
  switch (action.type) {
    case LOAD_ARTICLES_BY_CATEGORY:
      const { category } = action.data

      const response = await getNews(category)

      return setAppDataState(state => ({
        ...state,
        articles: response.articles,
        category: category,
      }))
    default:
      return setAppDataState(state => state)
  }
}
