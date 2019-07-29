import axios from 'axios'
import config from './config'

export async function getNews(category?: string) {
  let url = `${config.baseUrl}/api/news`
  let response

  if (category) {
    url += `/${category}`
  }

  try {
    response = await axios.get(url)
  } catch (error) {
    console.log(error.response)
  }

  return {
    articles: response ? response.data.articles : [],
  }
}
