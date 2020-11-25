const express = require('express');
const ejs = require('ejs')
const mongoose = require('mongoose');
const blogRouter = require('./routes/blogs');
const log = require('./routes/log');
const Blog = require('./models/Blog');
// const logger = require('morgan')
const methodOverride = require('method-override')

const app = express()
// app.use(logger('dev'))

// connect mongoose
mongoose.connect('mongodb://localhost/crudblog',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true 
})

//set view engine
app.set('view engine', 'ejs');

// method override for delete
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))

//route for the index
app.get('/', async (req, res) => {
    let blogs = await Blog.find().sort({timeCreated : 'desc'})

    res.render('index', { blogs: blogs })
});


app.use(express.static("public"))

app.use('/blogs', blogRouter);
app.use('/users', log);

//listen port
const PORT = process.env.PORT || 3000
app.listen(PORT, (req,res) =>{
console.log(`Server is running on ${PORT}`)
})
