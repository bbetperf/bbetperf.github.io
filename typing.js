document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const text = textElement.textContent;

    // Сохраняем текущие инлайновые стили
    const inlineStyle = textElement.getAttribute("style");

    // Сохраняем точные размеры элемента
    const elementWidth = textElement.offsetWidth;
    const elementHeight = textElement.offsetHeight;

    // Фиксируем размеры через CSS
    textElement.style.width = `${elementWidth}px`;
    textElement.style.height = `${elementHeight}px`;
    textElement.style.overflow = "hidden"; // Скрываем текст, если он превышает размеры
    textElement.style.display = "inline-block"; // Гарантируем, что размеры зависят только от содержимого

    function typeLetter() {
        let index = 0;

        function typeNext() {
            if (index < text.length) {
                textElement.textContent = text.slice(0, index + 1); // Добавляем текст посимвольно
                textElement.setAttribute("style", inlineStyle); // Восстанавливаем инлайновые стили
                textElement.style.width = `${elementWidth}px`; // Убедиться, что ширина зафиксирована
                textElement.style.height = `${elementHeight}px`; // Фиксируем высоту
                index++;
                setTimeout(typeNext, 75); // Скорость печатания
            } else {
                setTimeout(() => {
                    textElement.style.color = "transparent"; // Делаем текст прозрачным
                    setTimeout(() => {
                        textElement.textContent = text; // Восстанавливаем полный текст
                        textElement.setAttribute("style", inlineStyle); // Восстанавливаем инлайновые стили
                        textElement.style.width = `${elementWidth}px`; // Убедиться, что ширина зафиксирована
                        textElement.style.height = `${elementHeight}px`; // Убедиться, что высота зафиксирована
                        typeLetter(); // Повторяем анимацию
                    }, 1000); // Пауза перед началом нового цикла
                }, 1000);
            }
        }

        typeNext();
    }

    typeLetter();
});