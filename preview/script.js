// Sticky Navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.background = 'rgba(15, 28, 48, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission (Demo)
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        alert("Thank you! Your message has been sent successfully.");
        this.reset();
        btn.textContent = originalText;
        btn.style.opacity = '1';
    }, 1500);
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Optional: Stop observing once shown
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Add animation classes to elements
const animateElements = document.querySelectorAll('.section-title, .about-wrapper, .skill-card, .project-card, .contact-wrapper');
animateElements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});
