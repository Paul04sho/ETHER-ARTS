// ===== MENU MOBILE =====
export function initSidebar() {
    const menuBtn = document.querySelector(".menu-toggle");
    const icon    = menuBtn.querySelector("i");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
 
    function openSidebar() {
        sidebar.classList.add("active");
        overlay.classList.add("active");
        icon.classList.replace("fa-bars", "fa-xmark");
        document.body.style.overflow = "hidden";
    }
 
    menuBtn.addEventListener("click", () => {
        sidebar.classList.contains("active") ? closeSidebar() : openSidebar();
    });
 
    overlay.addEventListener("click", closeSidebar);
 
    sidebarLinks.forEach(link => link.addEventListener("click", closeSidebar));
 
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) closeSidebar();
    });
}