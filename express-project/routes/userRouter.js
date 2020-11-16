const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport');

// load user model
const User = require('../models/User');
const{ forwardAuthenticated } = require('../config/auth')

//Login page
router.get('/login' , (req , res)=>res.render('login'))

//Register Page
router.get('/register' ,(req , res)=>res.render('register'))

//Register handle
router.post('/register' ,(req , res)=>{
    const {name , email , password , password2} = req.body
    let errors = []

    //check required fields
    if(!name || !email || !password || !password2){
        errors.push({msg : "all fields are compulsory"})
    }

    if(password != password2){
        errors.push({msg : "Passwords do not match"})
    }

    if(password.length<6){
        errors.push({msg : "Password should be more than 6 chars"})
    }

    if(errors.length > 0){
        res.render('register' ,{
            errors,
            name,
            email,
            password,
            password2
        })
    }else{
        //Validation pass
        Users.findOne({email : email}).then(user =>{
            if(user){
                //User Exists
                errors.push({msg : 'email is already registeredx'})
                res.render('register',{
                    errors,
                    name,
                    email,
                    password,
                    password2

                })
            }else{
              const newUser = new Users({
                  name,
                  email,
                  password
              })

                //hash password
                bcrypt.genSalt(10, (err , salt)=>{
                    bcrypt.hash(newUser.password ,salt , (err , hash) =>{
                        if(err) throw err
                        //set pass to hashed
                        newUser.password = hash
                        //save User
                        newUser.save()
                            .then(user =>{
                                req.flash('success_msg' , 'You are now registered and can log in')
                                res.redirect('login')
                            })
                            .catch(err => console.log(err));
                    })
                })
                console.log(newUser)
                // res.send('hellodd')
            }
        });
    }
});

//Login Handle
router.post('/login' , (req, res, next)=> {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;


