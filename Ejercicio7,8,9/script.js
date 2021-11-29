//Popurrí de variables
primerAviso = false;

//Cuando se carga el documento
$(function() {
        $('#entradaCueva').click(function() {
            if (!primerAviso) {
                $('#entradaCueva').after('<h2>Parece que es un poco difícil entrar... Prueba a pinchar dos veces</h2>');
                primerAviso = true;
            }
        });


        $('#entradaCueva').mouseout( function(){ 
            $('#entradaCueva+h2').remove();
            primerAviso = false;
        });

        $('#entradaCueva').dblclick(function(){
            $('#entradaCueva').animate({width: 100})
            window.open('cueva.html','blank');
            window.close();
        });
      
        $('#salirDerrumbe').click(function() {
            $('#derrumbre').slideDown();
        });
      
    });




