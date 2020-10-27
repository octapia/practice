const register = (req, res, next) => {
    res.render(`pages/register`, { title: `Register` });
}
const registerProcess = (req, res, next) => {
    res.send(`register process`);
}

module.exports = { register, registerProcess };
