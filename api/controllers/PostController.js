const router = require(`express`).Router();
const Post = require(`../models/PostModel`);
/* get all */
router.get(`/`, async (req, res) => {
    try {
        const getAll = await Post.find();
        getAll
            ?
            res.json({ message: `Data list`, success: true, status: 200, data: getAll }) :
            res.json({ message: `Not found`, success: false, status: 404 })
    } catch (error) {
        res.json({ message: error.message, success: false, status: 404 })
    }

});
/* get single */

router.get(`/:id`, async (req, res) => {
    try {
        const getSingle = await Post.findById(req.params.id);
        getSingle
            ?
            res.json({ message: `Single data`, success: true, status: 200, data: getSingle }) :
            res.json({ message: `Not found`, success: false, status: 404 })
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
        res.json({ message: `Created successfully`, success: true, status: 200, data: createdNew });
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

        const updateSingle = await Post.findByIdAndUpdate(id, { $set: { title, body } }, { new: true });
        updateSingle
            ?
            res.json({ message: `Updated successfully`, success: true, status: 200, data: updateSingle }) :
            res.json({ message: `Not found`, success: false, status: 404 })
    } catch (error) {
        res.json({ message: error.message, success: false, status: 500 })
    }

});

/* delete single */

router.delete(`/:id`, async (req, res) => {
    const { id } = req.params;
    try {
        const deleteSingle = await Post.findByIdAndDelete(id);
        deleteSingle ?
            res.json({ message: `Deleted successfully`, success: true, status: 200, data: deleteSingle }) :
            res.json({ message: `Not found`, success: false, status: 404 })

    } catch (error) {
        res.json({ message: error.message, success: false, status: 500 })
    }

});



module.exports = router;
