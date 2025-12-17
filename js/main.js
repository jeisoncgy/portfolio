/* ==========================================
   YEISON MORENO - MAIN JAVASCRIPT
   Cursor, Navigation, Interactions
   ========================================== */

// ==========================================
// CUSTOM CURSOR
// ==========================================
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.follower = document.getElementById('cursor-follower');
        this.cursorX = 0;
        this.cursorY = 0;
        this.followerX = 0;
        this.followerY = 0;
        this.isTouch = 'ontouchstart' in window;

        if (!this.isTouch) {
            this.init();
        }
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.cursorX = e.clientX;
            this.cursorY = e.clientY;
        });

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .skill-card, .cert-card, .contact-method');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.onHover());
            el.addEventListener('mouseleave', () => this.onLeave());
        });

        // Click effect
        document.addEventListener('mousedown', () => this.onClick());
        document.addEventListener('mouseup', () => this.onRelease());

        this.animate();
    }

    animate() {
        // Smooth follow
        this.followerX += (this.cursorX - this.followerX) * 0.15;
        this.followerY += (this.cursorY - this.followerY) * 0.15;

        this.cursor.style.left = `${this.cursorX}px`;
        this.cursor.style.top = `${this.cursorY}px`;

        this.follower.style.left = `${this.followerX}px`;
        this.follower.style.top = `${this.followerY}px`;

        requestAnimationFrame(() => this.animate());
    }

    onHover() {
        this.follower.classList.add('hover');
        gsap.to(this.cursor, { scale: 1.5, duration: 0.3 });
    }

    onLeave() {
        this.follower.classList.remove('hover');
        gsap.to(this.cursor, { scale: 1, duration: 0.3 });
    }

    onClick() {
        gsap.to(this.cursor, { scale: 0.8, duration: 0.1 });
        gsap.to(this.follower, { scale: 0.8, duration: 0.1 });
    }

    onRelease() {
        gsap.to(this.cursor, { scale: 1, duration: 0.3 });
        gsap.to(this.follower, { scale: 1, duration: 0.3 });
    }
}

// ==========================================
// MOBILE NAVIGATION
// ==========================================
class MobileNav {
    constructor() {
        this.toggle = document.getElementById('nav-toggle');
        this.menu = document.getElementById('mobile-menu');
        this.links = document.querySelectorAll('.mobile-link');
        this.isOpen = false;

        this.init();
    }

    init() {
        this.toggle.addEventListener('click', () => this.toggleMenu());

        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    }

    openMenu() {
        this.menu.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Animate toggle
        gsap.to(this.toggle.querySelectorAll('span')[0], {
            rotation: 45,
            y: 7,
            duration: 0.3
        });
        gsap.to(this.toggle.querySelectorAll('span')[1], {
            opacity: 0,
            duration: 0.3
        });
        gsap.to(this.toggle.querySelectorAll('span')[2], {
            rotation: -45,
            y: -7,
            duration: 0.3
        });

        // Animate links
        gsap.from(this.links, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.2
        });
    }

    closeMenu() {
        this.menu.classList.remove('active');
        document.body.style.overflow = '';
        this.isOpen = false;

        // Reset toggle
        gsap.to(this.toggle.querySelectorAll('span')[0], {
            rotation: 0,
            y: 0,
            duration: 0.3
        });
        gsap.to(this.toggle.querySelectorAll('span')[1], {
            opacity: 1,
            duration: 0.3
        });
        gsap.to(this.toggle.querySelectorAll('span')[2], {
            rotation: 0,
            y: 0,
            duration: 0.3
        });
    }
}

// ==========================================
// FORM HANDLING
// ==========================================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        const btn = this.form.querySelector('.btn-submit');
        const btnText = btn.querySelector('.btn-text');
        const originalText = btnText.textContent;

        // Show loading state
        btnText.textContent = 'Enviando...';
        btn.disabled = true;

        // Form will be submitted to Formspree
        // Add success animation after form submission
        this.form.addEventListener('submit', () => {
            setTimeout(() => {
                btnText.textContent = 'Enviado!';
                gsap.to(btn, {
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    duration: 0.3
                });

                setTimeout(() => {
                    btnText.textContent = originalText;
                    btn.disabled = false;
                    gsap.to(btn, {
                        background: '',
                        duration: 0.3
                    });
                }, 3000);
            }, 1000);
        });
    }
}

