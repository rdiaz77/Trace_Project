const credential = require('express').Router()
const db = require('../models')
const {Credential} = db



//ROUTE -- ALL CREDENTIALS

credential.get('/', async(req,res)=>{
    try {
        const foundCredentials = await Credential.findAll()
        res.status(200).json(foundCredentials)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
   
})

// FIND A SPECIFIC CREDENTIAL

credential.get('/:id', async (req, res) => {
    try {
        const foundCredential = await Credential.findOne({
            where: { credential_id: req.params.id }
        })
        res.status(200).json(foundCredential)
    } catch (error) {
        res.status(500).json(error)
    }
})






module.exports = credential