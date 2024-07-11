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


    // Function to adjust lightbox image size
    function adjustLightboxImageSize() {
        const maxWidth = lightbox.offsetWidth - 40; // Subtract padding
        const maxHeight = window.innerHeight * 0.8; // 80% of viewport height
        const aspectRatio = lightboxImg.naturalWidth / lightboxImg.naturalHeight;

        if (lightboxImg.naturalWidth > maxWidth || lightboxImg.naturalHeight > maxHeight) {
            if (aspectRatio > 1) {
                lightboxImg.style.width = maxWidth + 'px';
                lightboxImg.style.height = (maxWidth / aspectRatio) + 'px';
            } else {
                lightboxImg.style.height = maxHeight + 'px';
                lightboxImg.style.width = (maxHeight * aspectRatio) + 'px';
            }
        }
    }

    // Adjust image size on window resize
    window.addEventListener('resize', adjustLightboxImageSize);
});
