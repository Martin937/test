window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav"),
    navLink = document.querySelectorAll(".nav__link"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    nav.classList.toggle("nav_active");
  });

  navLink.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      nav.classList.toggle("nav_active");
    });
  });
});
