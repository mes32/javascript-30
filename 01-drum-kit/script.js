
document.addEventListener('keydown', (event) => {
  switch (event.key.toLowerCase()) {
    case 'a':
      document.getElementById('a-clap').classList.add('active')
      break
    case 's':
      document.getElementById('s-hihat').classList.add('active')
      break
    case 'd':
      document.getElementById('d-kick').classList.add('active')
      break
    case 'f':
      document.getElementById('f-openhat').classList.add('active')
      break
    case 'g':
      document.getElementById('g-boom').classList.add('active')
      break
    case 'h':
      document.getElementById('h-ride').classList.add('active')
      break
    case 'j':
      document.getElementById('j-spare').classList.add('active')
      break
    case 'k':
      document.getElementById('k-tom').classList.add('active')
      break
    case 'l':
      document.getElementById('l-link').classList.add('active')
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
      document.getElementById('j-spare').classList.remove('active')
      break
    case 'k':
      document.getElementById('k-tom').classList.remove('active')
      break
    case 'l':
      document.getElementById('l-link').classList.remove('active')
      break
    default:
      break
  }
})