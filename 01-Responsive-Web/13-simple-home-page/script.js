/**
 * Hamburger Menu Controller
 * This module handles the functionality of a mobile hamburger menu,
 * controlling its open/close states and animations.
 */

// Get DOM elements
const menuHamburguer = document.getElementById("menu-hamburguer"); // Main menu container
const hamburguerIcon = document.getElementById("hamburguer"); // Open menu button
const closeIcon = document.getElementById("close"); // Close menu button

// Add event listeners for menu interaction
hamburguerIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);

// Track menu state
let menuIsOpen = false;

/**
 * Opens the hamburger menu
 * Adds 'open' class to menu container if menu is currently closed
 */
function openMenu() {
  if (!menuIsOpen) {
    menuHamburguer.classList.add("open");
    menuIsOpen = true;
  }
}

/**
 * Closes the hamburger menu
 * Removes 'open' class from menu container if menu is currently open
 */
function closeMenu() {
  if (menuIsOpen) {
    menuHamburguer.classList.remove("open");
    menuIsOpen = false;
  }
}
