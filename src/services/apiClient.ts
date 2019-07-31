import axios from 'axios'
import config from './config'

export async function getNews(category: string = 'general') {
  const cache = localCache()
  let url = `${config.baseUrl}/api/news/${category}`
  let response = cache && cache.get(category)

  if ([null, undefined].includes(response)) {
    try {
      response = await axios.get(url)
      if (cache) cache.store(category, response)
    } catch (error) {
      console.log(error.response)
    }
  }

  return {
    articles: response ? response.data.articles : [],
  }
}

function localCache() {
  try {
    const NAMESPACE = 'newsApiClient'
    const localStorage = window.localStorage

    function store(category, data) {
      localStorage.setItem(`${NAMESPACE}.${category}`, JSON.stringify(data))
    }

    function get(category) {
      return JSON.parse(localStorage.getItem(`${NAMESPACE}.${category}`))
    }

    return { store, get }
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('No window on the server side, skipping cache...')
    }
  }
}
