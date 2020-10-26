
const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

app.get('/',async(req,res) => {
   try{
     const aliens = await Alien.find()
     res.json(aliens)
   }catch(e){
     res.send('Error' + e)
   }
})

app.get('/:id',async(req,res) => {
   try{
     const alien = await Alien.findBiId(req.prams.id)
     res.json(alien)
   }catch(e){
     res.send('Error' + e)
   }
})


app.post('/',async(req,res) => {
  const alien =  new Alien({
    name : req.body.name,
    tech : req.body.tech,
    sub : req.body.sub
  })
  try{
 const a1 = await alien.save()
 res.json(a1)
  }catch(e){
    res.send('Error')
  }
})

router.patch('/:id', async(req,res)=>{
  try{
    const alien = await Alien.findBiId(req.prams.id)
    alien.sub = req.body.sub
    const a1 = await alien.save()
    res.json(a1)
  }catch(e){
    res.send('Error')
  }
})
module.exports= router