const cssRoot = document.querySelector(':root');

const spacingInput = document.getElementById('spacing');
const blurInput = document.getElementById('blur');
const baseColorInput = document.getElementById('base-color');

spacingInput.addEventListener('change', updateSpacing);
blurInput.addEventListener('change', updateBlur);
baseColorInput.addEventListener('change', updateBaseColor);

function updateSpacing(event) {
  cssRoot.style.setProperty('--spacing', `${event.target.value}px`);
}

function updateBlur(event) {
  cssRoot.style.setProperty('--blur', `${event.target.value}px`);
}

function updateBaseColor(event) {
  cssRoot.style.setProperty('--base', event.target.value);
}
