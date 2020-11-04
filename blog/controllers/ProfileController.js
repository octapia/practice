const profile = (req, res) => {
    res.render(`backend/profile/profile`, { metaTitle: `Profile` });
}

module.exports = { profile };
