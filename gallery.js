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
        if (scrollLeft === 0) {
            prevButton.style.visibility = 'hidden';
        } else {
            prevButton.style.visibility = 'visible';
        }
        if (scrollLeft + clientWidth >= scrollWidth) {
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
            const item = scrollContainer.querySelector('.frame-image, img, iframe');
            if (item) {
                return item.clientWidth + gap;
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