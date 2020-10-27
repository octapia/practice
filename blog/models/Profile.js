const { model, Schema } = require(`mongoose`);
const Post = require(`./Post`);
const User = require(`./User`);
// user, title, bio, profiltPic, links: {fb,tw,li}, posts, bookmarks
module.exports = model(`Profile`, Schema({
    user: { type: Schema.Types.ObjectId, ref: User, required: true },
    title: { type: String, maxlength: 100, minlength: 5, trim: true },
    bio: { type: String, maxlength: 500, minlength: 50, trim: true },
    profiltPic: { type: String, trim: true },
    links: { website: String, facebook: String, twitter: String, github: String, youtube: String },
    posts: [{ type: Schema.Types.ObjectId, ref: Post }],
    bookmarks: [{ type: Schema.Types.ObjectId, ref: Post }]

}, { timestamps: true }));
