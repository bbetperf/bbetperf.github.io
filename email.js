document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copy-button");
    const emailSpan = document.getElementById("email");

    copyButton.addEventListener("click", function () {
        const emailText = emailSpan.textContent;
        navigator.clipboard.writeText(emailText).then(function() {
            emailSpan.textContent = "Copied";
            setTimeout(function() {
                emailSpan.textContent = emailText;
            }, 1000);
        });
    });
});