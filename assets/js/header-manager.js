class HeaderManager {
    constructor() {
        this.header = document.querySelector('header');
        this.heroSection = document.querySelector('#welcome-hero');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        // Initial check
        this.updateHeaderStyle();

        // Listen for scroll
        window.addEventListener('scroll', () => {
            this.updateHeaderStyle();
        });

        // Listen for theme changes
        document.querySelector('#theme').addEventListener('change', () => {
            this.updateHeaderStyle();
        });
    }

    updateHeaderStyle() {
        const scrollTop = window.pageYOffset;
        const heroHeight = this.heroSection?.offsetHeight || 0;
        const isLight = document.body.classList.contains('light');
        
        // Check if we're in the hero section
        if (scrollTop <= heroHeight) {
            this.header.classList.add('header-transparent');
            
            // Add extra contrast in light mode
            if (isLight) {
                this.header.style.backdropFilter = 'blur(8px) brightness(0.8)';
            }
        } else {
            this.header.classList.remove('header-transparent');
            this.header.style.backdropFilter = 'blur(10px)';
        }

        // Update last scroll position
        this.lastScroll = scrollTop;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new HeaderManager();
});
