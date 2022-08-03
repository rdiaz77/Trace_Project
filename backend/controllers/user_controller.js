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

//ADD A NEW USER -- not working


user.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({
            message: 'user created Successfully',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A USER -- not working
user.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUser} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A USER -- working
user.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUser} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



module.exports = user


