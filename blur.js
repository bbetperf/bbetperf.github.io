document.addEventListener('DOMContentLoaded', function () {
    const blurBlocks = document.querySelectorAll('.blur');
    blurBlocks.forEach(blurBlock => {
        blurBlock.addEventListener('mouseenter', function () {
            blurBlocks.forEach(otherBlurBlock => {
                if (otherBlurBlock !== blurBlock && window.innerWidth > 1024) {
                    otherBlurBlock.style.filter = 'blur(10px)';
                }
            });
        });
        blurBlock.addEventListener('mouseleave', function () {
            blurBlocks.forEach(otherBlurBlock => {
                if (otherBlurBlock !== blurBlock) {
                    otherBlurBlock.style.filter = 'blur(0)';
                }
            });
        });
    });
});