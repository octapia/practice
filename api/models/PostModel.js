const mongoose = require(`mongoose`);
module.exports = mongoose.model(`post`, mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
}));
