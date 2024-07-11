document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typewriter-text');
    const text = textElement.textContent;
    textElement.textContent = ''; // Clear initial text content

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust speed here (100 = 100ms)
        }
    }

    typeWriter();
});
