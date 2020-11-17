import express from 'express'
import mongoose from'mongoose'
import morgan from 'morgan'
// import User from './models'
const app = express()


app.use(morgan('dev'))
app.use(express.urlencoded({extended: true }))
app.use(express.json())

// schema part
let Schema = mongoose.Schema
let testSchema = new Schema({
    name : String
})

let Test = mongoose.model('Test' , testSchema)

app.get('/', (req,res)=>{
       let test = new Test({
        name : 'Iftakher'
    })
    test.save()

        .then( t=>{
        res.json(t)
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
mongoose.connect(`mongodb://127.0.0.1:27017`, {
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



})
})
.catch(e =>{
    console.log(e)
})


