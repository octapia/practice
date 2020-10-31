

const MongoClient = require('mongodb').MongoClient
const url ='mongodb://127.0.0.1:27017/'
const config = {useUnifiedTopology:true}

MongoClient.connect(url , config,(error,MyMongoClient) =>{
if(error){
  console.log('connection fail')
}else{
console.log(`connected with MongoDB`);
// InsertData(MyMongoClient);
// DeleteOneItem(MyMongoClient)
// DeleteAllItem(MyMongoClient)
// FindOneItem(MyMongoClient)
// FindAllItem(MyMongoClient)
// FindByProjection(MyMongoClient)
// FindAllByQuery(MyMongoClient)
// FindDataByLimit(MyMongoClient)
// FindDataBySort(MyMongoClient)
// UpdateOneData(MyMongoClient)
// CreateCollection(MyMongoClient)
DropCollection(MyMongoClient)

}
})

//  InsertData
function InsertData(MyMongoClient){
  var MyDB = MyMongoClient.db('school')
  var MyCollection = MyDB.collection('students')
  var MyData = {
    name:"Jasim",
    Roll:"02",
    Class:"Two"
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
  var DeleteItem = { Roll:"03" }
  
  MyCollection.deleteOne(DeleteItem,(error)=>{
  if(error){
  console.log('Data delete fail')
  }else{
  console.log(`Data deleted`);
  }
})
}

// delete all Items

function DeleteAllItem(MyMongoClient){
  var MyDB = MyMongoClient.db('school')
  var MyCollection = MyDB.collection('teachers')
  
  MyCollection.deleteMany((error,ResultObj)=>{
  if(error){
  console.log('Delete fail')
  }else{
  console.log(ResultObj.result.n + "Items deleted");
  }
})
}

// find one item

function FindOneItem(MyMongoClient){
  var MyDB = MyMongoClient.db('school')
  var MyCollection = MyDB.collection('students')
  const FindObj = {"Roll":"02"}
  MyCollection.findOne(FindObj,(error,result)=>{
  if(error){
  console.log('Error')
  }else{
  console.log(result);
  }
})
}

// find All item

function FindAllItem(MyMongoClient){
  var MyDB = MyMongoClient.db('school')
  var MyCollection = MyDB.collection('students')

  MyCollection.find().toArray((error,result)=>{
   console.log(result)
})
}

// find By projection

function FindByProjection(MyMongoClient){
  var MyDB = MyMongoClient.db('school')
  var MyCollection = MyDB.collection('students')
  const ItemObj ={}
  const ItemProjection = {projection:{"_id":0,Class:1, Roll:1}}

  MyCollection.find(ItemObj, ItemProjection).toArray((error,result)=>{
   console.log(result)
})
}
// Find by query
function FindAllByQuery(MyMongoClient){
  var MyDB = MyMongoClient.db('school')
  var MyCollection = MyDB.collection('students')

  const Query ={Roll:"01", Class:"Four"}

  MyCollection.find(Query).toArray((error,result)=>{
  if(error){
    console.log('Error')
    }else{
    console.log(result);
    }
  })
  }

  // find by Limit
  function FindDataByLimit(MyMongoClient){
    var MyDB = MyMongoClient.db('school')
    var MyCollection = MyDB.collection('students')
      MyCollection.find().limit(30).toArray((error,result)=>{
     if(error){
      console.log('Error')
      }else{
      console.log(result);
      }
    })
    }

    // find All Data by Sort
  function FindDataBySort(MyMongoClient){
    var MyDB = MyMongoClient.db('school')
    var MyCollection = MyDB.collection('students')
      MyCollection.find().sort({Roll:-1}).toArray((error,result)=>{
     if(error){
      console.log('Error')
      }else{
      console.log(result);
      }
    })
    }

  // Update one Data 
  function UpdateOneData(MyMongoClient){
    var MyDB = MyMongoClient.db('school')
    var MyCollection = MyDB.collection('students')
      MyCollection.updateOne({Roll:"04"} , {$set:{name:"Rok",Class:"N"}},(error,result)=>{
     if(error){
      console.log('Error')
      }else{
      console.log("Update success" + result);
      }
    })
    }

// create new collection

function CreateCollection(MyMongoClient){
  var MyDB = MyMongoClient.db('school')
  MyDB.createCollection("students2",(error,result)=>{
     console.log(result) })

  }

// Drop collection

function DropCollection(MyMongoClient){
  var MyDB = MyMongoClient.db('school')
  MyDB.dropCollection("students2",(error,result)=>{
     console.log(result) })

  }
