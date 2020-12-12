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
const closemodal = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData input");
const pushform = document.querySelector(".btn-submit");
const locationDiv = document.querySelector(".location_form");
const locationCheckbox = document.querySelectorAll(".location_form [name=\"location\"]");

// launch modal events
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closemodal.addEventListener("click",  closeModal);
pushform.addEventListener("click", pushForm);

// launch form validation events
formData[0].addEventListener("change", firstData);
formData[1].addEventListener("change", lastData);
formData[2].addEventListener("change", emailData);
formData[3].addEventListener("change", birthdateData);
formData[4].addEventListener("change", quantityData);
locationCheckbox.forEach((check) => check.addEventListener("change", locationData));
formData[11].addEventListener("change", conditionData);


/* FUNCTION */
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
//
function pushForm() {
  console.log("push form");
  locationData();
  conditionData();
}

// first name validation
function firstData(e) {
  // <span style="color: red; font-size: 16px;">test de message d'erreur !</span>
  console.log("firstData :", e.target.value);
  var data = e.target.value;
  var valid = false;
  var error = ('<span id="error1" class="msg_error">Veuillez entrer 2 caractères ou plus pour le champ du nom.</span>');
  var errorData = document.getElementById("error1");
  if (data.length > 1) {
    valid = true;
    formData[0].style.borderColor = "green";
  }
  else {
    valid = false
    formData[0].style.borderColor = "red";
    formData[0].insertAdjacentHTML("afterend", error)
  } try {
    errorData.remove();
  } catch {}
}
// last name validation
function lastData(e) {
  console.log("data", data);
  // on sible la classe pour la mètre en rouge
  console.log("lastData :", e.target.value);
  var data = e.target.value;
  var valid = false;
  var error = ('<span id="error2" class="msg_error">Veuillez entrer 2 caractères ou plus pour le champ du nom.</span>');
  var errorData = document.getElementById("error2");
  if (data.length > 1) {
    valid = true;
    formData[1].style.borderColor = "green";
  }
  else {
    valid = false
    formData[1].style.borderColor = "red";
    formData[1].insertAdjacentHTML("afterend", error);
  } try {
    errorData.remove();
  } catch {}
}
// email validation
function emailData(e) {
  console.log("birthdateData :", e.target.value);
  var data = e.target.value;
  var valid = false;
  const regex_mail = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  const regex_is = regex_mail.test(data);
  var error = ('<span id="error3" class="msg_error">Vous devez entrer une adresse email valide.</span>');
  var errorData = document.getElementById("error3");
  if (regex_is) {
    valid = true;
    formData[2].style.borderColor = "green";
  } else {
    valid = false;
    formData[2].style.borderColor = "red";
    formData[2].insertAdjacentHTML("afterend", error);
  } try {
    errorData.remove();
  } catch {}
}
// birthdate validation
function birthdateData(e) {
  console.log("birthdateData :", e.target.value);
  var data = e.target.value;
  var valid = false;
  const regex_date = RegExp(/^\d{2}[/]\d{2}[/]\d{4}$/);
  const regex_is = regex_date.test(data);
  var error = ('<span id="error4" class="msg_error">Vous devez entrer votre date de naissance valide.<br>Exemple : 15/02/1997</span>');
  var errorData = document.getElementById("error4");
  if (regex_is) {
    valid = true;
    formData[3].style.borderColor = "green";
  }
  else {
    valid = false
    formData[3].style.borderColor = "red";
    formData[3].insertAdjacentHTML("afterend", error);
  } try {
    errorData.remove();
  } catch {}
}
// quantity validation
function quantityData(e) {
  console.log("quantityData :", e.target.value);
  var data = e.target.value;
  var valid = false;
  const regex_quantity = RegExp(/^\d{1,}$/);
  const regex_is = regex_quantity.test(data);
  var error = ('<span id="error5" class="msg_error">Vous devez entrer un nombre.</span>');
  var errorData = document.getElementById("error5");
  if (regex_is) {
    valid = true;
    formData[4].style.borderColor = "green";
  } else {
    valid = false;
    formData[4].style.borderColor = "red";
    formData[4].insertAdjacentHTML("afterend", error);
  } try {
    errorData.remove();
  } catch {}
}
// location validation
function locationData(e) {
  var valid = false;
  for (element in  locationCheckbox) {
    if (locationCheckbox[element].checked == true) {
      valid = true;
    }
  };
  var error = ('<span id="error6" class="msg_error">Vous devez choisir une ville.</span>');
  var errorData = document.getElementById("error6");
  if (valid == true) {
    console.log("no error");
  } else {
    console.log("error");
    locationDiv.insertAdjacentHTML("afterend", error);
  } try {
    errorData.remove();
  } catch {}
}
// condition d'utilisation validation
function conditionData(e) {
  var valid = false;
  var error = ('<span id="error7" class="msg_error">Vous devez acceptez les termes et conditions d’utilisation.</span>');
  var errorData = document.getElementById("error7");
  if (formData[11].checked == true) {
    valid = true;
  } else {
    valid = false;
    formData[12].insertAdjacentHTML("beforebegin", error);
  } try {
    errorData.remove();
  } catch {}
}