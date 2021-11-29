//Popurrí de variables
primerAviso = false;
salidaCueva = false;

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
            window.open('cueva.html');
            window.close();
        });
      
        $('#salirDerrumbe').click(function() {
            $('#derrumbe,#derrumbeFondo').animate({bottom:0,top:0},1000);
            $('#derrumbe').animate({opacity:1},1000);
        });
      
        $('#salirCueva').click(function(){
            salidaCueva = true;
            localStorage.setItem("salidaCueva",salidaCueva);
            window.open('index.html');
            window.close();
        })

        if (localStorage.getItem("salidaCueva")=="true") {
            document.getElementById("h1").innerHTML = "¡Qué bien que has podido salir de la cueva!";
        }
        
       var intervalo =  setInterval(function() {
            salidaCueva = false;
            localStorage.setItem("salidaCueva",salidaCueva);
            document.getElementById("h1").innerHTML = "¡Has encontrado una cueva! Puedes explorarla si lo deseas";
            clearInterval(intervalo);
        },5000);

    });




