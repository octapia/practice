var person = {
    name : "Usman khan"
}

var objectBase = Object.getPrototypeOf(person);
var descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
