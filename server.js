const express = require('express')
const next = require('next')
const { join } = require('path')
const { parse } = require('url')

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

  server.get('/service-worker.js', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    const filePath = join(__dirname, dev ? '.static' : '.next', pathname)
    app.serveStatic(req, res, filePath)
  })

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
