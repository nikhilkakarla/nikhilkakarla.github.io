document.addEventListener('DOMContentLoaded', function () {
    const contents = document.querySelectorAll('.content');
    const readMoreButtons = document.querySelectorAll('.read-more');
    const overlay = document.getElementById('overlay');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    contents.forEach(content => {
        observer.observe(content);
    });

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    document.querySelectorAll('.close').forEach(closeButton => {
        closeButton.addEventListener('click', function () {
            this.parentElement.parentElement.style.display = 'none';
            overlay.style.display = 'none';
        });
    });

    overlay.addEventListener('click', function () {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
        overlay.style.display = 'none';
    });
});
