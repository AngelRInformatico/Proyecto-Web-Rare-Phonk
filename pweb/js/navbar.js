$(document).ready(function() {
    const cover = $('#banner');
    const coverheight = cover.height();
    const heightPercentage = (coverheight * 75) / 100;

    $(document).ready(function() {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > heightPercentage) {
                $('#navbar').fadeOut(1000); // Desaparece el navbar con una animación de desvanecimiento
            } else {
                $('#navbar').fadeIn(1000); // Aparece el navbar con una animación de desvanecimiento
            }
        });
    });
});
