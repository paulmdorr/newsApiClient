import axios from 'axios'
import config from './config'

export async function getNews(category?: string) {
  let url = `${config.baseUrl}/api/news`

  if (category) {
    url += `/${category}`
  }

  const response = await axios.get(url)

  return {
    articles: response ? response.data.articles : [],
  }
}
