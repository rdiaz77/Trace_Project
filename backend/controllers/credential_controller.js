const credential = require('express').Router()




//ROUTE -- ALL PLACES


credential.get('/', (req,res)=>{
    res.send('all credential page')
})







module.exports = credential