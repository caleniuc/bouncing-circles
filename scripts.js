function getRandom(bottomLimit, upperLimit) {
    return Math.floor(Math.random() * upperLimit) + bottomLimit;
}

function getRandomRGB() {
  const r = getRandom(0, 256);
  const g = getRandom(0, 256);
  const b = getRandom(0, 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function drawCircle() {
    const c = document.getElementById("my-canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    const rndX = getRandom(1, 500);
    const rndY = getRandom(1, 350);
    const rndSize = getRandom(10, 30);
    ctx.arc(rndX, rndY, rndSize, 0, 2 * Math.PI);
    ctx.fillStyle = getRandomRGB();
    ctx.fill();
}

const spawnBtn = document.getElementById('spawn-btn');
spawnBtn.addEventListener('click', drawCircle);