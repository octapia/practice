const express = require('express');
const mongoose = require('mongoose');
const ejs =require('ejs')
const bodyParser = require('body-parser')
const blogRouter = require('./routes/blogs')

const app = express()
//connect mongoose
// mongoose.connect('mongodb://localhost/crudblog', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

const PORT = process.env.PORT || 5000

//set template engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"))
app.use('/blogs', blogRouter);

//route for the index
app.get('/', (request, response) => {
    const blogs = []
    response.render('test')
});
app.post('/',(req,res)=>{
    console.log(req.body)
    res.json({success:true})
})
// app.post('/blog',(req,res)=>{
//     console.log(req.body)
//     res.json({success:true})
// })

app.listen( PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})