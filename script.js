"use strict";

const dropdownButtonEl = document.querySelector(".dropdown_button");
const dropdownMenuEl = document.querySelector(".dropdown_menu");
console.log("");

dropdownButtonEl.addEventListener("click", function () {
  dropdownMenuEl.classList.toggle("is-active");
});
