const router = require('express').Router()

const{
    getAllContacts,
    // getContactsById,
    createContact
    // updateContactById,
    // deleteContactById
    } = require('./contactController')

router.get('/', getAllContacts)
// router.get('/:id',getContactsById)
router.post('/', createContact)
// router.put('/:id',updateContactById)
// router.delete('/:id',deleteContactById)

module.exports = router