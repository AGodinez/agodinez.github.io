  var imagenesSlider = new Array(".item1",".item2",".item3");
  var count = 0;

  var transicion = function(){
    ocultar(imagenesSlider[count]);
    count = (count + 1) % 3;
    mostrar(imagenesSlider[count]);
  }
  
  function mostrar(img){
    $(img).ready(function(){        
        $(imagenesSlider[count]).fadeIn(1500);    
    });
  }
  
  function ocultar(img){
    $(img).ready(function(){        
        $(imagenesSlider[count]).fadeOut(1500);   
    });
  }

  $('label.navegacion-prev').click(function prevImg(){
    ocultar(imagenesSlider[count]);
    count = (count + 2) % 3;
    mostrar(imagenesSlider[count]);
  });

  $('label.navegacion-next').click(function nextImg(){
    ocultar(imagenesSlider[count]);
    count = (count + 1) % 3;
    mostrar(imagenesSlider[count]);
  });

$(document)
  .ready(function() {

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
  
  //Iniciar elmenu desplegable
  $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
  ;

  //Slider
  setInterval(transicion, 6000);

  });
