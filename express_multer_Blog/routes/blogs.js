
//blog routes
const express = require('express');
const Blog = require('./../models/Blog')
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('new')
})

// handle post
router.post('/', (req,res)=>{
    console.log(req.body)
    res.json({status:200})

// let blog = new Blog({
//     title:req.body.title,
// })
})

module.exports = router;
