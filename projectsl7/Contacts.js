
class Contacts {
    constructor(){
        this.contacts = []
    }
    getAllContacts(){
        return this.contacts
    }

    getContactsById(id){
        return this.contacts.find( contact =>contact.id == id )
    }

    createContact(contact){
        contact.id = this.contacts.length + 1
        this.contacts.push(contact)
        return contact
    }

    updateContactById( {id, name,email,phone} ){
        let index = this.contacts.findIndex(contact => contact.id == id)
       
        this.contacts[index].name = name || this.contacts[index].name
        this.contacts[index].email = email || this.contacts[index].email
        this.contacts[index].phone = phone || this.contacts[index].phone
       
        return this.contacts[index]
    }

    deleteContactById(id){
        let index = this.contacts.findIndex(contact => contact.id == id)
        let deletedObj = this.contacts[index]
        this.contacts = this.contacts.filter(contact=> contact.id!= id)
        return deletedObj
    }
}

module.exports = new Contacts()
