document.addEventListener("DOMContentLoaded", function () {
    const scrollWrappers = document.querySelectorAll('.scroll-wrapper');

    function getRemInPixels() {
        const rootFontSize = window.getComputedStyle(document.documentElement).fontSize;
        return parseFloat(rootFontSize);
    }

    const remSize = getRemInPixels();
    const gap = 1.15 * remSize;

    function updateButtonVisibility(scrollContainer, prevButton, nextButton) {
        const scrollLeft = scrollContainer.scrollLeft;
        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;

        // Hide previous button if we're at the start
        prevButton.style.visibility = scrollLeft > 5 ? 'visible' : 'hidden';
        
        // Hide next button if we're at the end
        nextButton.style.visibility = Math.ceil(scrollLeft + clientWidth) < scrollWidth - 5 ? 'visible' : 'hidden';
    }

    scrollWrappers.forEach(scrollWrapper => {
        const prevButton = scrollWrapper.querySelector('.prev');
        const nextButton = scrollWrapper.querySelector('.next');
        if (!prevButton || !nextButton) return;

        const scrollContainer = scrollWrapper.querySelector('.scroll-container');
        if (!scrollContainer) return;

        function getItemWidth() {
            const frameImage = scrollContainer.querySelector('.frame-image') || scrollContainer.querySelector('.frame-text');
            if (frameImage) {
                return frameImage.clientWidth + gap;
            } else {
                const table = scrollContainer.querySelector('table');
                if (table) {
                    const column = scrollContainer.querySelector('table th, table td');
                    if (column) {
                        return column.clientWidth + gap;
                    }
                } else {
                    const img = scrollContainer.querySelector('img');
                    if (img) {
                        return img.clientWidth + gap;
                    }
                }
            }
            return 0;
        }

        prevButton.addEventListener('click', function () {
            const itemWidth = getItemWidth();
            scrollContainer.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', function () {
            const itemWidth = getItemWidth();
            scrollContainer.scrollBy({ left: itemWidth, behavior: 'smooth' });
        });

        scrollContainer.addEventListener('scroll', function () {
            updateButtonVisibility(scrollContainer, prevButton, nextButton);
        });

        // Update visibility on resize to handle dynamic content
        window.addEventListener('resize', function () {
            updateButtonVisibility(scrollContainer, prevButton, nextButton);
        });

        // Initial visibility update with a slight delay to ensure layout is ready
        setTimeout(() => {
            updateButtonVisibility(scrollContainer, prevButton, nextButton);
        }, 100);
    });
});