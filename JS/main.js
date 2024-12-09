let userEmailLogIn = document.getElementById('userEmail-login');
let userPasswordLogIn = document.getElementById('userPassword-login');
let userNameSignUp = document.getElementById('userName-signup');
let userEmailSignUp = document.getElementById('userEmailSignUp');
let userPasswordSignUp = document.getElementById('userPassword-signup');
let signUpBtn = document.getElementById('signup-btn');
let logInBtn = document.getElementById('login-btn');
let logOutBtn = document.getElementById('logOutBtn');

let usersBox=[];
usersBox = JSON.parse(localStorage.getItem("allUsers")) || [];

function addUser(){
  let user={
    name: userNameSignUp.value,
    email: userEmailSignUp.value,
    password: userPasswordSignUp.value,
  };
  usersBox.push(user);
  localStorage.setItem("allUsers", JSON.stringify(usersBox));
  clearInput();
};

function clearInput(){
  userNameSignUp.value="";
  userEmailSignUp.value="";
  userPasswordSignUp.value="";
};

function reDirectHome(){
  localStorage.getItem("allUsers");
  location.replace("homepage.html");
  clearInput();
};

function reDirectLogIn(){
  localStorage.setItem("allUsers", JSON.stringify(usersBox));
  location.replace("index.html");
  clearInput();
};

logOutBtn.addEventListener('click', function(){
  localStorage.removeItem("allUsers");
  reDirectLogIn();
});
logInBtn.addEventListener('click', reDirectHome);
signUpBtn.addEventListener('click', addUser);
signUpBtn.addEventListener('click', reDirectLogIn);