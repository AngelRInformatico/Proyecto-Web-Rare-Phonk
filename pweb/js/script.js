//Funcion para la animacion de las caratulas
$(document).ready(function() {
  $('.song').each(function(index) {
    $(this).mouseenter(function() {
      $('.tittles-font').eq(index).css({
        'opacity': '1',
        'transform': 'translate(0px, -20%)',
        'transition': 'all 0.5s ease'
      });
      $(this).css('filter', 'blur(2px)');
    });
    $(this).mouseleave(function() {
      $('.tittles-font').eq(index).css({
        'opacity': '0',
        'transform': 'translate(0px, 20%)',
        'transition': 'all 0.5s ease'
      });
      $(this).css('filter', 'blur(0)');
    });
  });
});