$(document).ready(function() {
    var audio = $('#reproductor')[0]; // Convertir a objeto jQuery y acceder al primer elemento del array
    
    // Actualizar la barra de progreso
    audio.addEventListener('timeupdate', function() {
        var currentTime = audio.currentTime;
        var duration = audio.duration;
        var progress = (currentTime / duration) * 100;
        $('#reproductorProgress').css('width', progress + '%');
    });

    // Actualizar el tiempo de reproducción cada segundo
    audio.addEventListener('timeupdate', function() {
        var currentTime = audio.currentTime;
        var minutos = Math.floor(currentTime / 60);
        var segundos = Math.floor(currentTime % 60);
        var tiempoFormateado = minutos + ':' + (segundos < 10 ? '0' : '') + segundos;
        $('#tiempoReproduccion').text(tiempoFormateado);
    });

    // Manejar clic en la imagen de reinicio
    $('#restart').click(function() {
        audio.currentTime = 0; // Reiniciar el tiempo de reproducción a cero
        if (audio.paused) {
            $('#playPause').attr('src', './sources/icons/pause.png');
            audio.play(); // Si la canción estaba pausada, también la reproducimos
        }
    });

    // Manejar clic en el botón de reproducir/pausar
    $('#playPause').click(function() {
        if (audio.paused) {
            audio.play();
            $('#playPause').attr('src', './sources/icons/pause.png');
        } else {
            audio.pause();
            $('#playPause').attr('src', './sources/icons/play.png');
        }
    });

    $('#closeButton').click(function() {
        audio.currentTime = 0;
        audio.pause();
        $('.reproductor_container *').css('opacity', '0');
        setTimeout(function() {
            $('.reproductor_container').css('display', 'none');
        }, 500);
    });

    $('#suspendButton').click(function() {
        $('.reproductor_container *').css('opacity', '0');
        setTimeout(function() {
            $('.reproductor_container').css({
                'transition': 'all 1s ease',
                'overflow': 'hidden',
                'width': '30px',
                'height': '30px',
                'bottom': '30px'
            });
        }, 500);
        setTimeout(function() {
            $('#expandButton').css({
                'display': 'block',
                'opacity': '1',
                'width': '100%',
                'height': '100%'
            })
        }, 1500);
    });

    $('#expandButton').click(function() {
        $('.expand_button').css({
            'display': 'none',
            'opacity': '0'
        })
        $('.reproductor_container').css({
            'overflow': 'visible',
            'display': 'flex',
            'position': 'fixed',
            'bottom': '10%',
            'left': '2.5%',
            'width': '500px',
            'height': '150px',
            'padding-left': '10px'
        })
        $('.reproductor_container *').css({
            'opacity': '1',
            'transition': 'all 1s ease'
        })
    });

    $('.song_play').click(function() {
        // Obtener las rutas de la carátula y la canción del elemento clickeado
        var coverPath = $(this).attr('src');
        var audioPath = $(this).data('audio');
        var songName = $(this).data('name');
        // Actualizar los atributos src del reproductor con las rutas obtenidas
        $('#cover').attr('src', coverPath);
        $('#reproductor').attr('src', audioPath);
        $('#songName').text(songName);
        $('.expand_button').css({
            'display': 'none',
            'opacity': '0'
        })
        $('.reproductor_container').css({
            'overflow': 'visible',
            'display': 'flex',
            'position': 'fixed',
            'bottom': '10%',
            'left': '2.5%',
            'width': '500px',
            'height': '150px',
            'padding-left': '10px'
        })
        setTimeout(function() {
            $('.reproductor_container *').css({
                'transition': 'all 1s ease',
                'opacity': '1'
            });
            $('#playPause').attr('src', './sources/icons/pause.png');
        }, 200);
        // Reproducir automáticamente la canción
        document.getElementById('reproductor').play();
    });
});