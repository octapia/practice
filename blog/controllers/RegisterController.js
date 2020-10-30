const User = require(`../models/User`);
const bcrypt = require(`bcrypt`);
const validator = require(`express-validator`);
const { validationResult } = validator;

const register = (req, res, next) => {
    res.render(`frontend/pages/register`, { title: `Register`, errors: {}, values: {} });
}
const registerProcess = async (req, res, next) => {
    console.log(req.body);
    let { name, email, password } = req.body;
    let validationErrors = validationResult(req).formatWith(error => error.msg);
    console.log(validationErrors.mapped());
    validationErrors = validationErrors.mapped();

    if (Object.keys(validationErrors).length) {
        res.render(`frontend/pages/register`, { title: `Register`, errors: validationErrors, values: req.body });
    }

    try {
        passwordHashed = await bcrypt.hash(password, 10);
        let user = new User({ name, email, password: passwordHashed });
        let created = await user.save();
        res.render(`frontend/pages/register`, { title: `Register`, errors: {}, values: {} });
    } catch (error) {
        console.log(error);
        res.render(`frontend/pages/register`, { title: `Register`, errors: { message: `Internal server error` }, values: {} });
    }


}

module.exports = { register, registerProcess };
