const divMenu = document.getElementById("divMenu");
const menuBtn = document.getElementById("menuBtn");
const imgPiano = document.getElementById("piano");
const imgMarimba = document.getElementById("marimba");
const aPrueba = document.getElementById("aPrueba");
let key;
const splashDrum = document.getElementsByClassName("yellowDrums");

console.log(splashDrum);

// Open Menu

function functionMenuBtn() {
  if (divMenu.style.display === "" || divMenu.style.display === "none") {
    divMenu.style.display = "flex";
    menuBtn.style.color = "#D5E763";
  } else {
    divMenu.style.display = "none";
    menuBtn.style.color = "#fff";
  }
}

// Hover Menu

function imgPianoHover() {
  imgPiano.src = "../Image/greenPiano.png";
}

function imgPianoDefault() {
  imgPiano.src = "../Image/piano.png";
}

function imgMarimbaHover() {
  imgMarimba.src = "../Image/greenMarimba.png";
}

function imgMarimbaDefault() {
  imgMarimba.src = "../Image/marimba.png";
}

// audio prueba

function play() {
  aPrueba.play();
}

window.addEventListener("keydown", function (event) {
  playOnKey(event);
});

function playOnKey(event) {
  key = event.code;

  if (key === "KeyD") {
    aPrueba.play();
  }
}
