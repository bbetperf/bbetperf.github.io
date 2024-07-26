function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

const handleClick = debounce(function() {
    var emailElement = this.querySelector('p2');
    var originalText = emailElement.innerHTML;

    this.style.pointerEvents = 'none';

    var email = 'hello@bbetperf.com';
    navigator.clipboard.writeText(email).then(() => {
        console.log('Email copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });

    this.classList.remove('copied');

    this.classList.add('copied');

    clearTimeout(this.animationTimeout);
    clearTimeout(this.resetTimeout);

    this.animationTimeout = setTimeout(() => {
        emailElement.innerHTML = 'Copied';
        this.classList.remove('copied');

        this.resetTimeout = setTimeout(() => {
            this.classList.add('copied');

            setTimeout(() => {
                emailElement.innerHTML = originalText;
                this.classList.remove('copied');
                this.style.pointerEvents = 'auto';
            }, 300);
        }, 3000);
    }, 300);
}, 500);

document.getElementById('email_button').addEventListener('click', handleClick);
