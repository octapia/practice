const router = require(`express`).Router();
const Post = require(`../models/PostModel`);
router.get(`/`, async (req, res) => {
    try {
        const list = await Post.find();
        res.json(list);
    } catch (error) {
        res.json({ message: error.message, success: false, status: 404 })
    }

});

router.post(`/`, async (req, res) => {
    console.log(req.body);
    const { title, body } = req.body;
    const post = new Post({
        title,
        body
    });
    try {
        const created = await post.save();
        res.json(created);
    } catch (error) {
        res.json({ message: error.message, success: false, status: 404 })
    }
});

module.exports = router;
