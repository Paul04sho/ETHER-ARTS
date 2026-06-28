// ===== MENU MOBILE =====
export function initSidebar() {
    const menuBtn = document.querySelector(".menu-toggle");
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
 
    overlay.addEventListener("click", closeSidebar);
 
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) closeSidebar();
    });
}