// ===== HAMBURGER MENU =====
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".sidebar-overlay");

function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    
    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");

    document.body.style.overflow = "";
}

menuBtn.addEventListener("click", () => {
    sidebar.classList.contains("active") ? closeSidebar() : openSidebar();
});

overlay.addEventListener("click", closeSidebar)





//  ===== TEAM SLIDER =====
const slider = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".card-item");
const prevButton = document.querySelector(".arrow.left");
const nextButton = document.querySelector(".arrow.right");
const mobileQuery = window.matchMedia('(max-width: 768px)');
const tabletQuery = window.matchMedia('(max-width: 1024px)')

// Slider config 
const config = {
    cardsToShow: 3,
    gap: 40,
    currentSlide: 0,
};

function getMaxIndex() {
    return slides.length - config.cardsToShow;
}

// Calculates and applies the CSS transformation to the slider.
function applySliderConfig() {
    slider.classList.remove("single-card-mode");
    slider.classList.remove("two-cards-mode");

    if (mobileQuery.matches) {
        config.cardsToShow = 1;
        config.gap = 10;
        
        slider.classList.add("single-card-mode");

    } else if(tabletQuery.matches) {
        config.cardsToShow = 2;
        config.gap = 40;

        slider.classList.add("two-cards-mode");

    } else {
        config.cardsToShow = 3;
        config.gap = 40;
    }

    currentSlideCorrection();
    updateSlider();
}

function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    const moveAmount = (slideWidth + config.gap) * config.currentSlide;
    slider.style.transform = `translateX(-${moveAmount}px)`;
}

function currentSlideCorrection() {
    if (config.currentSlide > getMaxIndex()) {
        config.currentSlide = getMaxIndex();
    }
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
  
  mobileQuery.addEventListener("change", applySliderConfig);
  tabletQuery.addEventListener("change", applySliderConfig);

// Event listeners
nextButton.addEventListener("click", slideNext);
prevButton.addEventListener("click", slidePrev);

// Resize window
window.addEventListener("resize", updateSlider);

//Init slider
applySliderConfig();
