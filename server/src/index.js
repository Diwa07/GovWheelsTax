const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const connect=require('./db/connect')

const profileRouter =require('./routes/profileRouter')
//for socket



app.use(express.json())
app.use(cors())

app.use(profileRouter)


connect();
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})