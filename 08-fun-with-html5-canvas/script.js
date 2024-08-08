const canvas = document.querySelector("#draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#333333";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (isDrawing) {

    // ctx.lineWidth = 15;
    // ctx.lineCap = lineCap;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;
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
