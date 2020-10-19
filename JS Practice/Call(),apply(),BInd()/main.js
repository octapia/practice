//call(), bind() and apply() method 
var user = {
  name : 'Windows 10',
  id : '10'
}

let self = {
  name : 'Tahidur Rahman',
  id   : 'none'
}
let self2 = {
  name : 'Sahidur Rahman',
  id   : 1
}

let func = function (para){
  let me = `I am ${this.name} with an id of ${this.id}.`
  console.log(me,para);
}
// Call() method 
func.call(self2);
// bind() method
func.bind(self)();
// bind() method doesn't take additional parameter

// apply method
func.apply(self2);
