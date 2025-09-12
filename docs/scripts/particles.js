document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("bg");
    const ctx = canvas.getContext("2d");

    const mouse = {
        x: null,
        y: null,
        radius: 100,
    };

    window.colors = {
        white: "#fff",
        blue: "#007AAF",
        red: "#FF3B30",
        yellow: "#FFCC00",
        green: "#34C759",
        purple: "#AF52DE",
        pink: "#FF2D55",
        cyan: "#5AC8FA",
        orange: "#FF9500",
        gray: "#8E8E93",
        indigo: "#5856D6",
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

    const controls = document.querySelectorAll("button, a, input[type='range']"); // all buttons/links
    controls.forEach(el => {
        el.addEventListener("click", e => e.stopPropagation());

        el.addEventListener("input", e => e.stopPropagation())
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

    class Particle {
        constructor(x = null, y = null) {
            this.x = x !== null ? x : Math.random() * canvas.width;
            this.y = y !== null ? y : Math.random() * canvas.height;
            this.baseSize = Math.random() * 3 + 1;
            this.speedX = Math.random() - 0.5;
            this.speedY = Math.random() - 0.5
        }

        update() {
            this.x += this.speedX * (finalSettings.speed / 100)
            this.y += this.speedY * (finalSettings.speed / 100)

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
            const size = this.baseSize * (finalSettings.size / 100);
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function addParticle(x, y) {
        if (particles.length >= finalSettings.maxParticles) particles.shift();
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

        if (particles.length >= finalSettings.maxParticles) {
            particles.length = finalSettings.maxParticles
        }

        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
});