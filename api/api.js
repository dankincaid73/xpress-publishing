const express = require('express')
const apiRouter = express.Router()
const artistsRouter = require('./artists')

//Mount Routers
apiRouter.use('/artists', artistsRouter);

module.exports = apiRouter
