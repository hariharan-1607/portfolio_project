// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    document.getElementById("contact-form").reset();  // Reset form after submission
});

// Add animation effect for scrolling
window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 150) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
});
