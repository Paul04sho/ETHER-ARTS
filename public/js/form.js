//  ===== POPUP DE SUCCES & FORMULAIRE =====
export function initForm() {
    const popupOverlay  = document.querySelector(".success-popup-overlay");
    const popupCloseBtn = document.querySelector(".popup-close-btn");
 
    function openPopup() {
        popupOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }
 
    function closePopup() {
        popupOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }
 
    // Ferme le popup en cliquant sur le fond de la page
    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) closePopup();
    });
 
    // Ferme via le bouton "Fermer"
    popupCloseBtn.addEventListener("click", closePopup);
 
    //  ===== FORMULAIRE NOUS CONTACTER =====
    const form = document.querySelector(".form-container")

    form.addEventListener("submit", (e) => {
        e.preventDefault();
 
        const selectEl = document.getElementById("mailObject");
        const mailObjectText = selectEl.options[selectEl.selectedIndex].text;
 
        emailjs.send("service_e4lc7uv", "template_nip0sb9", {
            name: document.getElementById("userName").value,
            email: document.getElementById("userMail").value,
            mailObject: mailObjectText,
            userMessage: document.getElementById("userMessage").value
        })
        .then(() => {
            openPopup();
            form.reset();
        })
        .catch((error) => {
            console.error("Erreur EmailJS:", error);
            alert("Une erreur est survenue, réessaie.");
        });
    });
}