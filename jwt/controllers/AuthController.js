const User = require(`../models/User`);

const register = async (req, res) => {
    let { username, email, password } = req.body;

    let user = new User({
        username,
        email,
        password
    });
    try {
        userCreated = await user.save();
        if (userCreated) {
            res.json({ success: true, status: 200, result: userCreated });
        }
    } catch (error) {
        res.json({ success: false, status: 400, result: error });
    }

}



module.exports = { register };
