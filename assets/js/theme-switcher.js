class ThemeManager {
    constructor() {
        this.themeToggles = document.querySelectorAll('#theme, #theme-mobile');
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        // Set initial theme
        document.body.classList.add(this.currentTheme);
        this.themeToggles.forEach(toggle => {
            toggle.checked = this.currentTheme === 'light';
            
            toggle.addEventListener('change', () => {
                this.toggleTheme(toggle.checked ? 'light' : 'dark');
            });
        });
    }

    toggleTheme(theme) {
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
        
        // Update all toggle states
        this.themeToggles.forEach(toggle => {
            toggle.checked = theme === 'light';
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
