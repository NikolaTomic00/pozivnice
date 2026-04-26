//change navbar

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 80);
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

const swiper = new Swiper(".testimonial__swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    items.forEach((i) => i.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

const navLinks = document.querySelectorAll(".nav__menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.display = "none";
    closedBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  });
});
