//step  1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
   //step-2 get user email from the input field
   // remember to use .value to get email
    const emailField=document.getElementById('user-email');
    const email=emailField.value;

  //step-3 get password

  const passField=document.getElementById('user-password');
  const pass=passField.value;

  //step-4 varify email and password

  if(email==='baperbank@gmail.com' && pass==='bap ka beta')
  {
    console.log('Valid User')
  }
  else
  {
    console.log('Invalid User')
  }


})