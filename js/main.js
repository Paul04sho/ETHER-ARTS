// ===== HAMBURGER MENU =====
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


menuBtn.innerHTML = menuBtn.classList.contains("active")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");
});



//  ===== TEAM SLIDER =====
const slider = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".card-item");
const prevButton = document.querySelector(".arrow.left");
const nextButton = document.querySelector(".arrow.right");
const mediaQuery = window.matchMedia('(max-width: 767px)');

// Slider config 
const config = {
    cardsToShow: 3,
    gap: 40,
    currentSlide: 0,
    breakpoints : {
        768 : {
            cardsToShow: 1,
            gap: 10
        }
    }
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

function handleMobileSlider(e) {
    if (e.matches) {
      slider.classList.add('mobile-single-card');
    } else {
      slider.classList.remove('mobile-single-card');
    }
    
  }
  
  mediaQuery.addListener(handleMobileSlider);
  handleMobileSlider(mediaQuery); // Initial check

  function currentSlideCorrection() {
    if (config.currentSlide > getMaxIndex()) {
        config.currentSlide = getMaxIndex();
    }
  }

// Event listeners
nextButton.addEventListener("click", slideNext);
prevButton.addEventListener("click", slidePrev);

// Resize window
window.addEventListener("resize", updateSlider);

//Init slider
updateSlider();
