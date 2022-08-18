const shadow = document.querySelector(".shadowModal");
const modal = document.querySelector(".modal__block");
modal.addEventListener("click", toggleModal);
shadow.addEventListener("click", toggleModal);

function toggleModal(event) {
  event.preventDefault();
  if (
    event.target.classList.contains("close") ||
    event.target.classList.contains("close-all") ||
    event.target.classList.contains("shadowModal") ||
    event.target.classList.contains("modal__block")
  ) {
    modal.classList.remove("active");
    // modal.classList.remove("active-modal");
    shadow.classList.remove("active");
  } else {
    modal.classList.toggle("active");
    // modal.classList.toggle("active-modal");
    shadow.classList.toggle("active");
  }
}

// function toggleModal() {
//   shadow.classList.toggle("active");
//   modal.classList.toggle("active");
// }

// function closeModal(event) {
//   if (
//     event.target.classList.contains("close") ||
//     event.target.classList.contains("close-all") ||
//     event.target.classList.contains("shadow")
//   ) {
//     shadow.classList.remove("active");
//     modal.classList.remove("active");
//   }
// }
