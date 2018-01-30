const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const errorHandler = require('errorhandler')
const morgan = require('morgan')
const apiRouter = require('./api/api');
const PORT = process.env.PORT || 4000

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(errorHandler())
app.use(cors())
app.use('/api', apiRouter)



app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT)
})

module.exports = app
