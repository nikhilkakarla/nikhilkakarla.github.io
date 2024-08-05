document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('contact-button');
    contactButton.addEventListener('click', function () {
        contactButton.classList.toggle('clicked');
    });
});
