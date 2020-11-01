/*  Initial values */

const viewFile = `frontend/home/home`;

const metaTitle = `Register`;

/* Registration page */

const home = (req, res, next) => {

    res.render(viewFile, { metaTitle: `Home` });

}



module.exports = { home };
