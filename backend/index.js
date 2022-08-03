require("dotenv").config
const express = require('express')
const app = express()
const PORT = process.env.PORT







//ROUTE

app.get('/', (req,res) =>{

    res.send("hellos")
})

app.get('*', (req,res)=>{
    res.status(404).send(<h1>404 error</h1>)
})


app.listen(PORT, ()=> console.log('awaken at', PORT))