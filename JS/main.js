// SIGN-UP
let signUpForm = document.getElementById('signUpForm');
let userNameSignUp = document.getElementById('userNameSignup');
let userEmailSignUp = document.getElementById('userEmailSignUp');
let emailExist = document.getElementById('userEmailSignUpExist');
let userPasswordSignUp = document.getElementById('userPasswordSignup');
let signUpBtn = document.getElementById('signupBtn');
let selectedInput = document.querySelectorAll('.selectedInput');
// LOG-IN & LOG-OUT
let logInForm = document.getElementById('logIn');
let userEmailLogIn = document.getElementById('userEmailLogIn');
let userPasswordLogIn = document.getElementById('userPasswordLogIn');
let logInErrorMessage = document.getElementById('logInError');
let welcomeMessage = document.getElementById('welcome');
let logInBtn = document.getElementById('logInBtn');
let logOutBtn = document.getElementById('logOutBtn');
// Regex
let regex1 = /^[a-zA-Z0-9 ]{3,32}$/i;
let regex2 = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let regex3 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

let usersBox=[];
usersBox = JSON.parse(localStorage.getItem("allUsers")) || [];

signUpForm?.addEventListener('submit', function(e){
  e.preventDefault();
  // console.log('hello');
  let user = {
    name:userNameSignUp.value,
    email:userEmailSignUp.value,
    password:userPasswordSignUp.value,
  };
  if (checkValidation() && !isExist(usersBox, user)){
    usersBox.push(user);
    localStorage.setItem("allUsers", JSON.stringify(usersBox));
    clearInput();
    Swal.fire({
      icon: "success",
      title: "Good job!",
      text: "You signed up successfully!",
    });
    setTimeout(function(){
      location.href='./index.html'
    }, 2000);
    // console.log(usersBox);
  };
});

function clearInput(){
  userNameSignUp.value='';
  userEmailSignUp.value='';
  userPasswordSignUp.value='';
  userNameSignUp.classList.remove('is-valid');
  userEmailSignUp.classList.remove('is-valid');
  userPasswordSignUp.classList.remove('is-valid');
};

for(let i=0; i<selectedInput.length; i++){
  selectedInput[i].addEventListener('input', function(e){
    // console.log(e.target.id); for testing
    let inputId = e.target.id;
    let inputValue = e.target.value;
    validation(inputId, inputValue);
  });
};

function validation(id, value){
  let objRegex = {
    userNameSignup: /^[a-zA-Z0-9 ]{3,32}$/,
    userEmailSignUp: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    userPasswordSignup: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  };

  let element = document.getElementById(id);
  let alertMessage = document.getElementById(id+'Error');
  // console.log(element);
  // console.log(alertMessage);

  if (objRegex[id].test(value)) {
    // console.log('valid');
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    alertMessage.classList.replace('d-block', 'd-none');
    return true;
  }else {
    // console.log('invalid');
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
    alertMessage.classList.replace('d-none', 'd-block');
    return false;
  };
}; 

function checkValidation(){
  if (
    validation(userNameSignUp.id, userNameSignUp.value) && 
    validation(userEmailSignUp.id, userEmailSignUp.value) && 
    validation(userPasswordSignUp.id, userPasswordSignUp.value)
  ){
    return true;
  }else{
    return false;
  };
};

let index;

function isExist(arr, newObj){
  for(let i=0; i<arr.length; i++){
    if(arr[i].email == newObj.email){
      index = i;
      // console.log('email already exists');
      emailExist?.classList.replace('d-none', 'd-block');
      return true;
    };
  };
  // console.log('not exists');
  emailExist?.classList.replace('d-block', 'd-none');
  return false;
};

logInForm?.addEventListener('submit', function(e){
  e.preventDefault();
  // console.log('hello');
  let loggedInUser = {
    email:userEmailLogIn.value,
    password:userPasswordLogIn.value,
  };
  if(isExist(usersBox, loggedInUser) && (usersBox[index].password == loggedInUser.password)){
    // console.log('logged in');
    // console.log(index);
    Swal.fire({
      icon: "success",
      title: "Amazing!",
      text: "You logged in successfully!",
    });
    setTimeout(function(){
      location.href='./homepage.html'
    },2000);
    localStorage.setItem("userName", usersBox[index].name);
  }else {
    // console.log('not logged');
    logInErrorMessage.classList.replace('d-none', 'd-block');
    Swal.fire({
      icon: "error",
      title: "Something went wrong",
      text: "You entered invalid data .. Try Again!",
    });
  }
});

if((welcomeMessage) && (localStorage.getItem("userName")) != null){
  welcomeMessage.innerHTML +=localStorage.getItem("userName");
};

logOutBtn?.addEventListener('click', function(){
  localStorage.removeItem("userName");
  location.href='./index.html';
});