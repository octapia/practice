const { model, Schema } = require(`mongoose`);
const Comment = require(`./Comment`);
const User = require(`./User`);
// author, title, body, tags, thumbnail, readTime, likes, dislikes,comments, updatedAt
module.exports = model(`Post`, Schema({
    author: { type: Schema.Types.ObjectId, ref: User, required: true },
    title: { type: String, maxlength: 100, minlength: 10, trim: true, required: true },
    body: { type: String, minlength: 50, required: true },
    tags: String,
    thumbnail: String,
    readTime: String,
    likes: [Schema.Types.ObjectId, ref: User],
    dislikes: [Schema.Types.ObjectI, dref: User],
    comments: [{ type: Schema.Types.ObjectId, ref: Comment }],
    updatedAt: { type: Date, default: Date.now }

}, { timestamps: true }));
