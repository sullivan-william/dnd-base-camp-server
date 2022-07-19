// dependencies
require('dotenv').config()
const express = require('express')
const app = express()


// routes
app.use('/', async (req, res) => {
    try {
        res.send("Hello server!")
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


// listener
app.listen(process.env.PORT || 4000, () => console.log(`listening on port: ${process.env.PORT || 4000}`))