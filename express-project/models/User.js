import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  
    name:{
      type : String,
      required: true
    },
    email:{
      type : String,
      required: true
    },
    password:{
      type : Boolean,
      required: true,
      
    },
    date:{
      type : Date,
      default:Date.now
    }
  })
  
  const User= mongoose.model('User', UserSchema)
  module.exports= User