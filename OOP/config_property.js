var person = {
    name : "Shafik"
}

Object.defineProperty(person, 'name', {
    writable : false,
    enumerable : false,
    configurable : false
})
person.name = "ok"
Object.keys(person);
delete person.name