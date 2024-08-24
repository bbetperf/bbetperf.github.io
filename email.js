document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copy-button");
    const emailSpan = document.getElementById("email");

    copyButton.addEventListener("click", function () {
        const emailText = "hello@bbetperf.com";
        navigator.clipboard.writeText(emailText).then(function() {
            emailSpan.textContent = "Copied";
            setTimeout(function() {
                emailSpan.textContent = "email";
            }, 1000);
        });
    });
});