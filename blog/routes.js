const route = require(`express`).Router();
const { register, registerProcess } = require(`./controllers/RegisterController`);
const { login, loginProcess } = require(`./controllers/LoginController`);

route.get(`/register`, register);
route.post(`/register`, registerProcess);
route.get(`/login`, login);
route.post(`/login`, loginProcess);




module.exports = route;
