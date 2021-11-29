//Popurrí de variables
segundoAviso = false;
contador = 1;
pollito = "<img class='pollitos' src=img/pollito.png>";

//Cuando se carga el documento
$(function() {
    //Si pincho el primer botón (pinchame para eliminar todas las injurias)
    $("p+input").click(function(){
        //Las injurias se eliminarán
        $("p").hide();
        //La sociedad te mostrará su agradecimiento
        $("p").last().after("<h2>¡Enhorabuena! Has eliminado todas las injurias del mundo. Ahora la sociedad está agradecida contigo.</h2>");
        $("input").val("Gracias");
        //Ya no podrás pulsar el botón, porque no tendría ningún efecto...
        //Aunque ahora que pienso quizá se podría aplicar el efecto contrario y te convertirías en un villano al que la sociedad repugna pero me da pereza hacerlo
        $("input").off();
        $("input").attr("disabled", "true");
    });


    //Pollitos

    //El aviso se muestra en rojo
    $(".aviso").css("color", "red");
    
    //Al pasar el ratón por encima de la gallinaº
    $("#corral img").hover(function () {
        //Si todavía no se ha mostrado el segundo aviso (segundoAviso false)
        if (!segundoAviso) {
            //on
            //Muestro EN SERIO NO TOQUES A LA GALLINA
            $(".aviso").after("<h2 id='aviso2' class='aviso'>EN SERIO, NO TOQUES A LA GALLINA</h2>");
            //El mensaje saldrá en rojo
            $(".aviso").css("color", "red");
            //Bool segundoAviso pasará a true
            segundoAviso = true;
        }
        
        }, function () {
            // out
            //Al perder el foco el aviso mencionado anteriormente se eliminará
            $("#aviso2").remove();
            //Bool segundoAviso pasará a false
            segundoAviso = false;
        });

        //Si al final decides tocar a la gallina
    $("img").click(function(){
        //Se irá corriendo a denunciarte
        $("img").css("position","relative");
        $("img").animate({left: "-=" + (600*contador)},300*contador,"swing", function () {
             (this.remove());
        });
        $(".aviso").remove();
        //La página te avisa de la fechoría que acabas de cometer
        $("input").last().after("<h2>¡NOOOOOOO! ¡Has enfadado a la gallina y ahora ha ido a denunciarte!</h2>")
    })


    //HUEVO DE PASCUA!!
    document.addEventListener("keyup",function () {
        //Si pulso una tecla del teclado la gallina pondrá un pollito (o más, depende que se escriba aquí abajo)
        for (let i =0; i<100;i++) {
            $("img").last().after(pollito); 
            //Contador de pollitos 
            $('.aviso+p').remove();
            $(".aviso").last().after("<p>¡Has generado un pollito!(" +contador + ")</p>");
            contador++;
        }
        // $("img").last().css("width","100px")
    })

});




