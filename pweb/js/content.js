$(document).ready(function() {
    var all = false;
    if (all == false){
        $('.all').css('display', 'none');
    }
    $('.content-music-container').on('click', '.switch-content', function() {
        if (all == false) {
            all = true;
            console.log('Accediendo a ver todas las canciones');
            setTimeout(function(){
                $('.content-container .ilustrative-img').css({
                    'transition': 'all 1s ease',
                    'opacity': '0'
                });
                $('.content-biography-container').css({
                    'transition': 'all 1s ease',
                    'opacity': '0'
                });
                setTimeout(function(){
                    $('.content-container .ilustrative-img').css('display', 'none');
                    $('.content-biography-container').css('display', 'none');
                }, 100);
            }, 1000);
            setTimeout(function() { $('.content-music-container').css('grid-column', '1')}, 1500);
            setTimeout(function() {
                $('.content-music-container').css({
                    'transition': 'all 1s ease',
                    'width': '87.5vw',
                    'margin': '10vh 0'
                });
                $('.preview').css('display', 'none');
            }, 2000)
            setTimeout(function() {
                $('.all').css('display', 'block');
                setTimeout(function(){
                    $('.content-music-container .cards-container').css({
                        'grid-template-columns': '1fr 1fr 1fr 1fr 1fr'
                    });
                    $('.cards-container p').css('margin-top', '13%');
                }, 100);
            }, 3000);
        } else {
            all = false;
            $('.all').css('display', 'none');
            setTimeout(function(){
                $('.content-container .ilustrative-img').css({
                    'transition': 'all 1s ease',
                    'opacity': '1'
                });
                $('.content-biography-container').css({
                    'transition': 'all 1s ease',
                    'opacity': '1'
                });
                setTimeout(function(){
                    $('.content-container .ilustrative-img').css('display', 'flex');
                    $('.content-biography-container').css('display', 'block');
                }, 100);
            }, 1000);
            /* Trabajar el responsive aqui OJOOOOOOOOO */
            $('.content-music-container').css({
                'grid-column': '2',
                'width': '42.5vw',
                'margin': '0',
                'margin-bottom': '50px'
            });
            $('.content-music-container .cards-container').css({
                'grid-template-columns': '1fr 1fr 1fr'
            });
            $('.content-container .ilustrative-img').css('display', 'flex');
            $('.content-biography-container').css('display', 'block');
            $('.preview').css('display', 'block');
            $('.cards-container p').css('margin-top', '20%');
        }
    });
});
//Que bendita lucha cogi