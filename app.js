'use strict'
// load dependencies
const {cars} = require('./data/index.js')
const express = require('express')
const carsRouter = require('./routes/cars.js')

// create the express app
const app = express()

// configure express middleware
app.use(express.json())
app.use('/api/cars', carsRouter)

// start listening for HTTP requests
const port = process.env.port || 3030
app.listen(port, () => console.log(`Server listening on port ${port} ...`))
