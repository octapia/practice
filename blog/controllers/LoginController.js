const User = require(`../models/User`);
const bcrypt = require(`bcrypt`);
const validator = require(`express-validator`);
const { validationResult } = validator;

const login = (req, res, next) => {
    res.render(`frontend/pages/login`, { title: `Login`, success: false });
}
const loginProcess = async (req, res, next) => {
    let validationErrors = validationResult(req).formatWith(({ msg }) => msg);
    console.log(validationErrors.mapped());
    res.send({ message: validationErrors.mapped() });
    return;
    let { email, password } = req.body;

    try {
        let isExistingUser = await User.findOne({ email });
        console.log(isExistingUser);
        if (!isExistingUser) {
            res.json({ message: `Invalid username or password` });
        }
        let isPasswordMatched = await bcrypt.compare(password, isExistingUser.password);
        if (!isPasswordMatched) {
            res.json({ message: `Invalid username or password` });
        }


    } catch (error) {
        console.log(`Invalid username or password`);
        res.json({ message: `Invalid username or password` });
    }


    res.render(`frontend/pages/login`, { title: `Login`, success: `Logged in successfully` });
}

module.exports = { login, loginProcess };
