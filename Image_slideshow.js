const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Auto-slide functionality
let autoSlide = setInterval(nextSlide, 3000);

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
  clearInterval(autoSlide); // Reset auto-slide
  nextSlide();
  autoSlide = setInterval(nextSlide, 3000);
});

prevBtn.addEventListener('click', () => {
  clearInterval(autoSlide); // Reset auto-slide
  prevSlide();
  autoSlide = setInterval(nextSlide, 3000);
});

// Event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlide); // Reset auto-slide
    currentIndex = index;
    showSlide(currentIndex);
    autoSlide = setInterval(nextSlide, 3000);
  });
});
