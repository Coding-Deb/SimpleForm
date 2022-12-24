const express = require('express')
const app = express()
const port = 5000
const routes = require('./route/routes')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/form',()=>{
    console.log('Database Connected');
})

app.use(express.json())
app.use('/api',routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))