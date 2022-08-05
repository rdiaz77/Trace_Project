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

//ADD A NEW CONTACT -- working


contact.post('/', async (req, res) => {
    try {
        console.log('request here', req.body)
        const newContact = await Contact.create(req.body)
        res.status(200).json({
            message: 'contact created Successfully',
            data: newContact
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A CONTACT 
contact.put('/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.update(req.body, {
            where: {
                contact_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedContact} contact(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A CONTACT

contact.delete('/:id', async (req, res) => {
    try {
        const deletedContact = await Contact.destroy({
            where: {
                contact_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedContact} contact(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})




module.exports = contact