document.getElementById('myform').addEventListener("submit", event => {
  // stop page from refreshing
  event.preventDefault();
  // get values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('pswd').value;
  
  if (name.length < 1 )  {
    document.getElementById('helper-text').innerHTML =
      "All fields are required ";
  }
  if (email.length < 4 ) {
    document.getElementById('helper-text').innerHTML =
     "Email must contain at least one special character (@ &.)!";
  } 
     if (password.length < 4 ) {
    document.getElementById('helper-text').innerHTML =
     "Password must contain at least one uppercase letter (A-Z)!";
  } 
  else {
    window.location.replace("./books.html");
  }

});














       