const User = require(`../models/User`);

const bcrypt = require(`bcrypt`);

const validator = require(`express-validator`);

const { validationResult } = validator;

/*  Initial values */

const viewFile = `frontend/auth/login`;

const metaTitle = `Register`;

const invalidMsg = `Invalid email or password`;

/* Login page */

const login = (req, res, next) => {

    res.render(viewFile, { title: `Login`, errors: {}, values: {} });

}
/* Login process */

const loginProcess = async (req, res, next) => {

    let validationErrors = validationResult(req).formatWith(error => error.msg);

    validationErrors = validationErrors.mapped();

    if (Object.keys(validationErrors).length) {

        return res.render(viewFile, { title: `Login`, errors: validationErrors, values: req.body });
    }


    let { email, password } = req.body;

    try {

        let isExistingUser = await User.findOne({ email });

        if (!isExistingUser) {

            return res.render(viewFile, { title: `Login`, errors: { invalid: invalidMsg }, values: req.body });


        }

        let isPasswordMatched = await bcrypt.compare(password, isExistingUser.password);

        if (!isPasswordMatched) {

            return res.render(viewFile, { title: `Login`, errors: { invalid: invalidMsg }, values: req.body });

        }

        req.session.isLoggedIn = true;

        req.session.user = isExistingUser;



    } catch (error) {

        res.render(viewFile, { title: `Login`, errors: { invalid: invalidMsg }, values: req.body });
    }

    return res.redirect(`/admin`);
}



module.exports = { login, loginProcess };
