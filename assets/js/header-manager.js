class HeaderManager {
    constructor() {
        this.header = document.querySelector('header');
        this.heroSection = document.querySelector('#welcome-hero');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        this.updateHeaderStyle();
        window.addEventListener('scroll', () => this.updateHeaderStyle());
    }

    updateHeaderStyle() {
        const scrollTop = window.pageYOffset;
        const heroHeight = this.heroSection?.offsetHeight || 0;
        
        if (scrollTop <= heroHeight) {
            this.header.classList.add('header-transparent');
        } else {
            this.header.classList.remove('header-transparent');
        }

        // Remove any backdrop-filter
        this.header.style.backdropFilter = 'none';
        this.header.style.webkitBackdropFilter = 'none';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new HeaderManager();
});
