const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const pollController = require('./pollController')
const PORT = process.env.PORT || 8000

const app = express()
app.set('view engine' , 'ejs')


app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/create',pollController.createPollGetController)
app.post('/create',pollController.createPollPostController)

app.get('/',(req,res)=>{
res.render('home.ejs')
})

mongoose.connect('mongodb://localhost:27017/express-cc', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => 
        app.listen(PORT, (req,res) =>{
            console.log(`Server is running on ${PORT}`)
            }))
        .catch( e=>{
                console.log(e)
            })



