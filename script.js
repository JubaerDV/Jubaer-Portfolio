const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent = "Thank you! Your message has been received.";

    contactForm.reset();
});

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
};

const updateActiveNav = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            navItems.forEach((item) => {
                item.classList.remove("active");
            });

            if (navLink) {
                navLink.classList.add("active");
            }
        }
    });
};

const toggleBackToTop = () => {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
};

window.addEventListener("scroll", () => {
    revealOnScroll();
    updateActiveNav();
    toggleBackToTop();
});

window.addEventListener("load", () => {
    revealOnScroll();
    updateActiveNav();
    toggleBackToTop();
});