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

    res.locals.isLoggedIn = req.session.isLoggedIn;
    res.locals.userInfo = req.session.user;
    return next();
}
module.exports = { redirectToLoginPage, redirectToAdminPage, passUserinfoToViews }
