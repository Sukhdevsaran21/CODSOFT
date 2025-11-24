// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
});

// Dark Mode Toggle
const toggleDark = document.getElementById("toggleDark");
toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Scroll Animations
const elements = document.querySelectorAll(".box, .price-card, .test, .glass, .hero-text");
window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
