segundoAviso = false;
contador = 0;
gallinaNueva = "<img class='gallinas' src=img/gallina.png>";

$(function() {
    $("input").click(function(){
        $("p").hide();
        $("p").last().after("<h2>¡Enhorabuena! Has eliminado todas las injurias del mundo. Ahora la sociedad está agradecida contigo.</h2>");
        $("input").val("Gracias");
        $("input").off();
        $("input").attr("disabled", "true");
    });

    $(".aviso").css("color", "red");
    
    $("img").hover(function () {
        if (!segundoAviso) {
            //on
            $(".aviso").after("<h2 id='aviso2' class='aviso'>EN SERIO, NO TOQUES A LA GALLINA</h2>");
            $(".aviso").css("color", "red");
            segundoAviso = true;
        }
        
        }, function () {
            // out
            $("#aviso2").remove();
            segundoAviso = false;
        });
    $("img").click(function(){
        $("img").css("position","relative");
        $("img").animate({left: "-=" + (600*contador)},300*contador,"swing", function () {
             (this.remove());
        });
       
        $(".aviso").remove();
        $("input").last().after("<h2>¡NOOOOOOO! ¡Has enfadado a la gallina y ahora ha ido a denunciarte!</h2>")
    })

    document.addEventListener("keyup",function () {
        for (let i =0; i<=100;i++) {
            $("img").last().after(gallinaNueva); 
            contador++;

        }
        // $("img").last().css("width","100px")
    })

    $(".aviso").dblclick(function(){
      
    })
});




