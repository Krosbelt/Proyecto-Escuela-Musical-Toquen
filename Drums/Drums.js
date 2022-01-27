const divMenu = document.getElementById("divMenu");
const menuBtn = document.getElementById("menuBtn");
const imgPiano = document.getElementById("piano");
const imgMarimba = document.getElementById("marimba");
const desktopDrums = document.getElementById("desktopDrums");
const desktopDrumsStyle = window.getComputedStyle(desktopDrums);
const desktopDrumsDiplay = desktopDrumsStyle.getPropertyValue("display");
const bigDrums = document.querySelectorAll(".yellowDrums, .greyDrums");
const smallDrums = document.querySelectorAll(
  ".yellowSmallDrums, .greySmallDrums"
);

const keys = [
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyR",
  "KeyT",
  "KeyY",
];
const ids = [
  "openHH",
  "kick1",
  "snare",
  "kick2",
  "floor",
  "closeHH",
  "tom1",
  "tom2",
  "tom3",
  "ride",
  "crash1",
  "splash",
  "crash2",
];

///////////////////// Open Menu ///////////////////////////

function functionMenuBtn() {
  if (divMenu.style.display === "" || divMenu.style.display === "none") {
    divMenu.style.display = "flex";
    menuBtn.style.color = "#D5E763";
  } else {
    divMenu.style.display = "none";
    menuBtn.style.color = "#fff";
  }
}

/////////////////////// Hover Menu ///////////////////////////////

function imgPianoHover() {
  imgPiano.src = "../Image/piano-hover.png";
}

function imgPianoDefault() {
  imgPiano.src = "../Image/piano-blanco-negro.png";
}

function imgMarimbaHover() {
  imgMarimba.src = "../Image/marimba-hover.png";
}

function imgMarimbaDefault() {
  imgMarimba.src = "../Image/marimba-negro-blanco.png";
}

////////////////////////////// audio prueba /////////////////////////////

bigDrums.forEach((drum) => {
  drum.addEventListener("click", function () {
    play(drum.dataset.btn);
  });
});

smallDrums.forEach((drum) => {
  drum.addEventListener("click", function () {
    play(drum.dataset.btn);
  });
});

function play(id) {
  const audio = document.getElementById(id);
  let drum = "";
  if (desktopDrumsDiplay === "none") {
    smallDrums.forEach((item) => {
      if (item.dataset.btn === id) {
        drum = item;
      }
    });
  } else {
    bigDrums.forEach((item) => {
      if (item.dataset.btn === id) {
        drum = item;
      }
    });
  }

  drum.classList.add("scale");

  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    drum.classList.remove("scale");
  }, 100);
}

window.addEventListener("keydown", function (evento) {
  const codigo = evento.code;
  const index = keys.indexOf(codigo);
  let id = "";
  if (index !== -1) {
    id = ids[index];
    play(id);
  }
});
