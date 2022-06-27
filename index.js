require('./config/config')
require('./models/db') 
const express = require('express')
const app = express()
app.use(express.json())

app.listen(process.env.PORT)
