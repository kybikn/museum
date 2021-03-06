const video = document.querySelector(".viewer");
const playBtn = document.querySelector(".play");
const button = document.querySelector(".video__button");
const sound = document.querySelector(".volume-icon");
const controlSound = document.querySelector(".volume");
const controlPlay = document.querySelector(".progress");
const fullscreen = document.querySelector(".square-icon");

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
fullscreen.addEventListener("click", openFullscreen);

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

// открытие видео на полный экран
function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}
