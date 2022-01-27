const divMenu = document.getElementById("divMenu");
const menuBtn = document.getElementById("menuBtn");
const imgPiano = document.getElementById("piano");
const imgBateria = document.getElementById("bateria");


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

function imgDrumsHover() {
  imgBateria.src = "../Image/bateria-hover.svg";
}

function imgDrumsDefault() {
  imgBateria.src = "../Image/bateria-blanco-negro.png";
}