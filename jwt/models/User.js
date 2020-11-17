const { Schema, model } = require(`mongoose`);

const userSchema = new Schema({
    username: { type: String, min: 6, max: 50, trim: true, required: true },
    email: { type: String, min: 6, max: 50, trim: true, required: true },
    password: { type: String, min: 6, max: 50, required: true },

});

module.exports = new model(`User`, userSchema);
