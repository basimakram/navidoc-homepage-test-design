// Get references to the DK and UK paragraphs
const dkParagraph = document.querySelector(".DK");
const ukParagraph = document.querySelector(".UK");

// Set the initial color state
dkParagraph.style.color = "white";
ukParagraph.style.color = "gray";

// Add click event listeners to the paragraphs
dkParagraph.addEventListener("click", () => {
    dkParagraph.style.color = "gray";
    ukParagraph.style.color = "white";
    ukParagraph.style.cursor = "pointer";
    ukIcon.style.cursor = "pointer";
    dkParagraph.style.cursor = "auto";
    dkIcon.style.cursor = "auto";
});

ukParagraph.addEventListener("click", () => {
    dkParagraph.style.color = "white";
    ukParagraph.style.color = "gray";
    dkParagraph.style.cursor = "pointer";
    dkIcon.style.cursor = "pointer";
    ukParagraph.style.cursor = "auto";
    ukIcon.style.cursor = "auto";
});

// Get references to the dk-icon and uk-icon elements
const dkIcon = document.querySelector(".dk-icon");
const ukIcon = document.querySelector(".uk-icon");

// Add click event listeners to the icons
dkIcon.addEventListener("click", () => {
    dkParagraph.style.color = "gray";
    ukParagraph.style.color = "white";
    ukParagraph.style.cursor = "pointer";
    ukIcon.style.cursor = "pointer";
    dkParagraph.style.cursor = "auto";
    dkIcon.style.cursor = "auto";
});

ukIcon.addEventListener("click", () => {
    dkParagraph.style.color = "white";
    ukParagraph.style.color = "gray";
    dkParagraph.style.cursor = "pointer";
    dkIcon.style.cursor = "pointer";
    ukParagraph.style.cursor = "auto";
    ukIcon.style.cursor = "auto";
});

// Add cursor pointer style if color is white
if (dkParagraph.style.color === "white") {
    dkParagraph.style.cursor = "pointer";
    dkIcon.style.cursor = "pointer";
}

if (ukParagraph.style.color === "white") {
    ukParagraph.style.cursor = "pointer";
    ukIcon.style.cursor = "pointer";
}
