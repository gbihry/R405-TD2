var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var particles = [] as any;

function initializeParticles() {
    for (var i = 0; i < 100; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var radius = Math.random() * 5 + 2; // Random size between 2 and 7
        var color = getRandomColor();

        var speedX = (Math.random() - 0.5) * 20; // Random horizontal speed
        var speedY = (Math.random() - 0.5) * 20; // Random vertical speed

        particles.push({ x: x, y: y, radius: radius, color: color, speedX: speedX, speedY: speedY });
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];

        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off the edges
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
            particle.speedX = -particle.speedX;
        }

        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
            particle.speedY = -particle.speedY;
        }

        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
    }

    // Repeat the animation
    requestAnimationFrame(animateParticles);
}

// Initialize particles and start the animation
initializeParticles();
animateParticles();