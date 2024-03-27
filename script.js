/*------------------ JavaScript  SLIDER  -- HOMEPAGE --------------------------- */ 
// Wait for the DOM content to be fully loaded before executing JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    // Initialize variables
    let currentSlide = 0; // Index of the current slide
    const slides = document.querySelectorAll('.slide'); // Get all elements with the class 'slide'
    const totalSlides = slides.length; // Total number of slides

    // Function to switch to the next slide
    function nextSlide() {
        // Hide the current slide
        slides[currentSlide].style.display = 'none';
        // Calculate the index of the next slide, looping back to the first slide if necessary
        currentSlide = (currentSlide + 1) % totalSlides;
        // Display the next slide
        slides[currentSlide].style.display = 'block';
    }

    // Set an interval to automatically switch to the next slide every 4 seconds
    setInterval(nextSlide, 4000); // Change slide every 4 seconds
});


/* -------------- JavaScript  Button #1 --Read more -> about.html ---------------------- */ 
document.getElementById("read-more-button").addEventListener("click", function(event) {
    // Prevent default behavior of the anchor tag
    event.preventDefault();

    // open a new page using window.location.href
    window.location.href = "about.html"; // This will navigate to the "about.html" page
});

/* ----------------- JavaScript  Button #2 --View Gallery -> gallery.html ------------------ */ 
document.getElementById("view-gallery-button").addEventListener("click", function(event) {
    // Prevent default behavior of the anchor tag
    event.preventDefault();

    // open a new page using window.location.href
    window.location.href = "gallery.html"; // This will navigate to the "gallery.html" page
});
