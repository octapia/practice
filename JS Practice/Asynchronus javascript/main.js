// Promise

function getIphone(isPassed){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            if(isPassed){
                resolve('Le beta... Iphone le...');
            }else{
                reject('Aah.. beta Pitai.. Kha ja..')
            }
        },2000)
    })
}

getIphone(true)
.then(res => console.log(res))
.catch(e=>console.log(e));

getIphone(false)
.then(res => console.log(res))
.catch(e=>console.log(e));

