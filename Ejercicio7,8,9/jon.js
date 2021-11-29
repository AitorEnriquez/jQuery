$(function () {
    $('div').append('<a href="Nueva.html" target="_blank">enlace</a> <br>');
    $('div').append('<a href="#" target="">enlace</a> <br>');
    $('#button1').on('click', function(){
        $('[target="_blank"]').hide();
    });
    $('#button2').on('click', function(){
        $('[target=""]').hide();
    });
});