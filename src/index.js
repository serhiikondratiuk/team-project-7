import './sass/main.scss';

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");

  // var hamburger = document.querySelector(".hamburger");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    menuBtnRef.classList.toggle("is-active");
  });

  // mobileBtnClose.addEventListener("click", () => {
  //   mobileMenuRef.classList.toggle("is-open");
  //   menuBtnRef.classList.toggle("is-active");
  // });

  //  hamburger.addEventListener("click", function() {
  //   // Toggle class "is-active"
  //   hamburger.classList.toggle("is-active");
  //   // Do something else, like open/close menu
  //  });
  
})();


  // Look for .hamburger
  
  // On click
 
