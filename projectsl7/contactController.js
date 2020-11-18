const contacts =require('./Contacts')

exports.getAllContacts = (req,res)=>{
    res.json(contacts.getAllContacts())
}

// exports.getContactsById = (req,res)=>{
// }

exports.createContact = (req,res)=>{
    let { name ,email, phone} = req.body
    let contact = contacts.createContact({
         name ,email,phone
        })
        res.json(contact)
}

// exports.updateContactById= (req,res)=>{

// }
// exports.deleteContactById = (req,res)=>{
    
// }