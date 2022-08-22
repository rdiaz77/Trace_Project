const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { User } = db

// Get user - testing route

router.get('/', async(req,res)=>{
    res.send('get from auth')
    
})


// POST - LogIn form
router.post('/', async (req, res) => {
    
    console.log('request here', req.body)
    console.log('this is the userid:',req.session.user_id)
    
    let user = await User.findOne({
        where: {user_email: req.body.user_email}
        
    })
    console.log(user)
    
    if (!user || !await bcrypt.compare(req.body.user_password, user.user_password)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        req.session.user_id = user.user_id
        res.json({ user })
    }
})


// LoggedIn User
router.get('/profile', async (req, res) => {
    console.log(req.session.user_id)
    try {
        let user = await User.findOne({
            where: {
                user_id: req.session.user_id
            }
        })
        res.json(user)
    } catch {
        res.json(null)
    }
})





module.exports = router


  
