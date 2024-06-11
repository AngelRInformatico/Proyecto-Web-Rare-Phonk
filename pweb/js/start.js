$(document).ready(function() {
    const backToTopButton = $('#back-to-top-button');

    // Mostrar el botón cuando se desplaza hacia abajo
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) { // Mostrar el botón después de desplazarse 300px hacia abajo
            backToTopButton.fadeIn();
        } else {
            backToTopButton.fadeOut();
        }
    });

    // Desplazamiento suave hacia arriba cuando se hace clic en el botón o texto inicio
    backToTopButton.on('click', function() {
        $('html, body').animate({scrollTop: 0}, 'smooth');
    });
    $('#back-to-top-text').click(function(){
        $('html, body').animate({scrollTop: 0}, 'smooth');
    });

});