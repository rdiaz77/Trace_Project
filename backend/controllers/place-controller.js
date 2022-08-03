const place = require('express').Router()
const db = require('../models')
const {Place} = db



//ROUTE -- ALL PLACES

place.get('/', async(req,res)=>{
    try {
        const foundPlaces = await Place.findAll()
        res.status(200).json(foundPlaces)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
   
})

// FIND A SPECIFIC PLACE

place.get('/:id', async (req, res) => {
    try {
        const foundPlace = await Place.findOne({
            where: { place_id: req.params.id }
        })
        res.status(200).json(foundPlace)
    } catch (error) {
        res.status(500).json(error)
    }
})







module.exports = place