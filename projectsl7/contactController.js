  
const contacts =require('./Contacts')

exports.getAllContacts = (req,res)=>{
    res.json(contacts.getAllContacts())
}

exports.getContactsById = (req,res)=>{
    
    let { id } = req.params
    id = parseInt(id)
    let contact = contacts.getContactsById(id)
    res.json(contact)
}

exports.createContact = (req,res)=>{
    let { name ,email, phone} = req.body
    let contact = contacts.createContact({
         name ,email,phone
        })
        res.json(contact)
}

exports.updateContactById = (req,res)=>{
    let { id } = req.params
    id = parseInt(id)
    
    let { name ,email, phone} = req.body
    let contact = contacts.updateContactById({
          id,
          name,
          email,
          phone
        })
        res.json(contact)
}

exports.deleteContactById = (req,res)=>{
    let { id } = req.params
    id = parseInt(id)

    let contact = contacts.deleteContactById(id)
    res.json(contact)
}
