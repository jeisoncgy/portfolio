// ================================
// MAIN JAVASCRIPT - PORTFOLIO
// ================================

'use strict';

// ================================
// PRELOADER
// ================================

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        // Remove from DOM after animation
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// ================================
// NAVIGATION
// ================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

const highlightNavLink = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', highlightNavLink);

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// THEME TOGGLE
// ================================

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

// Update icon based on theme
const updateThemeIcon = () => {
    const icon = themeToggle.querySelector('i');
    if (body.getAttribute('data-theme') === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
};

updateThemeIcon();

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

// ================================
// TYPING EFFECT
// ================================

const typingText = document.getElementById('typing-text');
const texts = [
    'Senior Financial Analyst',
    'Data Analytics Specialist',
    'Credit & OTC Expert',
    'Automation Engineer',
    'Python & SQL Developer',
    'Power BI Expert'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

const typeText = () => {
    const currentText = texts[textIndex];

    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
};

// Start typing effect
setTimeout(typeText, 1000);

// ================================
// SCROLL REVEAL ANIMATIONS
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');

            // Trigger counter animation for stats
            if (entry.target.classList.contains('stat-number') ||
                entry.target.classList.contains('counter')) {
                animateCounter(entry.target);
            }

            // Trigger progress bar animation for skills
            if (entry.target.closest('.skill-item')) {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar) {
                    const progress = progressBar.getAttribute('data-progress');
                    progressBar.style.width = progress + '%';
                }
            }
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .scale-in, .stat-number, .counter, .skill-item').forEach(el => {
    observer.observe(el);
});

// ================================
// COUNTER ANIMATION
// ================================

const animatedCounters = new Set();

function animateCounter(element) {
    // Prevent re-animating the same counter
    if (animatedCounters.has(element)) return;
    animatedCounters.add(element);

    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    element.classList.add('counting');

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// ================================
// SKILL PROGRESS BARS
// ================================

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
                setTimeout(() => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = progress + '%';
                }, index * 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// ================================
// SCROLL TO TOP BUTTON
// ================================

const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        showFormMessage('Por favor completa todos los campos.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showFormMessage('Por favor ingresa un email válido.', 'error');
        return;
    }

    // Simulate form submission (replace with actual backend later)
    try {
        // For now, just log to console and show success message
        console.log('Form Data:', data);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        showFormMessage('¡Mensaje enviado! Te responderé pronto.', 'success');
        contactForm.reset();
    } catch (error) {
        showFormMessage('Hubo un error. Por favor intenta de nuevo.', 'error');
    }
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ================================
// PARTICLES BACKGROUND
// ================================

const particlesContainer = document.getElementById('particles');

const createParticle = () => {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random size between 2-6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation duration
    particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);
};

// Create particles (less on mobile for performance)
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
const particleCount = isMobileDevice ? 15 : 50;

for (let i = 0; i < particleCount; i++) {
    createParticle();
}

// ================================
// CURSOR PARALLAX EFFECT (Optional)
// ================================

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

const animateParallax = () => {
    const diffX = mouseX - currentX;
    const diffY = mouseY - currentY;

    currentX += diffX * 0.1;
    currentY += diffY * 0.1;

    // Apply parallax to particles (skip on mobile for performance)
    if (!isMobileDevice) {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = (index % 3 + 1) * 0.01;
            const x = (currentX - window.innerWidth / 2) * speed;
            const y = (currentY - window.innerHeight / 2) * speed;
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    requestAnimationFrame(animateParallax);
};

// Only run parallax on desktop
if (!isMobileDevice) {
    animateParallax();
}

// ================================
// CARD TILT EFFECT
// ================================

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ================================
// LAZY LOADING IMAGES
// ================================

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ================================
// PERFORMANCE OPTIMIZATION
// ================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    // Additional scroll handling if needed
}, 100));

// ================================
// ACCESSIBILITY ENHANCEMENTS
// ================================

// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#main';
skipLink.className = 'skip-link';
skipLink.textContent = 'Saltar al contenido principal';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--accent-primary);
    color: var(--bg-primary);
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Keyboard navigation for cards
cards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            card.click();
        }
    });
});

// ================================
// CONSOLE MESSAGE
// ================================

console.log('%c¡Hola Developer! 👋', 'font-size: 20px; font-weight: bold; color: #00D9FF;');
console.log('%c¿Curioseando el código? Me gusta tu estilo 😎', 'font-size: 14px; color: #b4b4b4;');
console.log('%cEste portfolio fue construido con HTML5, CSS3 y JavaScript vanilla.', 'font-size: 12px; color: #808080;');
console.log('%c¿Interesado en trabajar juntos? Contáctame en jeisoncgy@gmail.com', 'font-size: 12px; color: #00D9FF;');

// ================================
// ANALYTICS (Placeholder)
// ================================

// Add your analytics code here (Google Analytics, etc.)
// Example:
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'YOUR-GA-ID');

// ================================
// ERROR HANDLING
// ================================

window.addEventListener('error', (e) => {
    console.error('Error:', e.message);
    // You can add error tracking service here (Sentry, etc.)
});

// ================================
// INITIALIZATION
// ================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully! 🚀');

    // Add any initialization code here
    highlightNavLink();
});

// ================================
// EXPORT FOR MODULES (if needed)
// ================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        animateCounter,
        debounce,
        showFormMessage
    };
}
