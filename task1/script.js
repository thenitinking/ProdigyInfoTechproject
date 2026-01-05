// Change navbar color when scrolled
window.addEventListener("scroll", function () {
  let nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Toggle menu on hamburger click
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});