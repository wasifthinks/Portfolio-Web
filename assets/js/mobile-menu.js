class MobileMenu {
    constructor() {
        this.button = document.getElementById('mobile-menu-button');
        this.menu = document.getElementById('mobile-menu');
        this.links = document.querySelectorAll('#mobile-menu a');
        this.isOpen = false;
        
        if (this.button && this.menu) {
            this.init();
        }
    }

    init() {
        this.button.addEventListener('click', () => this.toggleMenu());
        
        // Close menu when clicking links
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                this.closeMenu();
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.menu.contains(e.target) && !this.button.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Handle scroll
        window.addEventListener('scroll', () => {
            if (this.isOpen) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        this.button.classList.toggle('active');
        this.menu.classList.toggle('open');
        document.body.style.overflow = this.isOpen ? 'hidden' : '';
    }

    closeMenu() {
        this.isOpen = false;
        this.button.classList.remove('active');
        this.menu.classList.remove('open');
        document.body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', () => new MobileMenu());
