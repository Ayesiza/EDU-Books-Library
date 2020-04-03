
const users = [
    { name: "jane", email: "jane@gmail.com", role: "LF", password:'kampala' },
    { name: "hawa", email: "hawa@gmail.com", role: "student", password:'kampala'},
    { name: "swai", email: "swai@gmail.com", role: "edustaff", password:'kampala'}
  ];

  document.getElementById("myrole").addEventListener("submit", event => {
    event.preventDefault();
    
    const name = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const user = users.find(user => user.email === name)
    if(!user){
        document.getElementById("helper-text").innerHTML = "Invalid email";
    }
    if(user.password !== password){
        document.getElementById("helper-text").innerHTML = "Invalid password";
    }
    if(user.role === 'LF' && user.password === password){
        window.location.replace('./add-book.html')
    }
    if(user.role === 'student' && user.password === password){
        window.location.replace('./books.html')
    }
    if(user.role === 'edustaff' && user.password === password){
        window.location.replace('./books.html')
    }

  });


















  


  