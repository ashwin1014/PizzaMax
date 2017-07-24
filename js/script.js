$(document).ready(function() {
    $(".main-body").hide();
    $('.mc').hide();
    $('.navbar-header').hide();
    var contactform = document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'emai' + '@' + 'provider' + '.' + 'co.in');
});


$('.list-group li a').click(function() {
    $(this).next('ul').slideToggle('500');
    $(this).find('span').toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
    $(this).find('i').toggleClass('fa-plus fa-minus');
});

$(".btn-circle").click(function() {

    $('.main-body').fadeIn(1000);
    $('.btnHide').hide();
    $('.navbar-header').show();

});


//Open page on Scroll

// $(document).on('DOMMouseScroll mousewheel', function(event) { //on scroll down
//     if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {

//         $('.main-body').fadeIn(2000);
//         $('.btnHide').hide();
//        
//     }

// });


//navbar
var navbarHeight = $('.navbar').height();

$(window).scroll(function() {



    var navbarColor = "62,195,246"; //color attr for rgba
    var smallLogoHeight = $('.small-logo').height();
    var bigLogoHeight = $('.big-logo').height();


    var smallLogoEndPos = 0;
    var smallSpeed = (smallLogoHeight / bigLogoHeight);

    var ySmall = ($(window).scrollTop() * smallSpeed);

    var smallPadding = navbarHeight - ySmall;
    if (smallPadding > navbarHeight) {
        smallPadding = navbarHeight;
    }
    if (smallPadding < smallLogoEndPos) {
        smallPadding = smallLogoEndPos;
    }
    if (smallPadding < 0) {
        smallPadding = 0;
    }

    $('.small-logo-container ').css({
        "padding-top": smallPadding
    });

    var navOpacity = ySmall / smallLogoHeight;
    if (navOpacity > 1) {
        navOpacity = 1;
    }
    if (navOpacity < 0) {
        navOpacity = 0;
    }
    var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
    $('.navbar').css({
        "background-color": navBackColor
    });

    var shadowOpacity = navOpacity * 0.4;
    if (ySmall > 1) {
        $('.navbar').css({
            "box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"
        });
    } else {
        $('.navbar').css({
            "box-shadow": "none"
        });
    }

    //hide navbar contents before scroll

    if ($(this).scrollTop() > 0) {
        $('.mc').fadeIn();
        $('.navbar-header').show();
    } else {
        $('.mc').hide();
        $('.navbar-header').hide();
    }


});