//  ===== SLIDER D'IMAGES =====
export function initSlider() {
    const slider = document.querySelector(".slider-wrapper");
    const slides = document.querySelectorAll(".card-item");
    const prevButton = document.querySelector(".arrow.left");
    const nextButton = document.querySelector(".arrow.right");
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    const tabletQuery = window.matchMedia('(max-width: 1024px)')
    
    // Configuration du slider
    const config = {
        cardsToShow: 3,
        gap: 40,
        currentSlide: 0,
    };
    
    function getMaxIndex() {
        return slides.length - config.cardsToShow;
    }
    
    // Fonction pour appliquer les styles CSS au slider
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
    
    // Affiche la prochaine slide
    function slideNext() {
        if (config.currentSlide < getMaxIndex()) {
            config.currentSlide++;
        } else {
            config.currentSlide = 0;
        }
        updateSlider();
    }
    
    // Affiche la slide précédente
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
    
    // Ecouteurs d'évènements
    nextButton.addEventListener("click", slideNext);
    prevButton.addEventListener("click", slidePrev);
    
    // Redimensionne la fenêtre
    window.addEventListener("resize", updateSlider);
    
    // Initialise le slider 
    applySliderConfig();
}