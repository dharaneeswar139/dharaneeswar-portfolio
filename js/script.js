// ===============================
// MOBILE NAVIGATION
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close menu after clicking a link

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(9, 9, 11, 0.95)";

    } else {

        navbar.style.background = "rgba(9, 9, 11, 0.85)";

    }

});


// ===============================
// REVEAL ANIMATION
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});