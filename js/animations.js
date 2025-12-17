/* ==========================================
   YEISON MORENO - EPIC ANIMATIONS 2025
   GSAP + Lenis + ScrollTrigger Pro Level
   Theme Toggle + Interactive Scroll
   ========================================== */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ==========================================
// THEME TOGGLE SYSTEM
// ==========================================
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const mobileToggle = document.getElementById('mobile-theme-toggle');
    const html = document.documentElement;

    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    } else if (!systemPrefersDark) {
        html.setAttribute('data-theme', 'light');
    }

    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Animate transition
        gsap.to('body', {
            opacity: 0.8,
            duration: 0.15,
            onComplete: () => {
                html.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                gsap.to('body', {
                    opacity: 1,
                    duration: 0.15
                });
            }
        });
    }

    if (toggle) {
        toggle.addEventListener('click', toggleTheme);
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
}

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
                    initInteractiveScrollEffects();
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

    // Profile image animation
    const profileWrapper = document.querySelector('.about-profile');
    if (profileWrapper) {
        gsap.to(profileWrapper, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: profileWrapper,
                start: 'top 85%',
            }
        });

        // Profile image hover glow effect
        const profileContainer = document.querySelector('.profile-image-container');
        if (profileContainer) {
            profileContainer.addEventListener('mouseenter', () => {
                gsap.to('.profile-image-border', {
                    opacity: 1,
                    scale: 1.05,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });

            profileContainer.addEventListener('mouseleave', () => {
                gsap.to('.profile-image-border', {
                    opacity: 0.7,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        }
    }

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
// INTERACTIVE SCROLL EFFECTS
// ==========================================
function initInteractiveScrollEffects() {
    // Horizontal scroll text effect
    const scrollTexts = document.querySelectorAll('.scroll-text');
    scrollTexts.forEach((text, i) => {
        gsap.to(text, {
            xPercent: i % 2 === 0 ? -20 : 20,
            ease: 'none',
            scrollTrigger: {
                trigger: text,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });

    // Scale on scroll for sections
    gsap.utils.toArray('section').forEach(section => {
        gsap.fromTo(section,
            { scale: 0.95, opacity: 0.8 },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 90%',
                    end: 'top 50%',
                    scrub: 1
                }
            }
        );
    });

    // Parallax for project mockups
    gsap.utils.toArray('.project-mockup').forEach(mockup => {
        gsap.to(mockup, {
            y: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: mockup,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 2
            }
        });
    });

    // Stagger reveal for skill items
    gsap.utils.toArray('.skill-item').forEach((item, i) => {
        gsap.fromTo(item,
            { opacity: 0, x: -30, rotateY: -15 },
            {
                opacity: 1,
                x: 0,
                rotateY: 0,
                duration: 0.6,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%'
                },
                delay: (i % 5) * 0.1
            }
        );
    });

    // Floating animation for decorative elements
    gsap.utils.toArray('.profile-decoration, .hero-title-decoration').forEach(el => {
        gsap.to(el, {
            y: -15,
            duration: 2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        });
    });

    // Text reveal on scroll
    gsap.utils.toArray('.about-text p, .project-description').forEach(text => {
        gsap.fromTo(text,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 85%'
                }
            }
        );
    });

    // Counter animation on scroll for visible stats
    gsap.utils.toArray('.stat-number').forEach(stat => {
        if (!stat.closest('.hero-stats')) {
            const value = parseInt(stat.dataset.value);
            if (value) {
                ScrollTrigger.create({
                    trigger: stat,
                    start: 'top 85%',
                    once: true,
                    onEnter: () => {
                        gsap.to(stat, {
                            textContent: value,
                            duration: 2,
                            ease: 'power2.out',
                            snap: { textContent: 1 }
                        });
                    }
                });
            }
        }
    });

    // Card 3D rotation on scroll
    gsap.utils.toArray('.cert-card, .about-card').forEach(card => {
        gsap.fromTo(card,
            { rotateX: 15, transformPerspective: 1000 },
            {
                rotateX: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    end: 'top 60%',
                    scrub: 1
                }
            }
        );
    });

    // Progress indicator based on scroll
    initScrollProgress();
}

// ==========================================
// SCROLL PROGRESS INDICATOR
// ==========================================
function initScrollProgress() {
    // Create progress bar if not exists
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(progressBar);
    }

    const progressBarInner = document.querySelector('.scroll-progress-bar');

    gsap.to(progressBarInner, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
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
// CURSOR FOLLOWER (Enhanced Interaction)
// ==========================================
function initCursorFollower() {
    // Only on non-touch devices
    if ('ontouchstart' in window) return;

    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
    document.body.appendChild(cursor);

    const dot = cursor.querySelector('.cursor-dot');
    const ring = cursor.querySelector('.cursor-ring');

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        ringX += (mouseX - ringX) * 0.1;
        ringY += (mouseY - ringY) * 0.1;

        gsap.set(dot, { x: dotX, y: dotY });
        gsap.set(ring, { x: ringX, y: ringY });
    });

    // Scale cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .cert-card, .about-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(ring, { scale: 1.5, opacity: 0.5, duration: 0.3 });
            gsap.to(dot, { scale: 0.5, duration: 0.3 });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3 });
            gsap.to(dot, { scale: 1, duration: 0.3 });
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
// MOBILE MENU
// ==========================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

// ==========================================
// INITIALIZE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLenis();
    initLoader();
    initMagneticEffect();
    initTiltEffect();
    initSmoothNav();
    initMobileMenu();
    initCursorFollower();
});

// Refresh on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});
