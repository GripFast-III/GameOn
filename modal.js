function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
console.log(modalbg);
const modalBtn = document.querySelectorAll(".modal-btn");
const crossBtn = document.querySelectorAll(".close");
console.log("logModalBtn", modalBtn)
const formData = document.querySelectorAll(".formData");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// launch modal event
modalBtn.forEach((superbtn) => superbtn.addEventListener("click", launchModal));
crossBtn.forEach((btnClose) => btnClose.addEventListener("click", closeModal));

// DOM ELEMENTS FORM FIELDS VALIDATION
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('.text-control');
const form = document.getElementById('#form');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const validForm = document.getElementById('confirmation')
const closeValidForm = document.getElementById()
const submitBtn = document.getElementById('go');

submitBtn.forEach((submitBtn) => submitBtn.addEventListener("click", checkAll));

const checkAll = () => {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthdate();
  checkQuantity();
  checkAllLocations();
  checkCheckBox1();
}


/*const firstNameNotValid = firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)

const checkFirstName = () => {

  if (firstNameNotValid = true) {
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    firstName.style.border = '2px solid #e54858';
    return false;
  } else {
    console.log('true')
  }
}
*/    

function checkFirstName() {
  if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)) {
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    firstName.style.border = '2px solid #e54858';
    return false;
  }
  firstName.parentElement.setAttribute('data-error-visible', 'false');
  firstName.style.border = 'solid red 0.2rem';
  return true;
}

function checkLasttName() {
  if (lastName.value.trim().length < 2 || last.value.trim() === '' || !lastName.value.match(regex)) {
    lastName.parentElement.setAttribute('data-error-visible', 'true');
    lastName.style.border = '2px solid #e54858';
    return false;
  }
  lastName.parentElement.setAttribute('data-error-visible', 'false');
  lastName.style.border = 'solid red 0.2rem';
  return true;
}

