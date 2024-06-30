const UPDATE_INTERVAL_MS = 200;

const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const digitalSpan = document.getElementById('digital-span');

function runUpdateLoop() {
  var now = new Date();
  update(now);

  setInterval(() => {
    now = new Date();
    update(now);
  }, UPDATE_INTERVAL_MS);
}

runUpdateLoop();

function update(now) {
  digitalSpan.textContent = `${now.toLocaleTimeString()}`;

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  rotateHandElement(secondHand, 360.0 * seconds / 60);
  rotateHandElement(minuteHand, 360.0 * (60 * minutes + seconds) / 3600);
  rotateHandElement(hourHand, 360.0 * (60 * hours + minutes) / 3600);
}

function rotateHandElement(handElement, degrees) {
  const radians = degrees * Math.PI / 180;
  const x = 100 * Math.sin(radians);
  const y = 100 * (1 - Math.cos(radians));

  // const handElement = document.getElementById(handElementId);
  handElement.style.transform = `translate(${x}px,${y}px)`;
  handElement.style.transform += `rotate(${degrees}deg)`;
}
