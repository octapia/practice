  
const mongoose = require ('mongoose');
const BlogSchema = new mongoose.Schema({
  
    title:{
      type : String,
      required: true
    },
    author:{
      type : String,
      required: true
    },
    description:{
      type : String,
      required: true,
      
    },
    timeCreated:{
      type : Date,
      default: ()=>Date.now()

    },
    img:{
        type:String,
        default: "placeholder.jpg"
    }
  }, {timestamps : true})
  
  module.exports = mongoose.model('Blog', BlogSchema)
  