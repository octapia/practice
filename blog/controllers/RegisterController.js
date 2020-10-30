const User = require(`../models/User`);

const bcrypt = require(`bcrypt`);

const validator = require(`express-validator`);

const { validationResult } = validator;

/*  Initial values */

const pagePath = `frontend/auth/register`;

const pageTitle = `Register`;

/* Registration page */

const register = (req, res, next) => {

    res.render(pagePath, { title: `Register`, errors: {}, values: {} });

}

/* Registration process */

const registerProcess = async (req, res, next) => {

    let { name, email, password } = req.body;

    let validationErrors = validationResult(req).formatWith(error => error.msg);

    validationErrors = validationErrors.mapped();

    if (Object.keys(validationErrors).length) {

        res.render(pagePath, { title: pageTitle, errors: validationErrors, values: req.body });

        return false;

    }

    try {
        passwordHashed = await bcrypt.hash(password, 10);

        let user = new User({ name, email, password: passwordHashed });

        let created = await user.save();

        res.render(pagePath, { title: pageTitle, errors: {}, values: {} });

    } catch (error) {

        res.render(pagePath, { title: pageTitle, errors: { message: `Internal server error` }, values: {} });

    }


}

module.exports = { register, registerProcess };
