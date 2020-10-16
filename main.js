const button = document.querySelector('button'),
      result = document.getElementById('result');

      button.addEventListener('click',getResult);


function getResult(){
  let request = new XMLHttpRequest();
request.open('GET','http://jsonplaceholder.typicode.com/posts',true);
request.send();
request.onreadystatechange = function handleRequest(){
  if(request.readyState === 4 && request.status === 200){
    let info = JSON.parse(request.responseText).map(
      s=>s.title
    );
    console.log(info)
    result.innerHTML = info;
  }
}
  
}