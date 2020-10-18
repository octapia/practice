let user1 = {
  name : 'MR X ',
  expertise : 'html,css,js',
  isExpertAt(){
    console.log('I am expert at : ' ,this.expertise)
  }
}

user1.isExpertAt();
// using call() method we can apply a function for other object 
// below , we arr calling  user2 using method from user1

let user2 = {
  name : 'MR X ',
  expertise : 'html,css,js,react'
  }

  user1.isExpertAt.call(user2)
