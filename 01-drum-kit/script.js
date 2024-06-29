const clap = new Audio('sounds/clap.wav');
const hihat = new Audio('sounds/hihat.wav');
const kick = new Audio('sounds/kick.wav');
const openhat = new Audio('sounds/openhat.wav');
const boom = new Audio('sounds/boom.wav');
const ride = new Audio('sounds/ride.wav');
const snare = new Audio('sounds/snare.wav');
const tom = new Audio('sounds/tom.wav');
const tink = new Audio('sounds/tink.wav');

const mapFromEventKey = {
  'a': { elementId: 'clap', audio: clap },
  's': { elementId: 'hihat', audio: hihat },
  'd': { elementId: 'kick', audio: kick },
  'f': { elementId: 'openhat', audio: openhat },
  'g': { elementId: 'boom', audio: boom },
  'h': { elementId: 'ride', audio: ride },
  'j': { elementId: 'snare', audio: snare },
  'k': { elementId: 'tom', audio: tom },
  'l': { elementId: 'tink', audio: tink },
}

document.addEventListener('keydown', (event) => {
  const m = mapFromEventKey[event.key.toLowerCase()];
  document.getElementById(m.elementId).classList.add('active');
  m.audio.currentTime = 0;
  m.audio.play();
})

document.addEventListener('keyup', (event) => {
  const m = mapFromEventKey[event.key.toLowerCase()];
  document.getElementById(m.elementId).classList.remove('active');
})
