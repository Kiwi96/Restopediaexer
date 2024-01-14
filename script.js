let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Inicia el carousel
showSlide(currentSlide);
