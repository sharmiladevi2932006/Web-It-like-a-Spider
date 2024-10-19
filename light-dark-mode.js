// light-dark-mode.js - Handle light/dark mode toggle

const toggleSwitch = document.getElementById("themeSwitcher");

toggleSwitch.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
    // Optionally save user preference in localStorage
});
