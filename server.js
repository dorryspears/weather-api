const express = require('express')
const app = express()
const port = 3000

app.get('/healthcheck', (_, res) => {
  res.status(201)
  res.send('OK')
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
  })
}

module.exports = app
