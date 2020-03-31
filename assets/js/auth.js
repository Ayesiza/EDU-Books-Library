

formValidation=()=>{
    
    const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('pswd').value;
if(name == "" || password =="" || email ==""){
 alert("All fields are required");
  return false;
}
if(name.length < 3){
  alert ("Name field must be atleast 3 characters");
}
if(email.length < 5){ 
  alert("Email must contain at least one special character");
}
else if(password.value <5) {
  alert("Password must be atleast 5 characters.");
}
else{
  
  alert("You have sucessfully registered");
  window.location.replace('./login.html');
  return true
}
 
  };
  
       