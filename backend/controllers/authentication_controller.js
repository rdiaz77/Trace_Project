const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { User } = db


router.get('/', async(req,res)=>{
    console.log(req.body)
    
})




router.post('/', async (req, res) => {
   
    console.log('request here', req.body)

    let user = await User.findOne({
        where: {user_email: req.body.user_email}

    })
    console.log(user)

    if (!user || !await bcrypt.compare(req.body.user_password, user.user_password)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        res.json({ user })
    }
})







module.exports = router


  
