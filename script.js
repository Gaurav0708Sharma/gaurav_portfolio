// AOS Animation Init
AOS.init({
  duration: 1000,
  once: true
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Typing Effect
const textArray = [
  "Aspiring Web Developer",
  "Frontend Developer",
  "BCA Student",
  "Future Full Stack Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function typeEffect() {
  const currentText = textArray[textIndex];

  if (isDeleting) {
    typedText.textContent = currentText.substring(0, charIndex--);
  } else {
    typedText.textContent = currentText.substring(0, charIndex++);
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
    speed = 1200;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// Active Nav Link on Scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Contact Form Submit
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been submitted successfully.");
  contactForm.reset();
});

// Close Mobile Menu on Link Click
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});