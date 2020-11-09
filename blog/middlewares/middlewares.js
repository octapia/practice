const { dateFormat
 } = require(`../utils/helpers`);

const redirectToLoginPage = (req, res, next) => {
    if (req.session.isLoggedIn) {
        return next();
    }
    return res.redirect(`/login`);
}
const redirectToAdminPage = (req, res, next) => {
    if (req.session.isLoggedIn) {
        return res.redirect(`/admin`);
    }
    return next();
}

const passUserinfoToViews = (req, res, next) => {
    const { isLoggedIn, user } = req.session;
    res.locals = {
        isLoggedIn,
        userInfo: user,
        dateFormat
    }
    return next();
}
module.exports = { redirectToLoginPage, redirectToAdminPage, passUserinfoToViews }
