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

//ADD A NEW PLACE -- working


place.post('/', async (req, res) => {
    try {
        console.log('request here', req.body)
        const newPlace = await Place.create(req.body)
        res.status(200).json({
            message: 'place created Successfully',
            data: newPlace
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A PLACE 
place.put('/:id', async (req, res) => {
    try {
        const updatedPlace = await Place.update(req.body, {
            where: {
                place_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedPlace} place(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A PLACE 
place.delete('/:id', async (req, res) => {
    try {
        const deletedPlace = await Place.destroy({
            where: {
                place_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedPlace} place(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})






module.exports = place