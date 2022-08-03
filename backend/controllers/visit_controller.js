const visit = require('express').Router()
const db = require('../models')
const {Visit} = db



//ROUTE

//ALL VISITS

visit.get('/', async(req,res)=>{
    try {
        const foundVisits = await Visit.findAll()
        res.status(200).json(foundVisits)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
   
})

// FIND A SPECIFIC VISIT -- working fine

visit.get('/:id', async (req, res) => {
    try {
        const foundVisit = await Visit.findOne({
            where: { visit_id: req.params.id }
        })
        res.status(200).json(foundVisit)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A VISIT -- not working

visit.post('/', async (req, res) => {
    try {
        const newVisit = await Visit.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new visit',
            data: newVisit
        })
    } catch(err) {
        res.status(500).json(err)
    }
})





module.exports = visit