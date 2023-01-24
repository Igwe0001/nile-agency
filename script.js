const menuButton = document.querySelector(".menu--button__container");
const menuContainer = document.querySelector(".menu__container");

menuButton.addEventListener("click", () => {
  if (event.target.tagName == "DIV" || event.target.tagName == "SPAN") {
    console.log("working");
    menuContainer.classList.toggle("show-nav");
  }
});

console.log(menuButton);
