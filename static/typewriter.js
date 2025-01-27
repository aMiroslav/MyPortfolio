document.addEventListener('DOMContentLoaded', function() {
        var elements = document.querySelectorAll('.typewriter-text');
        var typeSpeed = 50; // Adjust speed as needed

        function typeLine(el, text, isLast, callback) {
            el.textContent = ''; // Clear the element's content

            var cursor = document.createElement('span');
            cursor.className = 'cursor'; // Apply CSS class for the cursor
            cursor.textContent = '|'; // Cursor symbol

            el.appendChild(cursor);

            var index = 0;

            function type() {
                if (index < text.length) {
                    el.textContent = text.substring(0, index + 1); // Display typed text
                    el.appendChild(cursor); // Append cursor
                    index++;
                    setTimeout(type, typeSpeed);
                } else {
                    el.textContent = text; // Ensure full text is displayed
                    el.appendChild(cursor);
                    if (!isLast) {
                        cursor.style.display = 'none'; // Hide cursor when typing is complete
                    }
                    if (callback) callback();
                }
            }

            el.style.visibility = 'visible'; // Make the element visible before typing
            type();
        }

        function startTypingSequence(elements, index) {
            if (index >= elements.length) return;

            var el = elements[index];
            var text = el.textContent.trim();
            var isLast = (index === elements.length - 1);
            typeLine(el, text, isLast, function() {
                startTypingSequence(elements, index + 1);
            });
        }

        // Start the typing sequence with the first element
        startTypingSequence(elements, 0);
    });