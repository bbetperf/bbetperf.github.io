let animationTimeout;
let resetTimeout;

document.getElementById('email_button').addEventListener('click', function() {
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

    clearTimeout(animationTimeout);
    clearTimeout(resetTimeout);

    animationTimeout = setTimeout(() => {
        emailElement.innerHTML = 'Copied';
        this.classList.remove('copied');

        resetTimeout = setTimeout(() => {
            this.classList.add('copied');

            setTimeout(() => {
                emailElement.innerHTML = originalText;
                this.classList.remove('copied');
                this.style.pointerEvents = 'auto';
            }, 300);
        }, 3000);
    }, 300);
});
