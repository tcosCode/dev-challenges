//Hamburguer menu

const menuHamburguer = document.getElementById("menu-hamburguer");
const hamburguerIcon = document.getElementById("hamburguer");
const closeIcon = document.getElementById("close");

hamburguerIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);

let menuIsOpen = false;

function openMenu() {
  if (!menuIsOpen) {
    menuHamburguer.classList.add("open");
    menuIsOpen = true;
  }
}

function closeMenu() {
  if (menuIsOpen) {
    menuHamburguer.classList.remove("open");
    menuIsOpen = false;
  }
}
