function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validate(event) {
  alert("Merci pour votre inscription")
}

// DOM Elements
const modalbg = document.querySelector(".bground");
console.log(modalbg);
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// DOM ELEMENTS FORM FIELDS VALIDATION
const firstName = document.getElementById('#first');
const lastName = document.getElementById('#last');
const email = document.getElementById('#email');
const birthdate = document.getElementById('#birthdate');
const quantity = document.getElementById('#quantity');
const allLocations = document.getElementById('#allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('#checkbox1');
const input = document.getElementsByClassName('#text-control');
const form = document.getElementById('#form');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const validForm = document.getElementById("#confirmation")
const closeValidForm = document.getElementById()

function checkFirstName() {
  if (firstName.value.trim().length < 2 && first.value.trim() === '' || !firstName.value.match(regex)) {
      firstName.parentElement.setAttribute('data-error-visible', 'true');
      firstName.style.border = '2px solid #e54858';
      return false;
  }
  first.parentElement.setAttribute('data-error-visible', 'false');
  first.style.border = 'solid red 0.19rem';
  return true;
}

/*
// Prénom
const inputFirst = document.querySelector("#first");
const checkFirst = (event) => {
  console.log("first", event)
}
inputFirst.addEventListener("input",checkFirst);

// Nom
const inputLast = document.querySelector("#last");
const checkLast = (event) => {
  console.log("last", event)
}
inputLast.addEventListener("input",checkLast);

// email
const inputEmail = document.querySelector("#email");
const checkEmail = (event) => {
  console.log("email", event)
}
inputEmail.addEventListener("input",checkEmail);

// birthDate
const inputBirthDate = document.querySelector("#birthDate");
const checkBirthDate = (event) => {
  console.log("birthdate", event)
}
inputBirthDate.addEventListener("input",checkBirthDate);

// Quantity
const inputQuantity = document.querySelector("#quantity");
const checkQuantity = (event) => {
  console.log("quantity", event)
}
inputQuantity.addEventListener("input",checkQuantity);
*/