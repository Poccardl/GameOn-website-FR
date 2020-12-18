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
const closemodal2 = document.querySelector(".close2");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData input");
const pushform = document.querySelector(".btn-submit");
const locationDiv = document.querySelector(".location_form");
const locationCheckbox = document.querySelectorAll(".location_form [name=\"location\"]");
const modalbody = document.querySelector(".modal-body");
const modalbody2 = document.querySelector(".modal-body-2");
const edit_nav = document.querySelector(".icon");

// launch modal events
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closemodal.addEventListener("click",  closeModal);
closemodal2.addEventListener("click",  closeModal);
pushform.addEventListener("click", pushForm);
edit_nav.addEventListener("click", editNav);
//formData[0].addEventListener("change", firstData);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalbody.style.display = "block";
  modalbody2.style.display = "none";
  resetFrom();
}
// push form
function pushForm(e) {
  e.preventDefault();
  validationFrom();
}
// validation form
function validationFrom() {
  let validation_list = []
  first_data = firstData(formData[0].value);
  last_data = lastData(formData[1].value);
  email_data = emailData(formData[2].value);
  birthdate_data = birthdateData(formData[3].value);
  quantity_data = quantityData(formData[4].value);
  location_data = locationData(locationCheckbox);
  condition_data = conditionData(formData[11]);
  validation_form = true;
  validation_list.push(first_data, last_data, email_data, birthdate_data, quantity_data, location_data, condition_data);
  for (element in validation_list) {
    if (validation_list[element] == false) {
      validation_form = false;
    }
  }
  if (validation_form == true) {
    modalbody.style.display = "none";
    modalbody2.style.display = "block";
    resetFrom();
    }
   else {
    return false;
  }
}
// reset form
function resetFrom() {
  for (element in formData) {
    try {
      formData[element].value = "";
      formData[element].style.borderColor = "white";
      // reset error messages
      error_msg_list = ["error1", "error2", "error3", "error4", "error5", "error6", "error7"];
      var errorData = document.getElementById(error_msg_list[element]);
      errorData.remove();
    } catch {}
  }
}

// first name validation
function firstData(data) {
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
  return valid;
}
// last name validation
function lastData(data) {
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
  return valid;
}
// email validation
function emailData(data) {
  var valid = false;
  const regex_mail = RegExp(/^[a-z0-9._-]+@[a-z_]+?\.[a-z]{2,3}$/);
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
  return valid;
}
// birthdate validation
function birthdateData(data) {
  var valid = false;
  const regex_date = RegExp(/^\d{2}[/]\d{2}[/]\d{4}$/);
  const regex_is = regex_date.test(data);
  var error = ('<span id="error4" class="msg_error">Vous devez entrer votre date de naissance valide.</span>');
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
  return valid;
}
// quantity validation
function quantityData(data) {
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
  return valid;
}
// location validation
function locationData(data) {
  var valid = false;
  for (element in  data) {
    if (data[element].checked == true) {
      valid = true;
    }
  };
  var error = ('<span id="error6" class="msg_error">Vous devez choisir une ville.</span>');
  var errorData = document.getElementById("error6");
  if (valid == true) {
  } else {
    locationDiv.insertAdjacentHTML("afterend", error);
  } try {
    errorData.remove();
  } catch {}
  return valid;
}
// condition d'utilisation validation
function conditionData(data) {
  var error = ('<span id="error7" class="msg_error">Vous devez acceptez les termes et conditions d’utilisation.</span>');
  var errorData = document.getElementById("error7");
  if (data.checked == true) {
    valid = true;
  } else {
    valid = false;
    formData[12].insertAdjacentHTML("beforebegin", error);
  } try {
    errorData.remove();
  } catch {}
  return valid;
}