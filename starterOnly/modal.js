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


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closemodal.addEventListener("click",  closeModal);

// launch form event
formData[0].addEventListener("change", firstData);
formData[1].addEventListener("change", lastData);
formData[2].addEventListener("change", emailData);
formData[3].addEventListener("change", birthdateData);
formData[4].addEventListener("change", quantityData);
formData[5].addEventListener("change", locationData);
formData[6].addEventListener("change", locationData);
formData[7].addEventListener("change", locationData);
formData[8].addEventListener("change", locationData);
formData[9].addEventListener("change", locationData);
formData[10].addEventListener("change", locationData);
console.log(formData)
formData[11].addEventListener("change", conditionData);
formData[12].addEventListener("change", conditionData);


/* FUNCTION */
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// first name validation
function firstData(e) {
  // on sible la classe pour la mètre en rouge
  console.log("firstData :", e.target.value);
  var data = e.target.value;
  var valid = false;
  if (data.length > 1) {
    valid = true;
    formData[0].style.borderColor = "green";
  }
  else {
    valid = false
    formData[0].style.borderColor = "red";
  }
}
// last name validation
function lastData(e) {
  console.log("data", data);
  // on sible la classe pour la mètre en rouge
  console.log("lastData :", e.target.value);
  var data = e.target.value;
  var valid = false;
  if (data.length > 1) {
    valid = true;
    formData[1].style.borderColor = "green";
  }
  else {
    valid = false
    formData[1].style.borderColor = "red";
  }
}
// email validation
function emailData(e) {
  console.log("birthdateData :", e.target.value);
  var data = e.target.value;
  var valid = false;
  const regex_mail = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  const regex_is = regex_mail.test(data);
  console.log(regex_mail.test(data))
  if (regex_is) {
    valid = true;
    formData[2].style.borderColor = "green";
  } else {
    valid = false;
    formData[2].style.borderColor = "red";
  }
}
// birthdate validation
function birthdateData(e) {
  console.log("birthdateData :", e.target.value);
  var data = e.target.value;
  var valid = false;
  const regex_date = RegExp(/^\d{2}[/]\d{2}[/]\d{4}$/);
  const regex_is = regex_date.test(data);
  if (regex_is) {
    valid = true;
    formData[3].style.borderColor = "green";
  }
  else {
    valid = false
    formData[3].style.borderColor = "red";
  }
}
// quantity validation
function quantityData(e) {
  console.log("quantityData :", e.target.value);
  var data = e.target.value;
  var valid = false;
  const regex_quantity = RegExp(/^\d{1,}$/);
  const regex_is = regex_quantity.test(data);
  console.log(regex_is);
  if (regex_is) {
    valid = true;
    formData[4].style.borderColor = "green";
  } else {
    valid = false;
    formData[4].style.borderColor = "red";
  }
}
// location validation
function locationData(e){
  console.log(e.target.value);
  var data = e.target.value;
  var valid = false;
  if (data != null) {
    data = true;
  } else {
    valid = false;
  }
}
// condition validation
function conditionData(e) {
  console.log(e.target.value);
}

