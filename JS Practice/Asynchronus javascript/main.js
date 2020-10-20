
// //Simple AJAX request 

// let xhr = new XMLHttpRequest();

// xhr.open('get','https://jsonplaceholder.typicode.com/posts');

// xhr.onreadystatechange = function(e){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         let users = JSON.parse(xhr.response);
//         console.log(users)
//     }else{
//         console.log(xhr.readyState ,xhr.status)
//     }
// }

// xhr.send()

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

// Now we can call for the response for any url ...
getResponse('https://jsonplaceholder.typicode.com/users',(err,res)=>{
    if(err){
        console.log(err)
    }else{
        res.forEach(r=>console.log(r.name));
    }
})