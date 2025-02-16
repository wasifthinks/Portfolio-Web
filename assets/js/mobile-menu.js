class MobileMenu {
    constructor() {
        this.button = document.getElementById('mobile-menu-button');
        this.menu = document.getElementById('mobile-menu');
        this.menuOpen = false;

        if (this.button && this.menu) {
            this.init();
        } else {
            console.error('Mobile menu button or menu not found.');
        }
    }

    init() {
        // Check if elements exist before adding listeners
        if (!this.button || !this.menu) return;

        this.button.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Close menu on link click
        this.menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (this.menuOpen && !this.menu.contains(e.target) && !this.button.contains(e.target)) {
                this.closeMenu();
            });
        });

        // Close menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        if (!this.button || !this.menu) return;

        this.menuOpen = !this.menuOpen;
        if (this.menuOpen) {
            this.menu.classList.add('open');
            this.button.setAttribute('aria-expanded', 'true');
        } else {
            this.menu.classList.remove('open');
            this.button.setAttribute('aria-expanded', 'false');
        }
    }

    closeMenu() {
        if (!this.button || !this.menu) return;

        this.menuOpen = false;
        this.menu.classList.remove('open');
        this.button.setAttribute('aria-expanded', 'false');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
});
