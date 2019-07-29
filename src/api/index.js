const axios = require('axios')
/* 
  Since there's not much to do to get the news, this API just exposes
  a single function to process the request. Otherwise I would use a
  different file to process the routes and one function for each endpoint here.
*/
module.exports.processReq = async function(req, res) {
  const { category } = req.params
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
    process.env.NEWS_API_KEY
  }`

  if (category) {
    url += `&category=${category}`
  }

  const response = await axios.get(url)

  return res.json({
    articles: response ? response.data.articles : [],
  })
}
