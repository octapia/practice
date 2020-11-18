const express = require('express')
const morgan = require('morgan')

const contactRoutes = require('./contactRoutes')
const app= express()

app.use(morgan('dev'))
// from data
app.use(express.urlencoded({ extended:true }))
//json Data
app.use(express.json())

app.use('/contacts',contactRoutes)
app.use('*', (req,res)=>{
    res.send('Please provide valide routes')
})


const PORT = process.env.PORT || 3000
app.listen( PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})