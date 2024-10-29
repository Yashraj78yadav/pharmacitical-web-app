let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dots .dot');

function changeSlide(index = (currentSlide + 1) % slides.length) {
  // Remove the active class from the current slide and dot
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  // Update the currentSlide index
  currentSlide = index;

  // Add the active class to the new current slide and dot
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// Automatic slide change every 3 seconds
setInterval(changeSlide, 3000);

// Add event listeners to each dot for manual slide navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    changeSlide(index);
  });
});
