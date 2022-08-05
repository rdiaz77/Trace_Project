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


//ADD A NEW VISIT -- working


visit.post('/', async (req, res) => {
    try {
        console.log('request here', req.body)
        const newVisit = await Visit.create(req.body)
        res.status(200).json({
            message: 'visit created Successfully',
            data: newVisit
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A VISIT -- working
visit.put('/:id', async (req, res) => {
    try {
        const updatedVisit = await Visit.update(req.body, {
            where: {
                visit_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedVisit} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A VISIT -- working
visit.delete('/:id', async (req, res) => {
    try {
        const deletedVisit = await Visit.destroy({
            where: {
                visit_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedVisit} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})





module.exports = visit