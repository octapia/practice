const express = require(`express`);
const mongoose = require(`mongoose`);

const app = express();
const port = process.env.PORT || 1234;


let personSchema = new mongoose.Schema({ name: String }); // schema object
let Person = mongoose.model(`Person`, personSchema); // model using schema
let personObj = new Person({ name: `sakil` }); // object using model


app.get(`/`, (req, res) => {

    res.send(`${personObj.name}`);
    res.send();

});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
