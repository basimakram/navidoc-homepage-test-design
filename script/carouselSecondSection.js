//JS CODE FOR SECOND CAROUSEL
const wrapper = document.querySelector(".wrapperc2");
const carousel = document.querySelector(".carousel2");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapperc2 .carousel-button-div button");
const carouselChildrens = [...carousel.children];

let isDragging = false;
let startX, startScrollLeft;
let currentIndex = 0;
let itemsPerPage; // Number of items to display at a time
const maxWidth1 = window.matchMedia("(max-width: 1000px)");
const smallWidth1 = window.matchMedia("(max-width: 600px)");

if (maxWidth1.matches) {
    itemsPerPage = 2;
} else if (smallWidth1.matches) {
    itemsPerPage = 1;
} else {
    itemsPerPage = 4; // Default value for larger screens
}


// Get the total number of items in the carousel
const totalItems = carouselChildrens.length;

// Calculate the width of the carousel based on the number of items to display
carousel.style.width = `${firstCardWidth * itemsPerPage}px`;

// Function to update the state and style of the navigation buttons
const updateButtonStates = () => {
    const prevButton = arrowBtns[0];
    const nextButton = arrowBtns[1];

    if (currentIndex <= 0) {
        prevButton.style.borderColor = "lightgray";
        prevButton.querySelector(".button-border").style.borderColor = "lightgray";
    } else {
        prevButton.style.borderColor = "black";
        prevButton.querySelector(".button-border").style.borderColor = "black";
    }

    if (currentIndex + itemsPerPage >= totalItems) {
        nextButton.style.borderColor = "lightgray";
        nextButton.querySelector(".button-border").style.borderColor = "lightgray";
    } else {
        nextButton.style.borderColor = "black";
        nextButton.querySelector(".button-border").style.borderColor = "black";
    }
};

// Function to update the carousel based on the current index
const updateCarousel = () => {
    carousel.scrollLeft = currentIndex * firstCardWidth;
};

// Add event listeners for the arrow buttons to navigate the carousel
arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        updateButtonStates(); // Update button states before changing the current index
        if (btn.id === "left" && currentIndex > 0) {
            currentIndex -= 1;
        } else if (btn.id === "right" && currentIndex + itemsPerPage < totalItems) {
            currentIndex += 1;
        }
        updateCarousel();
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);

};

carousel.addEventListener("scroll", () => {
    currentIndex = Math.floor(carousel.scrollLeft / firstCardWidth); // Calculate current index based on scroll position
    updateButtonStates(); // Update button states while scrolling
});



const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
//wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
//wrapper.addEventListener("mouseleave", autoPlay);

// Initialize the carousel
updateCarousel();
updateButtonStates();