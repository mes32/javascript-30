const clap = new Audio('sounds/clap.wav')
const hihat = new Audio('sounds/hihat.wav')
const kick = new Audio('sounds/kick.wav')
const openhat = new Audio('sounds/openhat.wav')
const boom = new Audio('sounds/boom.wav')
const ride = new Audio('sounds/ride.wav')
const snare = new Audio('sounds/snare.wav')
const tom = new Audio('sounds/tom.wav')
const tink = new Audio('sounds/tink.wav')

document.addEventListener('keydown', (event) => {
  switch (event.key.toLowerCase()) {
    case 'a':
      document.getElementById('a-clap').classList.add('active')
      clap.currentTime = 0
      clap.play()
      break
    case 's':
      document.getElementById('s-hihat').classList.add('active')
      hihat.currentTime = 0
      hihat.play()
      break
    case 'd':
      document.getElementById('d-kick').classList.add('active')
      kick.currentTime = 0
      kick.play()
      break
    case 'f':
      document.getElementById('f-openhat').classList.add('active')
      openhat.currentTime = 0
      openhat.play()
      break
    case 'g':
      document.getElementById('g-boom').classList.add('active')
      boom.currentTime = 0
      boom.play()
      break
    case 'h':
      document.getElementById('h-ride').classList.add('active')
      ride.currentTime = 0
      ride.play()
      break
    case 'j':
      document.getElementById('j-snare').classList.add('active')
      snare.currentTime = 0
      snare.play()
      break
    case 'k':
      document.getElementById('k-tom').classList.add('active')
      tom.currentTime = 0
      tom.play()
      break
    case 'l':
      document.getElementById('l-tink').classList.add('active')
      tink.currentTime = 0
      tink.play()
      break
    default:
      break
  }
})

document.addEventListener('keyup', (event) => {
  switch (event.key.toLowerCase()) {
    case 'a':
      document.getElementById('a-clap').classList.remove('active')
      break
    case 's':
      document.getElementById('s-hihat').classList.remove('active')
      break
    case 'd':
      document.getElementById('d-kick').classList.remove('active')
      break
    case 'f':
      document.getElementById('f-openhat').classList.remove('active')
      break
    case 'g':
      document.getElementById('g-boom').classList.remove('active')
      break
    case 'h':
      document.getElementById('h-ride').classList.remove('active')
      break
    case 'j':
      document.getElementById('j-snare').classList.remove('active')
      break
    case 'k':
      document.getElementById('k-tom').classList.remove('active')
      break
    case 'l':
      document.getElementById('l-tink').classList.remove('active')
      break
    default:
      break
  }
})
