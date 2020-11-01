const route = require(`express`).Router();

/* Validators */

const loginValidator = require(`./validators/loginValidator`);

const registerValidator = require(`./validators/registerValidator`);

/* Controllers */

const { register, registerProcess } = require(`./controllers/RegisterController`);

const { login, loginProcess } = require(`./controllers/LoginController`);

const { home } = require(`./controllers/HomeController`);

/* Route end points */

route.get(`/`, home);

route.get(`/register`, register);

route.post(`/register`, registerValidator, registerProcess);

route.get(`/login`, login);

route.post(`/login`, loginValidator, loginProcess);


route.get(`/admin`, (req, res) => {
    res.render(`backend/pages/dashboard`, { title: `Home` });
});

route.get(`*`, (req, res) => {
    res.send(`not found`);
});



module.exports = route;
