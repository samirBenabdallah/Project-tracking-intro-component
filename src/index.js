// * constants and vars
const button = document.getElementsByClassName("button")[0];
const ul = document.querySelector("nav ul");
let isClicked = false;
// * functions

function buttonClick(e) {
  isClicked = !isClicked;
  ul.classList.toggle("active");
  e.target.src = isClicked
    ? "./images/icon-close.svg"
    : "./images/icon-hamburger.svg";
}

// * events
button.addEventListener("click", buttonClick);
