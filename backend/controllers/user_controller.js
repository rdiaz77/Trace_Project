const user = require('express').Router()
const db = require('../models')
const {User} = db



//ROUTE -- ALL USER


user.get('/', async(req,res)=>{
    try {
        const foundUsers = await User.findAll()
        res.status(200).json(foundUsers)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
   
})

// FIND A SPECIFIC USER

user.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findOne({
            where: { user_id: req.params.id }
        })
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})





module.exports = user


