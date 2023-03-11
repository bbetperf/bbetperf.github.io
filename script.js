function ToggleMenu() {
    const button = document.getElementById('burger');
    const menu = document.getElementById('menu');

    button.classList.toggle('active');
    menu.classList.toggle('active');
}

var offsetHeight = document.getElementsByClassName('fullheader')[0].offsetHeight;
console.log(offsetHeight);

window.addEventListener('resize', setTop);
window.addEventListener('scroll', setTop);
window.addEventListener('click', setTop);

function setTop() {
    const menu = document.getElementById('menu');
    menu.style.top = offsetHeight + 'px';
}