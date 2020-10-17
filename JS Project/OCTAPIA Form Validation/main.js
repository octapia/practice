
// All the input
const formInput = document.getElementById('form'),
      nameInput = document.getElementById('name'),
      emailInput = document.getElementById('email'),
      mobileInput = document.getElementById('mobile'),
      githubInput = document.getElementById('github'),
      skypeInput = document.getElementById('skype'),
      trelloInput = document.getElementById('trello');

    
    //   validating the form with checkInput function below
form.addEventListener('submit',
e =>{
    e.preventDefault();
    checkInputs();
})


function checkInputs(){
    // All the input value
const name = nameInput.value.trim(),
      email = emailInput.value.trim(),
      mobileNo = mobileInput.value.trim(),
      github = githubInput.value.trim(),
      skype = skypeInput.value.trim(),
      trello = trelloInput.value.trim(),

    //   array of all the input value
      arrayInput = [nameInput,emailInput,mobileInput,githubInput,skypeInput,trelloInput];

    //   validating all the input value 
arrayInput.forEach(
    e=>{
        // checking all the blank value and email
        if(e.value.trim() === ''){
            setErrorFor(e,`${e.name} cannot be blank`)
        }else  {
           setSuccessFor(e);
            // checking validate email
          if(!isEmail(email)){
            setErrorFor(emailInput,'Invalid email address')
        }else {
            setSuccessFor(emailInput)
        }
        }
  
        // checking validate number
        if(!+mobileNo){
            setErrorFor(mobileInput,'Mobile no must be a number')
        }else if(mobileNo.length != 10){
            setErrorFor(mobileInput,'Mobile No must have 10 character.')   
        }else if(mobileNo.split()[0] == 1){
            setErrorFor(mobileInput,'Not a Valid Number')
        }
        else{
            setSuccessFor(mobileInput)
        }

        e.innerText = '';
        });
    }


function setErrorFor(input , message){
    
const main = input.parentElement;
      small = main.querySelector('small');
      small.innerText = message;
      main.classList = 'form-element error'
}
function setSuccessFor(input){
    const main = input.parentElement;
      main.classList = 'form-element success'
}
function isEmail(emailInput){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput);
  }