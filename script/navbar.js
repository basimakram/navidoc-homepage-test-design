const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const solutionsTab = document.querySelector("#solutions");
const megaBox = document.querySelector(".mega-box");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Show/hide mega menu when clicking the "Solutions" link for smaller screens
solutionsTab.addEventListener("click", () => {
    if (window.innerWidth < 1000) {
        solutionsTab.classList.toggle("active");
        megaBox.style.display =
            megaBox.style.display === "block" ? "none" : "block";
    }
});

// Show mega menu when hovering over the "Solutions" link for larger screens
solutionsTab.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 1000) {
        megaBox.style.display = "block";
    }
});

// Hide mega menu when the mouse leaves the "Solutions" link for larger screens
solutionsTab.addEventListener("mouseleave", () => {

    megaBox.style.display = "none";
});

// Hide mega menu when the mouse leaves the entire navigation bar for larger screens
navMenu.addEventListener("mouseleave", () => {
    if (window.innerWidth >= 1000) {
        megaBox.style.display = "none";
    }
});
