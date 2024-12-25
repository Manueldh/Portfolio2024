document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('data-theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
})