//Declarar constantes

const divMenu = document.getElementById("divMenu");
const menuBtn = document.getElementById("menuBtn");
const imgBateria = document.getElementById("bateria");
const imgMarimba = document.getElementById("marimba");

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')


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


function imgDrumsHover() {
  imgBateria.src = "../Image/bateria-hover.svg";
}

function imgDrumsDefault() {
  imgBateria.src = "../Image/bateria-blanco-negro.png";
}


function imgMarimbaHover() {
  imgMarimba.src = "../Image/marimba-hover.png";
}

function imgMarimbaDefault() {
  imgMarimba.src = "../Image/marimba-negro-blanco.png";
}

///////////////////////////
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key) )
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

//Teclado
document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)
  
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})
  