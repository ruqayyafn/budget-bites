document.addEventListener("DOMContentLoaded", () => {
    // Grab all necessary elements for slideshow functionality
    const slides = document.querySelectorAll(".slideshow-img"); // All slideshow images
    const prevBtn = document.querySelector(".slide-btn.prev");  // Previous button
    const nextBtn = document.querySelector(".slide-btn.next");  // Next button
    const dotsContainer = document.querySelector(".dots-container"); // Container for navigation dots
    const slideshowContainer = document.querySelector(".slideshow-container"); // Entire slideshow wrapper
  
    let currentSlide = 0;       // Keeps track of the current slide index
    let intervalId;             // Stores interval ID for auto-sliding
    const slideInterval = 3000; // Time between slides (3 seconds)
  
    // --- CREATE DOTS dynamically based on number of slides ---
    slides.forEach((_, index) => {
      const dot = document.createElement("span"); // Create a dot for each slide
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active"); // First dot is active by default

      // When a dot is clicked: stop slideshow, go to that slide, restart slideshow
      dot.addEventListener("click", () => {
        stopSlideshow();
        goToSlide(index);
        startSlideshow();
      });

      dotsContainer.appendChild(dot); // Add the dot to the container
    });
  
    const dots = document.querySelectorAll(".dot"); // Grab all created dots
  
    // --- CORE FUNCTIONS ---
    function showSlide(index) {
      // Remove active state from all slides and dots
      slides.forEach(slide => slide.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));
  
      // Show the current slide and activate its corresponding dot
      slides[index].classList.add("active");
      dots[index].classList.add("active");
    }
  
    function nextSlide() {
      // Move forward (wrap around if at end)
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      // Move backward (wrap around if at start)
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    function goToSlide(index) {
      // Jump directly to a specific slide
      currentSlide = index;
      showSlide(currentSlide);
    }
  
    function startSlideshow() {
      // Start auto-sliding if not already running
      if (!intervalId) {
        intervalId = setInterval(nextSlide, slideInterval);
      }
    }
  
    function stopSlideshow() {
      // Stop the slideshow (clear the interval)
      clearInterval(intervalId);
      intervalId = null;
    }
  
    // --- BUTTON EVENTS ---
    nextBtn.addEventListener("click", () => {
      stopSlideshow(); // Pause auto-slide so user has control
      nextSlide();     // Show the next slide
      startSlideshow(); // Restart auto-slide
    });
  
    prevBtn.addEventListener("click", () => {
      stopSlideshow();
      prevSlide();
      startSlideshow();
    });
  
    // --- PAUSE ON HOVER ---
    slideshowContainer.addEventListener("mouseenter", stopSlideshow); // Pause when mouse is over slideshow
    slideshowContainer.addEventListener("mouseleave", startSlideshow); // Resume when mouse leaves
  
    // --- INIT ---
    showSlide(currentSlide); // Show the first slide on load
    startSlideshow();        // Start the auto-slideshow immediately
});
