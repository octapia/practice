const router = require(`express`).Router();

const { redirectToLoginPage, redirectToAdminPage, passUserinfoToViews } = require(`./middlewares/middlewares`);

/* Validators */

const loginValidator = require(`./validators/loginValidator`);
const registerValidator = require(`./validators/registerValidator`);

/* Controllers */

const { register, registerProcess } = require(`./controllers/RegisterController`);
const { login, loginProcess } = require(`./controllers/LoginController`);
const { home } = require(`./controllers/HomeController`);
const { dashboard, posts, fourOfour } = require(`./controllers/DashboardController`);
const { logout } = require(`./controllers/LogoutController`);
const { profile } = require(`./controllers/ProfileController`);


/* middlewares */

router.use(`/admin`, [redirectToLoginPage]);
router.use(`/login`, [redirectToAdminPage]);
router.use(`/`, [passUserinfoToViews]);


/* routes for frontend */

router.get(`/`, home);
router.get(`/register`, register);
router.post(`/register`, registerValidator, registerProcess);
router.get(`/login`, login);
router.post(`/login`, loginValidator, loginProcess);
/* routes for backend */
router.get(`/admin`, dashboard);
router.get(`/admin/posts`, posts);
router.get(`/admin/logout`, logout);
router.get(`/admin/profile`, profile);

router.get(`/admin/*`, fourOfour);

router.get(`*`, (req, res) => {
    res.send(`not found`);
});



module.exports = router;
