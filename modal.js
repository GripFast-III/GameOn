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
console.log("logModalBtn", modalBtn);
const formData = document.querySelectorAll(".formData");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block"; // apparition du formulaire
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  document.querySelector("#confirmation").style.display = "none"; //disparition du success
}

// launch modal event
modalBtn.forEach((superbtn) => superbtn.addEventListener("click", launchModal));
crossBtn.forEach((btnClose) => btnClose.addEventListener("click", closeModal));

// DOM ELEMENTS FORM FIELDS VALIDATION
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const input = document.getElementsByClassName(".text-control");
const form = document.getElementById("content-form");
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const validForm = document.getElementById("confirmation");
// const closeValidForm = document.getElementById()
const submitBtn = document.getElementById("go");
const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const checkFirstName = () => {
  if (
    firstName.value.trim().length < 2 ||
    first.value.trim() === "" ||
    !firstName.value.match(regex)
  ) {
    firstName.parentElement.setAttribute("data-error-visible", "true");
    let messageError = firstName.value.length
      ? `Oups... ${firstName.value} n'est pas conforme`
      : "Champ obligatoire";
    firstName.parentElement.setAttribute("data-error", messageError);

    firstName.style.border = "2px solid #e54858";
    return false;
  } else {
    firstName.parentElement.setAttribute("data-error-visible", "false");
    firstName.parentElement.setAttribute("data-error", ``);

    firstName.style.border = "0px";
    return true;
  }
};

const checkLastName = () => {
  if (
    lastName.value.trim().length < 2 ||
    last.value.trim() === "" ||
    !lastName.value.match(regex)
  ) {
    lastName.parentElement.setAttribute("data-error-visible", "true");
    let messageError = lastName.value.length
      ? `Oups... ${lastName.value} n'est pas conforme`
      : "Champ obligatoire";
    lastName.parentElement.setAttribute("data-error", messageError);

    lastName.style.border = "2px solid #e54858";
    return false;
  } else {
    lastName.parentElement.setAttribute("data-error-visible", "false");
    lastName.parentElement.setAttribute("data-error", ``);

    lastName.style.border = "0px";
    return true;
  }
};

const checkEmail = () => {
  if (email.value.trim() === "" || !email.value.match(re)) {
    email.parentElement.setAttribute("data-error-visible", "true");
    let messageError = email.value
      ? `Oups... ${email.value} n'est pas conforme`
      : "Champ obligatoire";
    email.parentElement.setAttribute("data-error", messageError);

    email.style.border = "2px solid #e54858";
    return false;
  } else {
    email.parentElement.setAttribute("data-error-visible", "false");
    email.parentElement.setAttribute("data-error", ``);

    email.style.border = "0px";
    return true;
  }
};

//Limits the possibility to registre to today's date and not in the future
let today = new Date(); // get today's date
let year = today.getFullYear(); // get the year
let month = today.getMonth(); // get the month
if (month + 1 < 10) month = "0" + (month + 1);
let day = today.getDate();
if (day < 10) day = "0" + day;

let fullDate = `${year}-${month}-${day}`; // format YYYY-MM-DD
birthdate.setAttribute("max", fullDate);

//set the date with 18 years less
let minAge = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate()
);
year = minAge.getFullYear(); // get the year
month = minAge.getMonth(); // get the month
if (month + 1 < 10) month = "0" + (month + 1);
day = minAge.getDate();
if (day < 10) day = "0" + day;
let minDate = `${year}-${month}-${day}`; // format YYYY-MM-DD
birthdate.setAttribute("min", minDate);

/*
//Sets minimum age as 18 years old
let min = today.getTime() - 60 * 60 * 24 * 365 * 1000 * 18;
let minDate = new Date(min);
console.log(minDate);
birthdate.setAttribute("min", min);

// Get the birthdate input field and add an event listener to it
const birthdateInput = document.getElementById("birthdate");
birthdateInput.addEventListener("change", function () {
  // Calculate the user's age based on the birthdate input
  const birthdate = new Date(birthdateInput.value);
  const ageInMs = Date.now() - birthdate.getTime();
  const age = new Date(ageInMs).getUTCFullYear() - 1970;

  // Check if the user is at least 18 years old
  if (age < 18) {
    age.parentElement.setAttribute("data-error-visible", "true");
    let messageError = "Vous devez avoir au moins 18 ans pour vous inscrire ";
    age.parentElement.setAttribute("data-error", messageError);
    document.getElementById("go").disabled = true;
  } else {
    // If the user is 18 or older, enable the submit button
    document.getElementById("go").disabled = false;
  }
});
*/

const checkBirthdate = () => {
  if (birthdate.value.trim().length !== 10) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    let messageError = "Champ obligatoire";
    birthdate.parentElement.setAttribute("data-error", messageError);

    birthdate.style.border = "2px solid #e54858";
    return false;
  } else {
    birthdate.parentElement.setAttribute("data-error-visible", "false");
    birthdate.parentElement.setAttribute("data-error", ``);

    birthdate.style.border = "0px";
    return true;
  }
};

const checkQuantity = () => {
  if (
    quantity.value.trim().length === 0 ||
    isNaN(quantity.value.trim()) === true ||
    quantity.value.trim() < 0
  ) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    let messageError = "Champ obligatoire";
    quantity.parentElement.setAttribute("data-error", messageError);

    quantity.style.border = "2px solid #e54858";
    return false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", "false");
    quantity.parentElement.setAttribute("data-error", ``);

    quantity.style.border = "0px";
    return true;
  }
};

const checkAllLocations = () => {
  const allLocations = document.querySelector('input[name="location"]:checked');
  console.log("locations", allLocations);
  if (!allLocations) {
    cities.parentElement.setAttribute("data-error-visible", "true");
    console.log("Oups");
    let messageError = "Champ obligatoire";
    cities.parentElement.setAttribute("data-error", messageError);

    cities.style.border = "2px solid #e54858";
  } else {
    console.log("location OK", allLocations.value);
    return true;
  }
};

const checkCheckBox1 = () => {
  const checkbox1 = document.getElementById("checkbox1");
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    let messageError = "Champ obligatoire";
    checkbox1.parentElement.setAttribute("data-error", messageError);

    checkbox1.style.border = "2px solid #e54858";
  } else {
    checkbox1.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault(); // empêche la soumission normale du formulaire

  const checkAll = () => {
    let isValid = true;
    isValid = checkFirstName() && isValid;
    isValid = checkLastName() && isValid;
    isValid = checkEmail() && isValid;
    isValid = checkBirthdate() && isValid;
    isValid = checkQuantity() && isValid;
    isValid = checkAllLocations() && isValid;
    isValid = checkCheckBox1() && isValid;

    if (isValid) {
      // Traitement du succes
      console.log("cool ");
      form.reset(); // réinitialise les champs du formulaire
      form.style.display = "none"; // disparition du formulaire
      document.querySelector("#confirmation").style.display = "block"; //apparition du success
      return true;
    }
    // return false;
  };

  submitBtn.addEventListener("click", checkAll);
});
