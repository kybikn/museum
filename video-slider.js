function initSlider() {
  var slider = tns({
    container: ".video__slider",
    prevButton: ".prev",
    nextButton: ".next",
    items: 3,
    slideBy: 1,
    nav: false,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    autoplay: true,
    autoplayButton: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

    // navContainer: ".video__slider_circles",
    // navPosition: "bottom",
    // controlsContainer: ".video__slider_box",

    responsive: {
      640: {
        items: 2,
      },

      768: {
        items: 3,
      },
    },
  });

  function processDotClick(e) {
    let slide = e.target.dataset.circle;
    slider.goTo(slide);
  }

  const dots = document.querySelectorAll(".slider_circle");
  dots.forEach((dot) => dot.addEventListener("click", processDotClick));

  //   autoplayButton.style.overflow = "hidden";
  //   document.querySelector(".goto-button").onclick = function () {
  //     slider.goTo(3);
  //   };
}

window.addEventListener("load", initSlider);
