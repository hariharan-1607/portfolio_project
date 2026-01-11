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
    // Simple toggle for demo
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg-dark)';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
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
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.section-title, .about-wrapper, .skill-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Section Focus/Blur Observer
const sectionObserverOptions = {
    threshold: 0.3, // Percentage of section visible to trigger focus
    rootMargin: "-10% 0px -10% 0px" // Shrink intersection area for better focus
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('inactive-section');
        } else {
            entry.target.classList.add('inactive-section');
        }
    });
}, sectionObserverOptions);

// Observe all sections (except hero for initial landing experience)
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Click Interaction for Skills and Projects (Touch/Mobile support)
const interactiveCards = document.querySelectorAll('.skill-card, .project-card');

interactiveCards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle active class
        card.classList.toggle('active');

        // Optional: Close other cards when one is opened
        interactiveCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');
            }
        });
    });
});
