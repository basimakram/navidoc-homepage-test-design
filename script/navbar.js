const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const solutionsTab = document.querySelector("#solutions");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});

navMenu.addEventListener("mouseleave", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
});

solutionsTab.addEventListener("click", () => {
    if (window.innerWidth < 1000) {
        solutionsTab.classList.toggle("active");
        const dropdownContent =
            solutionsTab.querySelector(".dropdown-content");
        dropdownContent.style.display =
            dropdownContent.style.display === "block" ? "none" : "block";
    }
});

document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);