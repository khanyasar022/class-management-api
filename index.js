require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cookieParser = require('cookie-parser')
require('./src/config/dbConnection')

app.use(express.json())
app.use(cookieParser())

app.listen(port, () => {
    console.log('server started on ' + port)
})