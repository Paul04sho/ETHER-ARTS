//  ===== TEAM SLIDER =====
const slider = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".card-item");
const prevButton = document.querySelector(".arrow.left");
const nextButton = document.querySelector(".arrow.right");

// Slider config 
const config = {
    cardsToShow: 3,
    gap: 40,
    currentSlide: 0
};

function getMaxIndex() {
    return slides.length - config.cardsToShow;
}

// Calculates and applies the CSS transformation to the slider.
function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    const moveAmount = (slideWidth + config.gap) * config.currentSlide;
    slider.style.transform = `translateX(-${moveAmount}px)`;
}

// Show next slides
function slideNext() {
    if (config.currentSlide < getMaxIndex()) {
        config.currentSlide++;
    } else {
        config.currentSlide = 0;
    }
    updateSlider();
}

// Show previous styles
function slidePrev() {
    if (config.currentSlide > 0) {
        config.currentSlide--;
    } else {
        config.currentSlide = getMaxIndex();
    }
    updateSlider();
}

// Event listeners
nextButton.addEventListener("click", slideNext);
prevButton.addEventListener("click", slidePrev);

// Resize window
window.addEventListener("resize", updateSlider);

//Init slider
updateSlider();