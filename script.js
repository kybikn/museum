// Welcome slider

const btnPrev = document.querySelector(".slider-arrow-left");
const btnNext = document.querySelector(".slider-arrow-right");

const slides = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".slider-square");

const currentPage = document.querySelector(".page-number.first");
const totalPages = document.querySelector(".page-number.second");
totalPages.textContent = `0${slides.length}`;

let index = 0;
console.log(dots);

function activeSlide(n) {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
}

function activeDot(n) {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
}

function currentSlide(n) {
  activeSlide(n);
  activeDot(n);
  currentPage.innerText = "0" + (index + 1);
}

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
    currentSlide(index);
  } else {
    index++;
    currentSlide(index);
  }
}

function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
    currentSlide(index);
  } else {
    index--;
    currentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    currentSlide(index);
  });
});

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);

setInterval(nextSlide, 4000);

// Video
const video = document.querySelector(".viewer");
const playBtn = document.querySelector(".play");
const button = document.querySelector(".video__button");
const sound = document.querySelector(".volume-icon");
const controlSound = document.querySelector(".volume");
const controlPlay = document.querySelector(".progress");

playBtn.addEventListener("click", togglePlay);
button.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
sound.addEventListener("click", toggleSound);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("volumechange", updateAudioButton);
video.addEventListener("timeupdate", updatePlayProgress);
controlSound.addEventListener("change", updateVolume);
controlPlay.addEventListener("change", updatePlay);

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  if (video.paused) {
    playBtn.classList.remove("pause");
    button.style.display = "block";
  } else {
    playBtn.classList.add("pause");
    button.style.display = "none";
  }
}

function updateAudioButton() {
  if (video.muted || video.volume === 0) {
    sound.classList.add("mute");
  } else {
    sound.classList.remove("mute");
  }
}

function toggleSound() {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
}

function updateVolume() {
  video.volume = controlSound.value / 100;
  controlSound.style.background = `linear-gradient(to right, #710707 0%, #710707 ${controlSound.value}%, #c4c4c4 ${controlSound.value}%, #c4c4c4 100%)`;
}

function updatePlayProgress() {
  let progressPercent = (video.currentTime / video.duration) * 100;
  // изменение золотой полоски
  controlPlay.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progressPercent}%, #c4c4c4 ${progressPercent}%, #c4c4c4 100%)`;
  // изменение положения кругляшка
  controlPlay.value = progressPercent;
}

function updatePlay() {
  // изменение текущего времени проигрывания в зависимости от положения точки на полоске input
  video.currentTime = (controlPlay.value / 100) * video.duration;
}

// ----------------------modal------------------------

const modal = document.querySelectorAll(".modal-block");
const cardsAll = document.querySelectorAll(".card");
cardsAll.forEach((element) => element.addEventListener("click", toggleModal));

function toggleModal(event) {
  event.preventDefault();
  if (
    event.target.classList.contains("close") ||
    event.target.classList.contains("close-x") ||
    event.target.classList.contains("close-all")
  ) {
    let card = event.currentTarget.dataset.modal;
    let modal = document.querySelector(card);
    modal.classList.remove("active-modal");
    body.classList.remove("active");
  } else {
    let card = event.currentTarget.dataset.modal;
    let modal = document.querySelector(card);
    modal.classList.add("active-modal");
    body.classList.add("active");
  }
}
