
// CallBack JS

let users = ["Tahid",'Shohid'];


function firstUser (){
    setTimeout(function(){
        document.body.innerHTML = `First user ${users[0]}`
    },1000)
}


function secondUser(){
    setTimeout(function(){
       document.body.innerHTML += `<br>Second user ${users[1]}`
    },2000)
}



function thirdUser(newUser,callBack1,callBack2){
    setTimeout(function(){
        users.push(newUser);
        callBack1();
        callBack2();
       document.body.innerHTML += `<br>Third user ${users[2]}`
    },3000)
}

thirdUser('Aziz',firstUser,secondUser;)