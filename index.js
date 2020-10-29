

const MongoClient = require('mongodb').MongoClient
const url ='mongodb://localhost/alienDBex'
const config = {useUnifideTopology:true}

MongoClient.connect(url , config,(error,MyMongoClient) =>{
if(error){
  console.log('connected fail')
}else{
console.log(`connected`);
InsertData(MyMongoClient);
DeleteOneItem(MyMongoClient)
}
})

//  InsertData

function InsertData(MyMongoClient){
  var MyDB = MyMongoClient.db('school')
  var MyCollection = MyDB.collection('students')
  var MyData = {
    name:"Iftakher",
    Roll:"01",
    Class:"One"
  };
  MyCollection.insertOne(MyData,(error)=>{
  if(error){
  console.log('Data insert fail')
  }else{
  console.log(`Data inserted`);
  }
})
}

// DeleteOneItem

function DeleteOneItem(MyMongoClient){
  var MyDB = MyMongoClient.db('school')
  var MyCollection = MyDB.collection('students')
  var DeleteItem = { Roll:"01" }
  
  MyCollection.deleteOne(DeleteItem,(error)=>{
  if(error){
  console.log('Data delete fail')
  }else{
  console.log(`Data deletde`);
  }
})
}