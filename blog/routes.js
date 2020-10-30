const route = require(`express`).Router();
const LoginValidator = require(`./validators/LoginValidator`);
const RegisterValidator = require(`./validators/RegisterValidator`);


const { register, registerProcess } = require(`./controllers/RegisterController`);
const { login, loginProcess } = require(`./controllers/LoginController`);

route.get(`/register`, register);
route.post(`/register`, RegisterValidator, registerProcess);
route.get(`/login`, login);
route.post(`/login`, LoginValidator, loginProcess);






module.exports = route;
