const { model, Schema } = require(`mongoose`);
const User = require(`./User`);
const Post = require(`./Post`);
// user, post, body, reply, createdAt
module.exports = model(`Comment`, Schema({
    user: { type: Schema.Types.ObjectId, ref: User, required: true },
    post: { type: Schema.Types.ObjectId, ref: Post, required: true },
    body: { type: String, required: true, trim: true },
    replies: [{ type: Schema.Types.ObjectId, ref: `Comment` }],
    createdAt: { type: Date, default: Date.now }

}, { timestamps: true }));
