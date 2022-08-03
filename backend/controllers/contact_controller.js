const contact = require('express').Router()




//ROUTE -- ALL PLACES


contact.get('/', (req,res)=>{
    res.send('all contacts page')
})







module.exports = contact