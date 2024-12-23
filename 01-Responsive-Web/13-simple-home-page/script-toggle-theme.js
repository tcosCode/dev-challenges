/**
 * Theme Toggle Controller
 * Handles theme switching (dark/light mode) and saves user preferences in localStorage.
 */

// DOM elements for theme toggle
const body = document.body;
const checkbox = document.getElementById("toggle-checkbox");
const toggleTheme = document.getElementById("toggle-theme");

/**
 * Toggles between dark and light themes.
 * Updates the body class and saves the preference in localStorage.
 */
function toggleThemeHandler(e, checkbox) {
  e.preventDefault();
  checkbox.checked = !checkbox.checked;
  const theme = checkbox.checked ? "dark" : "light";
  body.className = `${theme}-mode`; // Simplified class replacement
  localStorage.setItem("theme", theme);
}

/**
 * Applies the saved theme preference on page load.
 */
function applySavedTheme(checkbox) {
  const savedTheme = localStorage.getItem("theme") || "light";
  body.className = `${savedTheme}-mode`;
  checkbox.checked = savedTheme === "dark";
}

// Event listeners
toggleTheme.addEventListener("click", (e) => toggleThemeHandler(e, checkbox));
window.addEventListener("load", () => applySavedTheme(checkbox));

/////////////////////////////////////////////

/**
 * Hamburger Menu Theme Toggle
 * Extends theme switching functionality to the hamburger menu.
 */

// DOM elements for hamburger menu theme toggle
const checkboxHamburguer = document.getElementById(
  "toggle-checkbox-hamburguer"
);
const toggleThemeHamburguer = document.getElementById(
  "toggle-theme-hamburguer"
);

// Event listeners for hamburger menu
toggleThemeHamburguer.addEventListener("click", (e) =>
  toggleThemeHandler(e, checkboxHamburguer)
);
window.addEventListener("load", () => applySavedTheme(checkboxHamburguer));
