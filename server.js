require('dotenv').config()

const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  if (process.env.NODE_ENV === 'PRODUCTION') {
    server.use(express.static(path.resolve(__dirname, '.', 'build')))
    server.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })
  }

  server.get('/ref/:id', (req, res) => {
    return app.render(req, res, '/ref', { id: req.params.id })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
