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
  form.style.display = "block"; // form apparition
  firstName.focus();
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  document.querySelector("#confirmation").style.display = "none"; // success's disparition
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
const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

firstName.addEventListener("input", (e) => {
  if (e.target.value.length >= 2) {
    checkFirstName();
  }
});

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

    return false;
  } else {
    firstName.parentElement.setAttribute("data-error-visible", "false");
    firstName.parentElement.setAttribute("data-error", ``);

    return true;
  }
};

lastName.addEventListener("input", (e) => {
  if (e.target.value.length >= 2) {
    checkLastName();
  }
});

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

    return false;
  } else {
    lastName.parentElement.setAttribute("data-error-visible", "false");
    lastName.parentElement.setAttribute("data-error", ``);

    return true;
  }
};

email.addEventListener("input", (e) => {
  if (e.target.value.trim() === "" || !email.value.match(re)) {
    checkEmail();
  }
});

const checkEmail = () => {
  if (email.value.trim() === "" || !email.value.match(re)) {
    email.parentElement.setAttribute("data-error-visible", "true");
    let messageError = email.value
      ? `Oups... ${email.value} n'est pas conforme`
      : "Champ obligatoire";
    email.parentElement.setAttribute("data-error", messageError);

    return false;
  } else {
    email.parentElement.setAttribute("data-error-visible", "false");
    email.parentElement.setAttribute("data-error", ``);

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

let fullDate = `${year}-${month}-${day}`; // YYYY-MM-DD format
birthdate.setAttribute("max", fullDate);

birthdate.addEventListener("change", function (e) {
  console.log("event: ", e);
  // Birthday's date input
  const valueOfInput = new Date(e.target.value);
  console.log("🚀 ~ file: index.js:278 ~ valueOfInput:", valueOfInput);
  // Input transformation as timeStamp
  const ageInTimeStamp = valueOfInput.getTime();
  // Getting the year 18 years ago from today
  const year18yearsago = new Date().getFullYear() - 18;
  console.log("🚀 ~ file: modal.js:134 ~ year18yearsago:", year18yearsago);
  // Today's date recuperation where I crush the year from 18 years ago then I get the timestamp
  const ilya18an = new Date(new Date().setFullYear(year18yearsago)).getTime();
  // Both dates comparison
  if (ageInTimeStamp > ilya18an) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    let messageError = "Vous devez avoir au moins 18 ans pour vous inscrire ";
    birthdate.parentElement.setAttribute("data-error", messageError);
    document.getElementById("go").disabled = true;
  } else {
    // If the user is 18 or older, enable the submit button
    birthdate.parentElement.setAttribute("data-error-visible", "false");
    birthdate.parentElement.setAttribute("data-error", "");
    document.getElementById("go").disabled = false;
  }
});

birthdate.addEventListener("input", (e) => {
  if (e.target.value.trim().length !== 10) {
    checkBirthdate();
  }
});

const checkBirthdate = () => {
  if (birthdate.value.trim().length !== 10) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    let messageError = "Champ obligatoire";
    birthdate.parentElement.setAttribute("data-error", messageError);

    return false;
  } else {
    birthdate.parentElement.setAttribute("data-error-visible", "false");
    birthdate.parentElement.setAttribute("data-error", ``);

    return true;
  }
};

quantity.addEventListener("input", (e) => {
  if (e.target.value.trim().length === 0) {
    checkQuantity();
  }
});

const checkQuantity = () => {
  if (
    quantity.value.trim().length === 0 ||
    isNaN(quantity.value.trim()) === true ||
    quantity.value.trim() < 0
  ) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    let messageError = "Champ obligatoire";
    quantity.parentElement.setAttribute("data-error", messageError);

    return false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", "false");
    quantity.parentElement.setAttribute("data-error", ``);

    return true;
  }
};

const location1 = document.getElementById("location1");
location1.addEventListener("input", (e) => {
  if (e.target.value.trim() === checked) {
    checkAllLocations();
  }
});

const location2 = document.getElementById("location2");
location2.addEventListener("input", (e) => {
  if (e.target.value.trim() === checked) {
    checkAllLocations();
  }
});
const location3 = document.getElementById("location3");
location3.addEventListener("input", (e) => {
  if (e.target.value.trim() === checked) {
    checkAllLocations();
  }
});
const location4 = document.getElementById("location4");
location4.addEventListener("input", (e) => {
  if (e.target.value.trim() === checked) {
    checkAllLocations();
  }
});
const location5 = document.getElementById("location5");
location5.addEventListener("input", (e) => {
  if (e.target.value.trim() === checked) {
    checkAllLocations();
  }
});
const location6 = document.getElementById("location6");
location6.addEventListener("input", (e) => {
  if (e.target.value.trim() === checked) {
    checkAllLocations();
  }
});

const checkAllLocations = () => {
  const allLocations = document.querySelector('input[name="location"]:checked');
  console.log("locations", allLocations);
  if (!allLocations) {
    cities.parentElement.setAttribute("data-error-visible", "true");
    let messageError = "Champ obligatoire";
    cities.parentElement.setAttribute("data-error", messageError);

    return false;
  } else {
    cities.parentElement.setAttribute("data-error-visible", "false");
    cities.parentElement.setAttribute("data-error", ``);
    return true;
  }
};

const checkCheckBox1 = () => {
  const checkbox1 = document.getElementById("checkbox1");
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    let messageError = "Champ obligatoire";
    checkbox1.parentElement.setAttribute("data-error", messageError);

    return false;
  } else {
    checkbox1.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
};

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
    // Treatment of success
    form.reset(); // resets form fields
    form.style.display = "none"; // disparition du formulaire
    document.querySelector("#confirmation").style.display = "block"; // Appearance of success
    const dataErrorVisible = document.querySelectorAll(
      '[data-error-visible="true"]'
    );
    console.log(
      "🚀 ~ file: modal.js:228 ~ checkAll ~ dataErrorVisible:",
      dataErrorVisible
    );
    dataErrorVisible.forEach(function (element) {
      element.setAttribute("data-error-visible", "false");
      element.setAttribute("data-error", "");
    });
    return true;
  }
  // return false;
};

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents normal submission of the form
  checkAll();
});
