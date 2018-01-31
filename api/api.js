const express = require('express')
const apiRouter = express.Router()
const artistsRouter = require('./artists')
const seriesRouter = require('./series')

//Mount Routers
apiRouter.use('/artists', artistsRouter);
apiRouter.use('/series', seriesRouter);

module.exports = apiRouter
