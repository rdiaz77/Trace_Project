const visit = require('express').Router()




//ROUTE -- ALL PLACES


visit.get('/', (req,res)=>{
    res.send('all visits page')
})







module.exports = visit