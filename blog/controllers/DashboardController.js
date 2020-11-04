/*  Initial values */

const metaTitle = `Dashboard`;

/* Dashboard */

const dashboard = (req, res) => {

    res.render(`backend/dashboard/dashboard`, { metaTitle: `Dashboard` });

}
/* Posts */
const posts = (req, res) => {

    res.render(`backend/dashboard/dashboard`, { metaTitle: `Posts` });

}

/* 404 */

const fourOfour = (req, res) => {

    res.render(`backend/404-backend`, { metaTitle: `404` });

}



module.exports = { dashboard, posts, fourOfour };
