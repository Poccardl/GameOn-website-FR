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
const formData = document.querySelectorAll(".formData");
console.log(formData[0]);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closemodal.addEventListener("click",  closeModal);
//formData.forEach((input) => input.addEventListener("change", takeData));
formData[0].addEventListener("change", firstData);
formData[1].addEventListener("change", lastData);
formData[2].addEventListener("change", emailData);
formData[3].addEventListener("change", birthdateData);
formData[4].addEventListener("change", quantityData);



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// keep first name data
function firstData(e) {
  console.log("firstData ->", e.target.value);
}
// keep last name data
function lastData(e) {
  console.log("lastData ->", e.target.value);
}
// keep email data
function emailData(e) {
  console.log("emailData ->", e.target.value);
  // TODO: maybe need regex for email validation !
}
// keep brithday date data
function birthdateData(e) {
  console.log("birthdateData ->", e.target.value);
}
// kepp quantity data
function quantityData(e) {
  console.log("quantityData ->", e.target.value);
}

