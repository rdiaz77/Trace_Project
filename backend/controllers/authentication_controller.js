const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { User } = db


router.get('/', async(req,res)=>{
    res.send('authentication get route')
    console.log('get authe')
})
router.post('/', async (req, res) => {
    res.send('post authentication route')
    console.log('IN HERE')
    console.log('request here', req.body)
})







module.exports = router
