const modal = document.querySelector(".modal__block");
modal.addEventListener("click", toggleModal);

function toggleModal(event) {
  event.preventDefault();
  if (event.target.classList.contains("close")) {
    modal.classList.remove("active-modal");
    body.classList.remove("active");
  } else {
    modal.classList.add("active-modal");
    body.classList.add("active");
  }
}