// ==========================================
// SCROLL PROGRESS
// ==========================================
class ScrollProgress {
    constructor() {
        this.createProgressBar();
        this.init();
    }

    createProgressBar() {
        const progress = document.createElement('div');
        progress.className = 'scroll-progress';
        progress.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(progress);

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background: transparent;
                z-index: 10001;
            }
            .scroll-progress-bar {
                height: 100%;
                width: 0%;
                background: var(--gradient-primary);
                transition: width 0.1s ease;
            }
        `;
        document.head.appendChild(style);

        this.bar = progress.querySelector('.scroll-progress-bar');
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            this.bar.style.width = `${progress}%`;
        });
    }
}

// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================
class ActiveNavLink {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateActiveLink());
    }

    updateActiveLink() {
        const scrollPosition = window.scrollY + 200;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ==========================================
// LAZY LOADING IMAGES
// ==========================================
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        if ('IntersectionObserver' in window) {
            this.init();
        } else {
            this.loadAll();
        }
    }

    init() {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '50px' });

        this.images.forEach(img => observer.observe(img));
    }

    loadImage(img) {
        img.src = img.dataset.src;
        img.classList.add('loaded');
    }

    loadAll() {
        this.images.forEach(img => this.loadImage(img));
    }
}

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================
class KeyboardNav {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            // ESC to close mobile menu
            if (e.key === 'Escape') {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    }
}

// ==========================================
// EASTER EGG - KONAMI CODE
// ==========================================
class KonamiCode {
    constructor() {
        this.sequence = [];
        this.konamiCode = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'b', 'a'
        ];
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            this.sequence.push(e.key);
            this.sequence = this.sequence.slice(-10);

            if (this.sequence.join(',') === this.konamiCode.join(',')) {
                this.activate();
            }
        });
    }

    activate() {
        // Easter egg animation
        const colors = ['#6366f1', '#22d3ee', '#f472b6', '#8b5cf6'];
        for (let i = 0; i < 100; i++) {
            this.createConfetti(colors[Math.floor(Math.random() * colors.length)]);
        }
    }

    createConfetti(color) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${color};
            left: ${Math.random() * 100}vw;
            top: -10px;
            z-index: 10002;
            pointer-events: none;
            border-radius: 50%;
        `;
        document.body.appendChild(confetti);

        gsap.to(confetti, {
            y: window.innerHeight + 100,
            x: (Math.random() - 0.5) * 200,
            rotation: Math.random() * 720,
            duration: Math.random() * 2 + 1,
            ease: 'power1.in',
            onComplete: () => confetti.remove()
        });
    }
}

// ==========================================
// INITIALIZE ALL
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    new CustomCursor();
    new MobileNav();
    new ContactForm();
    new ScrollProgress();
    new ActiveNavLink();
    new LazyLoader();
    new KeyboardNav();
    new KonamiCode();

    // Prevent context menu on images (optional)
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', e => e.preventDefault());
    });

    console.log(`
    %c
    ╔══════════════════════════════════════════╗
    ║                                          ║
    ║   🚀 YEISON MORENO - CODE + FINANCE 🚀   ║
    ║                                          ║
    ║   Portfolio built with passion           ║
    ║   GSAP + Custom Animations               ║
    ║                                          ║
    ╚══════════════════════════════════════════╝
    `, 'color: #6366f1; font-weight: bold; font-size: 12px;');
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce resize events
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Preload critical resources
window.addEventListener('load', () => {
    // Preload fonts
    if ('fonts' in document) {
        Promise.all([
            document.fonts.load('400 1em "Space Grotesk"'),
            document.fonts.load('700 1em "Space Grotesk"'),
            document.fonts.load('400 1em "JetBrains Mono"')
        ]).then(() => {
            document.body.classList.add('fonts-loaded');
        });
    }
});
