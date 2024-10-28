const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function drawHeart(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x - size / 2, y - size / 2, size / 2, 0, Math.PI, true);
    ctx.arc(x + size / 2, y - size / 2, size / 2, 0, Math.PI, true);
    ctx.lineTo(x, y + size);
    ctx.fill();
}

function createHeart() {
    hearts.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        size: Math.random() * 30 + 10,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
        speed: Math.random() * 2 + 1
    });
}

function updateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart, index) => {
        heart.y -= heart.speed;
        drawHeart(heart.x, heart.y, heart.size, heart.color);

        if (heart.y < -20) hearts.splice(index, 1);
    });
}

function animate() {
    updateHearts();
    requestAnimationFrame(animate);
}

setInterval(createHeart, 500);
animate();
