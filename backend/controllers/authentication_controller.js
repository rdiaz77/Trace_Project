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
})







module.exports = router
