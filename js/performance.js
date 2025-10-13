// ================================
// PERFORMANCE OPTIMIZATION FOR MOBILE
// ================================

'use strict';

// Detect if device is mobile
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

// Detect if device has low performance
const isLowPerformance = isMobile || navigator.hardwareConcurrency <= 4;

// ================================
// OPTIMIZE ANIMATIONS FOR MOBILE
// ================================

if (isMobile) {
    // Reduce particle count dramatically on mobile
    const originalCreateParticle = window.createParticle;
    window.createParticle = function() {
        // Only create 10 particles instead of 50 on mobile
        return originalCreateParticle && originalCreateParticle();
    };

    // Disable heavy effects
    document.documentElement.style.setProperty('--disable-parallax', '1');

    // Disable card tilt effect on mobile
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.transform = 'none';
        card.removeEventListener('mousemove', () => {});
    });

    // Disable particle parallax
    document.addEventListener('DOMContentLoaded', () => {
        const particlesContainer = document.getElementById('particles');
        if (particlesContainer) {
            // Remove excess particles on mobile
            const particles = particlesContainer.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                if (index > 15) { // Keep only 15 particles on mobile
                    particle.remove();
                }
            });
        }
    });

    // Reduce animation complexity
    document.body.classList.add('mobile-optimized');

    // Disable backdrop-filter blur on low-end mobile (performance killer)
    if (isLowPerformance) {
        const style = document.createElement('style');
        style.textContent = `
            .card,
            .glass,
            .navbar.scrolled,
            .timeline-content,
            .skill-card,
            .achievement-card,
            .project-card,
            .cert-card {
                backdrop-filter: none !important;
                -webkit-backdrop-filter: none !important;
                background: rgba(20, 20, 20, 0.95) !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// ================================
// LAZY LOAD EVERYTHING
// ================================

// Defer non-critical JavaScript
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Load non-critical features when browser is idle
        console.log('Loading non-critical features...');
    });
} else {
    setTimeout(() => {
        // Fallback for browsers without requestIdleCallback
        console.log('Loading non-critical features...');
    }, 1000);
}

// ================================
// REDUCE PRELOADER TIME ON MOBILE
// ================================

if (isMobile) {
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            // Hide preloader faster on mobile (500ms instead of 1000ms)
            setTimeout(() => {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 300);
            }, 500);
        }
    });
}

// ================================
// OPTIMIZE SCROLL EVENTS
// ================================

let ticking = false;

function optimizedScroll(callback) {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            callback();
            ticking = false;
        });
        ticking = true;
    }
}

// Replace standard scroll events with optimized version
const originalAddEventListener = window.addEventListener;
window.addEventListener = function(type, listener, options) {
    if (type === 'scroll' && isMobile) {
        // Throttle scroll events on mobile
        originalAddEventListener.call(this, type, () => optimizedScroll(listener), options);
    } else {
        originalAddEventListener.call(this, type, listener, options);
    }
};

// ================================
// IMAGE OPTIMIZATION
// ================================

// Add loading="lazy" to all images if not already present
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
});

// ================================
// DISABLE COMPLEX ANIMATIONS ON MOBILE
// ================================

if (isMobile) {
    const style = document.createElement('style');
    style.textContent = `
        /* Simplify animations on mobile */
        @media (max-width: 768px) {
            * {
                animation-duration: 0.3s !important;
                transition-duration: 0.3s !important;
            }

            .particle {
                animation: none !important;
                opacity: 0.3 !important;
            }

            .fade-in-up,
            .fade-in-down,
            .fade-in-left,
            .fade-in-right {
                animation: simpleFadeIn 0.3s ease-out !important;
            }

            @keyframes simpleFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            /* Disable transform animations on scroll */
            .card:hover {
                transform: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// ================================
// PERFORMANCE MONITORING
// ================================

if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            console.log('📊 Performance Metrics:');
            console.log(`  Page Load Time: ${(pageLoadTime / 1000).toFixed(2)}s`);
            console.log(`  Connection Time: ${(connectTime / 1000).toFixed(2)}s`);
            console.log(`  Render Time: ${(renderTime / 1000).toFixed(2)}s`);
            console.log(`  Device: ${isMobile ? 'Mobile' : 'Desktop'}`);
        }, 0);
    });
}

// ================================
// CONSOLE INFO
// ================================

console.log(`🚀 Performance Mode: ${isMobile ? 'Mobile Optimized' : 'Desktop Full Features'}`);
console.log(`📱 Device: ${isMobile ? 'Mobile/Tablet' : 'Desktop'}`);
console.log(`⚡ Performance Level: ${isLowPerformance ? 'Low (Optimized)' : 'High'}`);
