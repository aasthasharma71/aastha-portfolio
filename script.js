
// ==========================================
// 1. MOBILE NAVIGATION MENU
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close mobile menu
if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Close menu after clicking a navigation link
    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


// ==========================================
// 2. DARK / LIGHT THEME TOGGLE
// ==========================================

const themeToggle = document.getElementById("theme-toggle");

// Apply previously saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

if (themeToggle) {

    // Update theme button icon
    themeToggle.textContent =
        document.body.classList.contains("dark-theme") ? "☀️" : "🌙";

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-theme");

        const isDark = document.body.classList.contains("dark-theme");

        // Change button icon
        themeToggle.textContent = isDark ? "☀️" : "🌙";

        // Save selected theme
        localStorage.setItem(
            "portfolio-theme",
            isDark ? "dark" : "light"
        );

    });

}


// ==========================================
// 3. CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {

            contactForm.reportValidity();

            return;

        }

        const name = document.getElementById("contact-name").value.trim();

        const email = document.getElementById("contact-email").value.trim();

        const subject = document.getElementById("contact-subject").value.trim();

        const message = document.getElementById("contact-message").value.trim();


        if (name.length < 2 || subject.length === 0 || message.length < 10) {

            formStatus.textContent =
                "Please enter valid details in all fields.";

            formStatus.style.color = "#dc2626";

            return;

        }


        formStatus.textContent =
            "Thank you, " + name + "! Your form validation was successful.";

        formStatus.style.color = "#15803d";

        contactForm.reset();

    });

}
// ==========================================
// 4. SCROLL ANIMATIONS
// ==========================================

const animatedElements = document.querySelectorAll(
    ".about, .skills, .projects, .contact, .project-card, .skill-card"
);

animatedElements.forEach(element => {
    element.classList.add("fade-in");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

animatedElements.forEach(element => {
    observer.observe(element);
});
// ==========================================
// 5. BACK TO TOP BUTTON
// ==========================================

const backToTopButton = document.getElementById("back-to-top");

// Show button after scrolling down
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }

});

// Scroll to top when clicked
backToTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});