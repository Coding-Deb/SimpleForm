const express = require('express')
const route = express.Router()
const user = require('../models/model')

route.post('/login',(req,res)=>{
    const UserData = new user({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    UserData.save()
    .then(data => {
        res.json(data)
    })
    .catch(err=>{
        res.json(err)
    })
})

module.exports = route