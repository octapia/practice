const User = require(`../models/User`);

const users = async (req, res) => {
    let users = await User.find({});
    res.render(`backend/users/users`, { metaTitle: `Users`, users: users });

}

module.exports = { users };
