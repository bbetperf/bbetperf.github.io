document.getElementById('email_button').addEventListener('click', function() {
    var emailElement = this.querySelector('p2');
    var originalText = emailElement.innerHTML;

    var email = 'bbetperf@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        console.log('Email copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });

    this.classList.add('copied');

    setTimeout(() => {
        emailElement.innerHTML = 'Copied';
        this.classList.remove('copied');

        setTimeout(() => {
            this.classList.add('copied');

            setTimeout(() => {
                emailElement.innerHTML = originalText;
                this.classList.remove('copied');
            }, 300);
        }, 3000);
    }, 300);
});
