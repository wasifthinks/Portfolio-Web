class NavbarManager {
    constructor() {
        this.menuIcon = document.querySelector('.menu-icon');
        this.navbarMenu = document.querySelector('.navbar-menu');
        this.menuLinks = document.querySelectorAll('.navbar-menu a');
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.menuIcon.addEventListener('click', () => this.toggleMenu());
        this.menuLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
        document.addEventListener('keydown', (e) => this.handleEscKey(e));
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.menuIcon.classList.toggle('menu-open');
        this.navbarMenu.classList.toggle('active');
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }

    closeMenu() {
        this.isMenuOpen = false;
        this.menuIcon.classList.remove('menu-open');
        this.navbarMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    handleOutsideClick(e) {
        if (this.isMenuOpen && 
            !this.navbarMenu.contains(e.target) && 
            !this.menuIcon.contains(e.target)) {
            this.closeMenu();
        }
    }

    handleEscKey(e) {
        if (this.isMenuOpen && e.key === 'Escape') {
            this.closeMenu();
        }
    }
}

// Initialize navbar
document.addEventListener('DOMContentLoaded', () => {
    new NavbarManager();
});
