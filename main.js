//change navbar

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closedBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closedBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});
closedBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closedBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
});
