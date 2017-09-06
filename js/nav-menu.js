

$(function (){
    $('.wrap .header .nav .nav-menu h4').width($('.wrap .header .nav .nav-menu .menu').width());
    $('.wrap .header .nav .nav-menu').hover(function(){
        $('.wrap .header .nav .nav-menu .menu').fadeToggle(500);
    })
})
