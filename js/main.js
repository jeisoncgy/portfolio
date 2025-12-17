/* ==========================================
   YEISON MORENO - MAIN JS 2025
   Cursor, Mobile Nav, Interactions
   ========================================== */

// ==========================================
// CUSTOM CURSOR
// ==========================================
class Cursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.follower = document.getElementById('cursor-follower');
        this.pos = { x: 0, y: 0 };
        this.mouse = { x: 0, y: 0 };
        this.speed = 0.15;
        this.isTouch = 'ontouchstart' in window;

        if (!this.isTouch && this.cursor && this.follower) {
            this.init();
        }
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        // Hover states
        const hoverTargets = document.querySelectorAll('a, button, .btn, .project-card, .cert-card, .skill-item, .contact-link');
        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => this.onHover());
            target.addEventListener('mouseleave', () => this.onLeave());
        });

        this.render();
    }

    onHover() {
        this.follower.classList.add('active');
        gsap.to(this.cursor, { scale: 0.5, duration: 0.3 });
    }

    onLeave() {
        this.follower.classList.remove('active');
        gsap.to(this.cursor, { scale: 1, duration: 0.3 });
    }

    render() {
        this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
        this.pos.y += (this.mouse.y - this.pos.y) * this.speed;

        this.cursor.style.transform = `translate3d(${this.mouse.x - 4}px, ${this.mouse.y - 4}px, 0)`;
        this.follower.style.transform = `translate3d(${this.pos.x - 20}px, ${this.pos.y - 20}px, 0)`;

        requestAnimationFrame(() => this.render());
    }
}

// ==========================================
// MOBILE NAVIGATION
// ==========================================
class MobileNav {
    constructor() {
        this.toggle = document.getElementById('nav-toggle');
        this.menu = document.getElementById('mobile-menu');
        this.links = document.querySelectorAll('.mobile-link, .mobile-linkedin');
        this.isOpen = false;

        if (this.toggle && this.menu) {
            this.init();
        }
    }

    init() {
        this.toggle.addEventListener('click', () => this.toggleMenu());
        this.links.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }

    toggleMenu() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.isOpen = true;
        this.menu.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Animate toggle
        const spans = this.toggle.querySelectorAll('span');
        gsap.to(spans[0], { rotation: 45, y: 8, duration: 0.3 });
        gsap.to(spans[1], { opacity: 0, duration: 0.3 });
        gsap.to(spans[2], { rotation: -45, y: -8, duration: 0.3 });

        // Animate links
        gsap.from(this.links, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.3,
            ease: 'power3.out'
        });
    }

    close() {
        this.isOpen = false;
        this.menu.classList.remove('active');
        document.body.style.overflow = '';

        // Reset toggle
        const spans = this.toggle.querySelectorAll('span');
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(spans[1], { opacity: 1, duration: 0.3 });
        gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
    }
}

// ==========================================
// SCROLL PROGRESS
// ==========================================
class ScrollProgress {
    constructor() {
        this.create();
    }

    create() {
        const progress = document.createElement('div');
        progress.id = 'scroll-progress';
        progress.innerHTML = '<div class="progress-bar"></div>';
        document.body.appendChild(progress);

        const style = document.createElement('style');
        style.textContent = `
            #scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 3px;
                z-index: 10001;
                pointer-events: none;
            }
            #scroll-progress .progress-bar {
                height: 100%;
                width: 0%;
                background: linear-gradient(90deg, #6366f1, #22d3ee);
                transition: width 0.1s linear;
            }
        `;
        document.head.appendChild(style);

        this.bar = progress.querySelector('.progress-bar');
        this.update();
    }

    update() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            this.bar.style.width = `${progress}%`;
        });
    }
}

// ==========================================
// ACTIVE SECTION HIGHLIGHT
// ==========================================
class ActiveSection {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.update());
    }

    update() {
        const scrollPos = window.scrollY + 200;

        this.sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ==========================================
// HOVER SOUND (optional - disabled by default)
// ==========================================
class HoverSound {
    constructor() {
        this.enabled = false; // Set to true to enable
        if (this.enabled) {
            this.init();
        }
    }

    init() {
        const buttons = document.querySelectorAll('.btn, .nav-link');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => this.play());
        });
    }

    play() {
        const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...');
        audio.volume = 0.1;
        audio.play().catch(() => {});
    }
}

// ==========================================
// LAZY LOAD IMAGES
// ==========================================
class LazyLoad {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        if (this.images.length && 'IntersectionObserver' in window) {
            this.init();
        }
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });

        this.images.forEach(img => observer.observe(img));
    }
}

// ==========================================
// CONSOLE BRANDING
// ==========================================
function consoleBranding() {
    console.log(`
%c
╔═══════════════════════════════════════════════════╗
║                                                   ║
║   🚀 YEISON MORENO - CODE + FINANCE 🚀            ║
║                                                   ║
║   Senior Financial Analyst                        ║
║   7+ Years of Experience                          ║
║   Python | SQL | Databricks | Power BI            ║
║                                                   ║
║   Portfolio 2025 - Built with GSAP & Lenis        ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
    `, 'color: #6366f1; font-weight: bold; font-size: 12px;');

    console.log('%c LinkedIn: linkedin.com/in/yeison-moreno-rivera-375833b1', 'color: #0077b5; font-weight: bold;');
}

// ==========================================
// INITIALIZE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    new Cursor();
    new MobileNav();
    new ScrollProgress();
    new ActiveSection();
    new LazyLoad();
    consoleBranding();
});

// ==========================================
// PERFORMANCE UTILS
// ==========================================
const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

const debounce = (func, wait) => {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    };
};
