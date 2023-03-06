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
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


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

const checkEmail = () => {
  if (email.value.trim() === '' || !email.value.match(re)) {
    email.parentElement.setAttribute('data-error-visible', 'true');
    let messageError = email.value.match ? `Oups... ${email.value} n'est pas conforme` : "Champ obligatoire"
    email.parentElement.setAttribute('data-error', messageError );

    email.style.border = '2px solid #e54858';
    return false;
  }
  email.parentElement.setAttribute('data-error-visible', 'false');
  email.parentElement.setAttribute('data-error', ``);

  email.style.border = '0px';
  return true;
}

/*
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}
*/

const checkBirthdate = () => {
  if (birthdate.value.trim().length !== 10) {
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    birthdate.style.border = '2px solid #e54858';
    return false;
  }
  birthdate.parentElement.setAttribute('data-error-visible', 'false');
  birthdate.parentElement.setAttribute('data-error', ``);

  birthdate.style.border = '0px';
  return true;
}

const checkTournamentsQuantity = () => {
  if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    let messageError = "Champ obligatoire"
    quantity.parentElement.setAttribute('data-error', messageError );

    quantity.style.border = '2px solid #e54858';
    return false;
  }
  quantity.parentElement.setAttribute('data-error-visible', 'false');
  quantity.parentElement.setAttribute('data-error', ``);

  quantity.style.border = '0px';
  return true;
}

/*
const allLocations = [
  "New York",
  "San Francisco",
  "Seattle",
  "Chicago",
  "Boston",
  "Portland",
]
*/

const checkAllLocations = () => {
  allLocations.setAttribute('data-error-visible', 'true');
  for (let i = 0; i < locations.lenght; i++) {
    if (locations[i].checked) {
      allLocations.setAttribute('data-error-visible', 'false');
      allLocations.parentElement.setAttribute('data-error', ``);
      
      return true;
    }     
    
    let messageError = allLocations.value.length ? `Oups... ${allLocations.value} n'est pas conforme` : "Champ obligatoire"
    allLocations.parentElement.setAttribute('data-error', messageError );
    allLocations.style.border = '2px solid #e54858';
    return false;
  }
}


const checkCheckBox1 = () => {
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    let messageError = "Champ obligatoire"
    checkbox1.parentElement.setAttribute('data-error', messageError );

    checkbox1.style.border = '2px solid #e54858';
    return false;
  }

  checkbox1.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

/*
const checkAge = () => {
  if (age >= 18 && age < 100) {
    return true;
  }
}
*/

const checkAll = () => {
  if (checkFirstName()
  && checkLastName()
  && checkEmail()
  && checkBirthdate()
  && checkQuantity()
  && checkAllLocations()
  && checkCheckBox1())
  {
    // Traitement du succes
    console.log('cool ');
  }
}


submitBtn.addEventListener("click", checkAll);