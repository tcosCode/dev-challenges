const body = document.body;
const checkbox = document.getElementById("toggle-checkbox");
const toggleTheme = document.getElementById("toggle-theme");

function handleToggleTheme(e, checkbox, body) {
  e.preventDefault;
  checkbox.checked = !checkbox.checked;
  if (checkbox.checked) {
    body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("theme", "dark");
  } else if (!checkbox.checked) {
    body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("theme", "light");
  }
}

function applySavedTheme(checkbox, body) {
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.add(savedTheme + "-mode");
  checkbox.checked = savedTheme === "dark";
}

// Toggle the theme
toggleTheme.addEventListener("click", (e) =>
  handleToggleTheme(e, checkbox, body)
);

// Keep the theme after refreshing the page
window.addEventListener("load", () => applySavedTheme(checkbox, body));

/////////////////////////////////////////////

//script for the toggle hamburguer menu

const checkboxHamburguer = document.getElementById(
  "toggle-checkbox-hamburguer"
);
const toggleThemeHamburguer = document.getElementById(
  "toggle-theme-hamburguer"
);

toggleThemeHamburguer.addEventListener("click", (e) =>
  handleToggleTheme(e, checkboxHamburguer, body)
);
window.addEventListener("load", () =>
  applySavedTheme(checkboxHamburguer, body)
);
