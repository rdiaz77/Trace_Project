const contact = require('express').Router()
const db = require('../models')
const {Contact} = db



//ROUTE -- ALL CONTACTS

contact.get('/', async(req,res)=>{
    try {
        const foundContacts = await Contact.findAll()
        res.status(200).json(foundContacts)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
   
})

// FIND A SPECIFIC CONTACT

contact.get('/:id', async (req, res) => {
    try {
        const foundContact = await Contact.findOne({
            where: { contact_id: req.params.id }
        })
        res.status(200).json(foundContact)
    } catch (error) {
        res.status(500).json(error)
    }
})





module.exports = contact