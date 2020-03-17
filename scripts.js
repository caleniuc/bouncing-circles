const canvas = document.getElementById("my-canvas");;
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

function clearCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function getRandomNr(bottomLimit, upperLimit) {
    return Math.floor(Math.random() * upperLimit) + bottomLimit;
}

function getRandomRGB() {
  const r = getRandomNr(0, 256);
  const g = getRandomNr(0, 256);
  const b = getRandomNr(0, 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function Circle() {
    this.x = getRandomNr(1, 500);
    this.y = getRandomNr(1, 300);
    this.velX = getRandomNr(-5, 5);
    this.velY = getRandomNr(-5, 5);
    this.color = getRandomRGB();
    this.radius = getRandomNr(10, 30);
}

Circle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
}

Circle.prototype.update = function() {
    this.x += this.velX;
    this.y += this.velY;

    // check if the circle will collide with left and right walls
    if ((this.x + this.velX + this.radius > canvasWidth) || this.x + this.velX < this.radius) {
        this.velX = -this.velX;
    }

    // check if the circle will collide with top and bottom walls
    if ((this.y + this.velY + this.radius > canvasHeight) || this.y + this.velY < this.radius) {
        this.velY = -this.velY;
    }
}

let circles = [];
let interval;

function spawnCircles() {
    clearCanvas();
    circles = [];
    if (interval) {
        clearInterval(interval);
    }

    const input = document.getElementById('circles-nr');
    const nrOfCircles = input.value;

    let i = 0;
    while(i < nrOfCircles) {
        const circle = new Circle();
        circle.draw();
        circles.push(circle);
        i++;
    }

    interval = setInterval(() => {
        clearCanvas();
        circles.forEach(c => {
            c.update();
            c.draw();
        })
    }, 10);
}

const spawnBtn = document.getElementById('spawn-btn');
spawnBtn.addEventListener('click', spawnCircles);