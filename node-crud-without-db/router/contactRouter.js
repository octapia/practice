const router = require('express').Router();
const {create, read, readById, update, deleteAll, deleteById} = require('./contactRouterHandler')
router.post("/",create);
router.get("/",read);
router.get("/:id",readById);
router.put("/:id",update);
router.delete("/",deleteAll);
router.delete("/:id",deleteById);
module.exports = router;