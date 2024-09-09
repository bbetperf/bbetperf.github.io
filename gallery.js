document.addEventListener("DOMContentLoaded", function () {
    const scrollWrappers = document.querySelectorAll('.scroll-wrapper');

    // Функция для получения размера rem в пикселях
    function getRemInPixels() {
        const rootFontSize = window.getComputedStyle(document.documentElement).fontSize;
        return parseFloat(rootFontSize); // Возвращает размер 1rem в пикселях
    }

    const remSize = getRemInPixels(); // Получаем размер rem в пикселях
    const gap = 1.15 * remSize; // gap в rem динамически преобразован в пиксели

    // Функция для обновления видимости кнопок
    function updateButtonVisibility(scrollContainer, prevButton, nextButton) {
        const scrollLeft = scrollContainer.scrollLeft;
        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;

        // Если на первом элементе, скрываем prev
        if (scrollLeft === 0) {
            prevButton.style.visibility = 'hidden';
        } else {
            prevButton.style.visibility = 'visible';
        }

        // Если на последнем элементе, скрываем next
        if (scrollLeft + clientWidth >= scrollWidth) {
            nextButton.style.visibility = 'hidden';
        } else {
            nextButton.style.visibility = 'visible';
        }
    }

    scrollWrappers.forEach(scrollWrapper => {
        const scrollContainer = scrollWrapper.querySelector('.scroll-container');
        const prevButton = scrollWrapper.querySelector('.prev');
        const nextButton = scrollWrapper.querySelector('.next');

        // Прокрутка влево
        prevButton.addEventListener('click', function () {
            const itemWidth = scrollContainer.querySelector('.frame-image').clientWidth + gap; // ширина элемента + gap
            scrollContainer.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        });

        // Прокрутка вправо
        nextButton.addEventListener('click', function () {
            const itemWidth = scrollContainer.querySelector('.frame-image').clientWidth + gap; // ширина элемента + gap
            scrollContainer.scrollBy({ left: itemWidth, behavior: 'smooth' });
        });

        // Обновление видимости кнопок при прокрутке
        scrollContainer.addEventListener('scroll', function () {
            updateButtonVisibility(scrollContainer, prevButton, nextButton);
        });

        // Инициализация видимости кнопок
        updateButtonVisibility(scrollContainer, prevButton, nextButton);
    });
});