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
// const closeValidForm = document.getElementById()
const submitBtn = document.getElementById('go');
console.log("🚀 ~ file: modal.js:47 ~ submitBtn:", submitBtn)





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

const checkFirstName = () => {
  if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)) {
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    let messageError = firstName.value.length ? `Oups... ${firstName.value} n'est pas conforme` : "Champ obligatoire"
    firstName.parentElement.setAttribute('data-error', messageError );
    firstName.style.border = '2px solid #e54858';
    return false;
  }

  firstName.parentElement.setAttribute('data-error-visible', 'false');
  firstName.parentElement.setAttribute('data-error', ``);

  firstName.style.border = '0px';
  return true;
}

const checkLastName = () => {
  if (lastName.value.trim().length < 2 || last.value.trim() === '' || !lastName.value.match(regex)) {
    lastName.parentElement.setAttribute('data-error-visible', 'true');
    let messageError = lastName.value.length ? `Oups... ${lastName.value} n'est pas conforme` : "Champ obligatoire"
    lastName.parentElement.setAttribute('data-error', messageError );

    lastName.style.border = '2px solid #e54858';
    return false;
  }
  lastName.parentElement.setAttribute('data-error-visible', 'false');
  lastName.parentElement.setAttribute('data-error', ``);

  lastName.style.border = '0px';
  return true;
}

const checkAll = () => {
  // if (checkFirstName() && checkLastName() && checkEmail()) {w
  if (checkFirstName() && checkLastName() ) {
    // Traitement du succes
    console.log('cool ');
  } else {
    console.log('pas cool ');

  }
  // checkEmail();
  // checkBirthdate();
  // checkQuantity();
  // checkAllLocations();
  // checkCheckBox1();
}
submitBtn.addEventListener("click", checkAll);