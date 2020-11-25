  
const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
  
    name:{
      type : String,
      required: true
    },
    email:{
      type : String,
      required: true
    },
    phone:{
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

  module.exports = mongoose.model('User', userSchema)
  