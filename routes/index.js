const express = require('express')

const aboutRouter = require('./about')

const app = express()

app.use('/about', aboutRouter)

module.exports = app
