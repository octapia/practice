const User = require(`../models/User`);

const bcrypt = require(`bcrypt`);

const validator = require(`express-validator`);

const { validationResult } = validator;

/*  Initial values */

const pagePath = `frontend/auth/login`;

const pageTitle = `Register`;

const invalidMsg = `Invalid email or password`;

/* Login page */

const login = (req, res, next) => {

    res.render(pagePath, { title: `Login`, errors: {}, values: {}, success: false });

}
/* Login process */

const loginProcess = async (req, res, next) => {

    let validationErrors = validationResult(req).formatWith(error => error.msg);

    validationErrors = validationErrors.mapped();

    if (Object.keys(validationErrors).length) {

        res.render(pagePath, { title: `Login`, errors: validationErrors, values: req.body, success: false });

        return false;
    }


    let { email, password } = req.body;

    try {

        let isExistingUser = await User.findOne({ email });

        if (!isExistingUser) {

            res.render(pagePath, { title: `Login`, errors: { invalid: invalidMsg }, values: req.body, success: false });

        }

        let isPasswordMatched = await bcrypt.compare(password, isExistingUser.password);

        if (!isPasswordMatched) {

            res.render(pagePath, { title: `Login`, errors: { invalid: invalidMsg }, values: req.body, success: false });

        }

    } catch (error) {

        res.render(pagePath, { title: `Login`, errors: { invalid: invalidMsg }, values: req.body, success: false });
    }

    res.render(pagePath, { title: `Login`, errors: {}, values: {}, success: `Logged in successfully` });
}



module.exports = { login, loginProcess };
