require("dotenv").config()
const methodOverride = require("method-override")
const express = require('express')
const {Sequelize} = require('sequelize')
const app = express()
const PORT = process.env.PORT




//MIDDLEWARE

app.use(methodOverride("_method"))


// VIEW ROUTE


app.use('/places', require('./controllers/place-controller'))




//ROUTE

app.get('/', (req,res) =>{

    res.send("hellos")
})

app.get('*', (req,res)=>{
    res.status(404).send('<h1>404 error from index JS</h1>')
})


app.listen(PORT, ()=> console.log('awaken at port', PORT))