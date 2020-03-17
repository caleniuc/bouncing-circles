function getCtx() {
    const c = document.getElementById("my-canvas");
    return c.getContext("2d");
}

const ctx = getCtx();

function clearCanvas() {
    const c = document.getElementById("my-canvas")
    ctx.clearRect(0, 0, c.width, c.height);
}

function Ball() {
    this.x = getRandom(1, 500);
    this.y = getRandom(1, 300);
    this.velX = getRandom(0, 10);
    this.velY = getRandom(0, 10);
    this.color = getRandomRGB();
    this.radius = getRandom(10, 30);
}

Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
}

function getRandom(bottomLimit, upperLimit) {
    return Math.floor(Math.random() * upperLimit) + bottomLimit;
}

function getRandomRGB() {
  const r = getRandom(0, 256);
  const g = getRandom(0, 256);
  const b = getRandom(0, 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function spawnCircles() {
    clearCanvas();
    const input = document.getElementById('circles-nr');
    const nrOfCircles = input.value;
    let i = 0;
    while(i < nrOfCircles) {
        const ball = new Ball();
        ball.draw();
        i++;
    }
}

const spawnBtn = document.getElementById('spawn-btn');
spawnBtn.addEventListener('click', spawnCircles);