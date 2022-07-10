const pictureInnerContainer = document.querySelector(".gallery__pictures");

let massivGalery = [
  `assets/img/galery1.jpg`,
  `assets/img/galery2.jpg`,
  `assets/img/galery3.jpg`,
  `assets/img/galery4.jpg`,
  `assets/img/galery5.jpg`,
  `assets/img/galery6.jpg`,
  `assets/img/galery7.jpg`,
  `assets/img/galery8.jpg`,
  `assets/img/galery9.jpg`,
  `assets/img/galery10.jpg`,
  `assets/img/galery11.jpg`,
  `assets/img/galery12.jpg`,
  `assets/img/galery13.jpg`,
  `assets/img/galery14.jpg`,
  `assets/img/galery15.jpg`,
];

function randomGalery() {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(massivGalery);

  for (let i = 0; i < 15; i++) {
    const img = document.createElement("img");
    img.src = massivGalery[i];
    img.alt = `galery${i + 1}`;
    pictureInnerContainer.append(img);
  }
}
randomGalery();
