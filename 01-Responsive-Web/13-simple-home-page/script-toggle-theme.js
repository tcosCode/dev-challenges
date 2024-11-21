const body = document.body;
const checkbox = document.getElementById("toggle-checkbox");
const toggleTheme = document.getElementById("toggle-theme");

// Toggle theme
toggleTheme.addEventListener("click", (e) => {
  e.preventDefault;
  checkbox.checked = !checkbox.checked;
  if (checkbox.checked) {
    body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("theme", "dark");
  } else if (!checkbox.checked) {
    body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("theme", "light");
  }
});

// Keep the theme after refreshing the page
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.add(savedTheme + "-mode");
  checkbox.checked = savedTheme === "dark";
});
