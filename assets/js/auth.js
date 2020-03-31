
document.getElementById("myform").addEventListener("click", function(event){
    event.preventDefault()
  });
  
formValidation=(e)=>{
    
    const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('pswd').value;
if(name == "" || password =="" || email ==""){
document.getElementById("foresult").innerhtml = "All fields are required";
  return false;
}
if(name.length < 3){
  document.getElementById(foresult).innerHTML = "Name field must be atleast 3 characters";
}
if(email.value !== "[^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$]"){ 
  document.getElementById(foresult).innerHTML = "The string must contain at least one special character";
}
else if(password.value !== "[^(?=.*\d).{4,8}$)]") {
  document.getElementById(foresult).innerHTML = "Password must be between 4 and 8 digits long and include at least one numeric digit.";
}
else{
  return true
}
 
  };