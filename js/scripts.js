document.addEventListener('DOMContentLoaded', function (event){
    'use strict';

    //Menu Fixed al hacer Scroll
    $(window).scroll(scrollNav);

    //Validaciones Admision
    $('#firstName').validate();
    $('#lastName').validate();
    $('#email').validate();

    //Formateo rut
    $("input#rut").rut({
        formatOn: 'keyup',
        minimumLength: 8, // validar largo mínimo; default: 2
        validateOn: 'change' // si no se quiere validar, pasar null
    });

    $('.banner-principal a').on('click', showInfo);

    function scrollNav(){
        let windowHeight = $(window).innerHeight();
        let navHeight = $('.cabecera').innerHeight();
        let scroll = $(window).scrollTop();
        if (scroll > windowHeight){
            $('.cabecera').addClass('fixed');
            $('body').css({'margin-top': navHeight + 'px'});
        }else{
            $('.cabecera').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    }

    function showInfo(){
        event.preventDefault();
        $('.info-oculta').show('slow');
    }

});