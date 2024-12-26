document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0;

    function showNextImage() {
        // Hide the current image
        images[currentIndex].classList.remove('active');
        // Move to the next image
        currentIndex = (currentIndex + 1) % images.length;
        // Show the next image
        images[currentIndex].classList.add('active');
    }

    // Set an interval to change the image every 3 seconds
    setInterval(showNextImage, 3000);

    // Initialize the first image as active
    images[currentIndex].classList.add('active');
});
const sliderLogos = document.querySelector('.slider-logos');
const logos = sliderLogos.innerHTML;





document.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        const elements = document.querySelectorAll(
            ".banners-logo, .banners-content, .college-subtitle, .college-name, .affiliation-text, .vsics-title, .vsics-subtitle"
        );
        
        elements.forEach((element) => {
            element.classList.remove("animated"); // Remove animation class
            void element.offsetWidth; // Trigger reflow
            element.classList.add("animated"); // Reapply animation class
        });
    }
});


