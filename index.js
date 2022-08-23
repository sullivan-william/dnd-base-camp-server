// dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const cors = require('cors')
const bodyParser = require('body-parser')

// middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(bodyParser.json())

// controllers
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))

// routes
app.get('/', async (req, res) => {
    try {
        res.send("Hello server!")
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})



// listener
app.listen(process.env.PORT || 4000, () => console.log(`listening on port: ${process.env.PORT || 4000}`))