import './sass/main.scss';

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
})();

// script
function Spoiler() {
	var ele = document.getElementById("contentSpoiler");
	var text = document.getElementById("linkSpoiler");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "Подробнее";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "Скрыть";
	}
}

