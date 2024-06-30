function rotateHandElement(handElementId, degrees) {
  const radians = degrees * Math.PI / 180;
  const x = 100 * Math.sin(radians);
  const y = 100 * (1 - Math.cos(radians));

  const handElement = document.getElementById(handElementId);
  handElement.style.transform = `translate(${x}px,${y}px)`;
  handElement.style.transform += `rotate(${degrees}deg)`;
}
