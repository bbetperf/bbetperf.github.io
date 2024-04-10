document.getElementById('copy_email').addEventListener('click', function() {
    var textarea = document.createElement('textarea');
    textarea.value = 'bbetperf@gmail.com';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    var notification = document.getElementById('notification');
    notification.textContent = 'Copied';
    notification.style.display = 'block';
    notification.classList.add('show');
    
    setTimeout(function() {
        notification.classList.remove('show');
    }, 2000);
});
