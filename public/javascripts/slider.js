$(document).ready(function() {
    var galleryImage = $('.gallery').find('img').first();
    var images = [
        '/images/bg-1.jpg',
        '/images/bg-2.jpg',
        '/images/bg-3.jpg',
        '/images/bg-4.jpg',
        '/images/bg-5.jpg',
    ];

    var i = 0;
    setInterval(function() {
        i = (i + 1) % images.length;
        galleryImage.fadeOut(750, function() {
            $(this).attr('src', images[i]);
            $(this).fadeIn(750);
        })
    }, 5000);
})