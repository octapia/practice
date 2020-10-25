const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 1234;

app.set('view engine', 'ejs');
app.use(morgan('dev'));

/* Mongo data insert */
let userSchema = new mongoose.Schema({ name: String, email: String, age: Number, address: { house: String, road: String, location: String, district: String, country: String }, create_at: { type: Date, default: new Date().toString() } });
let userModel = mongoose.model('UserModel', userSchema);
let user = new userModel({ name: 'sakil', email: 'sakil@gmail.com', age: 31, address: { house: '100', road: '15', location: 'Dhanmondi', district: 'Dhaka', country: 'Bangladesh' } });

app.get('/', (req, res) => {
    console.log(user)
    res.render('home', user);

});

app.listen(port, () => console.log(`Server running on port ${port}`));


// 01767 886626
