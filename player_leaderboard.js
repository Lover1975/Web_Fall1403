document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    const icon = document.getElementById('icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '🌜';
    } else {
        icon.textContent = '🌞';
    }
});