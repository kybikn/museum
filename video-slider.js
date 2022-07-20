//  Индекс слайда по умолчанию
var slideIndex = 1;
showSlides(slideIndex);

// следующий слайд
function plusSlide() {
  showSlides((slideIndex += 1));
}

// предыдущий слайд
function minusSlide() {
  showSlides((slideIndex -= 1));
}

// текущий слайд
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// показ слайдера
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("video__slider_item");
  var dots = document.getElementsByClassName("slider_circle");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < 3; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
