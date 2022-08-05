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

//ADD A NEW CREDENTIAL -- working


credential.post('/', async (req, res) => {
    try {
        console.log('request here', req.body)
        const newCredential = await Credential.create(req.body)
        res.status(200).json({
            message: 'credential created Successfully',
            data: newCredential
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A CREDENTIAL
credential.put('/:id', async (req, res) => {
    try {
        const updatedCredential = await Credential.update(req.body, {
            where: {
                credential_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedCredential} credential(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A CREDENTIAL
credential.delete('/:id', async (req, res) => {
    try {
        const deletedCredential = await Credential.destroy({
            where: {
                credential_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedCredential} credential(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})





module.exports = credential