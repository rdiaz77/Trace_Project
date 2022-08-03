const place = require('express').Router()




//ROUTE -- ALL PLACES

place.get('/', (req,res)=>{
    res.send('GET/places')
})








module.exports = place