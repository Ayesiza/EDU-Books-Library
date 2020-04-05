document.getElementById('myform').addEventListener("submit", event => {
  
  event.preventDefault();
  // get values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('pswd').value;
  
  if (name.length < 1 )  {
    document.getElementById('helper-text').innerHTML =
      "All fields are required ";
  }
  if(name.length < 1 || password < 1){
    document.getElementById('helper-text').innerHTML=" All field required and password atleast with uppercase letter (A-Z)!";
}else{
    window.location.replace('./dashboard.html')
}

  
});














       