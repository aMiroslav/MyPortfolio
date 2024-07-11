// lightbox.js
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');

    document.querySelectorAll('.gallery a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            lightbox.style.display = 'block';
            lightboxImg.src = this.href;
        });
    });

    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});