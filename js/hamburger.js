var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");
var hamDark = document.querySelector(".ham-dark");

ham.addEventListener("click", toggleHamburger);

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}

var menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleHamburger);
});
