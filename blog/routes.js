const route = require(`express`).Router();

/* Validators */

const loginValidator = require(`./validators/loginValidator`);

const registerValidator = require(`./validators/registerValidator`);

/* Controllers */

const { register, registerProcess } = require(`./controllers/RegisterController`);

const { login, loginProcess } = require(`./controllers/LoginController`);

/* Route end points */

route.get(`/register`, register);

route.post(`/register`, registerValidator, registerProcess);

route.get(`/login`, login);

route.post(`/login`, loginValidator, loginProcess);




module.exports = route;
