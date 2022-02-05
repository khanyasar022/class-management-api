require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cookieParser = require('cookie-parser')
require('./src/config/dbConnection')

app.use(express.json())
app.use(cookieParser())


app.use(require("./src/routes/classes"))
app.use(require("./src/routes/student"))
app.use(require("./src/routes/register"))
app.use(require("./src/routes/login"))
app.use(require("./src/routes/instructor"))
app.use(require("./src/routes/logout"))
app.use(require("./src/routes/instructors"))

app.listen(port, () => {
    console.log('server started on ' + port)
})