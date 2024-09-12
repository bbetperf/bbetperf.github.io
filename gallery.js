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

        const offsetTolerance = 1;

        if (scrollLeft <= offsetTolerance) {
            prevButton.style.visibility = 'hidden';
        } else {
            prevButton.style.visibility = 'visible';
        }

        if (scrollLeft + clientWidth >= scrollWidth - offsetTolerance) {
            nextButton.style.visibility = 'hidden';
        } else {
            nextButton.style.visibility = 'visible';
        }
    }

    scrollWrappers.forEach(scrollWrapper => {
        const prevButton = scrollWrapper.querySelector('.prev');
        const nextButton = scrollWrapper.querySelector('.next');
        if (!prevButton || !nextButton) return;

        const scrollContainer = scrollWrapper.querySelector('.scroll-container');
        if (!scrollContainer) return;

        function getItemWidth() {
            const frameImage = scrollContainer.querySelector('.frame-image');
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

        updateButtonVisibility(scrollContainer, prevButton, nextButton);
    });
});
