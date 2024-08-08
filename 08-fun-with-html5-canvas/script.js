const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const maxLineWidth = 60;
const minLineWidth = 20;
let lineWidthIncreasing = true;
let lineWidth = 25;

let hue = 0;

function draw(e) {
  if (isDrawing) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;

    if (lineWidth >= maxLineWidth) {
      lineWidthIncreasing = false;
    } else if (lineWidth <= minLineWidth) {
      lineWidthIncreasing = true;
    }

    if (lineWidthIncreasing) {
      lineWidth++;
    } else {
      lineWidth--;
    }

    hue++;
  }
}

function startDrawing(e) {
  lastX = e.offsetX;
  lastY = e.offsetY;
  isDrawing = true;
}

function stopDrawing() {
  isDrawing = false;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);
