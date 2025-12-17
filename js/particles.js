/* ==========================================
   YEISON MORENO - PARTICLE SYSTEM
   Advanced Canvas Particle Animation
   ========================================== */

class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.particleCount = this.getParticleCount();
        this.colors = [
            'rgba(99, 102, 241, 0.5)',   // Primary
            'rgba(34, 211, 238, 0.4)',    // Secondary
            'rgba(139, 92, 246, 0.4)',    // Purple
            'rgba(244, 114, 182, 0.3)'    // Pink
        ];
        this.animationId = null;

        this.init();
    }

    getParticleCount() {
        const width = window.innerWidth;
        if (width < 768) return 30;
        if (width < 1024) return 50;
        return 80;
    }

    init() {
        this.resize();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.particles = [];
            this.particleCount = this.getParticleCount();
            this.createParticles();
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new Particle(this));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        this.particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        this.drawConnections();

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.3;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
}

class Particle {
    constructor(system) {
        this.system = system;
        this.x = Math.random() * system.canvas.width;
        this.y = Math.random() * system.canvas.height;
        this.size = Math.random() * 3 + 1;
        this.baseSize = this.size;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = system.colors[Math.floor(Math.random() * system.colors.length)];
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.02;
        this.orbitRadius = Math.random() * 2;
    }

    update() {
        // Mouse interaction
        if (this.system.mouse.x !== null && this.system.mouse.y !== null) {
            const dx = this.system.mouse.x - this.x;
            const dy = this.system.mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.system.mouse.radius) {
                const force = (this.system.mouse.radius - distance) / this.system.mouse.radius;
                const angle = Math.atan2(dy, dx);
                this.x -= Math.cos(angle) * force * 2;
                this.y -= Math.sin(angle) * force * 2;
                this.size = this.baseSize + force * 3;
            } else {
                this.size = this.baseSize;
            }
        }

        // Orbital movement
        this.angle += this.spin;
        const orbitX = Math.cos(this.angle) * this.orbitRadius;
        const orbitY = Math.sin(this.angle) * this.orbitRadius;

        // Update position
        this.x += this.speedX + orbitX * 0.1;
        this.y += this.speedY + orbitY * 0.1;

        // Wrap around edges
        if (this.x < -50) this.x = this.system.canvas.width + 50;
        if (this.x > this.system.canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = this.system.canvas.height + 50;
        if (this.y > this.system.canvas.height + 50) this.y = -50;
    }

    draw() {
        const ctx = this.system.ctx;

        // Glow effect
        ctx.save();
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace('0.5', '1').replace('0.4', '1').replace('0.3', '1');
        ctx.fill();
    }
}

// ==========================================
// GEOMETRIC SHAPES FLOATING
// ==========================================
class GeometricShapes {
    constructor() {
        this.shapes = [];
        this.init();
    }

    init() {
        // This is handled by CSS animations for better performance
        // Only adding subtle JS enhancements
    }
}

// ==========================================
// INITIALIZE PARTICLE SYSTEM
// ==========================================
let particleSystem;

document.addEventListener('DOMContentLoaded', () => {
    // Delay particle system to not interfere with loader
    setTimeout(() => {
        particleSystem = new ParticleSystem();
    }, 500);
});

// Handle visibility change to pause/resume animation
document.addEventListener('visibilitychange', () => {
    if (document.hidden && particleSystem) {
        cancelAnimationFrame(particleSystem.animationId);
    } else if (particleSystem) {
        particleSystem.animate();
    }
});
