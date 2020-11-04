/*  Initial values */

const viewFile = `backend/pages/dashboard`;

const metaTitle = `Dashboard`;

/* Logout */

const logout = (req, res, next) => {

    req.session.destroy(error => {

        if (error) {

            return next(error);

        }

        res.redirect(`/login`);

    });

}



module.exports = { logout };
