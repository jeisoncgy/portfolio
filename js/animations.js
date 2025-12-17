/* ==========================================
   YEISON MORENO - EPIC ANIMATIONS
   GSAP + ScrollTrigger Professional Level
   ========================================== */

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ==========================================
// LOADER ANIMATION
// ==========================================
class Loader {
    constructor() {
        this.loader = document.getElementById('loader');
        this.letters = document.querySelectorAll('.loader-letter');
        this.progress = document.querySelector('.loader-progress');
        this.percent = document.querySelector('.loader-percent');
        this.loadProgress = 0;
    }

    init() {
        // Animate letters
        gsap.to(this.letters, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            onComplete: () => this.startLoading()
        });
    }

    startLoading() {
        const loadInterval = setInterval(() => {
            this.loadProgress += Math.random() * 15;
            if (this.loadProgress >= 100) {
                this.loadProgress = 100;
                clearInterval(loadInterval);
                setTimeout(() => this.hide(), 500);
            }
            this.updateProgress();
        }, 100);
    }

    updateProgress() {
        this.progress.style.width = `${this.loadProgress}%`;
        this.percent.textContent = `${Math.round(this.loadProgress)}%`;
    }

    hide() {
        gsap.to(this.loader, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                this.loader.style.display = 'none';
                document.body.style.overflow = 'auto';
                initHeroAnimations();
            }
        });
    }
}

// ==========================================
// HERO ANIMATIONS
// ==========================================
function initHeroAnimations() {
    const tl = gsap.timeline();

    // Title animation - letter by letter reveal
    tl.to('.title-word', {
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'expo.out'
    })
    .to('.hero-tag', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.8')
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5')
    .to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5')
    .to('.hero-cta', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.5')
    .to('.hero-scroll', {
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.3')
    .to('.float-element', {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)'
    }, '-=0.5');

    // Rotating text
    initRotatingText();
}

// ==========================================
// ROTATING TEXT
// ==========================================
function initRotatingText() {
    const words = document.querySelectorAll('.rotate-word');
    let currentIndex = 0;

    setInterval(() => {
        words[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % words.length;
        words[currentIndex].classList.add('active');
    }, 3000);
}

// ==========================================
// SPLIT TEXT ANIMATIONS
// ==========================================
function initSplitTextAnimations() {
    const splitTexts = document.querySelectorAll('.split-text');

    splitTexts.forEach(text => {
        // Split into characters
        const chars = text.textContent.split('');
        text.innerHTML = chars.map(char =>
            char === ' ' ? ' ' : `<span class="char">${char}</span>`
        ).join('');

        // Animate on scroll
        gsap.to(text.querySelectorAll('.char'), {
            scrollTrigger: {
                trigger: text,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.6,
            stagger: 0.03,
            ease: 'back.out(1.7)'
        });
    });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
    // Navigation scroll effect
    ScrollTrigger.create({
        start: 'top -100',
        onUpdate: (self) => {
            const nav = document.getElementById('nav');
            if (self.direction === 1 && self.progress > 0) {
                nav.classList.add('scrolled');
            } else if (self.progress === 0) {
                nav.classList.remove('scrolled');
            }
        }
    });

    // Section reveals
    gsap.utils.toArray('section').forEach(section => {
        const header = section.querySelector('.section-header');
        if (header) {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: -50,
                duration: 1,
                ease: 'power3.out'
            });
        }
    });

    // About section animations
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        gsap.from(aboutImage, {
            scrollTrigger: {
                trigger: aboutImage,
                start: 'top 80%'
            },
            opacity: 0,
            x: -100,
            duration: 1,
            ease: 'power3.out'
        });
    }

    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        gsap.from(aboutText.children, {
            scrollTrigger: {
                trigger: aboutText,
                start: 'top 80%'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }

    // Stats counter animation
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const value = parseInt(stat.getAttribute('data-value'));
        gsap.to(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%'
            },
            textContent: value,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            onUpdate: function() {
                stat.textContent = Math.round(this.targets()[0].textContent);
            }
        });
    });

    // Skill cards animation
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            opacity: 0,
            y: 50,
            rotation: 5,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.7)'
        });
    });

    // Skill level bars
    const levelBars = document.querySelectorAll('.level-bar');
    levelBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        gsap.to(bar, {
            scrollTrigger: {
                trigger: bar,
                start: 'top 85%'
            },
            width: `${level}%`,
            duration: 1.5,
            ease: 'power3.out'
        });
    });

    // Certificate cards animation
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            opacity: 0,
            y: 80,
            rotationY: 45,
            duration: 1,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });

    // Contact section animation
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form-wrapper');

    if (contactInfo) {
        gsap.from(contactInfo, {
            scrollTrigger: {
                trigger: contactInfo,
                start: 'top 80%'
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: 'power3.out'
        });
    }

    if (contactForm) {
        gsap.from(contactForm, {
            scrollTrigger: {
                trigger: contactForm,
                start: 'top 80%'
            },
            opacity: 0,
            x: 50,
            duration: 1,
            ease: 'power3.out'
        });
    }
}

// ==========================================
// PARALLAX EFFECTS
// ==========================================
function initParallaxEffects() {
    // Hero background parallax
    gsap.to('.hero-gradient', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 200,
        scale: 1.2
    });

    // Float elements parallax
    gsap.utils.toArray('.float-element').forEach((element, index) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: (index + 1) * 100,
            rotation: index * 15
        });
    });
}

// ==========================================
// MAGNETIC BUTTON EFFECT
// ==========================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn, .social-link, .nav-link');

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power3.inOut'
                });

                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.remove('active');
            }
        });
    });
}

// ==========================================
// TILT EFFECT ON CARDS
// ==========================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.skill-card, .detail-block');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                duration: 0.3,
                ease: 'power2.out',
                transformPerspective: 1000
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}

// ==========================================
// TEXT REVEAL ON HOVER
// ==========================================
function initTextRevealEffects() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                color: 'transparent',
                duration: 0.2
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                color: '',
                duration: 0.2
            });
        });
    });
}

// ==========================================
// STAGGER REVEAL
// ==========================================
function initStaggerReveals() {
    // Contact methods
    gsap.from('.contact-method', {
        scrollTrigger: {
            trigger: '.contact-methods',
            start: 'top 80%'
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Form groups
    gsap.from('.form-group', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
    });
}

// ==========================================
// INITIALIZE ALL ANIMATIONS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Start with loader
    const loader = new Loader();
    loader.init();

    // Init other animations after small delay
    setTimeout(() => {
        initSplitTextAnimations();
        initScrollAnimations();
        initParallaxEffects();
        initMagneticButtons();
        initSmoothScroll();
        initTiltEffect();
        initTextRevealEffects();
        initStaggerReveals();
    }, 100);
});

// ==========================================
// SCROLL TRIGGER REFRESH ON RESIZE
// ==========================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});
