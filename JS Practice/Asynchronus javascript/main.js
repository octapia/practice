
// MAKING of a web API using callback in AJAX

function getResponse(url,callback){
    let xhr = new XMLHttpRequest();
    xhr.open('get',url,true);
    xhr.onreadystatechange = function(e){
        if(xhr.status === 200 && xhr.readyState === 4){
            let response = JSON.parse(xhr.response);
            callback(null,response);
        }else{
            callback(xhr.status,null)
        }
    }
    xhr.send();
}

// callback is not always wise for async js 
// let's realise why ?

// we below we will call some different data from server
const BASE_URL = 'https://jsonplaceholder.typicode.com';

getResponse(`${BASE_URL}/posts/1`,(err,res)=>{
    if(err){
        throw new Error('Something is wrong')
    }else{
        console.log(res.title)
    }
})
getResponse(`${BASE_URL}/users/1`,(err,res)=>{
    if(err){
        throw new Error('Something is wrong')
    }else{
        console.log(res.name)
    }
})
getResponse(`${BASE_URL}/posts/1`,(err,res)=>{
    if(err){
        throw new Error('Something is wrong')
    }else{
        console.log(res.title)
    }
})

//  it could be too tough to maintain a lots of callback for asynch js
