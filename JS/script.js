function toggleNav() {
  document.querySelector("nav").classList.toggle("active");
  document.querySelector(".hamburger").classList.toggle("nav-open");
}

// Add event listener to collapse menu when mouse leaves
const navMenu = document.getElementById("nav-menu");
navMenu.addEventListener("mouseleave", function () {
  navMenu.classList.remove("active");
  document.querySelector(".hamburger").classList.remove("nav-open");
});
