require("dotenv").config
const methodOverride = require("method-override")
const express = require('express')
const app = express()
const PORT = process.env.PORT




//MIDDLEWARE

app.use(methodOverride("_method"))


// VIEW ROUTE
const placesController = require("./controllers/place-controller")

app.use('./places', placesController)




//ROUTE

app.get('/', (req,res) =>{

    res.send("hellos")
})

app.get('*', (req,res)=>{
    res.status(404).send(<h1>404 error</h1>)
})


app.listen(PORT, ()=> console.log('awaken at', PORT))