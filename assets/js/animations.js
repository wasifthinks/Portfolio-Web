// Intersection Observer for scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing after animating
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
};

// Image zoom effect
const initZoomEffects = () => {
    const zoomImages = document.querySelectorAll('.zoom-effect');
    
    zoomImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
};

// Typing effect for hero section
const initTypingEffect = () => {
    const element = document.querySelector('.typing-text');
    if (!element) return;
    
    const text = element.getAttribute('data-text');
    let index = 0;
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    };
    
    type();
};

// Smooth scroll for navigation
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

// Progress bar animation
const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percentage = entry.target.getAttribute('aria-valuenow');
                entry.target.style.width = `${percentage}%`;
                observer.unobserve(entry.target); // Stop observing after animating
            }
        });
    }, { threshold: 0.2 });

    progressBars.forEach(bar => observer.observe(bar));
};

// Add floating animation to cards
const initFloatingAnimation = () => {
    const cards = document.querySelectorAll('.single-horizontal-timeline, .portfolio-item');
    cards.forEach(card => card.classList.add('floating'));
};

// Navbar background opacity on scroll
const handleNavbarOpacity = () => {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(8, 10, 15, 0.9)';
        } else {
            header.style.background = 'rgba(8, 10, 15, 0.6)';
        }
    });
};

// Section fade in animation
const initSectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing after animating
                }
            });
        },
        { threshold: 0.1 }
    );
    
    sections.forEach(section => {
        section.classList.add('section-fade-in');
        observer.observe(section);
    });
};

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    initZoomEffects();
    initTypingEffect();
    initSmoothScroll();
    animateProgressBars();
    initFloatingAnimation();
    handleNavbarOpacity();
    initSectionAnimation();
    // Remove NavbarManager initialization
    // new NavbarManager();
});
