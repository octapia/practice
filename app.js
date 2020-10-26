
const express = require('express')
const mongoose = require('mongoose')
const url ='mongodb://localhost/alienDBex'

const app = express()

mongoose.connect(url , {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', ()=>{
  console.log('connected...')
})

app.use(express.json())

const alinesRouter = require('../routers/aliens')

const PORT = process.env.PORT || 8000

app.listen(PORT, (req,res) =>{
console.log(`Server is running on ${PORT}`)
})