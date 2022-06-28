const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const store = require('./models/store.js')

const app = express()
app.use(bodyParser.json())

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.status(200).send({ "ping": "pong" })
})

app.get('/store', (req, res) => {
    res.status(200).send(store.fetchAllProducts())
})

module.exports = app
