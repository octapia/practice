const { getSinglepost } = require('./postController')

const postRouter = require('express').Router()

router.get('/', getAllpost)

router.post('/', getSinglepost)

router.put('/', updateOne)

router.delete('/', deleteOne)

module.exports = postRouter