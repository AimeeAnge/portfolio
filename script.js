// script.js

// Mobile hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

// Active navigation link highlighting on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll behavior for anchor links
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(link.getAttribute('href'));
    });
});

// Fade-in animations for elements as they come into view
const fadeInElements = document.querySelectorAll('.fade-in');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(el => {
    observer.observe(el);
});
