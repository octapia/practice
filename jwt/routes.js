const route = require(`express`).Router();
const { register } = require(`./controllers/AuthController`);
const apiPathV1 = `/api/v1/`;


route.post(`/api/v1/register`, register);

route.get(`/`, (req, res) => {
    res.send(`Please find valid api path`);
});
route.get(`*`, (req, res) => {
    res.send(`404 not found`);
});

module.exports = route;
