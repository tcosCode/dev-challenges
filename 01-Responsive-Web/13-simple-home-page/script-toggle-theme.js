/**
 * Theme Toggle Controller
 * This module handles theme switching (dark/light mode) using a toggle button.
 * It saves the user's preference in localStorage and applies it on page load.
 */

// Get DOM elements for theme toggle
const body = document.body; // The document body to apply theme classes
const checkbox = document.getElementById("toggle-checkbox"); // Checkbox for theme toggle state
const toggleTheme = document.getElementById("toggle-theme"); // Button to toggle the theme

/**
 * Handles theme switching between dark and light modes.
 * Toggles the theme class on the body element and saves the preference in localStorage.
 *
 * @param {Event} e - The click event from the toggle button.
 * @param {HTMLInputElement} checkbox - The checkbox representing theme state.
 * @param {HTMLElement} body - The document body element to apply the theme.
 */
function handleToggleTheme(e, checkbox, body) {
  e.preventDefault(); // Prevent default button behavior
  checkbox.checked = !checkbox.checked; // Toggle the checkbox state
  if (checkbox.checked) {
    body.classList.replace("light-mode", "dark-mode"); // Switch to dark mode
    localStorage.setItem("theme", "dark"); // Save preference
  } else {
    body.classList.replace("dark-mode", "light-mode"); // Switch to light mode
    localStorage.setItem("theme", "light"); // Save preference
  }
}

/**
 * Applies the saved theme preference on page load.
 * Adds the appropriate class to the body and sets the checkbox state.
 *
 * @param {HTMLInputElement} checkbox - The checkbox representing theme state.
 * @param {HTMLElement} body - The document body element to apply the theme.
 */
function applySavedTheme(checkbox, body) {
  const savedTheme = localStorage.getItem("theme") || "light"; // Default to light mode
  body.classList.add(savedTheme + "-mode"); // Apply the saved theme class
  checkbox.checked = savedTheme === "dark"; // Set checkbox state
}

// Add event listener to toggle theme on button click
toggleTheme.addEventListener("click", (e) =>
  handleToggleTheme(e, checkbox, body)
);

// Apply saved theme when the page loads
window.addEventListener("load", () => applySavedTheme(checkbox, body));

/////////////////////////////////////////////

/**
 * Hamburger Menu Theme Toggle Controller
 * Extends theme switching functionality to a hamburger menu toggle button.
 */

// Get DOM elements for the hamburger menu theme toggle
const checkboxHamburguer = document.getElementById(
  "toggle-checkbox-hamburguer"
); // Checkbox for theme state in hamburger menu
const toggleThemeHamburguer = document.getElementById(
  "toggle-theme-hamburguer"
); // Button in the hamburger menu to toggle theme

// Add event listener to toggle theme via hamburger menu button
toggleThemeHamburguer.addEventListener("click", (e) =>
  handleToggleTheme(e, checkboxHamburguer, body)
);

// Apply saved theme for hamburger menu when the page loads
window.addEventListener("load", () =>
  applySavedTheme(checkboxHamburguer, body)
);
