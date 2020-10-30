const validator = require(`express-validator`);
const User = require(`../models/User`);
const { body } = validator;
module.exports = [
    body(`name`).trim().notEmpty().withMessage(`Name can't be empty`).bail().isLength({ min: 3, max: 30 }).withMessage(`Name should be at least 3 character`),
    body(`email`).notEmpty().withMessage(`Email can't be empty`).bail().isEmail().withMessage(`Please provide a valid email`).normalizeEmail().custom(async email => {
        let isUserExist = await User.findOne({ email });
        if (isUserExist) {
            return Promise.reject(`Email already in used`);
        }
        return true;
    }),
    body(`password`).notEmpty().withMessage(`Password can't be empty`).isLength({ min: 5, max: 30 }).withMessage(`Password should be at least 5 characters`),
    body(`verifyPassword`).notEmpty().withMessage(`Verify Password can't be empty`).custom((verifyPassword, { req }) => {

        if (verifyPassword != req.body.password) {
            throw new Error(`Password did not match`);
        }
        return true;
    }),
    body(`agree`).notEmpty().withMessage(`You must agree before submitting`)

]
