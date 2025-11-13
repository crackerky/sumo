// SUMO Cultural Web Project - JavaScript

// ============================================
// Navigation Functionality
// ============================================

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// Smooth Scrolling
// ============================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ============================================
// Active Navigation Link on Scroll
// ============================================

const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + navbar.offsetHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    // Also check hero section
    if (window.pageYOffset < 100) {
        current = 'home';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Intersection Observer for Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards and content sections
const animatedElements = document.querySelectorAll(
    '.ritual-card, .legend-card, .beyond-card, .tournament-card, .timeline-item, .gallery-item'
);

animatedElements.forEach(el => {
    observer.observe(el);
});

// ============================================
// Add fade-in animation CSS dynamically
// ============================================

const style = document.createElement('style');
style.textContent = `
    .ritual-card,
    .legend-card,
    .beyond-card,
    .tournament-card,
    .timeline-item,
    .gallery-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .ritual-card.fade-in,
    .legend-card.fade-in,
    .beyond-card.fade-in,
    .tournament-card.fade-in,
    .timeline-item.fade-in,
    .gallery-item.fade-in {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-menu a.active::after {
        width: 100%;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// ============================================
// Scroll to Top Button (Optional Enhancement)
// ============================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

// Add styles for scroll to top button
const scrollTopStyle = document.createElement('style');
scrollTopStyle.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background-color: #96320E;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 5px 15px rgba(150, 50, 14, 0.3);
    }

    .scroll-to-top.visible {
        opacity: 1;
        visibility: visible;
    }

    .scroll-to-top:hover {
        background-color: #7a2609;
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(150, 50, 14, 0.4);
    }

    @media (max-width: 768px) {
        .scroll-to-top {
            width: 45px;
            height: 45px;
            bottom: 1.5rem;
            right: 1.5rem;
        }
    }
`;
document.head.appendChild(scrollTopStyle);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// Image Lazy Loading Enhancement
// ============================================

// If images are added later, this will handle lazy loading
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// Performance: Debounce Scroll Events
// ============================================

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events for better performance
const efficientScroll = debounce(() => {
    // Additional scroll-based functionality can be added here
});

window.addEventListener('scroll', efficientScroll);

// ============================================
// Log initialization
// ============================================

console.log('SUMO Cultural Web Project initialized successfully');
console.log('Features loaded: Smooth scrolling, Navigation animations, Intersection Observer');
