const menuButton = document.querySelector(".menu--button__container");
const menuContainer = document.querySelector(".menu__container");
const nav = document.querySelectorAll("nav ul li");
const navContact = document.querySelector('#contact')

window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

menuButton.addEventListener("click", () => {
  if (event.target.tagName == "DIV" || event.target.tagName == "SPAN") {
    menuContainer.classList.toggle("show-nav");
  }
});

navContact.addEventListener('click', () => {
    menuContainer.classList.toggle("show-nav");
})

nav.forEach((e) => {
  e.addEventListener("click", (el) => {
    menuContainer.classList.remove("show-nav");
  });
});
