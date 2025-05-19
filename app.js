const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))
// ok ok ok ok ok ok ok ok ok ok ok ok
app.get('/health', (req, res) => {
  res.send('ok')
})
// ok
app.listen(PORT)
