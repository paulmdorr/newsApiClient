import { ActionType, AppDataType } from './appCommonTypes'

/* Action types */
export const LOAD_ARTICLES_BY_CATEGORY = 'LOAD_ARTICLES_BY_CATEGORY'

export default function reducer(
  state: AppDataType,
  action: ActionType
): AppDataType {
  switch (action.type) {
    case LOAD_ARTICLES_BY_CATEGORY:
      const articles = { ...state.articles }

      return { ...state, articles, category: action.data.category }
    default:
      return state
  }
}
