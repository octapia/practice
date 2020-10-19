var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
// Get the list of properties

for (let key in student) console.log(key)

// Property Deleting

delete student.rollno ;

console.log('Changed Object : ' ,student)

// finding the length of the object 

let length = 0;
for(let i in student) length++;
console.log('Length is : ',length)


// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
// Display book reading info

function isRead (){
    library.forEach(a => {
        console.log(`\'${a.title}\' by \'${a.author}\' is ${a.readingStatus?'already read.':'not read yet .'} `)
    })
}
console.log(isRead())

//5 . Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

class Cylinder {
     constructor (height,radius) {
    this.height = height;
    this.radius = radius
}
    volume(){
        return (Math.PI * (this.radius) ** 2 * this.height).toFixed(4)
    }
}
let cylinder1  = new Cylinder(3,2);

console.log(cylinder1.volume())

