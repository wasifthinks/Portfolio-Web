// Intersection Observer for scroll animations
const animateOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(elem => observer.observe(elem));
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

// Enhanced typing effect
const initTypingEffect = () => {
    const element = document.querySelector('.typing-text');
    if (!element) return;
    
    const text = element.getAttribute('data-text');
    let index = 0;
    element.textContent = '';
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, Math.random() * 100 + 50);
        }
    };
    
    setTimeout(type, 1000);
};

// Smooth scroll with offset
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
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
