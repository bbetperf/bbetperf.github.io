window.addEventListener('DOMContentLoaded', function() {
    var locatorElement = document.getElementById('myLocator');
    var textElement = document.querySelector('p2');
    var textHeight = textElement.offsetHeight;
    locatorElement.style.height = textHeight + 'px';
    locatorElement.style.width = textHeight + 'px';
});