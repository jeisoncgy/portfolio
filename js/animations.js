// ================================
// ANIMATIONS JAVASCRIPT
// Advanced animations and effects
// ================================

'use strict';

// ================================
// GSAP-LIKE ANIMATION FUNCTIONS
// (Vanilla JS implementations)
// ================================

/**
 * Animate element properties
 */
function animate(element, properties, duration = 1000, easing = 'ease-out') {
    const start = performance.now();
    const initialValues = {};

    // Store initial values
    for (const prop in properties) {
        const computed = window.getComputedStyle(element);
        initialValues[prop] = parseFloat(computed[prop]) || 0;
    }

    function step(timestamp) {
        const progress = Math.min((timestamp - start) / duration, 1);
        const easedProgress = applyEasing(progress, easing);

        for (const prop in properties) {
            const initial = initialValues[prop];
            const target = properties[prop];
            const current = initial + (target - initial) * easedProgress;
            element.style[prop] = `${current}${prop === 'opacity' ? '' : 'px'}`;
        }

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

/**
 * Easing functions
 */
function applyEasing(t, easing) {
    const easings = {
        'linear': t,
        'ease-in': t * t,
        'ease-out': t * (2 - t),
        'ease-in-out': t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        'bounce': bounceEasing(t),
        'elastic': elasticEasing(t)
    };
    return easings[easing] || easings['ease-out'];
}

function bounceEasing(t) {
    if (t < 1 / 2.75) {
        return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
        return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
        return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    } else {
        return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
}

function elasticEasing(t) {
    return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
}

// ================================
// STAGGER ANIMATIONS
// ================================

function staggerAnimation(elements, animationClass, delay = 100) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add(animationClass);
        }, index * delay);
    });
}

// Apply stagger to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                staggerAnimation(timelineItems, 'fade-in-up', 200);
                timelineObserver.disconnect();
            }
        });
    }, { threshold: 0.1 });

    if (timelineItems[0]) {
        timelineObserver.observe(timelineItems[0]);
    }
}

// Apply stagger to skill categories
const skillCategories = document.querySelectorAll('.skill-category');
if (skillCategories.length > 0) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                staggerAnimation(skillCategories, 'scale-in', 150);
                skillObserver.disconnect();
            }
        });
    }, { threshold: 0.1 });

    if (skillCategories[0]) {
        skillObserver.observe(skillCategories[0]);
    }
}

// ================================
// MAGNETIC BUTTON EFFECT
// ================================

const magneticButtons = document.querySelectorAll('.btn');

magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// ================================
// TEXT REVEAL ANIMATION
// ================================

function revealText(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        span.style.animation = `fadeIn 0.5s ease forwards ${index * 0.05}s`;
        element.appendChild(span);
    });
}

// Apply text reveal to section titles
const sectionTitles = document.querySelectorAll('.section-title');
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                revealText(entry.target);
            }, 200);
            titleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe only after page load
window.addEventListener('load', () => {
    // Skip the first title (already visible)
    sectionTitles.forEach((title, index) => {
        if (index > 0) {
            titleObserver.observe(title);
        }
    });
});

// ================================
// PARALLAX SCROLLING
// ================================

const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');

function updateParallax() {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach(element => {
        let speed = 0.5;
        if (element.classList.contains('parallax-medium')) speed = 0.3;
        if (element.classList.contains('parallax-fast')) speed = 0.1;

        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(updateParallax);
});

// ================================
// IMAGE REVEAL ON SCROLL
// ================================

const images = document.querySelectorAll('img');
const imageRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-scale');
            entry.target.classList.add('active');
            imageRevealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

images.forEach(img => {
    imageRevealObserver.observe(img);
});

// ================================
// ACHIEVEMENT CARDS ANIMATION
// ================================

const achievementCards = document.querySelectorAll('.achievement-card');
const achievementObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('bounce-in');
            }, index * 100);
            achievementObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

achievementCards.forEach(card => {
    achievementObserver.observe(card);
});

// ================================
// PROJECT CARDS HOVER EFFECT
// ================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const badge = card.querySelector('.project-badge');

    card.addEventListener('mouseenter', () => {
        if (badge) {
            badge.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });

    card.addEventListener('mouseleave', () => {
        if (badge) {
            badge.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ================================
// CERTIFICATION CARDS ANIMATION
// ================================

const certCards = document.querySelectorAll('.certification-card');
const certObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('fade-in-up');
                entry.target.classList.add('animate');
            }, index * 100);
            certObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

certCards.forEach(card => {
    certObserver.observe(card);
});

// ================================
// SMOOTH REVEAL FOR ABOUT SECTION
// ================================

const aboutImage = document.querySelector('.about-image');
const aboutText = document.querySelector('.about-text');

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (aboutImage) {
                aboutImage.classList.add('fade-in-left');
                aboutImage.classList.add('animate');
            }
            if (aboutText) {
                aboutText.classList.add('fade-in-right');
                aboutText.classList.add('animate');
            }
            aboutObserver.disconnect();
        }
    });
}, { threshold: 0.2 });

const aboutSection = document.getElementById('about');
if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// ================================
// CONTACT FORM ANIMATIONS
// ================================

const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    // Floating label effect
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });

    // Ripple effect on input
    input.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ================================
// HERO SECTION ENTRANCE
// ================================

window.addEventListener('load', () => {
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .fade-in-up');
        staggerAnimation(heroElements, 'animate', 150);
    }, 1200);
});

// ================================
// SCROLL PROGRESS INDICATOR
// ================================

const createScrollProgress = () => {
    const progress = document.createElement('div');
    progress.id = 'scroll-progress';
    progress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progress.style.width = scrollPercent + '%';
    });
};

createScrollProgress();

// ================================
// PERFORMANCE MONITORING
// ================================

if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            console.log(`${entry.name}: ${entry.startTime}ms`);
        }
    });

    perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
}

// ================================
// INTERSECTION OBSERVER POLYFILL CHECK
// ================================

if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported. Consider adding a polyfill.');
    // Fallback: add 'animate' class to all elements immediately
    document.querySelectorAll('.fade-in-up, .fade-in-down, .scale-in').forEach(el => {
        el.classList.add('animate');
    });
}

// ================================
// EASTER EGG: KONAMI CODE
// ================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);

    if (konamiCode.join('') === konamiSequence.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    console.log('%c🎉 ¡Konami Code activado! 🎉', 'font-size: 24px; color: #00D9FF;');

    // Add rainbow animation to the entire page
    document.body.style.animation = 'rainbow 5s linear infinite';

    // Create confetti effect
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 30);
    }

    // Reset after 5 seconds
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${['#00D9FF', '#0099FF', '#FF0064', '#00FF64'][Math.floor(Math.random() * 4)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        z-index: 9999;
        pointer-events: none;
        animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
    `;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ================================
// EXPORT FUNCTIONS
// ================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        animate,
        staggerAnimation,
        revealText
    };
}

console.log('%cAnimations loaded! 🎨', 'color: #00D9FF; font-weight: bold;');
