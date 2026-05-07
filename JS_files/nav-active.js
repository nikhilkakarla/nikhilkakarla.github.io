document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(function (link) {
        const href = link.getAttribute('href');
        if (href && (href === file || (file === '' && href === 'index.html'))) {
            link.classList.add('active');
        }
    });
});
