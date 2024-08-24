document.addEventListener("DOMContentLoaded", function () {
    const lightButton = document.getElementById("light-button");
    const darkButton = document.getElementById("dark-button");
    function setTheme(theme) {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            lightButton.classList.remove("primary");
            lightButton.classList.add("secondary");
            darkButton.classList.remove("secondary");
            darkButton.classList.add("primary");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            lightButton.classList.remove("secondary");
            lightButton.classList.add("primary");
            darkButton.classList.remove("primary");
            darkButton.classList.add("secondary");
        }
    }
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
    lightButton.addEventListener("click", function () {
        setTheme("light");
        localStorage.setItem("theme", "light");
    });
    darkButton.addEventListener("click", function () {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
    });
});