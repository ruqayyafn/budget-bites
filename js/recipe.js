document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slideshow-img");
    const prevBtn = document.querySelector(".slide-btn.prev");
    const nextBtn = document.querySelector(".slide-btn.next");
    const dotsContainer = document.querySelector(".dots-container");
    const slideshowContainer = document.querySelector(".slideshow-container");
  
    let currentSlide = 0;
    let intervalId;
    const slideInterval = 3000; // 5 seconds
  
    // CREATE DOTS dynamically
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        stopSlideshow();
        goToSlide(index);
        startSlideshow();
      });
      dotsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll(".dot");
  
    // CORE FUNCTIONS
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      dots.forEach(dot => dot.classList.remove("active"));
  
      slides[index].classList.add("active");
      dots[index].classList.add("active");
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    function goToSlide(index) {
      currentSlide = index;
      showSlide(currentSlide);
    }
  
    function startSlideshow() {
      if (!intervalId) {
        intervalId = setInterval(nextSlide, slideInterval);
      }
    }
  
    function stopSlideshow() {
      clearInterval(intervalId);
      intervalId = null;
    }
  
    // BUTTON EVENTS
    nextBtn.addEventListener("click", () => {
      stopSlideshow();
      nextSlide();
      startSlideshow();
    });
  
    prevBtn.addEventListener("click", () => {
      stopSlideshow();
      prevSlide();
      startSlideshow();
    });
  
    // PAUSE ON HOVER
    slideshowContainer.addEventListener("mouseenter", stopSlideshow);
    slideshowContainer.addEventListener("mouseleave", startSlideshow);
  
    // INIT
    showSlide(currentSlide);
    startSlideshow();
  });