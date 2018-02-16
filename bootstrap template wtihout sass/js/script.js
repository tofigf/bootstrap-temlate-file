$(document).ready(function () {
//  scrolled black  fon navbar
    $(window).scroll(function() {
        console.log($(this).scrollTop());
        if($(this).scrollTop()>50) {
            $( "#header" ).addClass("scrolled");
        } else {
            $( "#header" ).removeClass("scrolled");
        }
    });
    // add active class nav a
    $('body').scrollspy({ target: '.navbar' });



})