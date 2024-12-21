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
