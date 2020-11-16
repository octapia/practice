import express from 'express'
import mongoose from'mongoose'
import morgan from 'morgan'
const app = express()


app.use(morgan('dev'))
app.use(express.urlencoded({extended: true }))
app.use(express.json())

// schema part
app.get('/', (req,res)=>{
       let users = new User({
        name : 'Iftakher'
    })
    users.save()
    .then(()=>{
        app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`)
    })
    })
    .catch(e =>{
        console.log(e)
        res.status(500).json({
            error : 'Error occure'
        })
    })
})
// connection 
const PORT = process.env.PORT||3000
mongoose.connect(`mongodb://127.0.0.1:27017/`, {
    useNewUrlParser:true, useUnifiedTopology:true
    })
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
})
.catch(e =>{
    console.log(e)
})


