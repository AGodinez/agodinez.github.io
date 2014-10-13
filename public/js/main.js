$(document).ready(function(){
  //JParallax
  var target = jQuery("#target");
  target.children('img').parallax(
    { mouseport: target },
    { xparallax: 0.2, yparallax: 0.2 },     // Imagen 1
    { xparallax: 0.6, yparallax: 0.6 },     // Imagen 2
    {}                                      // Imagen 3
  );

    //Moverse por toda la pagina
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
        var $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
              $('html,body').animate({scrollTop: targetOffset}, 1000);
              return false;
          }
    }
  });
  
  //Menu colapsable
  $('.ui.dropdown')
    .dropdown({
      on: 'hover'
  }); 
});


  