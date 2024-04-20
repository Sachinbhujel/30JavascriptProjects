let slideIndex = 0;
const slides = document.querySelectorAll('.box img');

function showSlides() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[slideIndex].style.display = 'block';
}

function prevBtn() {
  slideIndex--;
  if(slideIndex < 0){
    slideIndex = slides.length - 1;
  }
  showSlides()
}

function nextBtn() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
}

showSlides()
