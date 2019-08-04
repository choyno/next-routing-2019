const express = require("express")
const next = require("next")

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare().then(() => {

  const server = express()

  server.get("/about", (req, res) => {
    return app.render(req, res, "/about")
  })

  server.get("/blog/:slug", (req, res) => {
    return app.render(req, res, "/blog", { slug: req.params.slug })
  })

  server.get("/blog/:slug/comments", (req, res) => {
    return app.render(req, res, "/comment", { slug: req.params.slug })
  })

  server.get("*", (req, res) => {
    return handler(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`Server ready on http://localhost:${port}`)
  })

}).catch( ex => {
  console.error(ex.stack)
  process.exit(1)
})
