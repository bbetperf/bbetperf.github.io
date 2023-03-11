let fullHeight = document.body.scrollHeight;
console.log(fullHeight);
let innerHeight = window.innerHeight;
console.log(innerHeight);
const progressBar = document.querySelector('.pagination_status_line>.line');

window.addEventListener('scroll', fillProgressLine);
window.addEventListener('resize', fillProgressLine);

function fillProgressLine() {
    fullHeight = document.body. scrollHeight;
    innerHeight = window. innerHeight;
    progressBar.style.height = (pageYOffset * 100 / (fullHeight - innerHeight)) + '%';
}