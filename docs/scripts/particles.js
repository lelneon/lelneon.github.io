const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

const mouse = {
    x: null,
    y: null,
    radius: 100,
};

// Mouse move tracking
window.addEventListener("mousemove", function(event) {

    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
});

// Click to spawn particles
window.addEventListener("click", function(event) {
    for (let i = 0; i < 10; i++) {
        addParticle(mouse.x, mouse.y);
    }
});

const buttons = document.querySelectorAll("button, a"); // all buttons/links
buttons.forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.stopPropagation(); // prevent canvas click from firing
    });
});

// Canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", () => {
    resizeCanvas();
});

// Particles
let particles = [];
const MAX_PARTICLES = 200;

class Particle {
    constructor(x = null, y = null) {
        this.x = x !== null ? x : Math.random() * canvas.width;
        this.y = y !== null ? y : Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // react to mouse
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < mouse.radius) {
            let angle = Math.atan2(dy, dx);
            let force = (mouse.radius - dist) / mouse.radius;
            this.x -= Math.cos(angle) * force * 3;
            this.y -= Math.sin(angle) * force * 3;
        }
    }

    draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function addParticle(x, y) {
    if (particles.length >= MAX_PARTICLES) particles.shift();
    particles.push(new Particle(x, y));
}

// Initialize
function init() {
    particles = [];
    for (let i = 0; i < 100; i++) {
        addParticle(Math.random() * canvas.width, Math.random() * canvas.height);
    }
}
init();

// Animate
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}
animate();