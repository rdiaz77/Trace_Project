require("dotenv").config()
var cors = require('cors')
const methodOverride = require("method-override")
const express = require('express')
const {Sequelize} = require('sequelize')
const app = express()
const PORT = process.env.PORT
const bodyParser = require('body-parser')





//MIDDLEWARE

app.use(methodOverride("_method"))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// VIEW ROUTE


app.use('/places', require('./controllers/place-controller'))
app.use('/users', require('./controllers/user_controller'))
app.use('/contacts', require('./controllers/contact_controller'))
app.use('/credentials', require('./controllers/credential_controller'))
app.use('/visits', require('./controllers/visit_controller'))




//ROUTE

app.get('/', (req,res) =>{

    res.send("hellos")
})

app.get('*', (req,res)=>{
    res.status(404).send('<h1>404 error from index JS</h1>')
})


app.listen(PORT, ()=> console.log('awaken at port', PORT))