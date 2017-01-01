var express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8080

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next()
  }
})

app.use(express.static('build'))

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT)
})
