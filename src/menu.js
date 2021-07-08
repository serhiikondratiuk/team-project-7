(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  const mobile2BtnClose = document.querySelector("[data-menu-close2]");
  const mobiles3BtnClose = document.querySelector("[data-menu-close3]");
  const mobiles4BtnClose = document.querySelector("[data-menu-close4]");
  const mobiles5BtnClose = document.querySelector("[data-menu-close5]");
  const mobiles6BtnClose = document.querySelector("[data-menu-close6]");
  const mobiles7BtnClose = document.querySelector("[data-menu-close7]");
  
  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

   mobile2BtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
   });
  
    mobiles3BtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

 mobiles4BtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

mobiles5BtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobiles6BtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

    mobiles7BtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

})();
