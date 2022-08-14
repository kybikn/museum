const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");
const welcomeContent = document.querySelector(".welcome__content");
// const headerLink = document.querySelector(".header__link");

hamburger.addEventListener("click", toggleMenu);
nav.addEventListener("click", closeMenu);
welcomeContent.addEventListener("click", closeMenu);
// headerLink.addEventListener("click", closeMenu);

function toggleMenu() {
  nav.classList.toggle("navbar");
  // nav.classList.toggle("active");
  hamburger.classList.toggle("change");
  welcomeContent.classList.toggle("active");
  // headerLink.classList.toggle("active");
}

function closeMenu(event) {
  if (event.target.classList.contains("header__link")) {
    nav.classList.remove("navbar");
    hamburger.classList.remove("change");
    welcomeContent.classList.remove("active");
    // headerLink.classList.remove("active");
  }
}

// const btnWelcomeMenu = document.querySelector(".burger-menu");
// const welcomeMenuIcon = document.querySelector(".menu-icon");

// const changeStateWelcomeMenu = () => {
//   welcomeMenuIcon.classList.toggle("active");
// };

// btnWelcomeMenu.addEventListener("click", () => {
//   changeStateWelcomeMenu();
// });

// if (window.innerWidth <= 1024) {
//   for (let i = 0; i < welcomeMenuItems.length; i++) {
//     welcomeMenuItems[i].addEventListener("click", () => {
//       changeStateWelcomeMenu();
//     });
//   }
// }
