const router = require(`express`).Router();
const Post = require(`../models/PostModel`);
/* get all */
router.get(`/`, async (req, res) => {
    try {
        const list = await Post.find();
        res.json(list);
    } catch (error) {
        res.json({ message: error.message, success: false, status: 404 })
    }

});
/* get single */

router.get(`/:id`, async (req, res) => {
    try {
        const getSingle = await Post.findById(req.params.id);
        res.json(getSingle);
    } catch (error) {
        res.json({ message: error.message, success: false, status: 404 })
    }


});
/* create new */
router.post(`/`, async (req, res) => {
    console.log(req.body);
    const { title, body } = req.body;
    const post = new Post({
        title,
        body
    });
    try {
        const createdNew = await post.save();
        res.json(createdNew);
    } catch (error) {
        res.json({ message: error.message, success: false, status: 500 })
    }
});

/* update single */

router.put(`/:id`, async (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    let { title, body } = req.body;
    try {
        const getSingle = await Post.findById(id);

        title = title || getSingle.title;
        body = body || getSingle.body;

        const updateSingle = await Post.findOneAndUpdate({ _id: id }, { $set: { title, body } }, { new: true });
        res.json(updateSingle);
    } catch (error) {
        res.json({ message: error.message, success: false, status: 500 })
    }

});

/* delete single */

router.delete(`/:id`, async (req, res) => {
    const { id } = req.params;
    try {
        const deleteSingle = await Post.findOneAndDelete(id);
        res.json({ message: `Deleted successfully`, success: true, status: 200, data: deleteSingle });

    } catch (error) {
        res.json({ message: error.message, success: false, status: 500 })
    }

});



module.exports = router;
