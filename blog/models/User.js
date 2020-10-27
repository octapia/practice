const { model, Schema } = require(`mongoose`);
const Profile = require(`. /
Profile`);
// name, email, password, profile ref
module.exports = model(`User`, Schema({
    name: { type: String, maxlength: 50, minlength: 5, required: true, trim: true },
    email: { type: String, maxlength: 50, minlength: 5, required: true, trim: true },
    password: { type: String, maxlength: 50, minlength: 8, required: true },
    profile: { type: Schema.Types.ObjectId, ref: Profile },

}, { timestamps: true }));
