/* ==========================================
   YEISON MORENO - EPIC ANIMATIONS 2025
   GSAP + Lenis + ScrollTrigger Pro Level
   ========================================== */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ==========================================
// LENIS SMOOTH SCROLL
// ==========================================
let lenis;

function initLenis() {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

// ==========================================
// LOADER ANIMATION
// ==========================================
function initLoader() {
    const loader = document.getElementById('loader');
    const counterNumber = document.querySelector('.counter-number');
    const loaderBar = document.querySelector('.loader-bar-svg');

    let progress = { value: 0 };

    gsap.to(progress, {
        value: 100,
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: () => {
            counterNumber.textContent = Math.round(progress.value);
            loaderBar.setAttribute('width', progress.value * 0.8);
        },
        onComplete: () => {
            gsap.to(loader, {
                yPercent: -100,
                duration: 1,
                ease: 'power4.inOut',
                onComplete: () => {
                    loader.style.display = 'none';
                    initHeroAnimations();
                    initScrollAnimations();
                }
            });
        }
    });
}

// ==========================================
// HERO ANIMATIONS
// ==========================================
function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Title words slide up
    tl.to('.title-word', {
        y: 0,
        duration: 1.5,
        stagger: 0.15,
    })
    .to('.hero-title-decoration', {
        opacity: 1,
        duration: 0.8,
    }, '-=1')
    .to('.hero-badge', {
        opacity: 1,
        y: 0,
        duration: 0.8,
    }, '-=1.2')
    .to('.hero-tagline', {
        opacity: 1,
        y: 0,
        duration: 0.8,
    }, '-=0.8')
    .to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 0.8,
    }, '-=0.6')
    .to('.hero-cta', {
        opacity: 1,
        y: 0,
        duration: 0.8,
    }, '-=0.6')
    .to('.hero-stats', {
        opacity: 1,
        duration: 1,
    }, '-=0.4')
    .to('.hero-scroll-indicator', {
        opacity: 1,
        duration: 0.8,
    }, '-=0.6')
    .to('.hero-corner-info', {
        opacity: 1,
        duration: 0.8,
    }, '-=0.8');

    // Animate stats numbers
    document.querySelectorAll('.hero-stats .stat-number').forEach(stat => {
        const value = parseInt(stat.dataset.value);
        gsap.to(stat, {
            textContent: value,
            duration: 2,
            delay: 1.5,
            ease: 'power2.out',
            snap: { textContent: 1 }
        });
    });

    // Start tagline rotation
    initTaglineRotation();
}

// ==========================================
// TAGLINE ROTATION
// ==========================================
function initTaglineRotation() {
    const words = document.querySelectorAll('.tagline-word');
    let current = 0;

    setInterval(() => {
        gsap.to(words[current], {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => {
                words[current].classList.remove('active');
                current = (current + 1) % words.length;
                words[current].classList.add('active');
                gsap.fromTo(words[current],
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
                );
            }
        });
    }, 3000);
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
    // Navigation scroll state
    ScrollTrigger.create({
        start: 'top -100',
        onUpdate: (self) => {
            const nav = document.getElementById('nav');
            if (self.progress > 0) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });

    // Section title reveals
    gsap.utils.toArray('.title-inner').forEach(title => {
        gsap.to(title, {
            y: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
            }
        });
    });

    // Scroll reveal elements
    gsap.utils.toArray('[data-scroll-reveal]').forEach((el, i) => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
            },
            delay: i * 0.1 % 0.3,
            onComplete: () => el.classList.add('revealed')
        });
    });

    // About cards stagger
    gsap.utils.toArray('.about-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
            },
            delay: i * 0.15
        });
    });

    // Project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
            },
            delay: i * 0.2
        });
    });

    // Skills categories
    gsap.utils.toArray('.skills-category').forEach((cat, i) => {
        gsap.to(cat, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: cat,
                start: 'top 85%',
            },
            delay: i * 0.15
        });
    });

    // Skill progress bars
    gsap.utils.toArray('.skill-progress').forEach(bar => {
        const progress = bar.dataset.progress;
        gsap.to(bar, {
            width: `${progress}%`,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 90%',
            }
        });
    });

    // Certificate cards
    gsap.utils.toArray('.cert-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
            },
            delay: (i % 3) * 0.1
        });
    });

    // Contact section
    gsap.to('.contact-header', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-header',
            start: 'top 80%',
        }
    });

    gsap.to('.contact-info', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
        }
    });

    gsap.to('.contact-visual', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-visual',
            start: 'top 80%',
        },
        delay: 0.2
    });

    // Projects CTA
    gsap.to('.projects-cta', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.projects-cta',
            start: 'top 85%',
        }
    });

    // Parallax orbs
    gsap.to('.orb-1', {
        y: -100,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
        }
    });

    gsap.to('.orb-2', {
        y: -150,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
        }
    });
}

// ==========================================
// MAGNETIC EFFECT
// ==========================================
function initMagneticEffect() {
    const magnetics = document.querySelectorAll('.magnetic');

    magnetics.forEach(magnetic => {
        magnetic.addEventListener('mousemove', (e) => {
            const rect = magnetic.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(magnetic, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        magnetic.addEventListener('mouseleave', () => {
            gsap.to(magnetic, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
}

// ==========================================
// TILT EFFECT
// ==========================================
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('[data-tilt]');

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            gsap.to(el, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: 'power2.out',
                transformPerspective: 1000,
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.7,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
}

// ==========================================
// SMOOTH SCROLL NAVIGATION
// ==========================================
function initSmoothNav() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));

            if (target) {
                lenis.scrollTo(target, {
                    offset: -80,
                    duration: 1.5,
                });

                // Close mobile menu
                document.getElementById('mobile-menu').classList.remove('active');
            }
        });
    });
}

// ==========================================
// INITIALIZE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initLoader();
    initMagneticEffect();
    initTiltEffect();
    initSmoothNav();
});

// Refresh on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});
