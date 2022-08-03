const user = require('express').Router()




//ROUTE -- ALL PLACES


user.get('/', (req,res)=>{
    res.send('all users page')
})







module.exports = user


