const login = (req, res, next) => {
    res.render(`pages/login`, { title: `Login` });
}
const loginProcess = (req, res, next) => {
    res.send(`Login process page`);
}

module.exports = { login, loginProcess };
