const validator = require(`express-validator`);
const { body } = validator;
module.exports = [
    body(`email`).notEmpty().withMessage(`Email can't be empty`).isEmail().withMessage(`Please provide a valid email`)

]
