document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.info, .mac, .pc, .mail');

    images.forEach(function (image) {
        image.addEventListener('click', function () {
            image.classList.toggle('enlarged');
        });
    });
});
