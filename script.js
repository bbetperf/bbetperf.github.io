let i = 0;

function ToggleMenu() {
    const button = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const button_menu = document.getElementById('button_menu');

    button.classList.toggle('active');
    menu.classList.toggle('active');
    
    if (i % 2 == 0) {
        button_menu.textContent = 'close';
    }
    else button_menu.textContent = 'menu';

    i++;
}

var offsetHeight = document.getElementsByClassName('fullheader')[0].offsetHeight;
console.log('Высота хедера:',offsetHeight);

window.addEventListener('resize', setTop);
window.addEventListener('scroll', setTop);
window.addEventListener('click', setTop);

function setTop() {
    const menu = document.getElementById('menu');
    menu.style.top = offsetHeight + 'px';
}