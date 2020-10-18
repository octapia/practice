

// Genuine Object

let mainObj = {
  name : 'Main Object',
  importance: 1,
  childObj:{
    name :'Child Object',
    importance :2,
    output(){
      console.log('I\'m ' + this.name)
    }
  }
}
// when we call the output method of the childObj 'this' returning its nearest object on parent named childObj
console.log(mainObj.childObj.output())  // I'm child Object

// What if we had to call the mainObj ?
// On this circumstance js built in method call() comes handy ..

// Call()


console.log(mainObj.childObj.output.call(mainObj)) // I'm Main Object