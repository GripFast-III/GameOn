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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal(event) {
  modalbg.style.display = "none";
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

// Birthdate
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