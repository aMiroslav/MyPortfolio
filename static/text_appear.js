window.addEventListener('load', function() {
    const container = document.querySelector('.fields-container');
    const fields = document.querySelectorAll('.field');
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;
    const usedPositions = []; // To store the positions of placed fields

    function isOverlapping(top, left, width, height) {
        for (let pos of usedPositions) {
            if (!(left + width < pos.left || left > pos.left + pos.width || top + height < pos.top || top > pos.top + pos.height)) {
                return true; // There is an overlap
            }
        }
        return false; // No overlap
    }

    fields.forEach((field, index) => {
        let size = Math.random() * (2 - 0.8) + 0.8; // Random size between 0.8em and 2em
        field.style.fontSize = `${size}em`;
        const width = field.offsetWidth;
        const height = field.offsetHeight;

        let top, left;
        let attempts = 0;
        do {
            top = Math.random() * (containerHeight - height);
            left = Math.random() * (containerWidth - width);
            attempts++;
        } while (isOverlapping(top, left, width, height) && attempts < 100);

        // If no valid position found after many attempts, just place it anywhere
        if (attempts === 100) {
            top = Math.random() * (containerHeight - height);
            left = Math.random() * (containerWidth - width);
        }

        usedPositions.push({top, left, width, height});
        field.style.top = `${top}px`;
        field.style.left = `${left}px`;

        setTimeout(() => {
            field.classList.add('appear');
        }, index * 300); // Delay each field's appearance by 300ms times its index
    });
});