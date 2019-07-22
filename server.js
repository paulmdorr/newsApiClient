const express = require('express')
const next = require('next')

const api = require('./src/api')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  if (!dev) {
    const compression = require('compression')
    server.use(compression())
  }

  server.get('/api/news(/:category)?', (req, res) => {
    api.processReq(req, res)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, '0.0.0.0', err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
