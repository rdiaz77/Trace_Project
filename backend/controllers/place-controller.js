const place = require('express').Router()




//ROUTE -- ALL PLACES


place.get('/', (req,res)=>{
    res.send('all places page')
})







module.exports = place