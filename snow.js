document.addEventListener("DOMContentLoaded", () => {
    const currentMonth = new Date().getMonth(); // 0-11 (декабрь = 11, январь = 0, февраль = 1)
    const isWinter = currentMonth === 11 || currentMonth === 0 || currentMonth === 1;

    if (!isWinter) return; // Если не зима, прекращаем выполнение

    const snowflakesContainer = document.querySelector('.snowflakes');
    const snowflakeCount = 50; // Number of snowflakes

    for (let i = 0; i < snowflakeCount; i++) {
        setTimeout(() => {
            // Create snowflake container
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');

            // Create inner element for the snowflake symbol
            const inner = document.createElement('div');
            inner.classList.add('inner');
            inner.textContent = '❅'; // Snowflake symbol

            // Append inner to snowflake
            snowflake.appendChild(inner);

            // Randomize size, position, and animations
            const fontSize = Math.random() * 1.0 + 0.5; // Random size between 0.5rem and 1.5rem
            snowflake.style.fontSize = `${fontSize}rem`;
            snowflake.style.left = `${Math.random() * 100}%`; // Random horizontal position
            snowflake.style.animationDuration = `${Math.random() * 6.5 + 6.5}s`; // Random fall speed
            inner.style.animationDuration = `${Math.random() * 6.5 + 6.5}s`; // Match fall duration
            snowflake.style.animationDelay = `${Math.random() * 6.5}s`; // Random shake delay

            // Append snowflake to the container
            snowflakesContainer.appendChild(snowflake);
        }, Math.random() * 5000); // Random delay up to 5 seconds
    }
});