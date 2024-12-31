document.addEventListener("DOMContentLoaded", function () {
    const lightButton = document.getElementById("light-button");
    const darkButton = document.getElementById("dark-button");
    function setTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        void document.documentElement.offsetHeight;
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            lightButton.classList.remove("button_primary");
            lightButton.classList.add("button_secondary");
            darkButton.classList.remove("button_secondary");
            darkButton.classList.add("button_primary");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            lightButton.classList.remove("button_secondary");
            lightButton.classList.add("button_primary");
            darkButton.classList.remove("button_primary");
            darkButton.classList.add("button_secondary");
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