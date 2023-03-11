let fullHeight = document.body.scrollHeight;
console.log('Полная высота:', fullHeight);
let innerHeight = window.innerHeight;
console.log('Высота экрана:', innerHeight);
let pageYOffset = window.pageYOffset;
console.log('Y позиция экрана:', pageYOffset);

const progressBar = document.querySelector('.pagination_status_line>.line');
const fullLine = document.querySelector('.pagination_status_line');


window.addEventListener('scroll', fillProgressLine);
window.addEventListener('resize', fillProgressLine);

function fillProgressLine() {
    if (window.pageYOffset > innerHeight) {
        fullLine.style.opacity = '1';
    }
    else fullLine.style.opacity = '0';
    fullHeight = document.body.scrollHeight;
    innerHeight = window.innerHeight;
    progressBar.style.height = (window.pageYOffset * 100 / (fullHeight - innerHeight)) + '%';
}