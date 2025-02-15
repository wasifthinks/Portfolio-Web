class ThemeSwitcher {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        document.body.classList.add(this.theme);
        this.bindEvents();
        this.updateIcon();
    }

    toggleTheme() {
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
        
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.theme);
        
        this.updateIcon();
    }

    updateIcon() {
        const darkIcon = document.querySelector('.dark-icon');
        const lightIcon = document.querySelector('.light-icon');
        
        if (this.theme === 'dark') {
            darkIcon.style.opacity = '1';
            lightIcon.style.opacity = '0';
        } else {
            darkIcon.style.opacity = '0';
            lightIcon.style.opacity = '1';
        }
    }

    bindEvents() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});
