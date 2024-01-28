document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const themeLink = document.querySelector(".theme");

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    console.log("dark");
    root.classList.add("dark-theme");
    themeLink.textContent = "Theme: Dark";
    themeLink.classList.add("dark-theme-text");
  } else {
    console.log("light");
    root.classList.remove("dark-theme");
    themeLink.textContent = "Theme: Light";
    themeLink.classList.remove("dark-theme-text");
  }

  // Добавляем задержку для смены темы с анимацией
  setTimeout(() => {
    if (root.classList.contains("dark-theme")) {
      themeLink.textContent = "Theme: Dark";
      themeLink.classList.add("dark-theme-text");
    } else {
      themeLink.textContent = "Theme: Light";
      themeLink.classList.remove("dark-theme-text");
    }
  }, 300);
});

function toggleTheme() {
  const root = document.documentElement;
  root.classList.toggle("dark-theme");

  const currentTheme = root.classList.contains("dark-theme") ? "dark" : "light";
  const themeLink = document.querySelector(".theme");

  if (currentTheme === "dark") {
    themeLink.textContent = "Theme: Dark";
    themeLink.classList.add("dark-theme-text");
  } else {
    // Добавляем задержку перед обновлением текста и класса
    setTimeout(() => {
      themeLink.textContent = "Theme: Light";
      themeLink.classList.remove("dark-theme-text");
    }, 300);
  }
}
